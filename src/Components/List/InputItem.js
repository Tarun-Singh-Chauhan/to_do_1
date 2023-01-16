import { memo, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import styles from "./InputItem.module.css";

const InputItem = (props) => {
  const [enterdTask, setEnterdTask] = useState("");
  const [isTaskExist, setIsTaskExist] = useState(false);

  // const inputRef = useRef();

  const hideModal = () => {
    setIsTaskExist(false);
  };

  const showModal = () => {
    setIsTaskExist(true);
  };

  const taskHandler = (e) => {
    setEnterdTask(e.target.value);
  };

  const addTaskHandler = (e) => {
    e.preventDefault();

    if (enterdTask.trim().length === 0) {
      return showModal();
    }
    props.onAddTask(enterdTask);
    setEnterdTask("");

    {// We can do the same by using useRef-Hook on input-field i.e we can also transfer the value which the user entered without useState also:
    // const enteredTask = inputRef.current.value;
    // props.onAddTask(enteredTask);
    // if (enteredTask.trim().length === 0) {
    //   return showModal();
    // }
    // inputRef.current.value = '' 
       } 
  };

  return (
    <>
      {isTaskExist &&
        ReactDOM.createPortal(
          <Modal hideModal={hideModal} />,
          document.getElementById("modal-root")
        )}

      <form className={styles["input-form"]} onSubmit={addTaskHandler}>
        <div>
          <input
            // ref={inputRef}
            type={"text"}
            placeholder="Add what to do..."
            onChange={taskHandler}
            value={enterdTask}
          />
        </div>
        <div>
          <Button type="submit"> Add Task </Button>
        </div>
      </form>
    </>
  );
};

export default InputItem;
