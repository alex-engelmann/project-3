import React from 'react'


const styles = {
    imgStyle: {
        width: "50px;",
        height: "50px;"
    }
}
export default function images(props) {
    return (
        <div>
            <img
            className="images"
                src={props.image}
                alt='..'
            ></img>
        </div>
    )
}