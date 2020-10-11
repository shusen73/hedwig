import React, { useState, useEffect } from "react";
import styled from "styled-components";
import QRCodeGenerator from "qrcode";

import { Image } from "semantic-ui-react";

const S = {};
S.Image = styled(Image)``;
S.Container = styled.div`
  display: flex;
  align-items: center;
`;

function QRCode(props) {
  const [text, setText] = useState(props.text || "https://www.shusen.dev");
  const [data, setData] = useState();
  console.log(text);

  useEffect(() => {
    (async () => {
      const dataURl = await QRCodeGenerator.toDataURL(text);
      setData(dataURl);
      props.setDataUrl(dataURl);
    })();
  }, [text]);

  useEffect(() => {
    if (props.text) {
      setText(props.text);
    }
  }, [props]);

  return (
    <S.Container>
      <Image src={data} fluid />
    </S.Container>
  );
}
export default QRCode;
