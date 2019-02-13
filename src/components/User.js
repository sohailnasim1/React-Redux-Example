/**
 * Dispalys a user in a table row
 * @Author: Sohail Nasim
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser } from '../actions/actions';

export class User extends Component {
    deleteUser = (username) => {
       this.props.deleteUser(username);
    }
    render() {
        const {firstName, lastName, username, emailAddress, active} = this.props.user;
        return (
            <tr>
            <th scope="row">{this.props.index}</th>
            <td> <Link to={`/updateUser/${ username }`} className="nav-link">{username}</Link></td>
            <td>{firstName}  </td>
            <td>{lastName}</td>
            <td>{emailAddress}</td>
            <td><i className="fas fa-circle" style={{color: active==='Y'?'green':'grey'}}></i></td>
            <td> <i className="fas fa-times" 
            style = {{cursor: 'pointer', float:'right', color:'red'}}
            onClick={this.props.deleteUser.bind(this, username)}
            /></td>
        </tr>
        )
  }
};

User.propTypes = {
    user: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired
};

export default connect(null, { deleteUser })(User) ;