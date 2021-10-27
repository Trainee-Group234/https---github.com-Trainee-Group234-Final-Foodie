import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <div className="main-footer bg-warning shadow-lg p-3 rounded opacity-75">
             <div className="container">
                <div className="row">
                <div className="col-md-3 col-sm-6">
                <h4>Help</h4>
                <ul className="list-unstyled">
                    <li>FAQ</li>
                    <li>terms & conditions</li>
                    <li>terms of service</li>
                    <li></li>
                </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                <h4>About</h4>
                <ul className="list-unstyled">
                    <li>Careers</li>
                    <li>Employees</li>
                    <li>News</li>
                    <li>Resources & links</li>
                </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                <h4>Contact Us</h4>
                <ul className="list-unstyled">
                    <li>Near crystal IT park</li>
                    <li>Khandwa road,indore</li>
                    <li>ph: 909-080-3070</li>
                    <li>Fx: 847-090-1234</li>
                </ul>
                </div>
                </div> 
                 <div className="footer-bottom">
                     <p className="text-xs-center">
                         &copy;{new Date().getFullYear()} Foodie App - All Rights Reserved
                     </p>
                 </div>
             </div>   
            </div>
        );
    }
}
export default Footer;