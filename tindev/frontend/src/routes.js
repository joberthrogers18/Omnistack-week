import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/main" component={Main} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;