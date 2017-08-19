import React from 'react'
import { Link } from 'react-router-dom'

import './menu.css'
import react from './react.png'
// import codey4k from './codey4k.png'

export default class Menu extends React.Component {
    render() {
        return(
            <div className="menu">
                <div className="menu__container">
                    <Link to="/">
                        <img src={react} alt="img" className="menu__logo" />
                    </Link>
                </div>
            </div>
        )
    }
}