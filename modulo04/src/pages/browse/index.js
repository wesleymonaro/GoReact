import React from 'react';

import {
  Container,
  Title,
  List,
  Playlist
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist href="">
        <img src="https://pbs.twimg.com/profile_images/1160471124/profile_logo_400x400.jpg" alt="Cover" />
        <strong>Rock dos bons</strong>
        <p>Relaze enquantovc programa ouvindo o melhor do rock</p>
      </Playlist>

      <Playlist href="">
        <img src="https://pbs.twimg.com/profile_images/1160471124/profile_logo_400x400.jpg" alt="Cover" />
        <strong>Rock dos bons</strong>
        <p>Relaze enquantovc programa ouvindo o melhor do rock</p>
      </Playlist>

      <Playlist href="">
        <img src="https://pbs.twimg.com/profile_images/1160471124/profile_logo_400x400.jpg" alt="Cover" />
        <strong>Rock dos bons</strong>
        <p>Relaze enquantovc programa ouvindo o melhor do rock</p>
      </Playlist>

      <Playlist href="">
        <img src="https://pbs.twimg.com/profile_images/1160471124/profile_logo_400x400.jpg" alt="Cover" />
        <strong>Rock dos bons</strong>
        <p>Relaze enquantovc programa ouvindo o melhor do rock</p>
      </Playlist>

    </List>
  </Container>
);

export default Browse;
