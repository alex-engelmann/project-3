import React from 'react'

const styles = {

}
export default function ArtistCard(props) {

    return (
            <div>
                <div className="card">
                    <img src={props.artistImg} class="cardImg" alt="Denim Jeans" style={styles}></img>
                    <p className="price"></p>
                    <p>{props.bio}</p>
                    <p><button>Add to Cart</button></p>
                </div>
            </div>
    )
}