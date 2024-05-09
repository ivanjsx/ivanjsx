// styles 
import styles from "./contact.module.css";



type PropsType = Readonly<{
  link: string;
  iconSrc: string;
}>;



function Contact({ link, iconSrc }: PropsType): JSX.Element {
  return (
    <li>
      <a href={link} className={styles.link} target="_blank" rel="noreferrer">
        <img src={iconSrc} alt="" className={styles.icon} />
      </a>
    </li>
  );
};

export default Contact;
