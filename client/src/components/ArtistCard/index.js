import React from 'react'

import "./index.css";

const styles = {

}
export default function ArtistCard(props) {

    return (
            <div>
                <div className="card">
                    <img src={props.artistImg} className="cardImg" alt="Denim Jeans" style={styles}></img>
                    <p className="price"></p>
                    <p className="artistName">{props.name}</p>
                    <p><button>View Artist</button></p>
                </div>
            </div>
    )
}