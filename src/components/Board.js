import React from 'react';
import styles from './Board.css'
import Tile from './Tile.js';

const uuidv1 = require('uuid/v1');

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.updateBoard = this.updateBoard.bind(this);
    }

    updateBoard(id, value) {
        console.log(id, value);
        let changeBoard = this.props.board;
        console.log(changeBoard, 'update');
        changeBoard.splice(id, 1, value);
        this.props.board = changeBoard;
        console.log(newBoard, 'newBoard');
    }

    render() {

        console.log(this.props, 'props');
        return (
            <div className={styles.Board}>
                { this.props.board.length === 0 ? 'Start New Game' : this.props.board.map((val, index) => 
                <Tile 
                key={uuidv1()} 
                id={index} 
                item={val === '.' ? val === '' : val = val} 
                updateBoard={this.updateBoard} />) }
            </div>
        );
    }
}

export default Board;