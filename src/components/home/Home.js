import React from 'react'
import './home.css'

import Header from '../../global/header/Header.js'

import hacker from '../../assets/hacker.png'
import vector from '../../assets/vector.png'
import development from '../../assets/html.png'

export default class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <Header />
                <div className="home__services">
                    <div className="services__item">
                        <img src={development} alt="development"/>
                        <h2>development</h2>
                    </div>
                    <div className="services__item">
                        <img src={vector} alt="vector"/>
                        <h2>Design</h2>
                    </div>
                    <div className="services__item">
                        <img src={hacker} alt="hacker" />
                        <h2>Hacking</h2>
                    </div>
                </div>
                <div className="home__slide">
                </div>
            </div>
        )
    }
}
