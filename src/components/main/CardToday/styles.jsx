import styled from "styled-components";


export const Card = styled.div`
  width: 100%;
  height: 94px;
  background: ${props => props.theme.white};
  border-radius: 5px;
  padding: 13px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperText = styled.div`
  width: 70%;
  > h2 {
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.theme.text};
    margin-bottom: 7px;
  }
  > p {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 1px;
  }
`;
export const CurrentSequence = styled.span`
  color: ${(props) => props.$CurrentColor && props.theme.check};
`;
export const HighestSequence = styled.span`
  color: ${(props) => props.$HighestColor && props.theme.check};
`;

export const CheckBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 69px;
  height: 69px;
  background-color: ${(props) => (props.$switchColor ? props.theme.check : "#DBDBDB")};
  border-radius: 5px;
  border: none;
  :focus {
    animation: rubberBand;
    animation-duration: 2s;
  }
`;
