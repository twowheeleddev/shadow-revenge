"use client";

import Scene from "@components/Scene";

export const metadata = {
  title: "Forest Scene",
  description:
    "Explore the mysterious dark forest in this text adventure game.",
};

export default function CastlePage() {
  const scene = {
    title: "The Mysterious Castle",
    description: "An old castle stands tall with its gates slightly ajar.",
    options: [
      { text: "Enter the castle", path: "/castle/entrance" },
      { text: "Return to the crossroads", path: "/intro" },
    ],
  };

  return <Scene {...scene} />;
}
