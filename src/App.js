import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Movies from './components/movies/Movies';
import Tv from './components/Tv/Tv';
import Register from './components/register/Register';
import Login from './components/login/Login';

import NFP from './components/NFP/NFP';

// Import react-router-dom
import { Route, Switch, Redirect } from "react-router-dom"

export default class App extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path="/home" component={Home} />
                    <Route path="/movies" component={Movies} />
                    <Route path="/tv" component={Tv} />
                    <Route path="/signUp" component={Register} />
                    <Route path="/login" component={Login} />
                    

                    <Route path="*" component={NFP} />
                </Switch >

                <Footer />
            </>
        )
    }
}