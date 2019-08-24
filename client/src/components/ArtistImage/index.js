import React from 'react'
import "./index.css";
import { Link } from "react-router-dom";




export default function images(props) {
    
    return (
        <div>
            <Link to={"/art/" + props.artistID + "/" + props.imageID}>
            <img
                className="images"
                src={props.image}
                alt='..'
            ></img>
            </Link>

            
        </div>
    )
}