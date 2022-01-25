import styled, { createGlobalStyle } from "styled-components";
//todo figure out how to change font weight
export const StudentGlobalStyle = createGlobalStyle`
  .bio {
    display: inline;
  }
   .bio h2 {
        margin: 10px 0px 3px 0px;
    }
    .bio p {
        margin: 3px 0px 0px 15px;
        font-size: 0.7rem;
        line-height: 1rem;
    }

`;

export const Input = styled.input`
  margin: 0px auto 0px 5px;
  padding: 10px 5px 5px;
  font-family: Raleway;
  width: 98%;
  border: none;
  border-bottom: 1px solid lightgray;
`;
