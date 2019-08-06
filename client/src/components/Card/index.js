import React from "react";
import Card from "../Card";
import "./style.css";

function Card(props) {
    return (
        <div 
        className="card"
        style={{
            backgroundImage: props.image ? `url(${props.image})` : "none"
        }}
        >
        <CardBtn
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pass"
        
        />
        <CardBtn
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleBtnClick}
        data-value="pick"

        />

    </div>
   ); 
}

export default Card;
