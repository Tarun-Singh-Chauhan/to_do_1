import { memo } from "react";
import Button from "./Button";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={`${styles.backdrop} ${props.className}`} onClick={()=>props.onHide()} />;
};

const Layout = (props) => {
  const removeModalHandler = () => {
    props.onHide();
  };

  return (
    <div className={styles.layout}>
      <h3>Please enter some Task to add in the list !</h3>
      <div className={styles.button}>
        <Button onClick={removeModalHandler}>Okay</Button>
      </div>
    </div>
  );
};

const Modal = (props) => {  console.log('modal')
  return (
    <>
      <Backdrop onHide={props.hideModal}/>
      <Layout onHide={props.hideModal} />
    </>
  );
};

export default Modal;
