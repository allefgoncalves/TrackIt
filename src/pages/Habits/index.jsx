import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";
import { AuthContext } from "../../contexts/index";
import { ClipLoader } from "react-spinners";
import Header from "../../components/Header";
import LowerBar from "../../components/LowerBar";
import CreateHabit from "../../components/main/CreateHabit";
import CardHabit from "../../components/main/CardHabit";
import * as S from "./styles";

export default function Habits() {
  const [switchCreate, setSwitchCreate] = useState(false);
  const { userData } = useContext(AuthContext);
  const [habits, setHabits] = useState();
  const [refresh, setRefresh] = useState(false);
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const token = userData.token;
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.token) {
      navigate("/");
      return;
    }
    api
      .get("/habits", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setHabits(res.data)
      })
      .catch((erro) => console.log(erro));
  }, [refresh, userData]);

  if (!habits) {
    return (
      <S.ContainerLoading>
        <ClipLoader color="#52B6FF" size={150} />
      </S.ContainerLoading>
    );
  }

  return (
    <S.Container>
      <Header />
      <S.Content>
        <div>
          <h1>Meus hábitos</h1>
          <S.CreateBtn onClick={() => setSwitchCreate((current) => !current)}>+</S.CreateBtn>
        </div>
        {switchCreate && (
          <CreateHabit
            name={name}
            setName={setName}
            days={days}
            setDays={setDays}
            setRefresh={setRefresh}
            setSwitchCreate={setSwitchCreate}
          />
        )}
        {habits?.length > 0 
          ? habits.map((h) => <CardHabit setRefresh={setRefresh} key={h.id} habit={h} />)
          : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        }
      </S.Content>
      <LowerBar />
    </S.Container>
  );
};


