import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 180px;
  background: ${(props) => props.theme.white};
  border-radius: 5px;
  padding: 18px;

  animation: ${(props) => (props.switch ? "backOutLeft" : "backInLeft")};
  animation-duration: 1s;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  background: ${(props) => props.theme.input};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  padding-left: 11px;

  font-size: 19.976px;
  line-height: 25px;
  color: ${(props) => props.theme.text};

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 20px;
    line-height: 25px;
    color: ${(props) => props.theme.placeholder};
    opacity: 1;
  }
`;
export const ContainerBtn = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;

export const DayBtn = styled.button`
  width: 30px;
  height: 30px;
  background: ${(props) => (props.switch ? "#CFCFCF" : props.theme.white)};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 5px;
  cursor: pointer;

  font-size: 19.976px;
  line-height: 25px;
  color: ${(props) => (props.switch ? props.theme.white : "#DBDBDB")};
`;

export const ContainerSaveBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 35px;
  margin-top: 29px;
  gap: 0px 23px;
  > p {
    font-size: 15.976px;
    line-height: 20px;
    color: ${(props) => props.theme.button};
    cursor: pointer;
    opacity: ${(props) => (props.disabled ? 0.6 : 1)};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    :hover {
      opacity: 0.6;
    }
  }
`;

export const SaveBtn = styled.button`
  height: 100%;
  width: 84px;
  background: ${(props) => props.theme.button};
  border-radius: 4.63636px;
  border: none;

  font-size: 15.976px;
  line-height: 20px;
  text-align: center;
  color: ${(props) => props.theme.white};
`;
