import React from 'react'

import './slide.css'

//images
import one from './slide_images/one.png'
import two from './slide_images/two.jpg'
import three from './slide_images/three.jpeg'

const IMAGES = [ one, two, three ]

export default class Slide extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {currentImg : 0}
        this.interval = null
        this.nextImg = this.nextImg.bind(this)
    }
    
    nextImg() {
        let current = this.state.currentImg,
            next = ++current % IMAGES.length
        this.setState({currentImg : next})
    }
    
    componentDidMount(){
        this.interval = setInterval(this.nextImg, 3000)
    }
    
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
    render() {
        let img = IMAGES[this.state.currentImg]
        
        return(
            <div className="slide">
                <img src={img} alt="img" className="slide__img" />
            </div>
        )
    }
}


