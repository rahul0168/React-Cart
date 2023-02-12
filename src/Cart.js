import React, { Component } from 'react';
import CartItem from './CartItem';
class Cart extends Component {

    constructor () {
        super();
        this.state ={
          products:[
            {
              id:1,
              price: 1999,
              title: 'Smart Watch ',
              qty: 11,
              img: ''
            },
            { id:2,
              price: 19999,
              title: 'Mobile Phone',
              qty: 10,
              img: ''
            },
            {  id:3,
              price: 45999,
              title: 'Laptop ',
              qty: 1,
              img: ''
            }
          ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
  
    handleIncreaseQuantity = (product) =>{
      console.log('hey qty',product);
      const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
    }

    handledecreaseQuantity = (product) =>{
      console.log('hey qty',product);
      const { products } = this.state;
    const index = products.indexOf(product);

    if( products[index].qty === 0){
      return ;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
    }

    handleDeleteProduct = (id) => {
      const { products } = this.state;
  
      const items = products.filter((item) => item.id !== id); // [{}]
  
      this.setState({
        products: items
      })
    }

    render() {
        const {products} = this.state;  
        return (
            <div className='cart'>
          <h1>Cart</h1>
         { products.map((product) =>{
            return <CartItem  product={product} key={product.id} onIncraeseQuantity={this.handleIncreaseQuantity} onDecreseQuantity=        {this.handledecreaseQuantity}    onDeleteProduct={this.handleDeleteProduct}/>
         })}

            </div>
        );
    }
}



export default Cart;