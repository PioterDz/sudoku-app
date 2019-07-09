import React from 'react';
import style from './App.css';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     };
    // }

    render() {
        return (
            <div>Hello World</div>
        );
    }
}

export default hot(module)(App);