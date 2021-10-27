import React from "react";
import "../styles/LoginStyle.css";
import Front from "../images/FB.jpg";
import TextInput from "../components/TextInput";
import Navigation from "./Navigation";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { login, getCategory } from "../actions/FoodieAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router";

// import Footer from "./Footer"

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  onChangeUser = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePass = (event) => {
    this.setState({ password: event.target.value });
  };

  componentDidMount() {
    if (this.props.login.validToken) {
      this.props.history.push("/hotels");
    }
  }

  componentWillReceiveProps(nextProps) {
    // this.props.history.push("/hotels")
    Redirect("/hotels");
  }

  click = (event) => {
    // if(this.state.username === 'kushagra' && this.state.password === 'kushagra123'){
    //     this.props.history.push(`/hotels`);
    // }

    // else{
    //     window.alert("Invalid Username or Password. Try Again!")
    // }
    event.preventDefault();
    const customer = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(customer);
    // this.props.getCategory();
    this.props.login(customer, this.props.history);
  };

  render() {
    return (
      <div>
        <Navigation />

        <div className="login">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <div id="container">
            <div id="id1">
              <img src={Front} height="668" width="700" alt="Banner" />
            </div>

            <div id="id2">
              {/* <center><img src={AppLogo} alt="logo"/></center> */}
              <center>
                {" "}
                <h1 id="logoApp">FOODIE</h1>
              </center>
              <div id="id3">
                <center id="login">
                  <FastfoodIcon className="icon h3" /> &nbsp; Enjoy Meal
                  <br />
                  {this.state.clickable && (
                    <div>
                      Username: {this.state.username} <br />
                      Password: {this.state.password}
                    </div>
                  )}
                  <form action="#" id="form" onSubmit={this.click}>
                    <TextInput
                      type="text"
                      name="username"
                      placeholder="Enter Username"
                      onChange={(e) => {
                        this.setState({ username: e.target.value });
                      }}
                    />
                    <TextInput
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                    <input type="submit" name="login" id="btn" value="Login" />
                  </form>
                </center>
              </div>
            </div>
          </div>
          {/* <Footer/> */}
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired,
  getCategory: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  login: state.login,
});
export default connect(mapStateToProps, { login, getCategory })(LoginPage);
