import styles from "../styles/SongControls.module.css";

type Props = {
  audioSrc: string;
};

export default function SongControls(props: Props) {
  return (
    <audio controls src={props.audioSrc}>
      Test
    </audio>
  );
}
