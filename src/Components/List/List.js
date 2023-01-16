import { useState } from "react";
import Button from "../UI/Button";

import styles from "./List.module.css";

const List = (props) => {
  return (
    <>
      <ul className={styles["list-container"]}>
        {props.list.map((list) => (
          <li className={styles.list} key={list.id}>
            {list.text}

            <Button
              className={styles.remove}
              onClick={() => props.deleteTask(list.id)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
