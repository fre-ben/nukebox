import styles from "../styles/Toolbar.module.css";
import useLocalStorage from "../hooks/useLocalStorage";

type Props = {
  id: string;
};

export default function LikeButton({ id }: Props) {
  const [likedSongs, setLikedSongs] = useLocalStorage("likedSongs", []);
  const liked = likedSongs.includes(id);

  const handleLikeButtonClick = () => {
    const newestLikedSongs = JSON.parse(localStorage.getItem("likedSongs"));
    if (liked) {
      const newLikedSongs = newestLikedSongs.filter(
        (likedSong) => likedSong !== id
      );
      setLikedSongs(newLikedSongs);
    } else {
      setLikedSongs([...newestLikedSongs, id]);
    }
  };

  return (
    <img
      onClick={handleLikeButtonClick}
      className={styles.heart}
      src={liked ? "/heartOn.svg" : "/heartOff.svg"}
    />
  );
}
