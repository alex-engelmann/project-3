import React from 'react';
import './index.css';
import API from '../../utilities/API';

class Artist extends React.Component {
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

    getArtist = () => {
        var URL = window.location.pathname;
        this.state.artists.map(results => {
            if ("/artist/" + results._id === URL) {
                return results.image;
            }
        })
    }

    render() {
        return (
            <div>
                <h1>hello</h1>
                <img src={this.state.getArtist()} alt=".."></img>
            </div>
        )
    }
}

export default Artist