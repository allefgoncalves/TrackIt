import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/index.jsx";
import * as S from "./styles";

export default function Header() {
  const { userData, setUserData } = useContext(AuthContext);
   
  return (
    <S.Header>
        <S.StyledLink to="/">
          <S.Logo>TrackIt</S.Logo>
        </S.StyledLink>
        <S.ProfileImg src={userData.image} alt="" />
    </S.Header>
  );
};

