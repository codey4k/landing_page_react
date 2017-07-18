import React from 'react'
import { Route, Switch } from 'react-router-dom'

//components
import App from './components/app/App.js'
import About from './components/about/About.js'
import Home from './components/home/Home.js'
import Page404 from './components/page404/Page404.js'


//rutas
const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={Page404} />
        </Switch>
    </App>

export default AppRoutes

