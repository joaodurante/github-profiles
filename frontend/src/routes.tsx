import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

export default class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Route path="/" exact component={Login} />
                <Route path="/main" component={Main} />
            </BrowserRouter>
        );
    }
}