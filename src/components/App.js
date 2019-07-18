import React from 'react';
import style from './App.css';
import Board from './Board.js';
import sudoku from 'sudoku-umd';
import keyIndex from 'react-key-index';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            initialBoard: [],
            board: []
        }
        this.generateInitialBoard = this.generateInitialBoard.bind(this);
        this.sudokuSolve = this.sudokuSolve.bind(this);
        this.setInitialBoardAsBoard = this.setInitialBoardAsBoard.bind(this);
    }


    generateInitialBoard() {
        let initialSudokuArr = sudoku.generate("easy");
        initialSudokuArr = keyIndex(initialSudokuArr, 1);
        console.log(initialSudokuArr, 'init');
        this.setState(previous => ({ initialBoard: [...previous.initialBoard + initialSudokuArr] }),
            () => console.log(this.state.initialBoard, 'callback')
        );
    }
    
    sudokuSolve() {
        let actuallBoardStatus = this.state.board;
        sudoku.solve(actuallBoardStatus.join(''));
    }

    setInitialBoardAsBoard() {
        let initialBoard = this.state.initialBoard;
        this.setState({ board: [] });
        this.setState(previous => ({ board: [...previous.board + initialBoard] }), 
            () => console.log(this.state, 'restart board callback')
        );
    }

    render() {
        
        return (
            <div className="App">
                <h1>Sudoku</h1>
                <Board initBoard={this.state.initialBoard}/>
                <div className="buttons">
                    <button>Check</button>
                    <button onClick={this.generateInitialBoard}>New Game</button>
                    <button onClick={this.sudokuSolve}>Solve</button>
                    <button onClick={this.setInitialBoardAsBoard}>Restart</button>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);