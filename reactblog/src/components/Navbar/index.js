import React from 'react';
import './style.css';
import search from '../../assets/search.png';

const Navbar = (props) => {
    return (
        <div className='navbar'>
            <ul className='navbarMenu'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Post</a></li>
                <li><a href='#'>Contact Us</a></li>
            </ul>
            <div className='search'>
                <input/>
                <img src={search} alt='search icon'/>
            </div>
        </div>
    )
}
export default Navbar;