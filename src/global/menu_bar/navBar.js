import React from 'react'
// import ReactSVG from 'react-svg'
import { Link } from 'react-router-dom'

import './menu.css'
import react from './react.png'
import logo2 from './logo2.png'
// import hamburger from './hamburger_icon.svg'

export default class Menu extends React.Component {
    render() {
        return(
            <div className="menu">
                <div className="menu__container">
                    <img src={logo2} alt="logo2" className="menu__logo_y4k"/>
                    <Link to="/">
                        <img src={react} alt="img" className="menu__logo" />
                    </Link>
                    <div className="iconH">
                        <div className="item"></div>
                    </div>
                </div>
            </div>
        )
    }
}