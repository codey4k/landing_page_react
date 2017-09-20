import React from 'react'
// import ReactSVG from 'react-svg'
import { Link } from 'react-router-dom'

import './menu.css'
import react from './react.png'
import logo2 from './logo2.png'
// import codey4k from './codey4k.png'

export default class Menu extends React.Component {
    render() {
        return(
            <div className="menu">
                <div className="menu__container">
                    <img src={logo2} alt="logo2" className="menu__logo_y4k"/>
                    <Link to="/">
                        <img src={react} alt="img" className="menu__logo" />
                    </Link>
                </div>
            </div>
        )
    }
}