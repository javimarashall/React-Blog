import React from 'react';
import './style.css';
import Card from '../../components/UI/Card/index';

const BlogPost = (props) => {
    return (
        //style={{width: 70%}} being passed as a prop for style to the Card component
       <div className='blogPostContainer'>
           <Card>
               <div className='blogHeader'>
                    <span classname='blogCategory'>Featured</span>
                    <h1 className='postTitle'>Beautiful is Always Beautiful</h1>
                    <span className='postedBy'>Posted on July 22, 2016 by Sora</span>
               </div>
           </Card>
       </div>

    )
}

export default BlogPost;