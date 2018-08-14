import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import {
  Container,
  Title,
  List,
  Playlist
} from './styles';

import Loading from '../../components/loading';

const Browse = ({playlists}) => (
  <Container>
    <Title>Navegar {playlists.loading && <Loading />}</Title>

    <List>
      {
        playlists.data.map(playlist => (
          <Playlist to={`/playlists/${playlist.id}`}>
            <img src={playlist.thumbnail} alt={playlist.title}/>
            <strong>{playlist.title}</strong>
            <p>{playlist.description}</p>
          </Playlist>
        ))
      }

    </List>
  </Container>
)


const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
