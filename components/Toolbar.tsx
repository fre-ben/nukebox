import { ReactNode } from "react";
import styles from "../styles/Toolbar.module.css";

type Props = {
  children: ReactNode;
};

export default function Toolbar({ children }: Props) {
  return (
    <div className={styles.container}>
      <img className={styles.plus} src="/plus.svg" />
      {children}
      <img className={styles.share} src="/share.svg" />
    </div>
  );
}
