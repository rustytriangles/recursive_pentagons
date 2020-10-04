import React from 'react';
import './App.css';
import {Pentagon} from './pentagon.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: [new Pentagon(0,0,300,-Math.PI/2)],
        };

        this.tileProps = {
            fillStyle: "red",
            strokeColor: "none",
            strokeWidth: "1"
        };
    }

    onclick(e) {
        this.setState((prevState) => {
            let newTiles = [];
//            for (let i=0; i<prevState.tiles.length; i++) {
//                newTiles.push(prevState.tiles[i]);
//            }
            for (let i=0; i<prevState.tiles.length; i++) {
                const tiles = prevState.tiles[i].subdivide();
                for (let j=0; j<tiles.length; j++) {
                    newTiles.push(tiles[j]);
                }
            }
            return {tiles: newTiles}
        });
    }

    render() {
        const placeTiles = (tiles) => tiles.map((pent) => {
            return pent.makeComponent(this.tileProps);
        });

        const w = 800;
        const h = 600;
        const box = [-w/2, -h/2, w, h];
        return (
                <div class="wrapper" >
                <h2>Recursive Pentagons</h2>
                <svg xmlns="http://www.w3.org/2000/svg"
            width={w}
            height={h}
            viewBox={box}
            onClick={ this.onclick.bind(this)}
            tabIndex="1"
                >
                <>
                { placeTiles(this.state.tiles) }
            </>
                </svg>
                </div>
        );
    }
}

export default App;
