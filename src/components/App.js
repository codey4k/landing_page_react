import React from 'react'
import PropTypes from 'prop-types'

import Content from './Content.js'

import Header from '../global/header.js'
import Footer from '../global/footer.js'

export default class App extends React.Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    }

    render() {
        const { children } = this.props
    
        return(
            <div className="app">
                <Header />
                <Content body={children} />
                <Footer />
            </div>
        )
    }
}




