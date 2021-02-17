import styles from "../styles/song.module.css";

type Props = {
  artist: string;
  title: string;
  imgSrc: string;
};

export default function SongItem({ imgSrc, title, artist }: Props) {
  return (
    <li>
      <article className={styles.container}>
        <img src={imgSrc} className={styles.image} alt=""></img>
        <p className={styles.title}>{title}</p>
        <p className={styles.artist}>{artist}</p>
      </article>
    </li>
  );
}
