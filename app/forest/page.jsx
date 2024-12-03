"use client";

import Scene from "../components/Scene";

export default function ForestPage() {
  const scene = {
    title: "The Dark Forest",
    description: "The forest is dense and full of unknown creatures.",
    options: [
      { text: "Explore deeper", path: "/forest/deeper" },
      { text: "Return to the crossroads", path: "/intro" },
    ],
  };

  return <Scene {...scene} />;
}
