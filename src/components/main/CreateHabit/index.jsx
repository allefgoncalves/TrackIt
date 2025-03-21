import React, { useState, useContext } from "react";
import { PulseLoader } from "react-spinners";
import { api } from "../../../services";
import { AuthContext } from "../../../contexts/index";
import * as S from "./styles";

export default function CreateHabit({ setRefresh, setSwitchCreate, name, setName, days, setDays }) {
  const listDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { userData } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [switchAnimation, setSwitchAnimation] = useState(false);

  const handleClick = (i) => {
    if (days.includes(i)) {
      let index = days.indexOf(i);
      const arr = [...days];
      arr.splice(index, 1);
      setDays(arr);
      return;
    }
    setDays((c) => [...c, i]);
  };

  const createHabit = () => {
    if (name === "" || days.length < 1) {
      alert("preencha todos os campos antes de salvar");
      return false;
    }

    setLoading(true);
    const token = userData.token;
    const body = { name, days };
    api
      .post("/habits", body, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        setName("");
        setDays([]);
        setRefresh((current) => !current);
        setLoading(false);
        setSwitchAnimation(true);
        setTimeout(() => setSwitchCreate((current) => !current), 800);
      })
      .catch((erro) => {
        console.log(erro);
        alert(`Ops! Ocorreu um erro ao criar um habito... ${erro.message}`);
        setLoading(false);
      });
  };

  const cancel = () => {
    setSwitchAnimation(true);
    setTimeout(() => setSwitchCreate((current) => !current), 800);
  };

  return (
    <S.Card switch={switchAnimation}>
      <S.Content>
        <S.Input
          disabled={loading}
          type="text"
          placeholder="nome do hábito"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <S.ContainerBtn>
          {listDays.map((d, i) => (
            <S.DayBtn
              disabled={loading}
              key={i}
              onClick={() => !loading && handleClick(i)}
              switch={days.includes(i) ? true : false}
            >
              {d}
            </S.DayBtn>
          ))}
        </S.ContainerBtn>
        <S.ContainerSaveBtn disabled={loading}>
          <p onClick={() => !loading && cancel()}>Cancelar</p>
          <S.SaveBtn disabled={loading} onClick={createHabit}>
            {loading && <PulseLoader color="#FFFFFF" loading={loading} margin={8} size={15} />}
            {!loading && "Salvar"}
          </S.SaveBtn>
        </S.ContainerSaveBtn>
      </S.Content>
    </S.Card>
  );
};
