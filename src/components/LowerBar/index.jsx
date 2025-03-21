import React from "react";
import * as S from "./styles";
import { useLocation } from "react-router-dom";


export default function LowerBar() {
  const location = useLocation(); 
  const isHabitos = location.pathname === '/habitos';
  const isHoje = location.pathname === '/hoje';

  return (
    <S.Baseboard>
      <S.Content>
        <S.StyledLink 
          to={`/habitos`}
          style={{ backgroundColor: isHabitos ?' #52B6FF' :' #FFFFFF' }}
        >
          Hábitos
        </S.StyledLink>
        <S.StyledLink 
          to={`/hoje`}
          style={{ backgroundColor: isHoje ?' #52B6FF' : '#FFFFFF'  }} 
        >
          hoje
        </S.StyledLink>
      </S.Content>
    </S.Baseboard>
  );
}