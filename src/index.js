import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
    render() {
        return(
            <div className="app">
                <h1>Happy hacking</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.body)