
import React from 'react';
// import './index.css';
import API from '../../utilities/API';
import Modal from '../../components/noShoppingModal'
import ModalTrigger from '../../components/noShoppingTrigger'


class Artwork extends React.Component {
    state = {
        artworks: []
    }

    componentDidMount() {
        this.getArtworks();
    }

    getArtworks = () => {
        API.find()
            // .then((res) => {
            //     res.data.forEach((x) => {
            //         const newArr = [];
            //         x.artworks.forEach((y) => {
            //             if (!this.state[x._id]) {
            //                 this.setState({ [x._id]: [] })
            //                 newArr.push(y.img)
            //             } else {
            //                 newArr.push(y.img)
            //             }
            //         })
            //         this.setState({ [x._id]: newArr })
            //     })
            // }
            // )
            // .then(console.log(`this is the state \n ${this.state}`))
            // .catch(err => console.log(`get Artworks fxn not wroking \n ${err}`))
            .then((res) => {
                const newArr = [];
                res.data.forEach((x) => {
                    x.artworks.forEach((y) => {
                        newArr.push(y.img)
                    })
                })
                this.setState({ artworks: newArr })
            })
    }

    render() {
        return (
            <div className="img-grid">
                <h1 className="bounceInRight" >Artwork</h1>
                <div className="shopBG">
                    <div className="flex-container">
                        {this.state.artworks.map(result => {
                            console.log(result)
                            return (
                                <div>
                                    <img
                                        className="images"
                                        src={result}
                                        alt='..'
                                    ></img>
                                    <ModalTrigger />
                                </div>
                            )
                        })}
                    </div>
                    <Modal />
                </div>
            </div>
        )
    }
}

export default Artwork