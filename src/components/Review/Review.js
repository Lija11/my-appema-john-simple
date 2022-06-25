import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
import { fakeData } from '../Index/Index';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const saveCart = getStoredCart();
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        console.log(cartProducts);
    },[])
    return (
        <div>
           <h1>Developer is slepping</h1> 
        </div>
    );
};

export default Review;