import * as S from "./styles";
import React , { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import LowerBar from "../../components/LowerBar";
import { api } from "../../services";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../contexts/index";
import CardToday from "../../components/main/CardToday";

export default function Today(){
    const [refresh, setRefresh] = useState(false);
    const { userData } = useContext(AuthContext);
    const navigate = useNavigate();
    const token = userData.token;
    const [todayData, setTodayData] = useState();
    const date = dayjs().locale("pt-br").format("dddd, DD/MM");

    useEffect(() => {
        if (userData.token === undefined) {
          navigate("/");
        }
        api
          .get("/habits/today", { headers: { Authorization: `Bearer ${token}` } })
          .then((res) => {
            setTodayData(res.data);
          })
          .catch((erro) => console.log(erro));
    }, [refresh]);

    if (!todayData) {
        return (
            <S.ContainerLoading>
            <ClipLoader color="#52B6FF" size={150} />
            </S.ContainerLoading>
        );
    }

    return(
        <S.Container>
            <Header/>
            <S.ContainerPage>
                <h1>{date}</h1>
                <S.TodayList>
                    {todayData.length >= 1 && todayData.map((t) => <CardToday key={t.id} dayData={t} setRefresh={setRefresh} />)}
                </S.TodayList>
            </S.ContainerPage>
            <LowerBar/>
        </S.Container>
    );
}