import React from 'react'
import PropTypes from 'prop-types'

import Content from '../content/Content.js'

import Menu from '../../global/menu_bar/navBar.js'
import Footer from '../../global/footer/Footer.js'

export default class App extends React.Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    }

    render() {
        const { children } = this.props
    
        return(
            <div className="app">
                <Menu />
                <Content body={children} />
                <Footer />
            </div>
        )
    }
}




