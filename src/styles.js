import styled from "styled-components";
//todo figure out how to change font weight

export const AppWrapper = styled.div`
  margin: auto;
  margin-top: 50px;
  background-color: white;
  height: 500px;
  width: 70%;
  min-width: 455x;
  max-width: 665px;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 10px;
  box-shadow: 1px 2px 3px 1px #bcbcbc;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: gray;
    width: 10px;
    border-radius: 5px;
  }
`;

export const Input = styled.input`
  margin: 0px auto 0px 0px;
  padding: 10px 5px 5px;
  font-family: Raleway;
  width: 100%;
  border: none;
  border-bottom: 1px solid lightgray;
  :focus {
    outline: none;
    border-bottom: 1px solid black;
  }
`;

export const ErrorMessage = styled.p`
  color: salmon;
  margin-left: 20px;
`;

export const SearchWrapper = styled.div`
  padding: 5px;

  .secondInput {
    margin-top: 10px;
  }
`;
