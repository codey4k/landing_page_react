import React from 'react'
import './home.css'

import Header from '../../global/header/Header.js'
import DevSection from './home_sections/devsection/devSection.js'
import Services from './home_sections/services/services.js'
import Slide from './home_sections/slide/slide.js'

export default class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <Header />
                <Services />
                <Slide />
                <DevSection />
            </div>
        )
    }
}
