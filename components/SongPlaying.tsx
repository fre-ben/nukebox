import styles from "../styles/songPlaying.module.css";
import { APISong } from "../utils/api";

export default function SongPlaying({ imgSrc, title, artist }: APISong) {
  return (
    <div className={styles.container}>
      <img src={imgSrc} className={styles.image}></img>
      <p>{title}</p>
      <p className={styles.artist}>{artist}</p>
    </div>
  );
}
