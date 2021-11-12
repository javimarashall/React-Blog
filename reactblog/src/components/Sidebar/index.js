import React from 'react';
import './style.css';
import Card from '../../components/UI/Card/index';

const Sidebar = (props) => {
    return (
        //style={{width: 27%}} being passed as a prop for style to the Card component
        <Card style={{width: '27%'}}>
            Sidebar
        </Card>
    )
}

export default Sidebar;