import Head from "next/head";
import Greeting from "../components/Greeting";
import SongItem from "../components/SongItem";
import styles from "../styles/Home.module.css";

export default function Home() {
  const songs = [
    {
      artist: "Thy Art Is Murder",
      title: "Human Target",
      imgSrc:
        "https://images.unsplash.com/photo-1599689019338-50deb475f380?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      artist: "Northlane",
      title: "Bloodline",
      imgSrc:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=527&q=80",
    },
    {
      artist: "Fit For An Autopsy",
      title: "The Sea Of Tragic Beasts",
      imgSrc:
        "https://images.unsplash.com/photo-1551506247-d223ad69c414?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

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
