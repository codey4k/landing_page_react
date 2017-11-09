import React from 'react'

import './header.css'
import img from './img_header.jpg'


export default class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <img src={img} alt="img-header" className="header__img"/>
            </div>
        )
    }
}