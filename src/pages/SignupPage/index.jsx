import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Input from "../../components/Input";
import "./signupPage.style.css";

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
    <Container>
      <main>
        <h1>Welcome to CodeLeap network!</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="John Doe"
            value={username}
            onChange={handleChange}
          >
            Please enter your username
          </Input>
          <Button
            type="submit"
            disabled={disable}
          >
            Enter
          </Button>
        </form>
      </main>
    </Container>
  );
}
