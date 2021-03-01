import { useEffect, useState } from "react";
import styles from "../styles/AddSongForm.module.css";
import { addSong, APISong } from "../utils/api";

export default function AddSongForm() {
  const [id, setId] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [audioSrc, setAudioSrc] = useState("");
  const [addStatus, setAddStatus] = useState("");

  useEffect(() => {
    const id = `${artist}_${title}`.replaceAll(" ", "-").toLowerCase();
    setId(id);
  }, [artist, title]);

  function clearInputsStatusOk() {
    setId("");
    setImgSrc("");
    setTitle("");
    setArtist("");
    setAudioSrc("");
    setAddStatus("Song added!");
    setTimeout(() => {
      setAddStatus("");
    }, 5000);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newTrack: APISong = { id, imgSrc, title, artist, audioSrc };
    addSong(newTrack);
    clearInputsStatusOk();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label>
          ID:
          <input
            type="text"
            value={id}
            onChange={(event) => setId(event.target.value)}
            readOnly
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={imgSrc}
            onChange={(event) => setImgSrc(event.target.value)}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </label>
        <label>
          Artist:
          <input
            type="text"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
            required
          />
        </label>
        <label>
          Audio:
          <input
            type="text"
            value={audioSrc}
            onChange={(event) => setAudioSrc(event.target.value)}
            required
          />
        </label>
        <button type="submit" className={styles.submitButton}>
          Add Song
        </button>
        <span className={styles.addStatus}>{addStatus}</span>
      </form>
    </>
  );
}
