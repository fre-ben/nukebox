import Link from "next/link";
import styles from "../styles/SongPage.module.css";

export default function SongPageHeader() {
  return (
    <div className={styles.header}>
      <img src="/arrow-left.svg" />

      <span>Now Playing</span>
    </div>
  );
}
