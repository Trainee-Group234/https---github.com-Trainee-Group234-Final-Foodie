/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { adminLogout } from "../actions/AdminAction";
import { getCustomers, getCategory } from "../actions/AdminAction";

class AdminDashboard extends Component {
  componentDidMount() {
    if (!localStorage.getItem("admin")) {
      window.location.href = "/";
    }
  }

  handleOnClick = () => {
    this.props.getCustomers();
  };

  handleCategory = () => {
    this.props.getCategory();
  }

  // componentWillReceiveProps(nextProps){
  //   if(!localStorage.getItem("admin")){
  //     window .location.href = "/"
  //   }
  // }

  handleAdminLogout = () => {
    this.props.adminLogout();
  };

  render() {
    const { totalDishes, totalCustomers } = this.props.admin;
    return (
      <>
        <body id="page-top">
          {/* <!-- Page Wrapper --> */}

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
                  ♛ Restorent Admin{" "}
                </div>
              </Link>

              {/* <!-- Divider --> */}

              <hr className="sidebar-divider my-0" />

              {/* <!-- Nav Item - Dashboard --> */}

              <li className="nav-item active">
                <Link className="nav-link" to="#">
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

                    <Link to="/removecategory" onClick={this.handleCategory}>
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
                    <p>Block Customers</p>
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

            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">
              {/* <!-- Main Content --> */}

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
                            ❉ Kushagra Sharma
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

                  {/* <!-- Content Row --> */}
                  <div className="row">
                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card border-left-danger shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Total Dishes
                              </div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {totalDishes}
                              </div>
                            </div>
                            <div className="col-auto">
                              <i className="fas fa-calendar fa-2x text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* -------------------------------------- */}

                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card border-left-warning shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Total Sales (Today)
                              </div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">
                                6000
                              </div>
                            </div>
                            <div className="col-auto">
                              <i className="fas fa-calendar fa-2x text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Earnings (Annual) Card Example --> */}

                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Total Users
                              </div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {totalCustomers}
                              </div>
                            </div>
                            <div className="col-auto">
                              <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Earnings (Tasks) Card Example --> */}
                    <div className="col-xl-3 col-md-6 mb-4">
                      <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                          <div className="row no-gutters align-items-center">
                            <div className="col mr-auto">
                              <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                Total Visitors
                              </div>

                              <div className="row no-gutters align-items-center">
                                <div className="col-5">
                                  <div className="h5 mb-0 mr-4 font-weight-bold text-gray-800">
                                    50%
                                  </div>
                                </div>

                                <div className="col">
                                  <div className="progress progress-lg mr-2">
                                    <div
                                      className="progress-bar bg-info"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuenow="50"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-auto">
                              <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>

                  <div className="row"></div>

                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <div className="card shadow mb-4">
                        <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-primary">
                            Development Approach by SADHAK
                          </h6>
                        </div>
                        <div className="card-body">
                          <p>
                            Dharmesh, Kushagra, Abdeali, Sanjay, Harshita,
                            Anvesh | SADHAK
                          </p>
                          <p className="mb-0">
                            Before working with this theme, you should become
                            familiar with the Bootstrap framework, especially
                            the utility classNameNamees.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ------------------------------ */}
              </div>
            </div>
          </div>

          <Link className="scroll-to-top rounded" to="#page-top">
            <i className="fas fa-angle-up"></i>
          </Link>
        </body>
      </>
    );
  }
}

AdminDashboard.propTypes = {
  adminLogout: PropTypes.func.isRequired,
  getCategory: PropTypes.func.isRequired,
  getCustomers: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin.admin,
});
export default connect(mapStateToProps, { adminLogout, getCustomers, getCategory })(
  AdminDashboard
);
