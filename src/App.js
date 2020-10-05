import React from 'react';
import './App.css';
import {Pentagon} from './pentagon.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: [new Pentagon(0, 0, 345,-Math.PI/2, 0)],
            leafStart: 0
        };

        this.keepOld = false;

        this.tileProps = {
            fillStyle: "#0066ff",
            strokeColor: "#0047b3",
            strokeWidth: "1"
        };
    }

    subdivide_tiles(oldTiles, leafStart, keepOld) {
        let newTiles = [];
        if (keepOld) {
            for (let i=0; i<oldTiles.length; i++) {
                newTiles.push(oldTiles[i]);
            }
        }
        for (let i=leafStart; i<oldTiles.length; i++) {
            const tiles = oldTiles[i].subdivide();
            for (let j=0; j<tiles.length; j++) {
                newTiles.push(tiles[j]);
            }
        }
        return newTiles;
    }

    onclick(e) {
        this.setState((prevState) => {
            if (this.keepOld) {
                return {
                    tiles: this.subdivide_tiles(prevState.tiles, prevState.leafStart, true),
                    leafStart: prevState.tiles.length
                }
            } else {
                return {
                    tiles: this.subdivide_tiles(prevState.tiles, prevState.leafStart, false),
                    leafStart: 0
                }
            }
        });
    }

    render() {
        const placeTiles = (tiles) => tiles.map((pent) => {
            return pent.makeComponent(this.tileProps);
        });

        const w = 800;
        const h = 700;
        const box = [-w/2, -h/2, w, h];
        return (
            <div class="wrapper"
                 onClick={ this.onclick.bind(this)}
            >
                <h2>Recursive Pentagons</h2>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width={w}
                     height={h}
                     viewBox={box}
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
