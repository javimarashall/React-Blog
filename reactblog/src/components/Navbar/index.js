import React, {useState} from 'react';
import './style.css';
import searchPhoto from '../../assets/search.png';

const Navbar = (props) => {
    //sets the state for the search icon
    const [search, setSearch] = useState(false);

    //Sets the state of search from false to true
    const openSearch = () => {
        setSearch(true);
    }

    //dynamically create a class and use it as a variable in the input
    const searchClass= search ? 'searchinput active' : 'searchinput';


//function to handle the search form    
    const submitSearch = (e) => {
        e.preventDefault();
        alert('searched');
    } 

    return (
        <div className='navbar'>
            <ul className='navbarMenu'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Post</a></li>
                <li><a href='#'>Contact Us</a></li>
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