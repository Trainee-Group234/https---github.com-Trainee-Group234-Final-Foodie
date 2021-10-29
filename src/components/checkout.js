
import React, { useRef } from 'react'
import {render} from "react-dom"
import {useReactToPrint} from 'react-to-print'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


 class ComponentToPrint extends React.Component {

    //  componentDidMount(){
    //     if(!localStorage.jwtToken){
    //         window.location.href = "/"
    //     }
    // }

    handleClick(){
        window.location.href = "/"
    }

   
    render() {
        const {bill} = this.props.bills
        const {customer} = this.props.login;
        const message = () =>{
        console.log("order placed succesfully")
        
            
        }
        return (
            <div className="container">
            <div className="card">
            <div className="card-header">
            Invoice Date: &nbsp;&nbsp;
            <strong>{new Date().toISOString().slice(0, 10)}</strong> 
            <span className="float-right"> <strong>Status:</strong> Ordered</span>

            </div>
            <div className="card-body">
            <div className="row mb-4">
            <div className="col-sm-6">
            <h6 className="mb-3">Delivery Address:</h6>
            <div>
            <strong>{customer.fullname}</strong>
            </div>
            <div>Mahatma gandhi road</div>
            <div>Indore</div>
            <div>Email: {bill.username}</div>
            <div>Phone: {bill.mobile}</div>
            </div>

            {/* <div className="col-sm-6">
            <h6 className="mb-3">To:</h6>
            <div>
            <strong>Abdeaali</strong>
            </div>
            <div>Mahatma gandhi road</div>
            <div>Indore</div>
            <div>Email: abdeali@t.com</div>
            <div>Phone: +91 123 456 789</div>
            </div> */}



            </div>

            <div className="table-responsive-sm">
            <table className="table table-striped">
            <thead>
            <tr>
            <th className="center">#</th>
            <th>Item</th>
            {/* <th>Description</th> */}

            <th className="right">Unit Cost</th>
            <th className="center">Qty</th>
            {/* <th className="right">Total</th> */}
            </tr>
            </thead>
            <tbody>
            {bill.items.map(item=>
            <tr>
            <td className="center">{item.id}</td>
            <td className="left strong">{item.title}</td>
            <td className="right">{item.cost}</td>
            <td className="center">{item.qty}</td>
            </tr>
            )}
            {/* <tr>
            <td className="center">2</td>
            <td className="left">mutton biryani jumbo</td>
           

            <td className="right">650.00</td>
            <td className="center">1</td>
            <td className="right">650.00</td>
            </tr>
            <tr>
            <td className="center">3</td>
            <td className="left">paneer dopyaza</td>
           

            <td className="right">190.00</td>
            <td className="center">1</td>
            <td className="right">190.00</td>
            </tr>
            <tr>
            <td className="center">4</td>
            <td className="left">paneer tikka</td>
            

            <td className="right">290.00</td>
            <td className="center">1</td>
            <td className="right">290.00</td>
            </tr> */}
            </tbody>
            </table>
            </div>
            <div className="row">
            <div className="col-lg-4 col-sm-5">

            </div>

            <div className="col-lg-4 col-sm-5 ml-auto">
            <table className="table table-clear">
            <tbody>
            {/* <tr>
            <td className="left">
            <strong>Subtotal</strong>
            </td>
            <td className="right">1420.00</td>
            </tr> */}
         
           
            <tr>
            <td className="left">
            <strong>Total</strong>
            </td>
            <td className="right">
            <strong>{bill.total}</strong>
            </td>
            </tr>
            </tbody>
            </table>

            </div>

            </div>

            </div>
            </div>
            <br/>
            
            {/* <button onClick={message} className="btn btn-primary center-block">confirm</button> */}
           
            <div className="row text-center">
            {/* <Example /> */}
            <button type="button" className="btn btn-primary float-center" data-toggle="modal" data-target="#exampleModal">
            confirm
            </button>
            </div>
            
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Hurray!</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    Your Order Placed Successfully
                </div>
                <div className="modal-footer">
                   
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleClick}>Close</button>
               
                    {/* <button type="button" className="btn btn-primary">ok</button> */}
                </div>
                </div>
            </div>
            </div>


              
            
         </div>

            
        );
    }
}

const Example =()=>{
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () =>componentRef.current,
    });
    return(
        <div className="container mx-auto">
        <div className="float-left">
            <ComponentToPrint ref ={componentRef} />
            <button className="btn btn-primary center-block" onClick={handlePrint}>print</button>
        </div>
        </div>
    );
};
//render(<Example />, document.querySelector("#root") );

ComponentToPrint.propTypes = {
    bills: PropTypes.object.isRequired,
    login: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    bills: state.bills,
    login: state.login
})
export default connect(mapStateToProps)(ComponentToPrint);