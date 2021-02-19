import { useState } from "react";
import styles from "../styles/Toolbar.module.css";

export default function Toolbar() {
  const [heart, setHeart] = useState(false);

  const handleLikeButtonClick = () => {
    setHeart(!heart);
  };

  return (
    <div className={styles.container}>
      <img src="/plus.svg" />
      <img
        onClick={handleLikeButtonClick}
        className={styles.heart}
        src={heart ? "/heartOn.svg" : "/heartOff.svg"}
      />
    </div>
  );
}
