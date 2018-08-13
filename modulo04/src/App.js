import React, { Component, Fragment } from 'react';

import './styles/global';

import Sidebar from './components/sidebar';
import Player from './components/player';
import Header from './components/header';

import { Wrapper, Container, Content } from './styles/components'

const App = () => (
  <Wrapper>
    <Container>
      <Sidebar />
      <Content>
        <Header/>
      </Content>
    </Container>
    <Player />
  </Wrapper>
);

export default App;
