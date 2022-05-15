import axios from "axios";

const taskApiEp = "http://localhost:8000/api/v1/tasks";

export const postTask = async (taskObj) => {
  try {
    const rep = await axios.post(taskApiEp, taskObj);
    console.log(rep);
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const fetchAllTasks = async () => {
  try {
    const { data } = await axios.get(taskApiEp);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
