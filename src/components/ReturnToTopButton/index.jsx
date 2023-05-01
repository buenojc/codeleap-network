import { useEffect, useState } from "react";
import styles from "./returnToTopButton.module.css";
import ArrowUp from "../../assets/arrow-up.svg";

export default function ReturnToTopButton() {
  const [showButton, setShowButton] = useState(false);

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  });

  return (
    <>
      {showButton && (
        <div className={styles.returnToTopButtonWrapper}>
          <button onClick={handleScrollToTop}>
            <img src={ArrowUp} alt="Go to top" color="white" />
          </button>
        </div>
      )}
    </>
  );
}
