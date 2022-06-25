import React from 'react';
import {useParams} from 'react-router-dom';
import { fakeData } from '../Index/Index';
import Product from '../Product/Product';


const ProductDetails = () => {
    const {productkey} = useParams();
    const product = fakeData.find(prod => prod.key === productkey);
    return (
        <div>
            <h1>Your Product Details Here</h1>
            <Product showAddToCart = {false} productInfo = {product}></Product>
        </div>
    );
};

export default ProductDetails;