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
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 1px 2px 3px 1px #bcbcbc;
`;

export const ErrorMessage = styled.p`
  color: salmon;
  margin-left: 20px;
`;

export const Input = styled.input`
  margin: 5px auto 0px auto;
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

export const SearchWrapper = styled.div`
  padding: 5px 5px 5px 5px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  height: 18%;
  overflow: hidden;
  position: sticky;
  top: 0px;
`;
//todo add margin between search bars
export const StudentsWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 82%;

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
