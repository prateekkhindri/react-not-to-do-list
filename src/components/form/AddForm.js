import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const initialState = {
  task: "",
  hr: "",
};

export const AddForm = () => {
  // Making the form responsive with bootstrap - "g-2" is gap

  // 1. Get the form data and store in local state on input field changed (we grab the input value)
  const [task, setTask] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  console.log(task);

  return (
    <div>
      {task.task}
      <Form>
        <Row className="g-2">
          <Col md={7}>
            <Form.Control
              placeholder="Task ..."
              onChange={handleOnChange}
              name="task"
            />
          </Col>
          <Col md={3}>
            <Form.Control
              placeholder="hour"
              type="number"
              onChange={handleOnChange}
              name="hr"
            />
          </Col>
          <Col md={2}>
            {/* <Form.Control placeholder="Zip" /> */}
            <Button variant="primary" type="submit">
              Add Task
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

//
// On form submit send the task data to the parent component to put in the task collections
// Send the task list array to the task List components
// Receive and loop the task array in the task List component
