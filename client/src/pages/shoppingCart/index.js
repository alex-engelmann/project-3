import React from 'react';
import PageTitle from '../../components/Title'
import './style.css';

class Artwork extends React.Component {
    state = {

    }

    componentDidMount() {
        console.log('page worked!')
    }

    render() {
        return (
            <div>
                <PageTitle title="Shopping Cart" />
                <div className="shopping-grid">
                    <div className="shopBG">
                        <div className="flex-container">
                            <div className="cartLeftSide" >
                                <h3>Items</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Artwork