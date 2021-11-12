import React from 'react';
import './style.css';
import Card from '../../components/UI/Card/index';
import BlogPost from '../../components/BlogPost/index';
const Post = (props) => {
    return (
        <section className='container'> 
            <BlogPost />
            <div className='sideBar'>Sidebar</div>
        </section>
    )
}

export default Post;