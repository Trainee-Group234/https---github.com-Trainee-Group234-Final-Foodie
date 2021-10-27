import { Fastfood } from "@material-ui/icons";
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./addcategory.css";
import { addCategory } from "../../actions/AdminAction";
import PropTypes from "prop-types";

class AddCategory extends Component {

state = {
  cuisines: "",
  name: "",
  rating: 0,
  reviews: 0,
  thumbnailimage:""
}

handleSubmit = (event) => {
  event.preventDefault()
  const newCategory = {
    cuisines: this.state.cuisines,
    name: this.state.name,
    rating: this.state.rating,
    reviews: this.state.reviews,
    thumbnailimage:this.state.thumbnailimage
  }

  this.props.addCategory(newCategory, this.props.history)
}

handleChange = (event) => {
  this.setState({[event.target.name]: event.target.value})
}

  render() {
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

            {/* End of Topbar */}


    <div className="container">
    
    <p className="h3 text-primary"><Fastfood/> Add Your Category of Food </p>
    <hr />
<Form id="addcategory" onSubmit={this.handleSubmit}>
  <Form.Group className="">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="name" placeholder="Enter category Name" value={this.state.name} onChange={this.handleChange} />
  </Form.Group>
  
  <Form.Group className="">
    <Form.Label>Cuisines</Form.Label>
    <Form.Control type="text" name="cuisines" placeholder="Enter Cuisiness" value={this.state.cuisines} onChange={this.handleChange}/>
  </Form.Group>  
  
  <Form.Group className="">
    <Form.Label>Ratings</Form.Label>
    <Form.Control type="number" name="rating" placeholder="Ratings" value={this.state.rating} onChange={this.handleChange}/>
  </Form.Group>

  <Form.Group className="" >
    <Form.Label>Reviews</Form.Label>
    <Form.Control type="number" name="reviews" placeholder="Reviews" value={this.state.reviews} onChange={this.handleChange}/>
  </Form.Group>
  <Form.Group className="" >
    <Form.Label>Image</Form.Label>
    <Form.Control type="link" name="thumbnailimage" placeholder="Enter Drive Link" value={this.state.thumbnailimage} onChange={this.handleChange}/>
  </Form.Group>
<br />


  <div id="btnadd">
  <Button  variant="primary" type="submit">
    Submit
  </Button>
  </div>

</Form>

      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

AddCategory.propTypes = {
  
  addCategory: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps  = state => ({
  errors: state.errors
})

export default connect(mapStateToProps,{addCategory})(AddCategory);
