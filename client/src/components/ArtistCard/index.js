import React from 'react'
import "./index.css";
import { Link } from "react-router-dom";


const goToArtist = (artist) => {
return(
    "artist/" + artist
)
}

export default function ArtistCard(props) {

    return (
        <div>
            <div className="card">
                <img src={props.artistImg} className="cardImg" alt="An artist card"></img>
                <p className="price"></p>
                <p className="artistName">{props.name}</p>
                <p><Link to={"/" + goToArtist(props.id)}><button
                onClick={(event) => { goToArtist(props.id) }}
            >View Artist</button></Link></p>
            </div>
        </div>
    )
}