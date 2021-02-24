import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import styles from "../styles/Toolbar.module.css";
import useLocalStorage from "../hooks/useLocalStorage";

export default function LikeButton() {
  const router = useRouter();
  const { id } = router.query;
  const [likedSongs, setLikedSongs] = useLocalStorage("likedSongs", []);
  const like = likedSongs.includes(id);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
  }, [id]);

  const handleLikeButtonClick = () => {
    if (like) {
      const newLikedSongs = likedSongs.filter((likedSong) => likedSong !== id);
      setLikedSongs(newLikedSongs);
    } else {
      setLikedSongs([...likedSongs, id]);
    }
  };

  return (
    <img
      onClick={handleLikeButtonClick}
      className={styles.heart}
      src={like ? "/heartOn.svg" : "/heartOff.svg"}
    />
  );
}
