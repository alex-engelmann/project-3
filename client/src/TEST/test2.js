import React from 'react'

export default function images(props) {
    return (
        <div>
            <img
                src={props.image}
                alt='..'
            ></img>
        </div>
    )
}