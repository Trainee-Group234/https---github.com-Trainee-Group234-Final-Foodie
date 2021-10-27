import React from 'react'

class MyCart extends React.Component{
    render(){
        return(
            
            <div className="sticky-top shadow-lg p-0 opacity-50 bg-gradient-warning collapse-inner rounded">


                {this.props.name.map((name,number) => (
                    <p key={number} id="pitem"> 
                        {name}
                    <br/><br/>
                    <input className="ip" type="button" value="-" onClick={()=>this.props.decrement(this.props.quantity)}/>

                    <input className="ip" id="tx-w" type="text" value={this.props.quantity}/>
                    
                    <input className="ip" type="button" value="+" onClick={()=>this.props.increment(this.props.quantity)}/>
                    </p>

))}   
            </div>
        )
    }
}

export default MyCart