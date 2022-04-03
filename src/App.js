// import logo from './logo.svg';
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { AddForm } from "./components/form/AddForm";
import { TaskList } from "./components/task-list/TaskList";
import { BadList } from "./components/task-list/BadList";
import { Title } from "./components/title/Title";

const App = () => {
  // 3. State to store all the task Lists

  return (
    <div className="wrapper">
      {/* We wrap all the components inside the container */}
      <Container>
        {/* Title component */}
        <Title />

        {/* Form component */}
        <AddForm />

        <hr />

        {/* Task list component */}

        <Row>
          <Col md="6">
            <TaskList />
          </Col>
          <Col md="6">
            <BadList />
          </Col>
        </Row>

        {/* Total hours calculation */}

        <Row>
          <Col>
            <h3 className="mt-5">The total allocated hours is: 15hrs</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
