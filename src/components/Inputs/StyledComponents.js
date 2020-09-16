import styled from 'styled-components';

export const _styledInput = styled.input`
  color: #fff;
  font-size: 16px;
  width: 100%;
  padding: 15px 15px;
  margin: 10px 0;
  box-sizing: border-box;
  outline: none;
  border-radius: 3px;
  border: 1px solid grey;
  border: ${(props) => props.touched && props.validated && '1px solid green'};
  border: ${(props) => props.touched && !props.validated && '1px solid red'};
  border: ${(props) => !props.touched && !props.validated && '1px solid grey'};
  background: transparent;
`;

export const StyledButton = styled.button`
  width: 100%;
  font-size: 16px;
  padding: 17px;
  margin: 50px 0;
  border-radius: 3px;
  outline: none;
  border: none;
  background-color: yellowgreen;
  color: #fff;
  &:active {
    background-color: green;
  }
`;

// background-color: #4CAF50;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
