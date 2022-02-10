import styled from "styled-components";

export const BioWrapper = styled.div`
  overflow: visible;
  margin: 0px 0px 12px 15px;
  width: 150px;
  li {
    white-space: nowrap;
    margin: 3px 0px 0px 0px;
    font-size: 0.7rem;
    line-height: 1rem;
  }
  ol,
  ul {
    padding-left: 0px;
    list-style: none;
    margin-bottom: 0px;
  }
  li span {
    margin-left: 20px;
  }
`;

export const RestaurantName = styled.h2`
  margin: 10px 0px 3px 0px;
  width: 100%;
  flex-basis: 100%;
  word-wrap: break-word;
`;

export const RestaurantDetails = styled.div`
  display: block;
  max-width: 70%;
  margin-bottom: 12px;
`;
