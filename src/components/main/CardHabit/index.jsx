import React, { useContext, useState } from "react";
import { api } from "../../../services";
import { AuthContext } from "../../../contexts/index";
import * as S from "./styles";
import  DeleteIcon  from '@mui/icons-material/Delete';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function CardHabit({ setRefresh, habit }) { 
  const { days, id, name } = habit;
  const { userData } = useContext(AuthContext);
  const listDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [switchAnimation, setSwitchAnimation] = useState(false);

  const deleteHabit = () => {
    const token = userData.token;
    confirmAlert({
      title: "Confirmação",
      message: "Você realmente quer excluir o hábito?",
      buttons: [
        {
          label: "Sim",
          onClick: () => {
            api
              .delete(`/habits/${id}`, { headers: { Authorization: `Bearer ${token}` } })
              .then(() => {
                setSwitchAnimation(true);
                setTimeout(() => setRefresh((current) => !current), 500);
              })
              .catch((erro) => console.log(erro));
          },
        },
        {
          label: "Não",
        },
      ],
    });
  };

  return (
    <S.Card {...(switchAnimation && { animate: "true" })}>
      <S.Content>
        <S.ContainerName>
          <p>{name}</p>
          <div onClick={deleteHabit}>
            X
          </div>
        </S.ContainerName>
        <S.ContainerBtn>
          {listDays.map((d, i) => (
            <S.DayBtn key={i} selected={days.includes(i)}>
              {d}
            </S.DayBtn>
          ))}
        </S.ContainerBtn>
      </S.Content>
    </S.Card>
  );
};
