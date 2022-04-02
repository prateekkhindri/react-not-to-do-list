import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const AddForm = ({ addToTaskList }) => {
  // Making the form responsive with bootstrap - "g-2" is gap

  return (
    <div>
      <Form>
        <Row className="g-2">
          <Col md={7}>
            <Form.Control placeholder="Task ..." name="task" required />
          </Col>
          <Col md={3}>
            <Form.Control placeholder="hour" type="number" name="hr" required />
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

// 1. Get the form data and store in local state on input field changed (we grab the input value)
// 2.  On form submit send the task data to the parent component to put in the task collections

// Send the task list array to the task List components
// Receive and loop the task array in the task List component
