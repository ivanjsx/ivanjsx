// libraries 
import { FC } from "react";

// styles 
import styles from "./home.module.css";



const HomePage: FC = () => {
  return (
    <main>
      <section className={styles.intro}>
        <p className={styles.text}>
          I'm Ivan Shanin, a full-stack web developer based in Barcelona.
          Below are some of the things I've built.
        </p>
      </section>
    </main>
  );
}

export default HomePage;
