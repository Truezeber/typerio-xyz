import { Typerio } from "typerio-react";
import { TyperioConfig, TyperioInput } from "typerio-react/dist/Typerio";
import InstallLink from "@/components/InstallLink";
import PageNavbar from "@/components/MainPageNavbar";

import "@/styles/home.scss";
import "@/styles/_global.scss";

export default function Home() {
  const typerioConfig: TyperioConfig = {
    frames: ["", "_"],
    speed: 55,
  };

  const topObjects: TyperioInput[] = [
    {
      text: "Typerio ",
      style: "title-text",
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
      <div className="title-wrapper">
        <Typerio input={[topObjects, typerioConfig]} />
      </div>
      <div className="subtitle-wrapper">
        <p className="subtitle-text">
          Simple and easy-to-use npm package for creating typing-like animations
          with React and TypeScript support!
        </p>
      </div>
      <div className="cards">
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
