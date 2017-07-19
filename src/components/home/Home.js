import React from 'react'
import './home.css'

import Header from '../../global/header/Header.js'
/*
import hacker from '../../assets/hacker.png'
import vector from '../../assets/vector.png'
import development from '../../assets/html.png'
*/
import Services from './home_sections/services/services.js'

export default class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <Header />
                <Services />
                <div className="home__slide">
                </div>
            </div>
        )
    }
}
