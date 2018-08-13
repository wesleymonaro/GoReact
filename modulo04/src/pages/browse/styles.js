import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #FFF;
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const Playlist = styled.a`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;

  img {
    height: 250px;
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #FFF;
  }

  p {
    font-size: 13px;
    color: #b3b3b3;
    line-height: 22px;
    margin-top: 5px;
  }

  &:hover img{
    opacity: 0.4;
  }

  &:first-child {
    margin: 0
  }
`;
