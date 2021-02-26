import { useEffect, useState } from "react";
import styles from "../styles/AddSongForm.module.css";
import { addSong, APISong } from "../utils/api";

export default function AddSongForm() {
  const [id, setId] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [audioSrc, setAudioSrc] = useState("");

  useEffect(() => {
    setId(
      `${artist.replaceAll(" ", "-").toLowerCase()}_${title
        .replaceAll(" ", "-")
        .toLowerCase()}`
    );
  }, [artist, title]);

  function clearInputs() {
    setId("");
    setImgSrc("");
    setTitle("");
    setArtist("");
    setAudioSrc("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const data: APISong = { id, imgSrc, title, artist, audioSrc };
    addSong(data);
    clearInputs();
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
          />
        </label>
        <label>
          Artist:
          <input
            type="text"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </label>
        <label>
          Audio:
          <input
            type="text"
            value={audioSrc}
            onChange={(event) => setAudioSrc(event.target.value)}
          />
        </label>
        <button type="submit">Add Song</button>
      </form>
    </>
  );
}
