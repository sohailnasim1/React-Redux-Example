/**
 * Update existing user's first name, last name and email address
 * @Author: Sohail Nasim
 */
import React, { Component } from 'react';
import TextInput from './commons/InputText';
import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../actions/actions';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

export class UpdateUser extends Component {
    state = {
        username: this.props.match.params.username,
        firstName: '',
        lastName: '',
        emailAddress: '',
        dataPopulated:false,
        errors: {}
    }

    componentDidMount() {
        this.props.fetchUser(this.state.username);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.user.username && !prevState.dataPopulated) {
            return {
                firstName: nextProps.user.firstName,
                lastName: nextProps.user.lastName,
                emailAddress: nextProps.user.emailAddress,
                dataPopulated: true
            }
        } else {
            return null;
        }

     }

     
    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e=>{
        e.preventDefault();
        const { username, firstName, lastName, emailAddress } = this.state;
     
        if (firstName==='') {
            this.setState({errors: {firstName: 'First name is required'}});
            return;
        }
        
        if (lastName==='') {
            this.setState({errors: {lastName: 'Last name is required'}});
            return;
        }
       
        if (emailAddress==='') {
            this.setState({errors: {emailAddress: 'Email address is required'}});
            return;
        }
       
        const updatedUser = { username, firstName, lastName, emailAddress };

        this.props.updateUser(updatedUser);
        this.setState({
            username: '',
            firstName: '',
            lastName: '',
            emailAddress: '',
            dataPopulated: false,
            errors: {}
        });
        this.props.history.push('/');
    }
  render() {
    const {errors} = this.state;
    const {fetching} = this.props;
    if (fetching) {
        return <Spinner />
    }  else {
    const {firstName, lastName, emailAddress} = this.state;
  
    return (
        <div className="card mb-3">
        <div className = "card-header">Edit User</div>
        <div className="card-body">
            <form onSubmit={this.onSubmit}>
                <TextInput
                    label = "First Name"
                    name = "firstName"
                    value = {firstName}
                    placeholder = "Enter first name..."
                    onChange = {this.onChange}
                    error = {errors.firstName}
                />
                
                <TextInput
                    label = "Last Name"
                    name = "lastName"
                    value = {lastName}
                    placeholder = "Enter last name..."
                    onChange = {this.onChange}
                    error = {errors.lastName}
                />

                <TextInput
                label = "Email Address"
                name = "emailAddress"
                value = {emailAddress}
                placeholder = "Enter email address..."
                type = "email"
                onChange = {this.onChange}
                error = {errors.emailAddress}
                />

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
}

const mapStateToProps = state=> (
    {
        user:state.userAdmin.user,
        fetching: state.userAdmin.fetching
    }
);

UpdateUser.propTypes = {
    user: PropTypes.object.isRequired,
    fetchUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { fetchUser, updateUser })(UpdateUser);
