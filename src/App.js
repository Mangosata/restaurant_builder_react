import React from 'react';
import './App.scss';
import {LoginForm} from "./LoginForm";
import Header from "./Header";
import Footer from "./Footer";

function App() {
    return (
        <React.Fragment>
            <Header/>
            <main className="main">
                <LoginForm/>
            </main>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
