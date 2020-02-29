import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import AuthPage from "./AuthPage";
import Home from "./Home";
import ResetPassword from "./ResetPassword";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Profile from "./Profile";

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
                <Route path={'/forgot'} exact>
                    <AuthPage content={<ForgotPassword/>}/>
                </Route>
                <Route path={'/profile'} exact>
                    <Profile/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
