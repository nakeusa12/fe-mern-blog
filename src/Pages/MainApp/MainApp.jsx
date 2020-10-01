import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DetailBlog } from '../DetailBlog/DetailBlog'
import CreateBlog from "../CreateBlog/index"
import { Home } from "../index"
import { Footer, Header } from '../../Components'

import "./MainApp.scss"


const MainApp = () => {
    return (
        <div className="main-wrapper">
            <Header />
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/create">
                            <CreateBlog />
                        </Route>
                        <Route path="/detail">
                            <DetailBlog />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default MainApp;