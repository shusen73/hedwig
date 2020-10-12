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
  const defaultText = "https://www.shusen.dev";
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const dataURl = await QRCodeGenerator.toDataURL(
        props.text || defaultText
      );
      setData(dataURl);
      props.setDataUrl(dataURl);
    })();
  }, [props]);

  return (
    <S.Container>
      <Image src={data} fluid />
    </S.Container>
  );
}
export default QRCode;
