
import React from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import "../styles/Register.css"
import { Select } from '@material-ui/core';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerCustomer } from '../actions/FoodieAction';
import axios from 'axios';
import { withRouter } from 'react-router';

import { FormLabel } from 'react-bootstrap';


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName:"",
            lastName:"",
            age:"",
            gender:"",
            email:"",
            password: "",
            validatePassword: "",
            passwordDifferent: false,
            phoneNumber: "",
            userType: "customer",
            registerFailed: "",
            buildingname:"",
            street:"",
            area:"",
            city:"",
            zipcode:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.retypePassword = this.retypePassword.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    handleChange(content) {
        this.setState(content);
    }

    retypePassword(event) {
        this.setState({ validatePassword: event.target.value });
        if (event.target.value === this.state.password) {
            this.setState({ passwordDifferent: false });
        } else {
            this.setState({ passwordDifferent: true });
        }
    }

    registerUser(event) {
        if (this.state.passwordDifferent) {
            this.setState({ registerFailed: "Please correct the error" });

            return
        } else {
            this.setState({ registerFailed: "" });
            event.preventDefault();
            axios.post("/api/" + this.state.userType + "/register",
                {
                    userName: this.state.userName,
                    password: this.state.password,
                    phoneNumber: this.state.phoneNumber,
                    address: this.state.address,
                    city: this.state.city,
                    state: this.state.state,
                }).then(
                    response => {
                        this.props.changeUser(response.data, "login");
                    }
                ).catch(err => {
                    console.log(err);
                    this.setState({ registerFailed: err.response.data });
                }
                );
        }
    }
    handleSubmit = event =>{
        event.preventDefault();
        const address = {
            building_name : this.state.buildingname,
            street: this.state.street,
            city: this.state.city,
            pincode: this.state.zipcode
        }
        const newCustomer = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            gender: this.state.gender,
            mobileNumber: this.state.phoneNumber,
            address: address,
            email: this.state.email,
            password: this.state.password
        }
        console.log(newCustomer)
        
        this.props.registerCustomer(newCustomer,this.props.history)
        
    }
    render() {
        return (
            <form className="register" onSubmit={this.handleSubmit}>
                <Grid container justify="center">

                    <Grid item xs={6}>

                        <div className="container">
                            <center><h1 id="logoApp">FOODIE</h1></center>

                            <FastfoodIcon className="icon" />

                            <Typography component="h1" variant="h5" className="signup">
                                Sign up
                            </Typography>

                            <Typography variant="body1" color="error">
                                {this.state.registerFailed}
                            </Typography>

                            <form onSubmit={this.registerUser}>

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="FirstName"
                                    type="text"
                                    value={this.state.firstName}
                                    autoFocus
                                    onChange={event => this.handleChange({ firstName: event.target.value })}
                                />

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="LastName"
                                    type="text"
                                    value={this.state.lastName}
                                    autoFocus
                                    onChange={event => this.handleChange({ lastName: event.target.value })}
                                />

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Age"
                                    type="number"
                                    value={this.state.age}
                                    autoFocus
                                    onChange={event => this.handleChange({ age: event.target.value })}
                                />

                                {/* <Select
                                    label="Gender"
                                    value={this.state.gender}
                                    onChange={event => this.handleChange({ gender: event.target.value })}
                                >
                                    <Option>Male</Option>
                                    <Option>Female</Option>
                                    <Option>Other</Option>
                                </Select> */}
                                <FormControl component="fieldset">

<FormLabel component="legend">Gender</FormLabel>
<RadioGroup
    value={this.state.gender}
    onChange={event => this.handleChange({ gender: event.target.value })}
    aria-label="gender"

    defaultValue="female"

    name="radio-buttons-group"

>

    <FormControlLabel value="female" control={<Radio />} label="Female" />

    <FormControlLabel value="male" control={<Radio />} label="Male" />

    <FormControlLabel value="other" control={<Radio />} label="Other" />

</RadioGroup>

</FormControl>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Email Address"
                                    type="email"
                                    value={this.state.email}
                                    autoFocus
                                    onChange={event => this.handleChange({ email: event.target.value })}
                                />

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={event => this.handleChange({ password: event.target.value })}
                                />

                                <Typography variant="body2" color="error">
                                    {this.state.passwordDifferent ? <i>Password doesn't match</i> : null}
                                </Typography>

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Re-enter your password"
                                    type="password"
                                    value={this.state.validatePassword}
                                    onChange={event => this.retypePassword(event)}
                                />

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Phone Number"
                                    type="text"
                                    value={this.state.phoneNumber}
                                    onChange={event => this.handleChange({ phoneNumber: event.target.value })}
                                />
<legend className="signup" >Address</legend>

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Building Name"
                                    type="text"
                                    value={this.state.buildingname}
                                    onChange={event => this.handleChange({ buildingname: event.target.value })}
                                    />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Street"
                                    type="text"
                                    value={this.state.street}
                                    onChange={event => this.handleChange({ street: event.target.value })}
                                    />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Area"
                                    type="text"
                                    value={this.state.area}
                                    onChange={event => this.handleChange({ area: event.target.value })}
                                    />                
                                                    <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="city"
                                    type="text"
                                    value={this.state.city}
                                    onChange={event => this.handleChange({ city: event.target.value })}
                                    />

                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="ZipCode"
                                    type="Phone"
                                    value={this.state.zipcode}
                                    onChange={event => this.handleChange({ zipcode: event.target.value })}
                                    />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    // color="primary"
                                    id="sbtn"
                                >
                                    Sign Up
                                </Button>

                                <br />
                                <br />

                                <Link to={"/login"} className="link">
                                    Already have an account? Sign In
                                </Link>

                                <Box mt={5}>
                                    <Typography variant="body2" color="textSecondary" align="center">
                                        {'Copyright © Food Group '}
                                        {new Date().getFullYear()}
                                        {'.'}
                                    </Typography>
                                </Box>

                            </form>
                        </div>
                    </Grid>
                </Grid>
            </form>
        );
    }
}
Register.propTypes = {
    registerCustomer:PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps  = state => ({
    errors: state.errors
})
export default connect(mapStateToProps, {registerCustomer}) (Register);