import React from 'react';
import PageTitle from '../../components/Title'
import './login.css';
import webDesignPhoto from '../../assets/webDesignInProgress.jpg'

class Login extends React.Component {
    state = {

    }

    componentDidMount() {
        console.log('page worked!')
    }

    render() {
        return (
            <div>
                <PageTitle title="Login Development in Progress" />
                <div className="Login-grid">
                    <div className="LoginBG">
                        <div className="Login-flex-container">
                            <img className="LoginImg" src={webDesignPhoto} alt='Development-in-Progress' ></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login