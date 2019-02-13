/**
 * Add User form.
 * @Author: Sohail Nasim
 */
import React, { Component } from 'react'
import TextInput from './commons/InputText';
import { connect } from 'react-redux';
import { addUser, clearErrors } from '../actions/actions';
import PropTypes from 'prop-types';

export class AddUser extends Component {
    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        emailAddress: '',
        error: {},
        processingError:null
        
    }

    static getDerivedStateFromProps(nextProps, prevState) {
         if(nextProps.errors) {
            return {
                processingError: nextProps.errors.message
            }
         } else {
            return null;
        }

     }

     componentDidUpdate(prevProps, prevState) {
        if(prevProps.fetching!==this.props.fetching){
            if (!this.props.errors){
                this.setState({
                    username: '',
                    firstName: '',
                    lastName: '',
                    emailAddress: '',
                    dataPopulated: false,
                    error: {},
                    processingError:null
                });
               this.props.history.push('/');
            } 
        }
      }

    onSubmit = e=>{
        e.preventDefault();
        const { username, password, firstName, lastName, emailAddress } = this.state;
     
        if (username==='') {
            this.setState({error: {username: 'Usernname is required'}});
            return;
        }

        if (password==='') {
            this.setState({error: {password: 'Password is required'}});
            return;
        }

        if (firstName==='') {
            this.setState({error: {firstName: 'First name is required'}});
            return;
        }
        
        if (lastName==='') {
            this.setState({error: {lastName: 'Last name is required'}});
            return;
        }
       
        if (emailAddress==='') {
            this.setState({error: {emailAddress: 'Email address is required'}});
            return;
        }
       
        const newUser = { username, password, firstName, lastName, emailAddress };

        this.props.addUser(newUser);
        
    }
    onChange = e =>{
        this.setState({[e.target.name]: e.target.value, error: {}});
    };

  render() {
      const { username, password, firstName, lastName, emailAddress, error, processingError } = this.state;
      return (
        <div className="card mb-3">
        <div className = "card-header">Add User</div>
        <div className="card-body">
            <form onSubmit={this.onSubmit}>
                <TextInput
                label = "Username"
                name = "username"
                value = {username}
                placeholder = "Enter username..."
                onChange = {this.onChange}
                error = {error.username}
                />
                <TextInput
                label = "Password"
                name = "password"
                value = {password}
                placeholder = "Enter password..."
                type= "password"
                onChange = {this.onChange}
                error = {error.password}
            />
                <TextInput
                    label = "First Name"
                    name = "firstName"
                    value = {firstName}
                    placeholder = "Enter first name..."
                    onChange = {this.onChange}
                    error = {error.firstName}
                />
                
                <TextInput
                    label = "Last Name"
                    name = "lastName"
                    value = {lastName}
                    placeholder = "Enter last name..."
                    onChange = {this.onChange}
                    error = {error.lastName}
                />

                <TextInput
                label = "Email Address"
                name = "emailAddress"
                value = {emailAddress}
                placeholder = "Enter email address..."
                type = "email"
                onChange = {this.onChange}
                error = {error.emailAddress}
                />
                {processingError &&
                    <div className="alert alert-danger">
                        <strong>{processingError}</strong>
                    </div>
                }
            <input type="submit"
            value="Submit"
            className="btn btn-light btn-block"
            />

            </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state=> (
    {
        errors:state.userAdmin.errors,
        fetching: state.userAdmin.fetching

    }
);

AddUser.propTypes = {
    addUser: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
};

export default connect(mapStateToProps, {addUser, clearErrors})(AddUser);
