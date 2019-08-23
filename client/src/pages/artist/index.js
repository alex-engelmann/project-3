import React from 'react';
import './index.css';
import API from '../../utilities/API';
import PageTitle from '../../components/Title'
// import Modal from '../../components/noShoppingModal';
import ModalTrigger from '../../components/noShoppingTrigger';

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
                return this.setState({ currentArtist: results })
            }
            return console.log("hello");
        })
    }



    render() {
        return (
            <div>
                {this.state && this.state.currentArtist.image &&
                    <PageTitle title={this.state.currentArtist.firstName + " " + this.state.currentArtist.lastName} />
                }
                <div className="artist-flex-container" >
                    <img id="artistImage" src={this.state.currentArtist.image} alt=".." />
                    {/* <p>{this.state.currentArtist.about}</p> */}
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
</p>
                </div>
                <div className="artist-flex-container2">
                {this.state && this.state.currentArtist && this.state.currentArtist.artworks && this.state.currentArtist.artworks.map(result => {
                                return (
                                    <div>
                                        <img
                                            className="images"
                                            src={result.img}
                                            alt='..'
                                        ></img>
                                        <ModalTrigger />
                                    </div>
                                )
                            })}
                </div>
            </div>
        )
    }
}

export default Artist