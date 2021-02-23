import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import styles from "../styles/Toolbar.module.css";

export default function LikeButton() {
  const [heart, setHeart] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (typeof id !== "string" || heart === null) {
      return;
    }
    if (heart) {
      localStorage.setItem("likedSong", id);
    } else {
      localStorage.removeItem("likedSong");
    }
  }, [heart, id]);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    setHeart(id === localStorage.getItem("likedSong"));
  }, [id]);

  const handleLikeButtonClick = () => {
    setHeart(!heart);
  };

  return (
    <img
      onClick={handleLikeButtonClick}
      className={styles.heart}
      src={heart ? "/heartOn.svg" : "/heartOff.svg"}
    />
  );
}
