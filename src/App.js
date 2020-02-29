import React from 'react';
import {Login} from "./Login";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import AuthPage from "./AuthPage";
import Home from "./Home";
import ResetPassword from "./ResetPassword";
import Register from "./Register";

export const REQUEST_ENDPOINT = 'http://localhost:8080/api/'

function App() {
    return (
        <Router>
            <Switch>
                <Route path={'/'} exact>
                    <Home/>
                </Route>
                <Route path={'/login'} exact>
                    <AuthPage content={<Login/>}/>
                </Route>
                <Route path={'/reset'} exact>
                    <AuthPage content={<ResetPassword/>}/>
                </Route>
                <Route path={'/register'} exact>
                    <AuthPage content={<Register/>}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
