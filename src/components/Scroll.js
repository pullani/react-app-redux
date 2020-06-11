import React from 'react';
import './Scroll.css'

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', border: '0px solid black', height: '600px', padding:'20px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;