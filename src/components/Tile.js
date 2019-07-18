import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input type="number" min="1" max="9" value={this.props.item} onChange={this.props.onChange}></input>
        );
    }
}

export default Tile;