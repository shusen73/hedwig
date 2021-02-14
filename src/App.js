import React, { useState, Fragment } from "react";
import styled from "styled-components";

import Header from "./Header";
import QRCode from "./QRCode";
import Input from "./Input";
import Download from "./Download";
import GlobalStyles from "./globalStyle.js";

const S = {};
S.OuterContainer = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  height: 100vh;
  margin: 0rem auto;
  @media (min-width: 500px) {
    padding: 2rem 2rem;
  }
`;
S.InnerContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: max-content max-content auto max-content;
  min-height: 100%;
  max-width: 30rem;
  margin: 0rem auto;
  box-shadow: 0 0px 15px 3px rgba(0, 0, 0, 0.1),
    0 0px 6px 2px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  background-color: white;
  color: #2a9d8f;
`;

S.Input = styled(Input)``;
S.QRCode = styled(QRCode)``;

function App() {
  const [text, setText] = useState("");
  const [dataUrl, setDataUrl] = useState("");

  return (
    <Fragment>
      <GlobalStyles />
      <S.OuterContainer>
        <S.InnerContainer>
          <Header title="Hedwig" />
          <S.Input onChange={setText}></S.Input>
          <QRCode text={text} setDataUrl={setDataUrl}></QRCode>
          <Download dataUrl={dataUrl} />
        </S.InnerContainer>
      </S.OuterContainer>
    </Fragment>
  );
}

export default App;
