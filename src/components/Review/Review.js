import React, { useEffect, useState } from 'react';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import { fakeData } from '../Index/Index';
import ReviewItem from '../ReviewItem/ReviewItem';
import {deleteFromDb} from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import successImg from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);

    const [placeOrders, setPlaceOrder] = useState(false);

    const handlePlaceOrder = () => {
            setCart([]);
            setPlaceOrder(true);
            clearTheCart();
        }
    let placeOrderSuccess ;
        if (placeOrders){
            placeOrderSuccess = <img src={successImg} alt="placeOrderImg" />
        }

    const removeProduct = (removeKey) => {
        console.log('remove clicked', removeKey)
        const newCart = cart.filter(pd => pd.key !== removeKey);
        setCart(newCart);
        deleteFromDb(removeKey);
    }
    useEffect(() => {
            const saveCart = getStoredCart();
            const productKeys = Object.keys(saveCart);
            const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        setCart(cartProducts);
    },[]);
    return (
        <div id='shopping'> 
            <div className="product">
                {
                cart.map(pd => <ReviewItem key = {pd.key} removeProduct = 
                    {removeProduct} pdItem = {pd}></ReviewItem>)
                }
                {placeOrderSuccess};
            </div>
            <div>
                <Cart cardItem = {cart}>
                    <button className='btn' onClick={handlePlaceOrder}>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;