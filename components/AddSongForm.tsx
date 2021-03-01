import { useEffect, useState } from "react";
import styles from "../styles/AddSongForm.module.css";
import { addSong, APISong } from "../utils/api";

export default function AddSongForm() {
  const [entries, setEntries] = useState({
    id: "",
    imgSrc: "",
    title: "",
    artist: "",
    audioSrc: "",
  });
  const [addStatus, setAddStatus] = useState("");

  useEffect(() => {
    const id = `${entries.artist}_${entries.title}`
      .replaceAll(" ", "-")
      .toLowerCase();
    setEntries({ ...entries, id });
  }, [entries.artist, entries.title]);

  function clearInputsStatusOk() {
    setEntries({ id: "", imgSrc: "", title: "", artist: "", audioSrc: "" });
    setAddStatus("Song added!");
    setTimeout(() => {
      setAddStatus("");
    }, 5000);
  }

  function handleSubmit(event) {
    event.preventDefault();
    confirm("Do you want to add this track?");
    const newTrack: APISong = { ...entries };
    addSong(newTrack);
    clearInputsStatusOk();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label className={styles.label}>
          ID:
          <input
            type="text"
            value={entries.id}
            onChange={(event) =>
              setEntries({ ...entries, id: event.target.value })
            }
            readOnly
          />
        </label>
        <label className={styles.label}>
          Image:
          <input
            type="text"
            value={entries.imgSrc}
            onChange={(event) =>
              setEntries({ ...entries, imgSrc: event.target.value })
            }
          />
        </label>
        <label className={styles.label}>
          Title:
          <input
            type="text"
            value={entries.title}
            onChange={(event) =>
              setEntries({ ...entries, title: event.target.value })
            }
            required
          />
        </label>
        <label className={styles.label}>
          Artist:
          <input
            type="text"
            value={entries.artist}
            onChange={(event) =>
              setEntries({ ...entries, artist: event.target.value })
            }
            required
          />
        </label>
        <label className={styles.label}>
          Audio:
          <input
            type="text"
            value={entries.audioSrc}
            onChange={(event) =>
              setEntries({ ...entries, audioSrc: event.target.value })
            }
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
