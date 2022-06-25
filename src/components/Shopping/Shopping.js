import React, { useState } from 'react';
import { addToDb, getDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import { fakeData } from '../Index/Index';
import Product from '../Product/Product';
import './Shopping.css'

const Shopping = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
       const check = addToDb(product.key, 1);
       console.log('it is check-part' ,check);
    }

    return (
        <div id='shopping'>
           <div className="product">
                {
                    product.map(pd => <Product
                      showAddToCart = {true}
                    key = {pd.key}
                    addProduct = {handleAddProduct}
                     productInfo = {pd}> 
                     </Product>)
                }
           </div>
           <div className="cart">
            <Cart cardItem = {cart}></Cart>
           </div>
        </div>
    );
};

export default Shopping;