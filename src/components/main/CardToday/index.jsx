import React, { useContext } from "react";
import { api } from "../../../services";
import { AuthContext } from "../../../contexts/index";
import * as S from "./styles";
import { Check } from "phosphor-react";

export default function CardToday({ dayData, setRefresh }) {
  const { name, done, currentSequence, highestSequence, id } = dayData;
  const { userData } = useContext(AuthContext);
  const token = userData.token;

  console.log("daydata", dayData.id);

  const checkHabit = () => {
    api
      .post(`/habits/${id}/check`, {}, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        setRefresh((current) => !current);
      })
      .catch((erro) => console.log(erro));
  };

  const uncheckHabit = () => {
    api
      .post(`/habits/${id}/uncheck`, {}, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        setRefresh((current) => !current);
      })
      .catch((erro) => console.log(erro));
  };

  return (
    <S.Card>
      <S.Content>
        <S.WrapperText>
          <h2>{name}</h2>
          <p>
            Sequência atual:{" "}
            <S.CurrentSequence $CurrentColor={done}>
              {`${currentSequence} ${currentSequence > 1 ? "dias" : "dia"}`}
            </S.CurrentSequence>
          </p>
          <p>
            Seu recorde:{" "}
            <S.HighestSequence $HighestColor={currentSequence === highestSequence && done ? true : false} >
              {`${highestSequence} ${highestSequence > 1 ? "dias" : "dia"}`}
            </S.HighestSequence>
          </p>
        </S.WrapperText>
        <S.CheckBox
          $switchColor={done} // Mantém o padrão com "$"
          onClick={() => {
            done ? uncheckHabit() : checkHabit();
          }}
        >
        C  
        </S.CheckBox>
      </S.Content>
    </S.Card>
  );
};