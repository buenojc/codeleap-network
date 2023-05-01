import styles from './loadingAnimation.module.css'

export default function LoadingAnimation() {
  return (
    <>
      <div className={styles.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
