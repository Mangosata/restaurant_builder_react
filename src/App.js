import React from 'react';
import './App.scss';
import {LoginForm} from "./LoginForm";
import OnePage from "./OnePage";

function App() {
    return (
        <OnePage content={<LoginForm/>}/>
    );
}

export default App;
