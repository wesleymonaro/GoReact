import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/global';

import Sidebar from './components/sidebar';
import Player from './components/player';
import Header from './components/header';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </BrowserRouter>
);

export default App;
