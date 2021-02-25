import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { APISong, getSong } from "../../utils/api";
import styles from "../../styles/SongPage.module.css";
import SongPageHeader from "../../components/SongPageHeader";
import SongPlaying from "../../components/SongPlaying";
import SongControls from "../../components/SongControls";
import Head from "next/head";
import Toolbar from "../../components/Toolbar";
import CustomPlayer from "../../components/CustomPlayer";
import LikeButton from "../../components/LikeButton";

export default function Song() {
  const router = useRouter();
  const { id: idQuery } = router.query;
  if (!idQuery) {
    return null;
  }
  const id = typeof idQuery === "string" ? idQuery : idQuery[0];
  const [song, setSong] = useState<APISong>(null);

  useEffect(() => {
    console.log(id);
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
      </Head>
      <SongPageHeader />
      <SongPlaying {...song} />
      <Toolbar>
        <LikeButton id={id} />
      </Toolbar>
      <SongControls audioSrc={song.audioSrc} />
      <CustomPlayer src={song.audioSrc} />
    </div>
  );
}
