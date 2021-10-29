import React, { Component } from 'react'
//import { PropTypes } from 'react-addons-css-transition-group/node_modules/@types/react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Person, PersonAddDisabled } from '@material-ui/icons';
import { blockCustomer, unblockCustomer } from '../actions/AdminAction';

class Table extends Component {

  handleBlock(email){
    this.props.blockCustomer(email)
  }
  handleUnBlock(email){
    this.props.unblockCustomer(email)
  }

    render() {
        const {customers} = this.props.admin;
        return (
                

<div id="wrapper">
            {/* <!-- Sidebar --> */}

            <ul
              className="navbar-nav bg-gradient-warning sidebar sidebar-dark accordion"
              id="accordionSidebar"
            >
              {/* <!-- Sidebar - Brand --> */}

              <Link
                className="sidebar-brand d-flex align-items-center justify-content-right"
                to="#"
              >
                <div className="sidebar-brand-text mx-3">
                  ♛ Restorent Admin
                </div>
              </Link>

              {/* <!-- Divider --> */}

              <hr className="sidebar-divider my-0" />

              {/* <!-- Nav Item - Dashboard --> */}

              <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                  <i className="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </Link>
              </li>

              {/* <!-- Divider --> */}

              <hr className="sidebar-divider" />

              {/* <!-- Nav Item - Pages Collapse Menu --> */}

              <li className="nav-item">
                <Link
                  className="nav-link collapsed"
                  to="#"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  <i className="fas fa-fw fa-cog"></i>
                  <span>Components</span>
                </Link>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionSidebar"
                >
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Components:</h6>

                    <Link to="/addcategory">
                      <p>Add Category</p>
                    </Link>

                    <Link to="/removecategory">
                      <p>Remove Category</p>
                    </Link>

                    <Link to="/additem">
                      <p>Add Item</p>
                    </Link>

                    <Link to="/removeitem">
                      <p>Remove Item</p>
                    </Link>
                  </div>
                </div>
              </li>

              {/* <!-- Nav Item - Utilities Collapse Menu --> */}
              <li className="nav-item">
                <Link
                  className="nav-link collapsed"
                  to="#"
                  data-toggle="collapse"
                  data-target="#collapseUtilities"
                  aria-expanded="true"
                  aria-controls="collapseUtilities"
                >
                  <i className="fas fa-fw fa-wrench"></i>
                  <span>Utilities</span>
                </Link>
                <div
                  id="collapseUtilities"
                  className="collapse"
                  aria-labelledby="headingUtilities"
                  data-parent="#accordionSidebar"
                >
                  <div className="bg-white py-2 collapse-inner rounded">
                    <p>XYZ</p>
                  </div>
                </div>
              </li>

              {/* <!-- Divider --> */}
              <hr className="sidebar-divider" />

              {/* <!-- Heading --> */}
              <div className="sidebar-heading">Extra</div>

              {/* <!-- Nav Item - Pages Collapse Menu --> */}
              <li className="nav-item">
                <Link
                  className="nav-link collapsed"
                  to="#"
                  data-toggle="collapse"
                  data-target="#collapsePages"
                  aria-expanded="true"
                  aria-controls="collapsePages"
                >
                  <i className="fas fa-fw fa-folder"></i>
                  <span>Pages</span>
                </Link>
                <div
                  id="collapsePages"
                  className="collapse"
                  aria-labelledby="headingPages"
                  data-parent="#accordionSidebar"
                ></div>
              </li>

              {/* <!-- Nav Item - Tables --> */}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/table"
                  onClick={this.handleOnClick}
                >
                  <i className="fas fa-fw fa-table"></i>
                  <span>Tables</span>
                </Link>
              </li>

              {/* <!-- Divider --> */}
              <hr className="sidebar-divider d-none d-md-block" />

              {/* <!-- Sidebar Toggler (Sidebar) --> */}
              <div className="text-center d-none d-md-inline">
                <button
                  className="rounded-circle border-0"
                  id="sidebarToggle"
                ></button>
              </div>
            </ul>
            {/* <!-- End of Sidebar --> */}

    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">

        {/* Main Content */}
        <div id="content">
                {/* <!-- Begin Page Content --> */}

                <div className="container-fluid">
                  {/* <!-- Page Heading --> */}
                  <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h3 className="h4 mb-0 text-gray-800">YASH TECHNOLOGIES</h3>
                  </div>

                  <nav className="navbar navbar-expand h6 mb-0 text-gray-800 navbar-light bg-white topbar mb-3 static-top shadow">
                    Dashboard
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
                          <span className="mr-2 d-none d-lg-inline text-gray-700 small ">
                          <Person/> Admin
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
                            onClick={this.handleAdminLogout}
                          >
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </nav>

            {/* End of Topbar */}





            {/* Begin Page Content */}
            <div className="container-fluid">

                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Table</h1>


                {/* DataTales Example */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Primary Customers</h6>
                    </div>

                    <div className="card-body">

                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                        <th>Status</th>
                                        <th>Block/Unblock</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers.map(customer => 
                                        
                                    <tr>
                                        <td>{customer.firstName}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.gender}</td>
                                        <td>{customer.status}</td>
                            
                            <td > 
                            <button className="text-danger" onClick={this.handleBlock.bind(this,customer.email)}>
                            <PersonAddDisabled/> 
                           </button> 

                           &nbsp; &nbsp; 
                           
                            <button className="text-success" onClick={this.handleUnBlock.bind(this,customer.email)}>
                            <Person/> 
                           </button>
                           
                            </td>
                           

                                    </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>

            </div>
            
            {/* /.container-fluid */}


        </div>

        {/* End of Main Content */}

        </div>

    </div>

    </div>

        );
    }
}
Table.propTypes = {
    admin: PropTypes.object.isRequired,
    blockCustomer: PropTypes.func.isRequired,
    unblockCustomer: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps  = state => ({
    admin:state.admin,
    errors: state.errors,
})
export default connect(mapStateToProps,{blockCustomer, unblockCustomer})(Table);