"use client";

import Scene from "@components/Scene";

export default function CastleEntrancePage() {
  const scene = {
    title: "Castle Entrance",
    description:
      "You step into the castle entrance. It is eerily quiet and dark.",
    options: [
      { text: "Explore the main hall", path: "/castle/hall" },
      { text: "Exit the castle", path: "/castle" },
    ],
  };

  return <Scene {...scene} />;
}
