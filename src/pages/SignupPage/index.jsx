import { useEffect, useState } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import ContainerComponent from "../../components/ContainerComponent";
import InputComponent from "../../components/InputComponent";
import styles from "./signupPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../actions/loginActions";

export default function SignupPage() {
  const { user } = useSelector((state) => state);
  const [informedUsername, setInformedUsername] = useState("");
  const [disable, setDisable] = useState(false);
  const [usernameError, setUsernameError] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleChange(event) {
    setInformedUsername(event.target.value);
  }

  useEffect(() => {
    if (informedUsername != "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [informedUsername]);

  function handleSubmit(event) {
    event.preventDefault();
    if (informedUsername !== user.username) {
      setUsernameError(true)
    } else {
      dispatch(setLogin())
      navigate('/feed')
    }
  }

  return (
    <ContainerComponent>
      <main className={styles.signupPageWrapper}>
        <h1>Welcome to CodeLeap network!</h1>
        <form onSubmit={handleSubmit}>
          <InputComponent
            type="text"
            name="username"
            placeholder="John Doe"
            value={informedUsername}
            onChange={handleChange}
          >
            Please enter your username
          </InputComponent>
          {usernameError && <p className={styles.usernameError}>Username not found, please try again</p>}
          <ButtonComponent type="submit" disabled={disable}>
            Enter
          </ButtonComponent>
        </form>
        <p>username: {user.username}</p>
      </main>
    </ContainerComponent>
  );
}
