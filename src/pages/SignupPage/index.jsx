import { useEffect, useState } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import ContainerComponent from "../../components/ContainerComponent";
import InputComponent from "../../components/InputComponent";
import styles from "./signupPage.module.css";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [disable, setDisable] = useState(false);

  function handleChange(event) {
    setUsername(event.target.value);
  }

  useEffect(() => {
    if (username != "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [username]);

  function handleSubmit(event){
    event.preventDefault();
    console.log('username:', username)
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
            value={username}
            onChange={handleChange}
          >
            Please enter your username
          </InputComponent>
          <ButtonComponent
            type="submit"
            disabled={disable}
          >
            Enter
          </ButtonComponent>
        </form>
      </main>
    </ContainerComponent>
  );
}
