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
      <div className="top section">
        <Typerio input={[topObjects, typerioConfig]} />
      </div>
      <div className="topmid section">
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
      <div className="botmid section">
        <h2>Looks interesting?</h2>
        <div className="wrapper">
          <a href="/docs">
            <p>Typerio docs⛓️</p>
          </a>
          <a href="/docs/typerio">
            <p>Typerio guide⛓️</p>
          </a>
          <a href="/docs/typerio-react">
            <p>Typerio-react guide⛓️</p>
          </a>
        </div>
      </div>
    </>
  );
}
