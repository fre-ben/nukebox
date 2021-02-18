import Link from "next/link";
import styles from "../styles/SongPage.module.css";

export default function SongPageHeader() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <div> &lt;</div>
        </a>
      </Link>
      <span>Now Playing</span>
    </div>
  );
}
