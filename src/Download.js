import React from "react";
import { Button } from "semantic-ui-react";

function App(props) {
  console.log(props.dataUrl);
  return (
    <a href={props.dataUrl} download="QR Code.png">
      <Button fluid>Download QR Code</Button>
    </a>
  );
}

export default App;
