import React from "react";
import { Button, Col, Form, NavItem, Row, Table } from "react-bootstrap";

export const TaskList = ({
  taskList,
  removeFromTaskList,
  shiftToBadList,
  taskListTotalHr,
}) => {
  // Responsive using bootstrap - md="6" here is the screen size
  return (
    <div>
      <h2 className="text-center">Task List</h2>
      <hr />

      <Table striped hover>
        <tbody>
          {/*  3. Receive and loop through the task array in the task List component
           */}
          {taskList.map((item, i) => (
            <tr key={i}>
              <td>
                <Form.Check type="checkbox" />
              </td>
              <td>{item.task}</td>
              <td>{item.hr}</td>
              <td className="text-end">
                {/*This td will have 2 buttons  */}
                <Button variant="danger" onClick={() => removeFromTaskList(i)}>
                  <i className="fa-solid fa-trash-can"></i>
                </Button>{" "}
                <Button variant="primary" onClick={() => shiftToBadList(i)}>
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
