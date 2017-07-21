import React from 'react'
import ReactSVG from 'react-svg'

import './services.css'

import hacker from './icons/hacker.svg'
import vector from './icons/vector.svg'
import development from './icons/development.svg'

export default class Services extends React.Component {
    
    render() {
        return(
            <div className="services">
                <div className="services__container">
                    <div className="services__item">
                        <ReactSVG path={development} className="services__img"/>
                        <h2 >Development</h2>
                    </div>
                    
                    <div className="services__item">
                        <ReactSVG path={vector} className="services__img"/>
                        <h2 >Design</h2>
                    </div>
                    
                    <div className="services__item">
                        <ReactSVG path={hacker} className="services__img"/>
                        <h2>Hacking</h2>
                    </div>
                </div>
            </div>
        )
    }
}
