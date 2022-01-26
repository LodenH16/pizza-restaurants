import styled from "styled-components";

export const StudentCard = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid lightgray;
`;

export const StudentImg = styled.img`
  height: 70%;
  border-radius: 50%;
  margin: auto 20px auto 20px;
  display: inline;
  border: 1px solid lightgray;
`;

export const TestsButton = styled.button`
  height: 35px;
  width: 35px;
  border: none;
  background: transparent;
  position: absolute;
  right: 5px;
  top: 10px;
`;

export const TestButtonImg = styled.img`
  width: 100%;
`;
