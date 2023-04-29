import styles from "./createPostCard.module.css";
import InputComponent from "../InputComponent";
import TextareaComponent from "../TextareaComponent";
import ButtonComponent from "../ButtonComponent";
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
        <InputComponent type="text" placeholder="Hello World" value={titleValue} onChange={titleChange}>
          Title
        </InputComponent>
        <TextareaComponent placeholder="Content here" value={contentValue} onChange={contentChange}>Content</TextareaComponent>
        <ButtonComponent onClick={onSubmit} disabled={disableButton} type="submit">Create</ButtonComponent>
      </form>
    </div>
  );
}
