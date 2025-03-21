import { useState, useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { PulseLoader } from "react-spinners";
import React from 'react';
import * as S from "./styles";
import logo from "../../assets/Logo_trackit.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/index";
import { api } from "../../services";

export default function Login(){
    const navigate = useNavigate();
    const { setUserData, userData, setTheme, theme } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        if (userData.token) {
            navigate("/hoje");
        }
    }, [userData.token, navigate]);

    const onSubmit = (data) => {
        setLoading(true);
        console.log("data");
        console.log(data);
        api
            .post("/auth/login", data)
            .then((res) => {
                setUserData(res.data);
                localStorage.setItem("token", res.data.token);
                setLoading(false);
                navigate("/hoje");
            })
            .catch((erro) => {
                console.log(erro);
                alert(`Verifique se as informações! ${erro}`);
                setLoading(false);
            });
    };

    return(
        <S.ContainerInput>
            <img src={logo} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <S.Input
                    type="email"
                    placeholder="E-mail"
                    disabled={loading}
                    {...register("email", { required: true })}
                />
                <S.Input
                    type="password"
                    placeholder="Senha"
                    disabled={loading}
                    {...register("password", { required: true })}     
                />
                <S.Button type="submit" disabled={loading}>
            {loading && <PulseLoader color="#FFFFFF" loading={loading} margin={8} size={15} />}
            {!loading && "Entrar"}</S.Button>
            </form>
            <S.StyledLink to={"/cadastro"}>Não tem uma conta? Cadastre-se!</S.StyledLink>
        </S.ContainerInput>
    );
}