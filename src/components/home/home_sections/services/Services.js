import React from 'react'
import ReactSVG from 'react-svg'

import './services.css'

import file from './icons/file.svg'
import pen from './icons/pen.svg'
import computer from './icons/computer.svg'
import lock from './icons/lock.svg'

export default class Services extends React.Component {
    render() {
        return(
            <section className="services">
                <div className="services__container">
                    <div className="services__grid">
                        
                        <div className="services__uno">
                            <div className="services__item">
                                <ReactSVG 
                                    path={file}
                                    style={{width : 50,height:50}}
                                />
                                <p>Web Development</p>
                            </div>
                            <div className="services__item">
                                <ReactSVG 
                                    path={pen}
                                    style={{width : 50,height:50}}
                                />
                                <p>Graphic Design</p>
                            </div>
                        </div>
                        <div className="services__dos">
                            <div className="services__item">
                                <ReactSVG 
                                    path={computer}
                                    style={{width : 50,height:50}}
                                />
                                <p>Programming</p>
                            </div>
                            <div className="services__item">
                                <ReactSVG 
                                    path={lock}
                                    style={{width : 50,height:50}}
                                />
                                <p>Ethical Hacking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}