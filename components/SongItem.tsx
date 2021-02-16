import styles from "../styles/song.module.css";

type Props = {
  artist: string;
  title: string;
  imgSrc: string;
};

export default function SongItem(props: Props) {
  return (
    <article className={styles.container}>
      <img src={props.imgSrc} className={styles.image} alt=""></img>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.artist}>{props.artist}</p>
    </article>
  );
}
