import { Delete, Fastfood, Star} from '@material-ui/icons'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeCategory,getCategory } from '../../actions/AdminAction';

class RemoveCategory extends Component {

  state={
    categories: this.props.categoryList.allcategory
  }

  handleDelete(name){
      this.props.removeCategory(name,this.props.history)
      //window.location.href = "/removecategory"
  }
    render() {
      const {allcategory} = this.props.categoryList
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


            <div>
                {/* Begin Page Content */}
            <div className="container-fluid">


{/* DataTales Example */}
<div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary"><Fastfood/> Category Menu</h6>
    </div>

    <div className="card-body">

        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
    
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cuisins</th>
                        <th>Rating</th>
                        <th>Reviews</th>
                        {/* <th>ThumbnailImage</th> */}
                        <th>Action</th>

                        

                    </tr>
                </thead>
                
                <tbody>
                  {allcategory.map(cat=> 
                    <tr>
                        <td>{cat.name}</td>
                        <td>{cat.cuisines}</td>
                        <td>{cat.rating}</td>
                        <td>{cat.reviews}</td>
                        {/* <td>upload link</td> */}
                        <td > 
                       <button className="text-danger" onClick={this.handleDelete.bind(this,cat.name)}>
                            <Delete/> 
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


            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
RemoveCategory.propTypes = {
  categoryList: PropTypes.object.isRequired,
  removeCategory: PropTypes.func.isRequired,
  getCategory: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps  = state => ({
  categoryList: state.categoryList,
  errors: state.errors
})
export default connect(mapStateToProps,{removeCategory, getCategory})(RemoveCategory);
