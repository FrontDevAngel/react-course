import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { NavBar } from './NavBar';

import { HomeScreen } from './HomeScreen';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={HomeScreen} />
                        <Route exact path='/about' component={AboutScreen} />
                        <Route exact path='/login' component={LoginScreen} />

                        {/* Redirección si no cumple con ninguna de las anteriores */}

                        {/* Dirigir al componente ////////////////////// */}
                        {/* <Route component={ FailScreen } /> */}

                        {/* Dirigir al componente existente ////////////////////// */}
                        {/* <Route component={ HomeScreen } /> */}

                        {/* Redirecta a un Path ////////////////////// */}
                        <Redirect to='/' />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};
