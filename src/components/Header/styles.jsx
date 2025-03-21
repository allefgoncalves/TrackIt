import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  left: auto;
  width: 375px;
  height: 30px;
  background-color: #126BA5;
  padding: 20px;
  align-items: center;
  justify-content: space-between;

  font-family: Playball;
  font-size: 39px;
  font-weight: 400;
  line-height: 49px;
  letter-spacing: 0em;
  text-align: left;
  color:#FFFFFF;

  box-shadow: 0px 4px 4px 0px #00000026;
  img{
      width: 51px;
      height: 51px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  > p {
    font-size: 18px;
    line-height: 22px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Logo = styled.p`
  font-family: "Playball";
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 49px;
  color: #ffffff;

  :hover {
    animation: tada;
    animation-duration: 1s;
  }
`;

export const ProfileImg = styled.img`
  display: block;
  width: 51px;
  border-radius: 50%;
  margin-left: -7px;
  cursor: pointer;
`;