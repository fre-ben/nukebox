import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { APISong, getSong } from "../../utils/api";
import styles from "../../styles/SongPage.module.css";
import SongPageHeader from "../../components/SongPageHeader";

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

      <div>
        <img src={song.imgSrc} className={styles.image}></img>
        <p>Title: {song.title}</p>
        <p>Artist: {song.artist}</p>
      </div>
    </div>
  );
}
