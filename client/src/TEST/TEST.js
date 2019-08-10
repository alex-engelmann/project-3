import React from 'react';
import './TEST.css';
import API from '../utilities/API';
import Images from './test2.js'

class Test extends React.Component {
    state = {
        artists: []
    }

    componentDidMount() {
        this.getArtists();
    }

    getArtists = () => {
        API.find()
            .then(res =>
                this.setState({ artists: res.data })
            )
    }

    render() {
        return (

            <div>
                {this.state.artists.map(result => {
                    return (
                        // console.log(result.artworks[0].img)
                        <Images
                            image={result.artworks[0].img}
                        ></Images>
                    )
                })}
            </div>

        )
    }
}


// function TEST() {



// const getArtists = () => {
// API.find()
// .then(res => res.data
//     )
// }

//     return (
//         <React.Fragment>

//         </React.Fragment>
//     )
// }

export default Test
