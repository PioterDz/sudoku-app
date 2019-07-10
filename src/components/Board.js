import React from 'react';
import style from './Board.css';
import Tile from './Tile.js';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            key: ''
        };
    }

    handleChange(event) {
        let numberInTile = event.target.value;

        this.setState((state) => {
            return {number: numberInTile};
          }, () => console.log(this.state.number, 'call numb'));

    }

    // addTiles = () => {
    //     let initialBoard = this.props.initBoard;
    //     initialBoard.map((val) => 
            
    //     )
    // }
   

    render() {
        return (
            <div className="Board">
                <h1>{this.props.initBoard}</h1>
                {this.props.initBoard.map((tile) => 
                    <Tile key={this.state.key} value={this.state.number} onChange={this.handleChange.bind(this)} />
                    )
                }
            </div>
        );
    }
}

export default Board;