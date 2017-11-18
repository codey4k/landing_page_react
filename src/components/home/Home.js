import React from 'react'
import './home.css'

import Header from '../../global/header/Header.js'
import Profile from './home_sections/services/Services.js'

export default class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <Header />
                <Profile />
            </div>
        )
    }
}
