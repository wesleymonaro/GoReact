import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Button from './Button';

class App extends Component {

    state = {
        counter: 0,
    };

    //Montagem/Atualização
    //Executado antes de tudo
    //Transforma props em estado
    static getDerivedStateFromProps(nextProps, prevState) {
        return { counter: nextProps.initialCounter }
    }

    //Montagem
    //Executado quando o componente é renderizado em tela
    componentDidMount() { }


    // Atualizações
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.counter < 10
    }

    //Somente é executado caso o shouldComponentUpdate retorna true
    //Serve para coletar alguma informação antes de atualizar o componente em tela
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return prevState.counter;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState, snapshot)
    }



    // Desmontagem
    //Executa quando o componente vai deixar de existir
    componentWillUnmount() { }


    //ERROR
    //Sempre que acontece um erro
    componentDidCatch(error, info) {
        console.log('Erro ', error)
    }
    

    handleClick = () => {
        // COMO CALLBACK
        // this.setState({ counter: this.state.counter + 1}, () => {
        //     console.log(this.state.counter)
        // })

        //EM FILA
        this.setState(state => ({ counter: state.counter + 1 }));
        this.setState(state => ({ counter: state.counter + 1 }));
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

render(<App initialCounter={3} />, document.getElementById('app'))