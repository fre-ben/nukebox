import AddSongForm from "../components/AddSongForm";
import styles from "../styles/Add.module.css";

export default function Add() {
  return (
    <div className={styles.container}>
      <h2>Add a new song:</h2>
      <AddSongForm />
    </div>
  );
}
