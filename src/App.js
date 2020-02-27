import React from 'react';
import './App.scss';
import {LoginForm} from "./LoginForm";
import AuthPage from "./AuthPage";
export const REQUEST_ENDPOINT = 'http://localhost:8080/api/';

function App() {
    return (
        <AuthPage content={<LoginForm/>}/>
    );
}

export default App;
