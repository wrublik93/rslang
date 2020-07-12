import React from "react";
import { Form } from "react-bootstrap";

function PopupSelect({ onChange, data, name, value }) {
  return (
    <Form>
      <Form.Label>{name}</Form.Label>
      <Form.Control as="select" onChange={onChange} value={value}>
        {data.map((item) => (
          <option key={item} name={name} value={item} onBlur={onChange}>
            {item + 1}
          </option>
        ))}
      </Form.Control>
    </Form>
  );
}

export default React.memo(PopupSelect);
