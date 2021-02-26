import styles from "../styles/SongPage.module.css";

export default function AddPageHeader() {
  const goBack = () => {
    history.back();
  };

  return (
    <div className={styles.header}>
      <img src="/arrow-left.svg" onClick={goBack} />
    </div>
  );
}
