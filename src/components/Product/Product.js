import React from 'react';
import './Product.css';
const Product = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock}=props.productInfo;
    return (
        <div id='product'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h4 className='name'>{name}</h4>
                <p>by: {seller}</p>
                <p>$ {price}</p>
                <p>only {stock} left in stock - order soon</p>
            <button className='btn' onClick={() => props.addProduct(props.productInfo)}><i class="fa-solid fa-cart-arrow-down"></i> add to cart</button>
            </div>
        </div>
    );
};

export default Product;