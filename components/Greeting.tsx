import { useEffect } from "react";
import styles from "../styles/greeting.module.css";

type Props = {
  name: string;
};

export default function Greeting(props: Props) {
  function getVisitsValue() {
    if (typeof localStorage === "undefined") {
      return <div>localStorage is not supported by Server-Side-Rendering</div>;
    }
    const storageVisitsValue = localStorage.getItem("visits");
    return storageVisitsValue;
  }
  let viewCounter = +getVisitsValue();

  useEffect(() => {
    viewCounter++;
    localStorage.setItem("visits", viewCounter.toString());
  }, []);

  return (
    <>
      <p className={styles.hello}>
        Hello, <span className={styles.name}>{props.name}</span>
      </p>
      <p className={styles.counter}>
        You&apos;ve been here
        <span className={styles.counterNumber}> {viewCounter}</span> times!
      </p>
    </>
  );
}
