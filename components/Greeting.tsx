import styles from "../styles/greeting.module.css";

type Props = {
  name: string;
};

export default function Greeting(props: Props) {
  return (
    <>
      <p className={styles.hello}>
        Hello, <span className={styles.name}>{props.name}</span>
      </p>
      <p className={styles.counter}>
        You&apos;ve been here
        <span className={styles.counterNumber}> 11</span> times!
      </p>
    </>
  );
}
