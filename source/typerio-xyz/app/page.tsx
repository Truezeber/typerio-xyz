import { Typerio } from "typerio-react";
import { TyperioConfig, TyperioInput } from "typerio-react/dist/Typerio";

export default function Home() {
  const typerioConfig: TyperioConfig = {
    frames: ["", "_"],
    speed: 50,
  };

  const topObjects: TyperioInput[] = [
    {
      text: "Typerio",
      style: "typerio-title",
      element: "h1",
    },
    {
      text: "Simple and easy-to-use npm package for creating such animations!",
      style: "typerio-description",
      element: "p",
    },
  ];
  return (
    <div className="">
      <Typerio input={[topObjects, typerioConfig]} />
    </div>
  );
}
