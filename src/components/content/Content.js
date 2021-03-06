import React from 'react'
import PropTypes from 'prop-types'

import './content.css'

export default class Content extends React.Component {
    static propTypes = {
        body: PropTypes.object.isRequired
    }
    
    render() {
        const { body } = this.props
        
        return(
            <div className="content">
                {body}
            </div>
        )
    }
}
