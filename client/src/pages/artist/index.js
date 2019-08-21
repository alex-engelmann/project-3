import React from 'react';
import './index.css';
import API from '../../utilities/API';

class Artist extends React.Component {
    state = {
        artists: [],
        currentArtist: {}
    }

    componentDidMount() {
        this.getArtists();
    }

    getArtists = () => {
        API.find()
            .then(res =>
                this.setState({ artists: res.data }, () => this.getArtist())
            )
    }

    getArtist = () => {
        var URL = window.location.pathname;
        this.state.artists.map(results => {
            if ("/artist/" + results._id === URL) {
                this.setState({ currentArtist: results })
            }
        })
    }

    render() {
        return (
            <div>
                <h1>hello</h1>
                <div className="artist-flex-container">
                    <img src={this.state.currentArtist.image} alt=".."></img>
                </div>
            </div>
        )
    }
}

export default Artist