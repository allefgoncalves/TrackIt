import styled from "styled-components";
import { Link } from "react-router-dom";

export const Baseboard = styled.footer`
  width: 375px;
  height: 65px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: auto;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  a, div, button{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  text-decoration: none; 
  p{
    color: #D4D4D4;
  }
`;
