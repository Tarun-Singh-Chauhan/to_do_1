import React, { useState } from "react";
import ReactDOM from "react-dom";
import InputItem from "./Components/List/InputItem";
import List from "./Components/List/List";
import Modal from "./Components/UI/Modal";

// const Dummy_List = [
//   {
//     id: 1,
//     text: "Morning Walk",
//   },
//   {
//     id: 2,
//     text: "Office Working",
//   },
// ];

const App = () => {
  const [tasks, setTasks] = useState([]);

  const userTaskHandler = (addedTask) => {
    const list = {
      text: addedTask,
      id: Math.random().toString(),
    };

    setTasks((prevTasks) => [...prevTasks, list]);
    console.log(addedTask);
  };

  const removeTaskHandler = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <>
      <h1 style={{color:'white'}} > ToDoList App </h1>

      <InputItem onAddTask={userTaskHandler} />

      <List list={tasks} deleteTask={removeTaskHandler} />
    </>
  );
};

export default App;
