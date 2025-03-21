import { useState, useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { PulseLoader } from "react-spinners";
import React from 'react';
import * as S from "./styles";
import logo from "../../assets/Logo_trackit.png";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";

export default function Registration(){
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        api
            .post("/auth/sign-up", data)
            .then(() => {
                setLoading(false);
                navigate("/");
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
                    type="text"
                    placeholder="Nome"
                    disabled={loading}
                    {...register("name", { required: true })}
                />
                <S.Input
                    type="email"
                    placeholder="E-mail"
                    disabled={loading}
                    {...register("email", { required: true })}
                />
                <S.Input
                    type="text"
                    placeholder="Imagem"
                    disabled={loading}
                    {...register("image", { required: true })}
                />
                <S.Input
                    type="password"
                    placeholder="Senha"
                    disabled={loading}
                    {...register("password", { required: true })}     
                />
                <S.Button type="submit" disabled={loading}>
            {loading && <PulseLoader color="#FFFFFF" loading={loading} margin={8} size={15} />}
            {!loading && "Cadastrar"}</S.Button>
            </form>
            <S.StyledLink to="/">Já tem uma conta? Faça login!</S.StyledLink>
        </S.ContainerInput>
    )
}