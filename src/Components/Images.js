import React from 'react';
import '../App.css'

function Images(props) {
    return (
        <div className="images">
            <img src= {props.image} />
        </div>
    )
}

export default Images
