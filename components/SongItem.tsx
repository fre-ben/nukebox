import styles from "../styles/songItem.module.css";
import { APISong } from "../utils/api";

export default function SongItem({ imgSrc, title, artist }: APISong) {
  return (
    <li className={styles.list}>
      <article className={styles.container}>
        <img src={imgSrc} className={styles.image} alt=""></img>
        <p className={styles.title}>{title}</p>
        <p className={styles.artist}>{artist}</p>
      </article>
    </li>
  );
}
