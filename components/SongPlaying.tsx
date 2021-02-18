import { Props } from "./SongItem";
import styles from "../styles/songPlaying.module.css";

export default function SongPlaying(props: Props) {
  return (
    <div>
      <img src={props.imgSrc} className={styles.image}></img>
      <p>Title: {props.title}</p>
      <p>Artist: {props.artist}</p>
    </div>
  );
}
