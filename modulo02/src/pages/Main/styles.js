import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`

  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input{
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    bottom: 0;
    color: #444;
    font-size: 18px;
    border-radius: 4px;

    border: ${props => (props.withError ? '2px solid #F00' : 0)}
  }

  button{
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63F5B0;
    color: #FFF;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
      background: #52D89F;
    }
  }
`;
