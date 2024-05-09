// libraries 
import { FC, RefObject, useMemo, useRef } from "react";

// styles 
import styles from "./home.module.css";

// components 
import Intro from "../../components/intro/intro";
import ProjectGallery from "../../components/project-gallery/project-gallery";



const HomePage: FC = () => {
  
  const backendProjectsRef = useRef<HTMLDivElement>(null);
  const frontendProjectsRef = useRef<HTMLDivElement>(null);
  
  const scrollIntoSection = useMemo<(sectionRef: RefObject<HTMLDivElement>) => () => void>(
    () => (sectionRef: RefObject<HTMLDivElement>) => () => {
      sectionRef.current!.scrollIntoView({ behavior: "smooth" });
    },
    []
  );  
  
  return (
    <main className={styles.container}>
      <Intro
        scrollTo={frontendProjectsRef}
        scrollHandler={scrollIntoSection}
      />
      <ProjectGallery 
        ref={frontendProjectsRef}
        stack="frontend"
        title="Selected Frontend Projects" 
      />
      <ProjectGallery 
        ref={backendProjectsRef}
        stack="backend"
        title="Selected Backend Projects" 
      />
    </main>
  );
};

export default HomePage;
