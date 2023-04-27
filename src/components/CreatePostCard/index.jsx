import styles from "./createPostCard.module.css";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";

export default function CreatePostCart({
  titleValue,
  titleChange,
  contentValue,
  contentChange,
  onSubmit
}) {
  return (
    <div className={styles.createPostCardWrapper}>
      <h2>What's in your mind?</h2>
      <form>
        <Input type="text" placeholder="Hello World" value={titleValue} onChange={titleChange}>
          Title
        </Input>
        <Textarea placeholder="Content here" value={contentValue} onChange={contentChange}>Content</Textarea>
        <Button onClick={onSubmit} type="submit">Create</Button>
      </form>
    </div>
  );
}
