import React from 'react';
import {Login} from "./Login";
import Home from "./Home";
import Profile from "./Profile";
import ResetPassword from "./ResetPassword";
import ForgotPassword from "./ForgotPassword";
import Register from "./Register";

export const REQUEST_ENDPOINT = 'http://localhost:8080/api/';

function App() {
    return (
        <>
            <header>Header</header>
            <main className="main">
                <Login/>
            </main>
            <footer>Footer</footer>
        </>
    );
}

export default App;
