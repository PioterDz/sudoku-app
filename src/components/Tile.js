import React from 'react';
import styles from './Tile.css'

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.updateBoard(e.target.id, e.target.value);
    }

    render() {

        return (
            <input
                className={this.props.readonly ? 'nonEdit' : 'edit'}
                type="number" 
                min="1" 
                max="9" 
                value={this.props.item} 
                onChange={this.handleChange}
                id={this.props.id}
                readOnly={this.props.readonly}
             >
             </input>
        );
    }
}

export default Tile;