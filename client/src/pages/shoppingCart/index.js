import React from 'react';
import PageTitle from '../../components/Title'
import './style.css';
import webDesignPhoto from '../../assets/webDesignInProgress.jpg'

class Artwork extends React.Component {
    state = {

    }

    componentDidMount() {
        // console.log('page worked!')
    }

    render() {
        return (
            <div>
                <PageTitle title="Shopping Cart" />
                <div className="shoppingCart-grid">
                    <div className="ShoppingCart-shopBG">
                        <div className="shopCart-flex-container">
                            <img className="shoppingCartImg" src={webDesignPhoto} alt='Development-in-Progress' ></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Artwork