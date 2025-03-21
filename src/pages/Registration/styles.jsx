import { styled } from 'styled-components';
import { Link } from "react-router-dom";

export const ContainerInput =styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 667px;
  min-width: 375px;
  max-width: 400px;
  margin: 30px auto;
  background-color: ${(props) => props.theme.background};

  img{
    display: flex;
    align-items: center;
    width: 180px;
    height: 178px;
    margin: 68px auto 36px;
  }

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }  
`

export const Input = styled.input`
  height: 45px;
  width: 303px;
  border: 1px solid  ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.input};
  color: ${(props) => props.theme.text};
  font-family: 'Lexend Deca', sans-serif;
  padding: 0px 10px;
  margin: 0px auto 6px;
  border-radius: 5px;

  ::placeholder {
    color: ${(props) => props.theme.placeholder};
    font-size: 19.976px;
    line-height: 25px;
    opacity: 1;
  }
`

export const Button = styled.button`
  height: 45px;
  width: 303px;
  background-color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#52B6FF" : "#888"};
  color: #FFFFFF;
  font-family: 'Lexend Deca', sans-serif;
  padding: 14px;
  ${(props) => !props.noMargin && "margin-bottom: 10px;"}
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52B6FF;
`