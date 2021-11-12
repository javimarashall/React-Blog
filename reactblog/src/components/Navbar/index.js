import React, {useState} from 'react';
import './style.css';
import searchPhoto from '../../assets/search.png'; //import the photo first for the search icon
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    //sets the state for the search icon
    const [search, setSearch] = useState(false);

    //Sets the state of search from false to true
    const openSearch = () => {
        setSearch(true);
    }

    //dynamically create NavLink class and use it as NavLink variable in the input
    const searchClass= search ? 'searchinput active' : 'searchinput';


//function to handle the search form    
    const submitSearch = (e) => {
        e.preventDefault();
        alert('searched');
    } 

    return (
        <div className='navbar'>
            <ul className='navbarMenu'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about-us'>About Us</NavLink></li>
                <li><NavLink to='/post'>Post</NavLink></li>
                <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
            </ul>
            <div className='search'>
                <form onSubmit={submitSearch}>
                <input type='text' placeholder='Search' className={searchClass} />
                <img src={searchPhoto} alt='Search Icon'className='searchIcon' onClick={openSearch} />
                </form>
            </div>
        </div>
    )
}
export default Navbar;