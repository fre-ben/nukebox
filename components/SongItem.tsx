import styles from "../styles/songItem.module.css";

export type Props = {
  artist: string;
  title: string;
  imgSrc: string;
};

export default function SongItem({ imgSrc, title, artist }: Props) {
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
