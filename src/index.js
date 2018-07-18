import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class Button extends Component {

    static defaultProps = {
        children: 'Salvar'
    }

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        children: PropTypes.string,
    }


    render() {
        return <button onClick={this.props.onClick}>{this.props.children}</button>
    }
}

class App extends Component {

    state = {
        counter: 0,
    };


    handleClick = () => {
        // COMO CALLBACK
        // this.setState({ counter: this.state.counter + 1}, () => {
        //     console.log(this.state.counter)
        // })

        //EM FILA
        this.setState(state => ({ counter: state.counter + 1}));
        this.setState(state => ({ counter: state.counter + 1}));
    }

    render() {
        return (
            <Fragment>
                <h1>Hello {this.state.counter}</h1>
                <Button onClick={this.handleClick} />
            </Fragment>
        )
    }
}

render(<App />, document.getElementById('app'))