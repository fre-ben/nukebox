import styles from "../styles/SongControls.module.css";

type Props = {
  audioSrc: string;
};

export default function SongControls(props: Props) {
  return (
    <div className={styles.controls}>
      <audio controls src={props.audioSrc}>
        Test
      </audio>
    </div>
  );
}
