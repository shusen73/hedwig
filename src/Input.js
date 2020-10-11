import React from "react";
import styled from "styled-components";
import { Form, TextArea } from "semantic-ui-react";

const S = {};
S.Container = styled.div``;
S.TextArea = styled(TextArea)`
  width: 100%;
`;

function Input(props) {
  const onChange = (_, { value }) => {
    props.onChange(value);
  };

  return (
    <Form>
      <S.TextArea onChange={onChange} />
    </Form>
  );
}

export default Input;
