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
  const [visitsValueIsOne, setVisitsValueIsOne] = useState(false);

  useEffect(() => {
    const newViewCounter = viewCounter + 1;
    setViewCounter(newViewCounter);
    localStorage.setItem("visits", newViewCounter.toString());
    checkVisitsValue();
  }, []);

  function resetViewCounter() {
    localStorage.removeItem("visits");
    setViewCounter(+getVisitsValue());
  }

  function checkVisitsValue() {
    if (localStorage.getItem("visits") === "1") {
      setVisitsValueIsOne(true);
    }
  }

  return (
    <>
      <p className={styles.hello}>
        Hello, <span className={styles.name}>{props.name}</span>
      </p>
      <p className={styles.counter}>
        You&apos;ve been here
        <span className={styles.counterNumber}> {viewCounter}</span>{" "}
        {visitsValueIsOne ? "time" : "times"}
      </p>
      <button className={styles.viewResetButton} onClick={resetViewCounter}>
        Reset View Count
      </button>
    </>
  );
}
