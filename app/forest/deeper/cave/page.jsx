"use client";

import Scene from "../../../components/Scene";

export default function CavePage() {
  const scene = {
    title: "The Mysterious Cave",
    description:
      "You enter a dark cave. The air is damp, and you can hear the dripping of water echoing through the chambers.",
    options: [
      { text: "Explore the cave", path: "/forest/deeper/cave/explore" },
      { text: "Return to the forest", path: "/forest/deeper" },
    ],
  };

  return <Scene {...scene} />;
}
