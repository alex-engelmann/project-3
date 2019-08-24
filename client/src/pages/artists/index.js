import React from 'react';
import './index.css';
import API from '../../utilities/API';
import Images from '../../components/ArtistImage';
import ArtistCard from '../../components/ArtistCard';
import PageTitle from '../../components/Title';

class Artists extends React.Component {
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
                < PageTitle title="Our Artists" />
                <div className="grid-img">
                    {this.state.artists.map((result,index) => {
                        return (
                            <div key={index} className="artists-flex-container">
                                <ArtistCard name={result.firstName + " " + result.lastName} id={result._id} artistImg={result.image} bio={result.about}></ArtistCard>
                                <Images
                                    image={result.artworks[0].img}
                                    artistID={result._id}
                                    imageID={0}
                                ></Images>
                                <Images
                                    image={result.artworks[1].img}
                                    artistID={result._id}
                                    imageID={1}                                
                                    ></Images>
                                <Images
                                    image={result.artworks[2].img}
                                    artistID={result._id}
                                    imageID={2}
                                ></Images>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Artists