import React from 'react';
import '../styles/HotelStyle.css'
import RestaurantCard from '../components/RestaurantCard'
import Usernavbar from './Usernavbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategory } from '../actions/FoodieAction';

class Hotels extends React.Component {
    constructor(){
        super();
        this.state={
            list: []
        };
    }

    componentDidMount(){
        if(!localStorage.jwtToken){
            window.location.href="/"
        }else{
            this.props.getCategory();
            //this.setState({list: this.props.category.category})
            //console.log(this.state.list)
        }
    }

    sortMenu=(e)=>{
        // this.setState({list: this.props.category.category})
        // console.log(this.state.list);
        const{category} = this.props.category;
        console.log(category)
        if (e.target.value === 'rating'){
            this.setState({
                list: category.sort(function(a,b){return b.rating - a.rating})
            })
            
        }
        else if (e.target.value === 'review'){
            this.setState({
                list: category.sort(function(a,b){return b.reviews - a.reviews})
            })
            
        }
        else if (e.target.value === 'name'){
            function compareName  (a, b)  {
                // case-insensitive comparison
                a = a.toLowerCase();
                b = b.toLowerCase();
              
                return (a < b) ? -1 : (a > b) ? 1 : 0;
              }
            this.setState({
                list: category.sort(function(a,b){return compareName(a.name, b.name)})
            })
            
        }
        
    }

    render(){ 
        const {category} = this.props.category
        return(
            <div>
<Usernavbar/>
            
            <div className="maincart ">

            <div id="menubar">
                
                <h4 id="menu-title">Choose Your Category</h4>
            
                <p id ="sort">  Sort by &nbsp; &nbsp;
                    <select id="sort-metrics" defaultValue={"none"} onChange={(e) => this.sortMenu(e)}>
                        <option value="none" disabled hidden>None</option>
                        <option class="sort-option" value="name">Name</option>
                        <option class="sort-option" value="rating">Ratings</option>
                        <option class="sort-option" value="review">Reviews</option>
                    </select>
                </p>
            </div>
        
            {/* {this.state.list.map(
                x => 
                <RestaurantCard thumbnail_image={x.thumbnail_image} name = {x.name} cuisines = {x.cuisines} rating = {x.rating} reviews = {x.reviews}/>
                
                )} */}
            {category.map(
                x => 
                <RestaurantCard thumbnail_image={x.thumbnailimage} name = {x.name} cuisines = {x.cuisines} rating = {x.rating} reviews = {x.reviews}/>
                
                )}

            </div>
        </div>
        )
    };
}
Hotels.propTypes = {
    getCustomers:PropTypes.func.isRequired,
    getCategory: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    category: PropTypes.object.isRequired
}

const mapStateToProps  = state => ({
    errors: state.errors,
    category: state.category
})
export default connect(mapStateToProps,{getCategory})(Hotels);