import { Fastfood, Person } from "@material-ui/icons";
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./addcategory.css";
import { addItem } from "../../actions/AdminAction";
import PropTypes from "prop-types";

class AddItem extends Component {
  state = {
    itemName: "",
        categoryName: "",
        quantity: 0,
        description: "",
        cost: 0.0
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
  
    const newItem =  {
          categoryName: this.state.categoryName,
          cost: this.state.cost,
          itemName: this.state.itemName,
         
          quantity: this.state.quantity,
          description: this.state.description
          
    }
    console.log(newItem)
    this.props.addItem(newItem,this.props.history)
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
   
    <div className="container">
    
    <p className="h3 text-primary"><Fastfood/> Add Your Item From Category </p>
<hr />
<Form id="addItem" onSubmit={this.handleSubmit}>

  <Form.Group className="">
    <Form.Label>Item Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Item Name" name="itemName" onChange={this.handleChange} />
  </Form.Group>
  
  <Form.Group className="">
    <Form.Label>Category Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Category Name" name="categoryName" onChange={this.handleChange}/>
  </Form.Group>  
  
  <Form.Group className="">
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="number" placeholder="Enter Quantity" name="quantity" onChange={this.handleChange}/>
  </Form.Group>

  <Form.Group className="" >
    <Form.Label>Description</Form.Label>
    <Form.Control type="textarea" placeholder="Enter Description" name="description" onChange={this.handleChange}/>
  </Form.Group>

  <Form.Group className="" >
    <Form.Label>Cost</Form.Label>
    <Form.Control type="number" placeholder="Enter Price" name="cost" onChange={this.handleChange}/>
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

AddItem.propTypes = {
  
  addItem: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps  = state => ({
  errors: state.errors
})

export default connect(mapStateToProps,{addItem})(AddItem);