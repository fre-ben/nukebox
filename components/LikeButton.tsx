import { useState } from "react";
import styles from "../styles/Toolbar.module.css";

export default function LikeButton() {
  const [heart, setHeart] = useState(false);

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
