import { styled } from 'styled-components';



export const Container = styled.div`
  width: 375px;
  min-height: 100vh;
  padding: 90px 17px 100px;
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
  background-color:black;
`;

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
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

export const TodayList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px 0px;
  margin-top: 28px;
`;