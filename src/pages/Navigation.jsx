import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Person, PersonAdd, SupervisedUserCircle } from '@material-ui/icons';

export default class Navigation extends Component {
    render() {
        return (

            <div>
            <nav className="navbar sticky-top shadow-lg p-0 opacity-75 bg-gradient-warning collapse-inner rounded " id="navigation">
                
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    FOODIE </Link>
                <form className="d-flex">
                 
                <Link to="/admin"> <button className='b-nav'><Person className="icons"/> Admin </button></Link> &nbsp;
                <Link to="/login"> <button className='b-nav'><SupervisedUserCircle className="icons"/>Login</button></Link> &nbsp;
                <Link to="/register"> <button className='b-nav'><PersonAdd className="icons"/>Register</button></Link>

                </form>
            </div>
            </nav>
            </div>
        )
    }
}

