import styles from "./createPostCard.module.css";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";
import { useEffect, useState } from "react";

export default function CreatePostCart({
  titleValue,
  titleChange,
  contentValue,
  contentChange,
  onSubmit
}) {

  const [disableButton, setDisableButton] = useState(true)
  useEffect(() => {
    if(contentValue !== '' && titleValue !== ''){
      setDisableButton(false)
    }else{
      setDisableButton(true)
    }
  }, [titleValue, contentValue])

  return (
    <div className={styles.createPostCardWrapper}>
      <h2>What's in your mind?</h2>
      <form>
        <Input type="text" placeholder="Hello World" value={titleValue} onChange={titleChange}>
          Title
        </Input>
        <Textarea placeholder="Content here" value={contentValue} onChange={contentChange}>Content</Textarea>
        <Button onClick={onSubmit} disabled={disableButton} type="submit">Create</Button>
      </form>
    </div>
  );
}
