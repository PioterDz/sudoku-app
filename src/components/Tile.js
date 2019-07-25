import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.updateBoard(e.target.id, e.target.value);
        console.log(e.target.id, e.target.value, 'handlechange');
    }

    render() {
        console.log(this.props.id, 'props.id');
        console.log(this.props.updateBoard, 'upddateBoard in tile');
        return (
            <input
                type="number" 
                min="1" 
                max="9" 
                value={this.props.item} 
                onChange={this.handleChange}
                id={this.props.id}
             >
             </input>
        );
    }
}

export default Tile;