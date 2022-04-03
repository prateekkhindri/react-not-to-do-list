import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";

export const BadList = ({ badList }) => {
  // Responsive using bootstrap - md="6" here is the screen size
  return (
    <div>
      <h2 className="text-center">Bad List</h2>
      <hr />
      <Table striped hover>
        <tbody>
          {badList.map((item, i) => (
            <tr key={i}>
              <td>
                <Form.Check type="checkbox" label="" />
              </td>
              <td>{item.task}</td>
              <td>{item.hr}</td>
              <td className="text-end">
                {/*This td will have 2 buttons  */}
                <Button variant="warning">
                  <i className="fa-solid fa-arrow-left-long"></i>
                </Button>
                <Button variant="danger">
                  <i className="fa-solid fa-trash-can"></i>
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4 className="mt-4 text-danger">You could have saved: 20 hrs</h4>
    </div>
  );
};
