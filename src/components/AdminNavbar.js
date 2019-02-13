/**
 * Second navbar for user adminstration component
 */
import React from 'react'
import {Link} from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-0 py-0">
    <div>
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
    <Link to="/" className="nav-link"><i className="fas fa-home">Home</i></Link> 
    </li>
    <li className="nav-item">
    <Link to="/addUser" className="nav-link"><i className="fas fa-plus">Add</i></Link> 
    </li>
    </ul>
</div>
    </nav>
  )
}

export default AdminNavbar
