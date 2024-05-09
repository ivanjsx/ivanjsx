// libraries 
import { FC } from "react";

// styles
import styles from "./app-footer.module.css";

// media 
import github from "../../media/github.svg";
import twitter from "../../media/twitter.svg";
import telegram from "../../media/telegram.svg";
import linkedin from "../../media/linkedin.svg";
import instagram from "../../media/instagram.svg";
import Contact from "../contact/contact";



const AppFooter: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.caption}>
        <span className={styles.linebreak}>
          This website is not finished and never will be.
        </span>
        Big hug to&nbsp;
        <a href="https://arnau.design" className={styles.link} target="_blank" rel="noreferrer">
          Arnau&nbsp;Ros
        </a>
        &nbsp;for the open&nbsp;
        <a href="https://figma.com/community/file/1059588617705355339" className={styles.link} target="_blank" rel="noreferrer">
          Figma&nbsp;Design
        </a>        
        &nbsp;of his personal website I used. Built with&nbsp;
        <a href="https://typescriptlang.org" className={styles.link} target="_blank" rel="noreferrer">
          TypeScript
        </a>
        &nbsp;and&nbsp;
        <a href="https://react.dev" className={styles.link} target="_blank" rel="noreferrer">
          Pure&nbsp;React
        </a>
        , hosted at&nbsp;
        <a href="https://cloud.google.com/products/compute" className={styles.link} target="_blank" rel="noreferrer">
          Google&nbsp;Cloud&nbsp;Platform
        </a>
        , deployed via SSH through&nbsp;
        <a href="https://docs.github.com/actions" className={styles.link} target="_blank" rel="noreferrer">
          GitHub&nbsp;Actions
        </a>
        . All text is set in the&nbsp;
        <a href="https://rsms.me/inter" className={styles.link} target="_blank" rel="noreferrer">
          Inter
        </a>
        &nbsp;typeface.
      </p>
      
      <ul className={styles.contacts}>
        <Contact link="https://t.me/justicewisdom" iconSrc={telegram} />
        <Contact link="https://github.com/ivanjsx" iconSrc={github} />
        <Contact link="https://linkedin.com/in/justicewisdom" iconSrc={linkedin} />
        <Contact link="https://twitter.com/ivanjsx" iconSrc={twitter} />
        <Contact link="https://instagram.com/justice_wisdom" iconSrc={instagram} />
      </ul>
    </footer>
  );
};

export default AppFooter;
