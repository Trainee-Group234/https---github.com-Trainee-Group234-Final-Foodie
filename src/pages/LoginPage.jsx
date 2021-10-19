import React from 'react';
import '../styles/LoginStyle.css'
import Front from '../images/FB.jpg'
import TextInput from '../components/TextInput'
import { Link } from 'react-router-dom';
class LoginPage extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        };
    }

    onChangeUser=(event)=>{
        this.setState({username:event.target.value})
    }

    onChangePass=(event)=>{
        this.setState({password:event.target.value})
    }

    click=()=>{
        if(this.state.username === 'kushagra' && this.state.password === 'kushagra123'){
            this.props.history.push(`/hotels`);
        }

        else{
            window.alert("Invalid Username or Password. Try Again!")
        }
    }


    render(){
        return(
            <div className="login">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
           
            <div id = "container">
            <div id="id1">
                <img src={Front} height="668" width="700" alt="Banner"/>
            </div>

            <div id="id2">
                {/* <center><img src={AppLogo} alt="logo"/></center> */}
                <center><h1 id="logoApp">FOODIE</h1></center>
                    <div id="id3">
                    
                    <center id="login"><h2>LOG IN</h2><br/>
                    { this.state.clickable && 
                    <div>Username: {this.state.username} <br/>
                    Password: {this.state.password}</div>}
          
                    <form action="#" id="form">

                        <TextInput type="text" name="username" placeholder="Enter Username"  onChange={(e)=>{this.setState({username: e.target.value})}} />
                        <TextInput type="password" name="password" placeholder="Enter Password"  onChange={(e)=>{this.setState({password: e.target.value})}}/>
                        
                    </form>
                    </center>
                    <br/>
                    <span style={{marginLeft:'123px'}}>

                        New User? <Link to ="/register">Click Here
                        </Link> &nbsp;
                        
                        Admin? <Link to ="/admin">Click Here
                        </Link>
                        </span>
                    
                    <br/>
                    <br/>
                    <center>
                        
                            <input type="submit" name="signin" id="btn" value="Login" onClick={this.click} />
                       
                    </center>

            

                </div>
            </div>
        </div>
        </div>
        )
    };
}

export default LoginPage;



// import React from 'react';
// import FastfoodIcon from '@material-ui/icons/Fastfood';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { Link } from "react-router-dom";
// import './Login.css';

// class LoginPage extends React.Component {
//      constructor(){
//         super();
//         this.state={
//             username:'',
//             password:''
//         };
//     }

//     onChangeUser=(event)=>{
//         this.setState({username:event.target.value})
//     }

//     onChangePass=(event)=>{
//         this.setState({password:event.target.value})
//     }

//     click=()=>{
//         if(this.state.username === 'kushagra' && this.state.password === 'kushagra123'){
//             this.props.history.push(`/hotels`);
//         }

//         else{
//             window.alert("Invalid Username or Password. Try Again!")
//         }
//     }

//   render() {
//     return (
//       <Grid container>
//         <Grid item xs={7}>
          
//           <img className="image" alt="foodImage" src='' />
        
//         </Grid>
//         <Grid item xs={5}>
//           <div className="container">
//             <FastfoodIcon className="icon"/>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <Typography variant="body1" color="error">
//               {this.state.loginFailed}
//             </Typography>
//             <form onSubmit={this.loginUser}>
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//                 label="UserName"
//                 type="text"
//                 value={this.state.userName}
//                 autoFocus
//               />

//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//                 label="Password"
//                 type="password"
//                 value={this.state.password}
//                 onChange={event => this.handleChange({password: event.target.value})}

//               />

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//               >
//                 Sign In
//               </Button>
//               <br/>
//               <br/>
//               <Link to={"/register"} className="link">
//                 Don't have an account? Sign Up
//               </Link>
//               <Box mt={5}>
//                 <Typography variant="body2" color="textSecondary" align="center">
//                   {'Copyright © NEUEat '}
//                   {new Date().getFullYear()}
//                   {'.'}
//                 </Typography>
//               </Box>
//             </form>
//           </div>
//         </Grid>
//       </Grid>
//     );
//   }
// }

// export default LoginPage;