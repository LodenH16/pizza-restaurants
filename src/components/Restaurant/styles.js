import styled from "styled-components";

export const RestaurantCard = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid lightgray;
`;

export const RestaurantImg = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 50%;
  margin: 20px 20px auto 20px;
  display: inline;
  border: 1px solid lightgray;
`;

export const ToppingsButton = styled.button`
  height: 35px;
  width: 35px;
  border: none;
  background: transparent;
  position: absolute;
  right: 5px;
  top: 10px;
`;

export const ToppingsButtonImg = styled.img`
  width: 100%;
`;
