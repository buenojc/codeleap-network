import { useDispatch, useSelector } from "react-redux";
import styles from "./successWarning.module.css";
import { removeSuccessMessage } from "../../actions/successWarningActions";
import { useEffect, useState } from "react";

export default function SucessWarning() {
  const { successMessage } = useSelector((state) => state);
  const [closeWarning, setCloseWarning] = useState(false);
  const dispatch = useDispatch();
  function handleRemoveSucessMessage() {
    setCloseWarning(true);
    const timeout = setTimeout(() => {
      dispatch(removeSuccessMessage());
    }, 1000);
  }
  
  //Remove message after 3 seconds
  useEffect(() => {
    if(successMessage.success){
      const timeout = setTimeout(() => {
        handleRemoveSucessMessage();
      }, 3000);
    }else{
      setCloseWarning(false)
    }
  }, [successMessage.success]);

  return (
    <>
      {successMessage.success && (
        <div
          className={`${styles.successWarning} ${
            closeWarning && styles.closeWarning
          }`}
        >
          <p>{successMessage.message}</p>
          <span onClick={handleRemoveSucessMessage}>X</span>
        </div>
      )}
    </>
  );
}
