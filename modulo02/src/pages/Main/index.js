import React, {Component} from 'react';
import moment from 'moment';
import api from '../../services/api';

import logo from '../../assets/logo.png';
import {Container, Form} from './styles';
import CompareList from '../../components/CompareList';

export default class Main extends Component{

  state = {
    repositoryInput: '',
    repositories: [],
    repositoryError: false
  }

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const {data: repository} = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        loading: false,
        repositoryInput: '',
        repositoryError: false,
        repositories: [
          ...this.state.repositories,
          repository,
        ]
      })

    } catch (error) {
      console.log(error);
      this.setState({ repositoryError: true })
    } finally {
      this.setState({ loading: false });
    }

  }

  render(){
    return(
      <Container>
        <img src={logo} alt="Github compare" />

        <Form  withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />

          <button type="submit">
            {
              this.state.loading
              ? <i className="fa fa-spinner fa-pulse" />
              : 'OK'
            }
          </button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    )
  }
}
