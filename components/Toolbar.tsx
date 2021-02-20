import styles from "../styles/Toolbar.module.css";
import LikeButton from "./LikeButton";

export default function Toolbar() {
  return (
    <div className={styles.container}>
      <img className={styles.plus} src="/plus.svg" />
      <LikeButton />
      <img className={styles.share} src="/share.svg" />
    </div>
  );
}
