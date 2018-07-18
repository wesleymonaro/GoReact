import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Button from './Button';

import './style.scss';

class App extends Component {

    state = {
        counter: 0,
    };

    handleClick = () => {
        this.setState({ counter: state.counter + 1 });
    }

    render() {
        return (
            <Fragment>
                <h1 className="title">Hello</h1>
                <h2 style={{ color: "#f00" }}>{this.state.counter}</h2>
                <Button onClick={this.handleClick} />
            </Fragment>
        )
    }
}

render(<App initialCounter={3} />, document.getElementById('app'))