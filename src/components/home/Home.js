import React from 'react'
import './home.css'

import Header from '../../global/header/Header.js'
import DevSection from './home_sections/devsection/devSection.js'
import Services from './home_sections/services/services.js'

export default class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <Header />
                <Services />
                <div className="home__slide"></div>
                <DevSection />
            </div>
        )
    }
}
