import { useEffect, useState } from "react";
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

  const [viewCounter, setViewCounter] = useState(+getVisitsValue());

  useEffect(() => {
    const newViewCounter = viewCounter + 1;
    setViewCounter(newViewCounter);
    localStorage.setItem("visits", newViewCounter.toString());
  }, []);

  function resetViewCounter() {
    localStorage.removeItem("visits");
    setViewCounter(+getVisitsValue());
  }

  const viewCounterText = () => {
    if (typeof localStorage === "undefined") {
      return <div>localStorage is not supported by Server-Side-Rendering</div>;
    }
    if (localStorage.getItem("visits") === "1") {
      return (
        <p className={styles.counter}>
          You&apos;ve been here
          <span className={styles.counterNumber}> {viewCounter}</span> time!
        </p>
      );
    } else {
      return (
        <p className={styles.counter}>
          You&apos;ve been here
          <span className={styles.counterNumber}> {viewCounter}</span> times!
        </p>
      );
    }
  };

  return (
    <>
      <p className={styles.hello}>
        Hello, <span className={styles.name}>{props.name}</span>
      </p>
      {viewCounterText()}
      <button onClick={resetViewCounter}>X</button>
    </>
  );
}
