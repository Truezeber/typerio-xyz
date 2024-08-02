import { Typerio } from "typerio-react";
import { TyperioConfig, TyperioInput } from "typerio-react/dist/Typerio";
import InstallLink from "@/components/InstallLink";
import "@/styles/home.scss";

export default function Home() {
  const typerioConfig: TyperioConfig = {
    frames: ["", "_"],
    speed: 50,
  };

  const topObjects: TyperioInput[] = [
    {
      text: "Typerio⌨️",
      style: "typerio-title",
      element: "h1",
    },
    {
      text: "Simple and easy-to-use npm package for creating such animations!",
      style: "typerio-description",
      element: "p",
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
      <div className="title-wrapper">
        <h1 className="title-text">Typerio</h1>
      </div>
      <div className="subtitle-wrapper">
        <p className="subtitle-text">
          Simple and easy-to-use npm package for creating typing animations!
        </p>
      </div>
      <div className="cards">
        <InstallLink
          name={"HTML"}
          command={"npm i typerio"}
          npmLink={typerio.npmLink}
          gitLink={typerio.gitLink}
        />
        <InstallLink
          name={"React"}
          command={"npm i typerio-react"}
          npmLink={typerioReact.npmLink}
          gitLink={typerioReact.gitLink}
        />
      </div>
    </>
  );
}
