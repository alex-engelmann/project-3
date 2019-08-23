import React from 'react';
import './index.css';
import API from '../../utilities/API';
import PageTitle from '../../components/Title'
import Modal from '../../components/noShoppingModal';
import ModalTrigger from '../../components/noShoppingTrigger';

class Art extends React.Component {
    state = {
        artists: [],
        currentArtist: {},
        currentArt: {}
    }

    componentDidMount() {
        this.getArtists();
    }

    getArtists = () => {
        API.find()
            .then(res =>
                this.setState({ artists: res.data }, () => this.getArt())
            )
    }

    getArt = () => {
        let URL = window.location.pathname;
        let imgIndex = URL.substring(URL.lastIndexOf('/') + 1);
        this.state.artists.map(results => {
            if ("/art/" + results._id + "/" + imgIndex === URL) {
                return this.setState({ currentArt: results.artworks[imgIndex], currentArtist: results })
            }
            return console.log("");

        })
    }

    render() {
        return (
            <div>
                <PageTitle title={this.state.currentArtist.firstName + " " + this.state.currentArtist.lastName} />

                {this.state && this.state.currentArt &&
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 cover">
                                <img src={this.state.currentArt.img} alt="..." />
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Art