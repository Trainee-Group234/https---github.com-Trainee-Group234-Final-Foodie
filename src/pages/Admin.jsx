// import { EventAvailableTwoTone } from '@material-ui/icons'
// import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import "../styles/Admin.css"
import Footer from "./Footer"
import Navigation from './Navigation'
import { adminLogin } from '../actions/AdminAction'
import PropTypes from "prop-types"
class Admin  extends Component {
state = {
    username: "",
    password: ""
}

handleOnchange = event => {
    this.setState({[event.target.name] : event.target.value})
}

handleSubmit = event => {
    event.preventDefault();
    const admin = {
        username: this.state.username,
        password: this.state.password
    }

    this.props.adminLogin(admin, this.props.history)
}

    render() {
        return (

<div>
<Navigation/>

    <div className="container1 ">

        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                      
                        <div className="row">
                            <div className="col-lg-3 d-none d-md-block ">
                            </div>
                            
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Welcome Foodie Admin!</h1>
                                    </div>
                                    <form className="user text-center" onSubmit={this.handleSubmit}>
                                        <div className="form-group">

                                            <input type="email" className="form-control form-control-user"
                                                name="username" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..." value={this.state.username} onChange={this.handleOnchange}/>
                                        </div>
                                        
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user"
                                                name="password" placeholder="Password" value={this.state.password} onChange={this.handleOnchange}/>
                                        </div>
                                        
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                <label className="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        {/* <Link to ="/dashboard" style={{marginLeft:"50px" }} className="btn btn-primary btn-user btn-block"> Login</Link>  */}
                                        <input type="submit" style={{marginLeft:"50px" }} className="btn btn-primary btn-user btn-block"></input>
                                        <hr/>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
<Footer/>


                                                </div>

          
        );
    }
}

Admin.propTypes = {
    adminLogin:PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps  = state => ({
    errors: state.errors,
})

export default connect(mapStateToProps,{adminLogin})(Admin);
