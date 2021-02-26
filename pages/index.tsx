import Head from "next/head";
import { useEffect, useState } from "react";
import Greeting from "../components/Greeting";
import SongItem from "../components/SongItem";
import styles from "../styles/Home.module.css";
import { APISong, deleteSong, getSongs } from "../utils/api";
import Link from "next/link";
import LikeButton from "../components/LikeButton";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {
  const [songs, setSongs] = useState<APISong[]>([]);
  const [likedSongs] = useLocalStorage("likedSongs", []);

  function refreshSongs() {
    getSongs().then((newSongs) => {
      setSongs(newSongs);
    });
  }

  useEffect(() => {
    console.log("Homepage is mounted");
    refreshSongs();
  }, []);

  async function handleDeleteSong(id: string) {
    await deleteSong(id);
    refreshSongs();
  }

  const songItems = songs.map((song) => (
    <div className={styles.songItemContainer} key={song.id}>
      <Link href={`/songs/${song.id}`}>
        <a className={styles.aContainer}>
          <SongItem
            imgSrc={song.imgSrc}
            artist={song.artist}
            title={song.title}
          />
        </a>
      </Link>
      <div className={styles.likeButton}>
        <LikeButton id={song.id} />
      </div>
      <button
        onClick={() => handleDeleteSong(song.id)}
        className={styles.deleteButton}
      >
        🧻
      </button>
    </div>
  ));

  function getImagesByLikedSongs() {
    const likedSongsById = songs.filter((song) => likedSongs.includes(song.id));
    return likedSongsById.map((song) => (
      <img className={styles.likedImg} src={song.imgSrc} key={song.title}></img>
    ));
  }

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
      <p>Liked Songs:</p>
      <div className={styles.likedImgContainer}>{getImagesByLikedSongs()}</div>
    </div>
  );
}
