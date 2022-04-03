// import logo from './logo.svg';
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { AddForm } from "./components/form/AddForm";
import { TaskList } from "./components/task-list/TaskList";
import { BadList } from "./components/task-list/BadList";
import { Title } from "./components/title/Title";

const App = () => {
  // 2. State to store all the task Lists values, we create a function addToTaskList
  const [taskList, setTaskList] = useState([]);

  // 5.2 Add the item in the bad list, we create a state for the bad list
  const [badList, setBadList] = useState([]);

  const addToTaskList = (newInfo) => {
    setTaskList([...taskList, newInfo]);
  };

  // 4. Remove item from the task list when the delete button is clicked

  const removeFromTaskList = (i) => {
    const filteredArg = taskList.filter((item, index) => {
      return index !== i;
    });
    setTaskList(filteredArg);
  };

  // 5. Displaying the task on the bad list when the right arrow button is clicked

  const shiftToBadList = (i) => {
    // 5.1 Get the item to be shifted
    const item = taskList[i];
    // console.log(item);

    setBadList([...badList, item]);

    // 5.3 Remove the item from the task list
    removeFromTaskList(i);
  };

  return (
    <div className="wrapper">
      {/* We wrap all the components inside the container */}
      <Container>
        {/* Title component */}
        <Title />

        {/* Form component */}
        <AddForm addToTaskList={addToTaskList} />

        <hr />

        {/* Task list component */}

        <Row>
          <Col md="6">
            <TaskList
              taskList={taskList}
              removeFromTaskList={removeFromTaskList}
              shiftToBadList={shiftToBadList}
            />
          </Col>
          <Col md="6">
            <BadList badList={badList} />
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
