import React from 'react';

class CartItem extends React.Component {
  constructor () {
    super();
    this.state = {
      price: 999,
      title: 'Mobile Phone',
      qty: 1,
      img: ''
      // this.increaseQuantity = this.increaseQuantity.bind(this);
  }
}
  increaseQuantity = () => {
    console.log('this', this.state);
  }

  onMouseOver=()=> console.log("Over the Image")
  
  onMouseOut=()=> console.log("out the Image")
  //onMouseOver={()=> console.log("Over the Image")}
 
  render () {
    const { price, title, qty } = this.state;
    let code = ["Java","ES6","Ruby"]

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image}   onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}/>
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="increase" className="action-icons"  onClick={this.increaseQuantity} src="https://cdn-icons-png.flaticon.com/512/3303/3303893.png" />
            <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
            <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" />
          </div>
        </div>
        <div>
        {code.map(item => <p>{item}</p>)}
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