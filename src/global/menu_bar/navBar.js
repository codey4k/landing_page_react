import React from 'react'
import { Link } from 'react-router-dom'

import './menu.css'

import codey4k from './codey4k.png'

export default class Menu extends React.Component {
    render() {
        return(
            <div className="menu">
                <div className="menu__container">
                    <Link to="/">
                        <img src={codey4k} alt="img" className="menu__logo" />
                    </Link>
                </div>
            </div>
        )
    }
}