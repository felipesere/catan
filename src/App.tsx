import React from 'react';
import './App.css';
import {Board} from "./components/board/board";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Welcome to Catan
            </header>
            <Board hexList={[]} roadList={[]} townList={[]} />
        </div>
);
}

export default App;
