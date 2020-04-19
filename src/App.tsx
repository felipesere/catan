import React from 'react';
import './App.css';
import {Board} from "./components/board/board";
import {Terrain} from "./types";

const random = (): Terrain => {
    let possible = ['forest', 'pasture', 'hill', 'mountain', 'field', 'desert'];

    return possible[Math.floor(Math.random() * possible.length)] as Terrain;
}

const range = (amount: number): number[] => {
    return Array.from(Array(amount).keys())
}

const randomBetween = (min: number, max: number): number => {
    const delta = max - min;
    return min + Math.floor(Math.random() * delta)
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Welcome to Catan
            </header>
            <Board hexList={range(19).map((i) => ({
                terrain: random(),
                dieRoll: randomBetween(2, 12),
            }))}
                   roadList={[]} townList={[]}/>
        </div>
    );
}

export default App;
