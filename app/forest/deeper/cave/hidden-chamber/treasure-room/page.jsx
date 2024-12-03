"use client";

import Scene from "../../../../../components/Scene";

export default function TreasureRoomPage() {
  const scene = {
    title: "Treasure Room",
    description:
      "You find a room glittering with gold and jewels. This must be the treasure room!",
    options: [
      {
        text: "Take some treasure",
        path: "/forest/deeper/cave/hidden-chamber/treasure-room/take",
      },
      { text: "Exit the cave", path: "/forest/deeper" },
    ],
  };

  return <Scene {...scene} />;
}
