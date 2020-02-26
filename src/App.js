import React from 'react';
import './App.scss';
import {LoginForm} from "./LoginForm";

function App() {
    return (
        <React.Fragment>
            <header>Header</header>
            <main className="main">
                <LoginForm/>
            </main>
            <footer>Header</footer>
        </React.Fragment>
    );
}

export default App;
