import React, { useEffect, useState } from 'react';
import { addToDb, getDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import { fakeData } from '../Index/Index';
import Product from '../Product/Product';
import './Shopping.css'
import {Link} from 'react-router-dom';

const Shopping = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(() => {
            const saveCart = getStoredCart();
            const productKeys = Object.keys(saveCart);
            const previousKey = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = saveCart[existingKey];
            return product;
        })
        setCart(previousKey);
    }, []);

    const handleAddProduct = (product) => {
        const keyAdded = product.key;
        const sameProduct = cart.find(pd => pd.key === keyAdded);
        let count = 1;
        let newCart;
        if (sameProduct){
            count = sameProduct.quantity +1;
            sameProduct.quantity = 1;
            const other = cart.filter(pd => pd.key !== keyAdded);
             newCart = [...other, product];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.key, count);
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
                <Cart cardItem = {cart}>
                  <Link to = "/order"><button className='btn'>Review Order</button></Link>
                </Cart>
           </div>
        </div>
    );
};

export default Shopping;