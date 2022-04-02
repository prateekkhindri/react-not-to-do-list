// import logo from './logo.svg';
import { Container } from "react-bootstrap";
import "./App.css";
import { AddForm } from "./components/form/AddForm";
import { TaskList } from "./components/task-list/TaskList";
import { Title } from "./components/title/Title";

function App() {
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
}

export default App;
