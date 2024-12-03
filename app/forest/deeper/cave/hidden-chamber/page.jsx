"use client";

import Scene from "../../../../components/Scene";

export default function HiddenChamberPage() {
  const scene = {
    title: "Hidden Chamber",
    description:
      "Behind a rock formation, you discover a hidden chamber filled with ancient artifacts.",
    options: [
      {
        text: "Investigate the artifacts",
        path: "/forest/deeper/cave/hidden-chamber/artifacts",
      },
      { text: "Leave the chamber", path: "/forest/deeper/cave" },
    ],
  };

  return <Scene {...scene} />;
}
