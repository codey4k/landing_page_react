import React from 'react'

import '../../index.css'
import './home.css'

import Header from '../../global/header/Header.js'
import Services from './home_sections/services/Services.js'
import Info from './home_sections/info/Info.js'

export default class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <Header />
                <Services />
                <Info />
            </div>
        )
    }
}
