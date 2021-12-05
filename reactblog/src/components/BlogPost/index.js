import React from 'react';
import './style.css';
import Card from '../../components/UI/Card/index';
import juniper from "../../blog-photos/IMG_3386.jpg"

const BlogPost = (props) => {
    return (
        //style={{width: 70%}} being passed as a prop for style to the Card component
        <div className='blogPostContainer'>
            <Card>
                <div className='blogHeader'>
                    <span classname='blogCategory'>Featured</span>
                    <h1 className='postTitle'>Beautiful is Always Beautiful</h1>
                    <span className='postedBy'>Posted on December 04, 2021 by Juniper</span>
                </div>
                <div className="postImageContainer">
                    <img src={juniper} alt="Post Image" />
                </div>
            </Card>
        </div>

    )
}

export default BlogPost;