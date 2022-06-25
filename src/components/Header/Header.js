import { Link } from 'react-router-dom';

import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'


const Header = () => {
    return (
<div id='header'>
        <div className="img">
          <img src={logo} alt="logo" />
        </div>
            <nav>
            <Link to="/">Shop</Link>
            <Link to="/order">Order Review</Link>
            <Link to="/inventory">Manage Inventory here</Link>
        </nav>
</div>
    );
};

export default Header;

// (
//     <div id='header'>
//         <nav>
//         <Link to = "/">HOME </Link>
//         <Link to = "/blogs">Blogs </Link>
//         <Link to = "/contact">Contact </Link> 
//     </nav>
//        <div className="img">
//        <img src={logo} alt="logo" />
//        </div>
//        <nav>
//        <Link to="/home">Shop</Link>
//        <Link to="/order">Order Review</Link>
//        <Link to="/inventory">Manage Inventory here</Link>
//         {/* <a href="/home">Shop</a>
//         <a href="/order">Order Review</a>
//         <a href="/inventory">Manage Inventory here</a> */}
//        </nav>
//     </div>
// );