import React from 'react';
import { render } from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';
import Login from './components/Login/Login'
import CreatePost from './components/Post/Create'


import './styles/styles.scss';

render((
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home}/> // Home component shows up in the default path
                <Route exact path="/login" component={Login}/> // Point to the origin path imported above
                <Route exact path="/post/create" component={CreatePost}/>
                <Route component={NotFound}/>
            </Switch>
        </App>
    </Router>
), document.getElementById('app'));
