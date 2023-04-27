import Button from "../../components/Button"
import Container from "../../components/Container"
import Input from "../../components/Input"
import './signupPage.style.css'

export default function SignupPage(){
    return(
        <Container>
            <main>
                <h1>Welcome to CodeLeap network!</h1>
                <Input type='text' name='username' placeholder='John Doe'>Please enter your username</Input>
                <Button type='submit'>Enter</Button>
            </main>
        </Container>
    )
}