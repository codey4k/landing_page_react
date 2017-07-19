import React from 'react'

import './services.css'
/*
const Items = () => {
    <div className="item">
        <img src="" alt="img" className="" />
    </div>
}
*/
import hacker from '../../../../assets/hacker.png'
import vector from '../../../../assets/vector.png'
import html from '../../../../assets/html.png'


export default class Services extends React.Component {
    
    render() {
        return(
            <div className="services">
                <div className="services__container">
                    <div className="services__item">
                        <img src={hacker} alt="img" className="services__img"/>
                        <h2 >Hacking</h2>
                    </div>
                    
                    <div className="services__item">
                        <img src={vector} alt="img" className="services__img"/>
                        <h2 >Hacking</h2>
                    </div>
                    
                    <div className="services__item">
                        <img src={html} alt="img" className="services__img"/>
                        <h2 >Hacking</h2>
                    </div>
                </div>
            </div>
        )
    }
}
