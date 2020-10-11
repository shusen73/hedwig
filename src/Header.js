import React from "react";
import styled from "styled-components";
import { TextArea } from "semantic-ui-react";

const S = {};
S.H1 = styled.h1`
  text-align: center;
`;

function Header(props) {
  return <S.H1>{props.title}</S.H1>;
}

export default Header;
