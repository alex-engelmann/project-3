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
                return console.log(results);
            }
            else return console.log("not working")
        })
    }

    render() {
        return (
            <div>
                {this.getArtist()}
                <h1>hello</h1>
            </div>
        )
    }
}

export default Artist