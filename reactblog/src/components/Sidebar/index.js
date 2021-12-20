import React from 'react';
import './style.css';
import Card from '../../components/UI/Card/index';

const Sidebar = (props) => {
    return (
        <div className="sideBarContainer">
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className='cardHeader'>
                    <span>About Us</span>
                </div>
                <div className='profileImageContainer'>
                    <img src="https://static.scientificamerican.com/sciam/cache/file/F27ED9D2-18FC-4836-BC4F2F5CE6630BB4_source.jpg?w=590&h=800&8D2E82D7-5354-4B3B-B12D591361A88D36" alt="jax" />
                </div>
                <div className='cardBody'>
                    <p className='personalBio'>This is beer, this is going to be a blog about beer brewing</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className='cardHeader'>
                    <span>Social Network</span>
                </div>
            </Card>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className='cardHeader'>
                    <span>Recent Posts</span>
                </div>
            

            </Card>
        </div>

    )
}

export default Sidebar;