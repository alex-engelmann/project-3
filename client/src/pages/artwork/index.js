import React from 'react';
import API from '../../utilities/API';
import Modal from '../../components/noShoppingModal';
// import ModalTrigger from '../../components/noShoppingTrigger';
import PageTitle from '../../components/Title';
import './index.css';
import Images from '../../components/ArtistImage';
class Artwork extends React.Component {
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
                <PageTitle title="Artwork" />
                <div className="img-grid">
                    <div className="shopBG">
                        <div className="artwork-flex-container">
                            {this.state && this.state.artists && this.state.artists.map((result, index1) => {
                                return (
                                    <div key={index1}>
                                        {result.artworks.map((result, index) => {
                                            return (
                                                <div key={index}>
                                                    
                                                    <Images
                                                        image={result.img}
                                                        artistID={this.state.artists[index1]._id}
                                                        imageID={index}
                                                    ></Images>
                                                </div>
                                            )
                                        })}
                                    </div>

                                )
                            })}
                        </div>
                        <Modal />
                    </div>
                </div>
            </div>
        )
    }
}

export default Artwork