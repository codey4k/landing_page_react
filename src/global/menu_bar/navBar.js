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
                    <div className="iconH">
                        <div className="item"></div>
                    </div>
                </div>
            </div>
        )
    }
}