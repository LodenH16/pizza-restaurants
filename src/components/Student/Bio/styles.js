import styled from "styled-components";

export const BioWrapper = styled.div`
  overflow: visible;
  margin: 0px 0px 12px 15px;
  width: 150px;
  p,
  li {
    white-space: nowrap;
    margin: 3px 0px 0px 0px;
    font-size: 0.7rem;
    line-height: 1rem;
  }
  ol {
    padding-left: 0px;
    list-style: none;
    margin-bottom: 0px;
  }
  li span {
    margin-left: 20px;
  }
`;

export const StudentName = styled.h2`
  margin: 10px 0px 3px 0px;
  width: 100%;
  flex-basis: 100%;
`;

export const StudentDetails = styled.div`
  display: block;
  margin-bottom: 12px;
`;
