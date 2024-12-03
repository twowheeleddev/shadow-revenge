"use client";

import Scene from "../../components/Scene";

export default function ForestDeeperPage() {
  const scene = {
    title: "Deeper into the Forest",
    description:
      "You venture deeper and the light fades. You hear strange noises around you.",
    options: [
      { text: "Investigate the noises", path: "/forest/noises" },
      { text: "Run back to safety", path: "/forest" },
    ],
  };

  return <Scene {...scene} />;
}
