"use client";

import { useState, useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export default function Game() {
  // Access theme from ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  // State to manage the game's current state or scene
  const [scene, setScene] = useState("intro");

  // Function to handle user choices and navigate scenes
  const handleChoice = (choice) => {
    // Update the scene based on the choice
    setScene(choice);
  };

  // Render different content based on the current scene
  return (
    <div className={`game-container theme-${theme}`}>
      {/* Display the current scene's narrative */}
      {scene === "intro" && (
        <div>
          <p>Welcome to the adventure!</p>
          <button onClick={() => handleChoice("forest")}>
            Enter the forest
          </button>
          <button onClick={() => handleChoice("castle")}>
            Approach the castle
          </button>
        </div>
      )}

      {/* Additional scenes */}
      {scene === "forest" && (
        <div>
          <p>You are in a dark forest.</p>
          <button onClick={() => handleChoice("intro")}>Go back</button>
        </div>
      )}

      {scene === "castle" && (
        <div>
          <p>You stand before an old castle.</p>
          <button onClick={() => handleChoice("intro")}>Go back</button>
        </div>
      )}

      {/* Button to toggle theme */}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
