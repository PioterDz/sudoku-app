import React from 'react';
import styles from './Board.css'
import Tile from './Tile.js';

const uuidv1 = require('uuid/v1');

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.Board}>
                { this.props.board.length === 0 ? 'Start New Game' : this.props.board.map((val, index) => 
                <Tile 
                key={uuidv1()} 
                id={index}
                readonly={this.props.noEdit.includes(index)}
                item={val}
                updateBoard={this.props.updateBoard} />) }
            </div>
        );
    }
}

export default Board;