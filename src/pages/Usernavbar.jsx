import { Person } from '@material-ui/icons'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../actions/FoodieAction';
import { logout } from '../actions/FoodieAction';
import { connect } from 'react-redux';
import PropTypes  from 'prop-types';

class Usernavbar extends Component {
  logout(){
    this.props.logout();
    window.location.href= "/login";
  }
    render() {
      const {customer} = this.props.login;
        return (
                            <div className="nav bg-gradient-warning">
                <div id="navbar-brand">
                    FOODIE
                </div>

                  <ul className="navbar-nav ml-auto">
                    <div className="topbar-divider d-none d-sm-block"></div>
                    <li className="nav-item dropdown no-arrow">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="userDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        <span className="mr-2 d-none d-lg-inline text-gray-900 ">
                        <Person className="icons"/>{customer.fullname} 
                    </span>
                        
                      </Link>


                      <div
                        className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown"
                        >
                        <Link
                          className="dropdown-item"
                          to="/"
                          data-toggle="modal"
                          data-target="#logoutModal"
                          onClick={this.logout.bind(this)}
                          >
                          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                          Logout
                        </Link>

                      </div>
                    </li>
                  </ul>

            </div>

        )
    }
}

Usernavbar.propTypes = {
  login: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  login : state.login
})

export default connect(mapStateToProps,{logout})(Usernavbar);
