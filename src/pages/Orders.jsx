import React from 'react'
import '../styles/OrderStyle.css'
import Menu from '../components/Menu'
import data from '../data/data.json'
import MyCart from '../components/MyCart'
import Usernavbar from './Usernavbar'
import { Category } from '@material-ui/icons'
import { getItems } from '../actions/FoodieAction'
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'
class Orders extends React.Component {
    componentDidMount(){
        if(!localStorage.jwtToken){
            window.location.href = "/"
        }else{
            const {id} = this.props.match.params
          
            this.props.getItems(id)

        }
    }
    constructor(){
        super();
        this.state = {
            list: data,
            id:'',
            newList:[],
            price:'',
            name:[],
            total:0,
            quantity:0,
            clickable: false
        };
    }

    componentWillMount(){
        const hotel = this.props.history.location.pathname.slice(7)
        const List = this.state.list.filter(function (rec) { return rec.name === hotel})
        this.setState({
            id:hotel,
            newList: List
        })
    }

    childHandler = (ChildPrice,ChildName,ChildQuantity) => {
        const names = this.state.name; 
        names.push(ChildName);
        this.setState(
            {price: ChildPrice,
            name: names,
            quantity : ChildQuantity+1,
            clickable: true }
        )};

    incrementQuantity = (incQuan) => {
        this.setState(
            {
                quantity: incQuan+1
                
            }
        )
    };

    decrementQuantity = (decQuan) => {
        if(this.state.quantity>=1){
            this.setState(
                {
                    quantity: decQuan-1
                    
                }
            )
        }
        
    };

    total = (p,q) => {
        this.setState(
            {
                total:p*q
            }
        )
    }
   

    render(){
        const {item} = this.props.items
        return(
        <div>
           <Usernavbar/>
            <div id="content">
                <div id="head">
                    <h1 className='hname'>Dummy</h1>
                 
                    {/* <h5 className='aname'><i class="fa fa-map-marker" style={{fontSize:18}}></i> {this.state.newList.map(x => x.address)}</h5> */}
                 
                    <div id='items'>
                        <center><h2>Order Now</h2></center>
                        <br/>

                        {item.map (
                            x =>  <Menu 
                                                        id = {x.itemId}
                                                        desc={x.description} 
                                                        price={x.cost} 
                                                        name={x.itemName}
                                                        action={this.childHandler} />
                        )		
                                        
                        }

                    </div>
                </div>
                <div id="panel ">
                    <div id="logo">               
                    </div> 
                    <div id="right">
                        <div id= "right-in">
                            <h4><Category/> My Cart</h4>
                                
                            { this.state.clickable && 
                                <div>
                                    <MyCart 
                                        name={this.state.name}
                                        price={this.state.price}
                                        quantity={this.state.quantity} 
                                        increment={this.incrementQuantity} 
                                        decrement={this.decrementQuantity}>
                                    </MyCart>
                                </div>
                            }
    
                            <div id="total">
                                <p id="total"> Total amount: 
                                    <span className="spn">{'\u20B9'}  {this.state.total}</span>
                                </p>
                                <input id="pay" type="button" value="Calculate"
                                onClick = {() => this.total(this.state.price,this.state.quantity)} />
                                <br/>
                                <input id="pay" type="button" value="Pay Now"/>
                            </div>
                        </div>                
                    </div>
                </div>

            </div>
        </div>
        )
    };
}
Orders.propTypes = {
    getItems:PropTypes.func.isRequired
}

const mapStateToProps  = state => ({
    items: state.items
})
export default connect(mapStateToProps,{getItems})(Orders);