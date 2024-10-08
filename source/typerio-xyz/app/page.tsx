import { Typerio } from "typerio-react";
import { TyperioConfig, TyperioInput } from "typerio-react/dist/Typerio";
import PageNavbar from "@/components/MainPageNavbar";
import InstallLink from "@/components/InstallLink";

//import "@/styles/global.scss";
import styles from "@/styles/home.module.css";

export default function Home() {
  const typerioConfig: TyperioConfig = {
    frames: ["", "_"],
    speed: 55,
  };

  const topObjects: TyperioInput[] = [
    {
      text: "Typerio ",
      style: `${styles.typerio}`,
      element: "h1",
    },
  ];

  const typerio = {
    npmLink: "https://www.npmjs.com/package/typerio",
    gitLink: "https://github.com/Truezeber/typerio",
  };

  const typerioReact = {
    npmLink: "https://www.npmjs.com/package/typerio-react",
    gitLink: "https://github.com/Truezeber/typerio-react",
  };
  return (
    <>
      <PageNavbar />
      <div className={styles.titleWrapper}>
        <Typerio input={[topObjects, typerioConfig]} />
      </div>
      <div className={styles.titleWrapper}>
        <p className={styles.subtitleText}>
          Simple and easy-to-use npm package for creating typing-like animations
          with React and TypeScript support!
        </p>
      </div>
      <div className={styles.cards}>
        <InstallLink
          name={"HTML"}
          iconLink={"/icon--html.svg"}
          command={"npm i typerio"}
          npmLink={typerio.npmLink}
          gitLink={typerio.gitLink}
        />
        <InstallLink
          name={"React"}
          iconLink={"/icon--react.svg"}
          command={"npm i typerio-react"}
          npmLink={typerioReact.npmLink}
          gitLink={typerioReact.gitLink}
        />
      </div>
    </>
  );
}
