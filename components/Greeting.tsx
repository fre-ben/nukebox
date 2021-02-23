import { useEffect } from "react";
import styles from "../styles/greeting.module.css";

type Props = {
  name: string;
};

export default function Greeting(props: Props) {
  function VisitsCount() {
    if (typeof localStorage === "undefined") {
      return <div>localStorage is not supported by Server-Side-Rendering</div>;
    }
    const viewCounter = localStorage.getItem("visits");
    return viewCounter;
  }
  let counter = +VisitsCount();

  useEffect(() => {
    counter++;
    localStorage.setItem("visits", counter.toString());
  }, []);

  return (
    <>
      <p className={styles.hello}>
        Hello, <span className={styles.name}>{props.name}</span>
      </p>
      <p className={styles.counter}>
        You&apos;ve been here
        <span className={styles.counterNumber}> {counter}</span> times!
      </p>
    </>
  );
}
