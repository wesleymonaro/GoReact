import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';
import './styles/global';

import Sidebar from './components/sidebar';
import Player from './components/player';
import Header from './components/header';
import ErrorBox from './components/errorBox';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <ErrorBox />
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
