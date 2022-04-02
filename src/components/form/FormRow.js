import React from "react";
import { Button, Form } from "react-bootstrap";

export const FormRow = () => {
  return (
    <tr>
      {/* Checkbox from react bootstrap */}
      <td>
        <Form.Check type="checkbox" label="" />
      </td>
      <td>task name</td>
      <td>10 hr</td>
      <td className="text-end">
        {/*This td will have 2 buttons  */}
        <Button variant="danger">
          <i className="fa-solid fa-trash-can"></i>
        </Button>{" "}
        <Button variant="primary">
          <i className="fa-solid fa-arrow-right-long"></i>
        </Button>
      </td>
    </tr>
  );
};
