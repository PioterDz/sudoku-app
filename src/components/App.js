import React from 'react';
import style from './App.css';
import Board from './Board.js';
import sudoku from 'sudoku-umd';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            initialBoard: '',
            board: ''
        }
    }


    generateInitialBoard() {
        let initialSudokuArr = sudoku.generate("easy");
        console.log(initialSudokuArr);
        this.setState(previous => ({ initialBoard: [...previous.initialBoard + initialSudokuArr] }), () => console.log(this.state, 'callback'));
    }
    
    sudokuSolve() {
        let actuallBoardStatus = this.state.board;
        sudoku.solve(actuallBoardStatus.join(''));
    }

    setInitialBoardAsBoard() {
        let initialBoard = this.state.initialBoard;
        this.setState(previous => ({ board: initialBoard})), console.log(this.state, 'restart board');
    }

    render() {
        return (
            <div className="App">
                <h1>Sudoku</h1>
                <Board initBoard={this.state.initialBoard}/>
                <div className="buttons">
                    <button>Check</button>
                    <button onClick={this.generateInitialBoard.bind(this)}>New Game</button>
                    <button onClick={this.sudokuSolve.bind(this)}>Solve</button>
                    <button onClick={this.setInitialBoardAsBoard.bind(this)}>Restart</button>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);