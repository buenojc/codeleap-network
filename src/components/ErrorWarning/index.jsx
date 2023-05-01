import { useDispatch, useSelector } from "react-redux";
import styles from "./errorWarning.module.css";
import { removeError } from "../../actions/errorActions";
import { useState } from "react";

export default function ErrorWarning() {
  const { error } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [closeWarning, setCloseWarning] = useState(false);

  function handleRemoveError() {
    setCloseWarning(true)
    const timeout = setTimeout(() => {
      dispatch(removeError());
    }, 1000);
    clearTimeout(timeout);
  }

  return (
    <>
      {error.error && (
        <div
          className={`${styles.errorWarningWrapper} ${
            closeWarning && styles.closeWarning
          }`}
        >
          <p>{error.errorMessage}</p>
          <span onClick={handleRemoveError}>X</span>
        </div>
      )}
    </>
  );
}
