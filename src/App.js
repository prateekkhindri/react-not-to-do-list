// import logo from './logo.svg';
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { AddForm } from "./components/form/AddForm";
import { TaskList } from "./components/task-list/TaskList";
import { BadList } from "./components/task-list/BadList";
import { Title } from "./components/title/Title";

const weeklyHrs = 24 * 7;

const App = () => {
  // 2. State to store all the task Lists values, we create a function addToTaskList
  const [taskList, setTaskList] = useState([]);

  // 5.2 Add the item in the bad list, we create a state for the bad list
  const [badList, setBadList] = useState([]);

  // 9. Alert when delete is clicked

  const deleteTask = () => {
    return window.confirm("Are you sure you want to delete this task?");
  };

  // 4. Remove item from the task list when the delete button is clicked

  const removeFromTaskList = (i) => {
    // const shouldDelete = deleteTask();

    if (deleteTask()) {
      const filteredArg = taskList.filter((item, index) => {
        return index !== i;
      });
      setTaskList(filteredArg);
    }
  };

  // 6. Removing the item from the Bad List

  const removeFromBadList = (i) => {
    if (deleteTask()) {
      const filteredArg = badList.filter((item, index) => {
        return index !== i;
      });
      setBadList(filteredArg);
    }
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

  // 7. Moving a task back to the task List from the Bad List

  const shiftToTaskList = (i) => {
    const item = badList[i];
    setTaskList([...taskList, item]);
    removeFromBadList(i);
  };

  // 8. Total from the Task and Bad List
  // 8.1 Total calculation for the Task List
  const taskListTotalHr = taskList.reduce((acc, item) => acc + +item.hr, 0);
  // console.log(taskListTotalHr);   // Console shows the hrs concatenating as its a string so we add "+" to the item.hr

  // 8.2 Total calculation for the Bad List
  const badListTotalHr = badList.reduce((acc, item) => acc + +item.hr, 0);
  // console.log(taskListTotalHr);   // Console shows the hrs concatenating as its a string so we add "+" to the item.hr

  const ttlHrs = taskListTotalHr + badListTotalHr;

  const addToTaskList = (newInfo) => {
    if (ttlHrs + +newInfo.hr <= weeklyHrs) {
      setTaskList([...taskList, newInfo]);
    } else {
      alert("You have exceeded the weekly limit of " + weeklyHrs + "hrs");
    }
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
              taskListTotalHr={taskListTotalHr}
            />
          </Col>
          <Col md="6">
            <BadList
              badList={badList}
              removeFromBadList={removeFromBadList}
              shiftToTaskList={shiftToTaskList}
              badListTotalHr={badListTotalHr}
            />
          </Col>
        </Row>

        {/* Total hours calculation */}

        <Row>
          <Col>
            <h3 className="mt-5">The total allocated hours is: {ttlHrs}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
