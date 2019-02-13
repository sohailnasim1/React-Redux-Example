/**
 * Main application for User admin. Uses remote rest services
 * Redux store and Router and bootstrap for styling
 * @Author: Sohail Nasim
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import UserList from './components/UserList';
import Header from './components/commons/Header';
import AdminNavbar from './components/AdminNavbar';
import AddUser from './components/AddUser';
import EditUser from './components/UpdateUser';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="container">
        <Header />
        <AdminNavbar />
        <Switch>
          <Route exact path="/" component={ UserList } />
          <Route exact path="/addUser" component={ AddUser } />
          <Route exact path="/updateUser/:username" component={ EditUser } />
        </Switch>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
