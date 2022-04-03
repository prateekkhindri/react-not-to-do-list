import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";

export const TaskList = () => {
  // Responsive using bootstrap - md="6" here is the screen size
  return (
    <div>
      <h2 className="text-center">Task List</h2>
      <hr />
      <Table striped hover>
        <tbody>
          <tr>
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
        </tbody>
      </Table>
    </div>
  );
};
