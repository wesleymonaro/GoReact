import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class Button extends Component {
    render() {
        return <a href="" onClick={this.props.onClick}>{this.props.children}</a>
    }
}

class App extends Component {

    static defaultProps = {
        children: 'Salvar'
    }
    
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        children: PropTypes.string,
    }

    handleClick(){
        alert('Botão clicado')
    }

    render() {
        return (
            <Fragment>
                <h1>Hello</h1>
                <Button onClick={this.handleClick} />
            </Fragment>
        )
    }
}

render(<App />, document.getElementById('app'))