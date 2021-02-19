import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { APISong, getSong } from "../../utils/api";
import styles from "../../styles/SongPage.module.css";
import SongPageHeader from "../../components/SongPageHeader";
import SongPlaying from "../../components/SongPlaying";
import SongControls from "../../components/SongControls";

export default function Song() {
  const router = useRouter();
  const { id } = router.query;

  const [song, setSong] = useState<APISong>(null);

  useEffect(() => {
    console.log(id);
    if (typeof id !== "string") {
      return;
    }
    getSong(id).then((newSong) => {
      setSong(newSong);
    });
  }, [id]);

  if (!song) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <SongPageHeader />
      <SongPlaying
        imgSrc={song.imgSrc}
        artist={song.artist}
        title={song.title}
      />
      <SongControls audioSrc={song.audioSrc} />
    </div>
  );
}
