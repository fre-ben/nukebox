import styles from "../styles/SongPage.module.css";

export default function SongPageHeader() {
  const goBack = () => {
    history.back();
  };

  return (
    <div className={styles.header}>
      <img src="/arrow-left.svg" onClick={goBack} />
      <span>Now Playing</span>
    </div>
  );
}
