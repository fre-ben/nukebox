import Head from "next/head";
import { useEffect, useState } from "react";
import Greeting from "../components/Greeting";
import SongItem from "../components/SongItem";
import styles from "../styles/Home.module.css";
import { APISong, getSongs } from "../utils/api";
import Link from "next/link";

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
    <Link href={`/songs/${song.id}`} key={song.id}>
      <a>
        <SongItem
          imgSrc={song.imgSrc}
          artist={song.artist}
          title={song.title}
        />
      </a>
    </Link>
  ));

  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/d1f1f68cc2.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Greeting name="Freddy" />
      <ul className={styles.list}>{songItems}</ul>
    </div>
  );
}
