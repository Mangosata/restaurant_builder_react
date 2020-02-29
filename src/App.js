import React from 'react';
import {LoginForm} from "./LoginForm";

export const REQUEST_ENDPOINT = 'http://localhost:8080/api/'

function App() {
    return (
        <>
            <header>Header</header>
            <main className="main">
                <LoginForm/>
            </main>
            <footer>Footer</footer>
        </>
    );
}

export default App;
