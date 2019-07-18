import React from 'react';
import style from './Board.css';
import Tile from './Tile.js';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    
    handleChange(event) {
        let numberInTile = event.target.value;

        this.setState((state) => {
            return {number: numberInTile};
          }, () => console.log(this.state.number, 'call numb'));

    }

    render() {

        console.log(this.props, 'props');
        return (
            <div className="Board">
                {  this.props.initBoard.length === 0 ? 'Start New Game' : this.props.initBoard.map((val) => <Tile key={val.id} item={val.value} onChange={this.handleChange} />) }
            </div>
        );
    }
}

export default Board;