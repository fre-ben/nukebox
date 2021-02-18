import Head from "next/head";
import { useEffect, useState } from "react";
import Greeting from "../components/Greeting";
import SongItem from "../components/SongItem";
import styles from "../styles/Home.module.css";
import { getSongs } from "../utils/api";

export default function Home() {
  const [songs, setSongs] = useState<APISong[]>([]);

  useEffect(() => {
    console.log("Homepage is mounted");
    getSongs().then((newSongs) => {
      setSongs(newSongs);
    });
  }, []);

  // Alternative für useEffect():
  // async function doFetch() {
  //   const newSongs = await getSongs();
  //   setSongs(newSongs);
  // }
  // doFetch();

  const songItems = songs.map((song) => (
    <SongItem
      key={`${song.artist}-${song.title}`}
      imgSrc={song.imgSrc}
      artist={song.artist}
      title={song.title}
    />
  ));

  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting name="Freddy" />
      <ul className={styles.list}>{songItems}</ul>
    </div>
  );
}
