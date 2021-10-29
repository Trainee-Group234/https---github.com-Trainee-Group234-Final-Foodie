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
import Counters from '../components/counters'
import { Link } from 'react-router-dom'
import ComponentToPrint from '../components/checkout'
import { saveBill } from '../actions/FoodieAction'
class Orders extends React.Component {

      handleAdd = (id,price, name, quantity) => {
        console.log("In handelAdd")
        const counters = [...this.state.counters];
        
        if (counters.length < 1) {
            let quantity = 0;
          counters.push({ id: id, qty: quantity+1, cost: price, title: name });
          this.setState({counters: counters})
    
          console.log(counters)
        } else {
        let result = counters.map(a=>a.id) 
        if (result.includes(id)) {
            counters.map(c => {
                if (c.id === id) {
                  c.qty = c.qty + 1;
                  return c;
                }
            })
            this.setState({counters: counters})
        }else {
            let quantity=0
            counters.push({ id: id, qty: quantity+1, cost: price, title: name });
            this.setState({counters: counters})
            console.log(counters)
          }
        //   counters.map(c => {
        //     if (c.id === id) {
        //       c.qty = c.qty + 1;
        //       return c;
        //     } else {
        //       counters.push({ id: id, qty: quantity+1, cost: price, title: name });
        //       this.setState({counters: counters})
        //       console.log(counters)
        //     }
            //return c;
        }
      }
    
    //   //passes each counter object, sets value to zero, sets state
      handleReset = () => {
        const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
        });
        this.setState({ counters });
      };
    
      //this handleIncrement method helps maintain single source of truth principle
      handleIncrement = counter => {
        //spread operator clones state.counters array
        const counters = [...this.state.counters];
        //finds index of counter object passed
        const index = counters.indexOf(counter);
        //spread operator clones indexed object
        counters[index] = { ...counter };
        //increases value of cloned object
        counters[index].qty++;
        //sets state of new counters array
        this.setState({ counters });
      };
    
      handleSubtract = counter => {
        //spread operator clones state.counters array
        const counters = [...this.state.counters];
        //finds index of counter object passed
        const index = counters.indexOf(counter);
        //spread operator clones indexed object
        counters[index] = { ...counter };
        //increases value of cloned object
        counters[index].qty--;
        //sets state of new counters array
        this.setState({ counters });
      };
    
      //handler for delete event called from counter.jsx click event
      //passes id of counter to be deleted
      //creates a new arrary, does not directly update state
      handleDelete = counterID => {
        //filters for all counters without passed ID
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({ counters });
      };
    
    componentDidMount(){
        if(!localStorage.jwtToken){
            window.location.href = "/"
        }else{
            const {id} = this.props.match.params
            this.setState({cname: id})
            this.props.getItems(id)

        }
    }
    constructor(){
        super();
        this.state = {
            dummy: "hello",
            list: data,
            id:'',
            newList:[],
            price:'',
            name:[],
            total:0,
            quantity:0,
            clickable: false,
            cname: "",
            counters: [
                //{ id: 1, qty: 1, cost: 210, title: "Rice" }
            ]
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
        if(!names.includes(ChildName)){
        names.push(ChildName);
        this.setState({quantity : ChildQuantity+1})
    }
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

    total = () => {
     
        let totalCost = 0;
        this.state.counters.map(c=>{
            totalCost = totalCost+(c.qty*c.cost)
        })
        console.log(totalCost)
        this.setState(
            {
                total:totalCost
            }
        )
    }
   
    handlePay = () =>{
        const {customer} = this.props.login;
        // window.location.href = "/bill"
        let items = []
        const newBill = {
            username: customer.username,
            mobile: customer.mobile,
            total: this.state.total,
            items: this.state.counters
        }

        this.props.saveBill(newBill,this.props.history)
    }

    render(){
        const {item} = this.props.items
        return(
        <div>
           <Usernavbar/>
            <div id="content">
                <div id="head">
                    <h1 className='hname'>{this.state.cname}</h1>
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
                                                        action={this.handleAdd} />
                        )		
                                        
                        }
                        {/* <div>
                            {this.state.counters.map(c =>
                                <h5>{c.title}({c.qty})</h5>)}
                        <Counters
                                        counters={this.state.counters}
                                        onReset={this.handleReset}
                                        onIncrement={this.handleIncrement}
                                        onSubtract={this.handleSubtract}
                                        onDelete={this.handleDelete}
                                    />
                            </div> */}

                    </div>
                </div>
                <div id="panel ">
                    <div id="logo">               
                    </div> 
                    <div id="right">
                        <div id= "right-in">
                            <h4><Category/> My Cart</h4>
                            <div className="container">
                            <Counters
                                        counters={this.state.counters}
                                        onReset={this.handleReset}
                                        onIncrement={this.handleIncrement}
                                        onSubtract={this.handleSubtract}
                                        onDelete={this.handleDelete}
                                    />
                            </div>
                            {/* { this.state.clickable && 
                                <div>
                                    {/* <MyCart 
                                        name={this.state.name}
                                        price={this.state.price}
                                        quantity={this.state.quantity} 
                                        increment={this.incrementQuantity} 
                                        decrement={this.decrementQuantity}>
                                    </MyCart> */}
                                    {/* {this.state.dummy} */}
                                    {/*ABdesagjg
                                     
                                </div>
                            } */}
    
                            <div id="total">
                                <p id="total"> Total amount: 
                                    <span className="spn">{'\u20B9'}  {this.state.total}</span>
                                </p>
                                <input id="pay" type="button" value="Calculate"
                                onClick = {() => this.total()} />
                                <br/>
                                <Link to="/bill">
                                <input id="pay" type="button" value="Pay Now" onClick={this.handlePay}/>
                                </Link>
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
    getItems:PropTypes.func.isRequired,
    saveBill:PropTypes.func.isRequired,
    login: PropTypes.object.isRequired
}

const mapStateToProps  = state => ({
    items: state.items,
    login: state.login
})
export default connect(mapStateToProps,{getItems,saveBill})(Orders);