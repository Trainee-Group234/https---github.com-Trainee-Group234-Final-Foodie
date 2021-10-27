import React from "react";
import Bg from '../images/bg1.jpg';
import Bg2 from '../images/bg2.jpg';
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Imageslider from "./imageslider";
import { Card } from "react-bootstrap";
import Card1 from '../images/card1.jpg';
import Card2 from '../images/card2.jpg';
import Card3 from '../images/card3.png';
import Navigation from "./Navigation";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import "../App.css"
// import { login } from '../actions/FoodieAction';

class Main extends React.Component{
    componentDidMount(){
        if(this.props.login.validToken){
            this.props.history.push("/hotels");
        }
    }
    render(){
        return(
            <div className="bg-gradient-active text-dark">


                <Navigation />
            <div className="col-md-6 col-xs-6 text-dark navbar-brand" style={{height:"130px"}}>             
                     FOODIE </div>
                <hr />
                <div className="container">
                    
                        <Imageslider/>
                    
           
                    <br/><br/>
                    <div className="row">
                    <div className="col-md-6 col-xs-6">
                    <img src={Bg} className="img-thumbnail img-responsive" alt="..."/>
                    </div>
                    <div className="col-md-6 col-xs-6 text-danger">
                    <h6><br/><br/>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten</h6>
                    </div>
                   <div className="row">
                    <div className="col-md-6 col-xs-6 text-success">
                    <h6><br/><br/>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten</h6>
                    </div>
                    <div className="col-md-6 col-xs-6">
                    <img src={Bg2} className="img-thumbnail img-responsive" alt="..."/>
                    </div>
                    </div>
                    </div><br/><br/>
                    <div className="row">
                    <div className="col-md-4 col-xs-6 p-2">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Card1} />
                        <Card.Body>
                            <Card.Title>FAST DELIVERY</Card.Title>
                            <Card.Text>
                                
                                tasty food is minutes away!
                                Super Fast delivery for our customers
                            </Card.Text>
                            {/* <Button variant="warning">More info</Button> */}
                        </Card.Body>
                        </Card>
                    </div>
                     <div className="col-md-4 col-xs-6 p-2">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Card2} />
                        <Card.Body>
                            <Card.Title>PASSION</Card.Title>
                            <Card.Text>
                            the people who give you their food give you their heart.
                            </Card.Text>
                            {/* <Button variant="warning">More info</Button> */}
                        </Card.Body>
                        </Card>
                    </div>
                     <div className="col-md-4 col-xs-6 p-2">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Card3} />
                        <Card.Body>
                            <Card.Title>QUALITY MATTERS</Card.Title>
                            <Card.Text>
                            We deliver the best and quality food!
                            </Card.Text>
                            {/* <Button variant="warning">More info</Button> */}

                        </Card.Body>
                        </Card>
                    </div>
                    </div>
                   
                </div>
                
                <Footer/>
            
            </div>
            
        );
    }
}
Main.propTypes = {
    login: PropTypes.object.isRequired
}

const mapStateToProps  = state => ({
    login: state.login
})
export default connect(mapStateToProps)(Main);