// libraries 
import { FC } from "react";

// styles
import styles from "./app-header.module.css";



const AppHeader: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>
        Ivan Shanin
      </h1>
      <a href="/" download="IvanShaninCV.pdf" className={styles.link}>
        <button className={styles.download}>
          Download CV
        </button>
      </a>
    </header>
  );
};

export default AppHeader;
