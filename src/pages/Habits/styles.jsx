import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  min-height: 100vh;
  padding: 90px 0px 100px;
  background-color: ${(props) => props.theme.background};
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 100%;
    padding: 90px 200px 100px;
  }
`;

export const ContainerLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 20vw;
  background-color: ${(props) => props.theme.background};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0px 17px;
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

export const CreateBtn = styled.button`
  width: 40px;
  height: 35px;
  background: ${(props) => props.theme.button};
  border-radius: 5px;
  cursor: pointer;
  border: none;

  font-size: 26.976px;
  line-height: 34px;
  color: ${(props) => props.theme.white};
`;