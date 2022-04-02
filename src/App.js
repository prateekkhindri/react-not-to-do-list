// import logo from './logo.svg';
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { AddForm } from "./components/form/AddForm";
import { TaskList } from "./components/task-list/TaskList";
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
        <TaskList />
      </Container>
    </div>
  );
};

export default App;
