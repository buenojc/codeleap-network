import { useDispatch, useSelector } from "react-redux";
import styles from "./errorWarning.module.css";
import { removeError } from "../../actions/errorActions";

export default function ErrorWarning() {
  const { error } = useSelector((state) => state);
  const dispatch = useDispatch()

  function handleRemoveError(){
    dispatch(removeError())
  }

  return (
    <>
      {error.error && (
        <div className={styles.errorWarningWrapper}>
          <p>{error.errorMessage}</p>
          <span onClick={handleRemoveError}>X</span>
        </div>
      )}
    </>
  );
}
