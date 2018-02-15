import React from 'react'
// import ReactSVG from 'react-svg'
import { Link } from 'react-router-dom'

import './menu.css'
import react from './react.png'
import logo2 from './logo2.png'
// import hamburger from './hamburger_icon.svg'

export default class Menu extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            height : 80,
            background : 'transparent'
        }
        this.handlerScroll = this.handlerScroll.bind(this)
    }
    
    componentDidMount() {
        let menu = document.getElementById('menuIcon'),
            expanded = document.querySelector('.expanded'),
            close = document.querySelector('.expanded__close')
        
        menu.addEventListener('click',()=>{
            
            Object.assign(expanded.style, {
                width : '100%',
                opacity : 1
            })
        })
        
        close.addEventListener('click',()=>{
            Object.assign(expanded.style, {
                width : '0%',
                opacity : 0
            })
        })
        
        window.addEventListener('scroll', this.handlerScroll)
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handlerScroll)
    }
    
    handlerScroll() {
        let scroll = document.documentElement.scrollTop || document.body.scrollTop
        
        scroll >= 300 ? 
            this.setState({height : 60, background : '#333'}) :
            this.setState({height : 80, background : 'transparent'})
    }
    
    render() {
        const styles = {
            height : this.state.height,
            background : this.state.background
        }
        return(
            <div className="menu" style={styles}>
                <div className="menu__container">
                    <img src={logo2} alt="logo2" className="menu__logo_y4k"/>
                    <Link to="/">
                        <img src={react} alt="img" className="menu__logo" />
                    </Link>
                    <div className="iconH" id="menuIcon">
                        <div className="item"></div>
                    </div>
                    <div className="expanded">
                        <span className="expanded__close">&times;</span>
                        <ul className="expanded__content">
                            <li className="expanded__item">Home</li>
                            <li className="expanded__item">Blog</li>
                            <li className="expanded__item">About us</li>
                            <li className="expanded__item">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}