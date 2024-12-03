"use client";

import Scene from "../components/Scene";

export default function IntroPage() {
  const scene = {
    title: "Welcome to the Adventure",
    description: "You stand at a crossroads in a mystical land.",
    options: [
      { text: "Enter the forest", path: "/forest" },
      { text: "Approach the castle", path: "/castle" },
    ],
  };

  return <Scene {...scene} />;
}
