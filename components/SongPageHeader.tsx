import styles from "../styles/SongPage.module.css";

export default function SongPageHeader() {
  const back = () => {
    history.back();
  };

  return (
    <div className={styles.header}>
      <img src="/arrow-left.svg" onClick={back} />

      <span>Now Playing</span>
    </div>
  );
}
