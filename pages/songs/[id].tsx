import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { APISong, getSong } from "../../utils/api";
import styles from "../../styles/SongPage.module.css";
import SongPageHeader from "../../components/SongPageHeader";
import SongPlaying from "../../components/SongPlaying";
import SongControls from "../../components/SongControls";
import Head from "next/head";

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
      <Head>
        <title>
          {song.artist} - {song.title}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/d1f1f68cc2.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <SongPageHeader />
      <SongPlaying
        imgSrc={song.imgSrc}
        artist={song.artist}
        title={song.title}
      />
      <i className="fas fa-plus"></i>
      <SongControls audioSrc={song.audioSrc} />
    </div>
  );
}
