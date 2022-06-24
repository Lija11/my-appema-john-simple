import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { fakeData } from '../Index/Index';
import Product from '../Product/Product';
import './Shopping.css'

const Shopping = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log('add product', product)
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div id='shopping'>
           <div className="product">
                {
                    product.map(pd => <Product addProduct = {handleAddProduct} productInfo = {pd}></Product>)
                }
           </div>
           <div className="cart">
            <Cart cardItem = {cart}></Cart>
           </div>
        </div>
    );
};

export default Shopping;