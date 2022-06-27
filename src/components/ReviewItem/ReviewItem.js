import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const {name, quantity,key, price} = props.pdItem;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle}>
            <h4>{name}</h4>
            <p>Quantity : {quantity}</p><br />
            <p>{price}</p>
            <button className='btn' onClick={() => props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;