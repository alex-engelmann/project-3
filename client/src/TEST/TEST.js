import React from 'react';
import './TEST.css';
import API from '../utilities/API';
import Images from './test2.js'
import ArtistCard from './artistCard.js'

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
            <div className="grid-img">
                {this.state.artists.map(result => {
                    console.log(result)
                    return (
                        <div className="container">
                                <ArtistCard name={result.firstName + " " + result.lastName} artistImg={result.image} bio={result.about}></ArtistCard>
                                <Images
                                    image={result.artworks[0].img}
                                ></Images>
                                <Images
                                    image={result.artworks[1].img}
                                ></Images>
                                <Images
                                    image={result.artworks[2].img}
                                ></Images>
                        </div>


                    )
                })}
            </div>

        )
    }
}

export default Test
