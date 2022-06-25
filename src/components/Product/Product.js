import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
const Product = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock, key}=props.productInfo;
    return (
        <div id='product'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h4 className='name'><Link to = {"/product/" + key}>{name}</Link></h4>
                <p>by: {seller}</p>
                <p>$ {price}</p>
                <p>only {stock} left in stock - order soon</p>
                 { props.showAddToCart === true && <button className='btn' onClick={() => props.addProduct(props.productInfo)}><i class="fa-solid fa-cart-arrow-down"></i> add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;