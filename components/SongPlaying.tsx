import { Props } from "./SongItem";
import styles from "../styles/songPlaying.module.css";

export default function SongPlaying(props: Props) {
  return (
    <div className={styles.container}>
      <img src={props.imgSrc} className={styles.image}></img>
      <p>{props.title}</p>
      <p className={styles.artist}>{props.artist}</p>
    </div>
  );
}
