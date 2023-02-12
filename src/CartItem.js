import React from 'react';

class CartItem extends React.Component {
//   constructor () {
//     super();
//     this.state ={}
//     // this.increaseQuantity = this.increaseQuantity.bind(this);
// }
  increaseQuantity = () => {
    //first form 1
    // this.setState({
    //   qty: this.state.qty +1  
    // });
    

    //first form 2
    this.setState((prevState) =>{
        return {
          qty: prevState.qty + 1
        }
  
    });
}
handleClick = () => {
    this.setState(
        prevState => {
            return {
                number: prevState.number + 2
            };
        },
        () => {
            console.log(this.state.number);
        }
    );

    this.setState(
        prevState => {
            return {
                number: prevState.number + 3
            };
        },
        () => {
            console.log(this.state.number);
        }
    );
};
    
  decreaseQuantity = () => {
  
    this.setState({ 
      
      qty: this.state.qty -1  
    });
  }
   
 // onMouseOver=()=> console.log("Over the Image")
  
 // onMouseOut=()=> console.log("out the Image")
  //onMouseOver={()=> console.log("Over the Image")}
 
  render () {
    const { price, title, qty } = this.props.product;
    const {product, onDecreseQuantity,onIncraeseQuantity,onDeleteProduct}= this.props   

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image}  />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="increase" className="action-icons"  onClick={()=> onIncraeseQuantity(product)} src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png" />
            <img alt="decrease" className="action-icons" onClick={()=> onDecreseQuantity(product)} src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
            <img alt="delete" className="action-icons"  onClick={() => onDeleteProduct(product.id)} src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" />
          </div>
        </div>
        <div>
        
     </div>
      </div>
    );
  }
}


const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;