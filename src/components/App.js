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
            board: []
        }
        this.generateBoard = this.generateBoard.bind(this);
        this.sudokuSolve = this.sudokuSolve.bind(this);
        this.setInitialBoardAsBoard = this.setInitialBoardAsBoard.bind(this);
    }


    generateBoard() {
        let initialSudokuArr = sudoku.generate("easy");
        console.log(initialSudokuArr, 'init');
        this.setState(previous => ({ initialBoard: [...previous.initialBoard + initialSudokuArr] }),
            () => console.log(this.state.initialBoard, 'callback')
        );
        this.setState(prev => ({ board: [...prev.board + initialSudokuArr] }),
            () => console.log(this.state.board, 'callb set board')
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
            <div className={styles.App}>
                <h1>Sudoku</h1>  
                <Board 
                    board={this.state.board}
                    initialBoard={this.state.initialBoard}
                />
                <div className={styles.buttons}>
                    <button>Check</button>
                    <button onClick={this.generateBoard}>New Game</button>
                    <button onClick={this.sudokuSolve}>Solve</button>
                    <button onClick={this.setInitialBoardAsBoard}>Restart</button>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);