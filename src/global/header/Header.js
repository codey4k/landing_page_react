import React from 'react'
import { Parallax } from 'react-parallax'

import './header.css'

import hero from '../../assets/hero.jpg'



export default class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <Parallax  bgImage={hero} 
                           bgHeight="340px"
                           bgWidth="100%"
                           className="header__parallax" 
                           strength={100}>
                    <div className="header__welcome">
                        <h2>Welcome to CodeY4k web site</h2>
                        <p>Happy hacking</p>
                    </div>
                </Parallax>
            </div>
        )
    }
}