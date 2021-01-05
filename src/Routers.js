import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import BlankLayout from './layout/BlankLayout'
import DefaultLayout from './layout/DefaultLayout'
import AboutPage from './views/AboutPage'
import ErrorPage from './views/ErrorPage'
import HomePage from './views/HomePage'
import LoginPage from './views/LoginPage'

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path='/login' component={LoginPage} />
                <Route path='/blank/:path?' exact>
                <BlankLayout>
                    <Switch>
                    <Route path='/blank' exact component={HomePage} />
                    <Route path='/blank/about' exact component={AboutPage} />
                    </Switch>
                </BlankLayout>
                </Route>
                <Route>
                <DefaultLayout>
                    <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/about' exact component={AboutPage} />
                    <Redirect from="/home" to="/" />
                    <Route path='*' exact component={ErrorPage} />
                    </Switch>
                </DefaultLayout>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routers
