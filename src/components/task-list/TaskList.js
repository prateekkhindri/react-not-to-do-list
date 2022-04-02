import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { FormRow } from "../form/FormRow";

export const TaskList = () => {
  // Responsive using bootstrap - md="6" here is the screen size
  return (
    <div>
      <Row>
        <Col md="6">
          <h2 className="text-center">Task List</h2>
          <hr />

          {/* Table from React bootstrap */}
          {/* This table is for the bad List */}
          <Table striped hover>
            {/* Below part is not needed */}
            {/* <thead>
              <tr>
                <td>#</td>
                <th>Task</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead> */}

            <tbody>
              {/* <tr> */}
              {/* Checkbox from react bootstrap */}
              {/* <td>
                  <Form.Check type="checkbox" label="" />
                </td>
                <td>task name</td>
                <td>10 hr</td>
                <td className="text-end"> */}
              {/*This td will have 2 buttons  */}
              {/* <Button variant="danger">
                    <i className="fa-solid fa-trash-can"></i>
                  </Button>{" "}
                  <Button variant="primary">
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </Button>
                </td>
              </tr> */}
              {/* The 2 tr's below are not needed */}
              {/* <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr> */}

              {/* We import the FormRow component below */}
              <FormRow />
            </tbody>
          </Table>
        </Col>
        <Col md="6">
          <h2 className="text-center">Bad List</h2>
          <hr />

          {/* This table is for the bad List */}
          <Table striped hover>
            <tbody>
              <FormRow />
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};
