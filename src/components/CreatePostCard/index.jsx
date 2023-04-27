import styles from "./createPostCard.module.css";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from '../Button';

export default function CreatePostCart() {
  return (
    <div className={styles.createPostCardWrapper}>
      <h2>What's in your mind?</h2>
      <form>
        <Input type="text" placeholder="Hello World">
          Title
        </Input>
        <Textarea placeholder="Content here">Content</Textarea>
        <Button type='submit'>Create</Button>
      </form>
    </div>
  );
}
