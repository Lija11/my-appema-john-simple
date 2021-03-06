
import React from 'react';

const Cart = (props) => {
    const cartItemAdd= props.cardItem;
    // console.log(cartItemAdd);
    // const total= Math.round(cartItemAdd.reduce((totalItem, priced) => totalItem + priced.price * priced.quantity, 0));
    let total = 0;
    for(let i= 0; i<cartItemAdd.length; i++){
        let prd = cartItemAdd[i];
        total = total+prd.price * prd.quantity;
    }
    // debugger;
    const shippingPrice= Math.round(cartItemAdd.reduce((totalItem, priced) => 
    totalItem + priced.shipping, 0))
   

    const tax = Math.round(total/10);
    return (
        <div>
          <h4>Order Summary</h4>
          <p>Items ordered: {cartItemAdd.length}</p>
          <p><small>Product price: {total}</small></p>
          <p><small>shipping price: {shippingPrice}</small></p>
          <p><small>Tax + VAT : {tax}</small></p>
          <p><small>total Order: {total + shippingPrice}</small></p>
          {
            props.children
          }
        </div>
    );
};

export default Cart;

  // let total = 0;
  //   for(let i= 0; i<cartItemAdd.length; i++){
  //       let prd = cartItemAdd[i];
  //       total = total+prd.price;
  //   }

    // let shipping = 0;

    // if (total > 0){
    //     shipping = 12.99;
    // } 

    // else if (total > 15){
    //     shipping= 4.99
    // }

        // if (total > 35){
    //     shipping = 0;
    // }