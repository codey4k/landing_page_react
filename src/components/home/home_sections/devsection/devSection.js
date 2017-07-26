import React from 'react'

import './devSection.css'

import codey4k from './codey4k.jpg'
import daregraphics from './daregraphics.png'
import Laptop from './Laptop.jpg'

const Codey4k = () => 
    <div className="codey4k">
        <img src={codey4k} alt="codey4k" className="codey4k__img" />
        <h2 className="codey4k__name">CodeY4k</h2>
    </div>


const Daregraphics = ()=>
    <div className="daregraphics">
        <img src={daregraphics} alt="daregraphics" className="daregraphics__img" />
        <h2 className="daregraphics__name">Dare graphics</h2>
    </div>



export default class DevSection extends React.Component {
    render() {
        return(
            <div className="devSection">
                <img src={Laptop} className="devSection__img" alt="laptop"/>
                <div className="devSection__container">
                    <Codey4k />
                    <Daregraphics />
                </div>
            </div>
        )
    }
}