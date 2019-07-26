import React from 'react';
import styles from './App.css';
import Board from './Board.js';
import sudoku from 'sudoku-umd';
import { hot } from 'react-hot-loader';


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            initialBoard: [],
            board: [],
            noEditIds: []
        }
        this.generateBoard = this.generateBoard.bind(this);
        this.sudokuSolve = this.sudokuSolve.bind(this);
        this.restartBoard = this.restartBoard.bind(this);
        this.updateBoard = this.updateBoard.bind(this);
        this.checkSolution = this.checkSolution.bind(this);
    }


    generateBoard() {
        const sudokuString = sudoku.generate("easy");
        const sudokuArray = sudokuString.split('');
        const ids = [];
        sudokuArray.map((val, idx) => val !== '.' ? ids.push(idx) : void(0));

        this.setState({
            initialBoard: sudokuArray,
            board: sudokuArray,
            noEditIds: ids
        });
    }

    updateBoard(id, value) {
        const updatedBoard = this.state.board;
        const checkTile = (value !== '') ? value : '.'; 
        updatedBoard.splice(id, 1, checkTile);
        this.setState({
            board: updatedBoard
        });
        console.log(this.state.board, 'board in update');
        console.log(this.state.initialBoard, 'initboard in update');
    }

    sudokuSolve() {
        const startBoard = this.state.initialBoard;
        const startBoardToString = startBoard.join('');
        const sollution = sudoku.solve(startBoardToString);
        this.setState({board: sollution.split('')});
    }

    checkSolution() {
        const startBoard = this.state.initialBoard;
        const actuallBoard = this.state.board;

        const actuallBoardToString = actuallBoard.join('');

        const startBoardToString = startBoard.join('');
        const sollution = sudoku.solve(startBoardToString);

        actuallBoardToString === sollution ? alert('Congrats! You made it!') : alert('Its not right, try again');

    }

    restartBoard() {
        const initBoard = this.state.initialBoard;
        this.setState({
            board: initBoard
        });
    }

    render() {
        
        return (
            <div className={styles.App}>
                <h1>Sudoku</h1>  
                <Board 
                    board={this.state.board}
                    updateBoard={this.updateBoard}
                    noEdit={this.state.noEditIds}
                />
                <div className={styles.buttons}>
                    <button onClick={this.checkSolution}>Check</button>
                    <button onClick={this.generateBoard}>New Game</button>
                    <button onClick={this.sudokuSolve}>Solve</button>
                    <button onClick={this.restartBoard}>Restart</button>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);