import React, { Component } from 'react';
import {Switch,Route,withRouter,Link} from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Home from '../pages/DashBoard/Home';
import RouteNotFound from '../pages/Error/RouteNotFound';
class Routes extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route  path = "/" component = {Login} exact />
                    <Route  path = "/Home" component = {Home} exact />

                    {/* Not Found */}
                    <Route component = {RouteNotFound}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Routes);
