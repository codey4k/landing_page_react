import React from 'react'

import './header.css'
import img from './img_header.jpg'
import headerimg from './header01.jpg'


export default class Header extends React.Component {
    render() {
        return(
            <header className="header">
                <img src={headerimg} alt="img-header" className="header__img"/>
            </header>
        )
    }
}