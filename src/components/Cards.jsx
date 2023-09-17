import React from "react";
import '../index.css';

const Cards = (props) => {
    return(
        <div className='card'>
            <img className='img' src={props.src}></img>
            <h2 className="txt2">{props.title}</h2>
            <h3 className="txt2">{props.info}</h3>
            <a className='link' href={props.link}>
            <button className='btn'>View Menu</button>
            </a>
        </div>
    )
}

export default Cards;