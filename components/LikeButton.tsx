import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import styles from "../styles/Toolbar.module.css";
import useLocalStorage from "../hooks/useLocalStorage";

export default function LikeButton() {
  const [heart, setHeart] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const [storedValue, setValue] = useLocalStorage("likedSong", "");

  useEffect(() => {
    if (typeof id !== "string" || heart === null) {
      return;
    }
    if (heart) {
      setValue(id);
    } else {
      setValue("");
    }
  }, [heart, id]);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    setHeart(id === storedValue);
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
