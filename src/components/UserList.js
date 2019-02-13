/**
 * This component displays all users in a table
 * @Author: Sohail Nasim
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/actions';
import Spinner from './Spinner';
import User from './User';

export class UserList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }


    renderTable() {
        
    }
    renderUsers() {
        const {users} = this.props
        return users.map((user, i)=><User key={i} 
        index = {i+1}
        user={user} 
        />);
    }
  render() {
    const { fetching, errors } = this.props;
    if (fetching) {
        return (<Spinner />);
    } else if (errors) {
        return (<div className="alert alert-danger">
                <center><strong>{errors.message}</strong></center>
              </div>
        );
    } else {
        return ( 
        <div>
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Active</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
            {this.renderUsers()}
        </tbody>
        </table>
        </div>
        )
    }
  }
}

const mapStateToProps = state=> (
    {
        users:state.userAdmin.users,
        fetching: state.userAdmin.fetching,
        errors:state.userAdmin.errors,
    }
);

export default connect(mapStateToProps, { fetchUsers }) (UserList);
