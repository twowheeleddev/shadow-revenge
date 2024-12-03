"use client";

import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import GameLink from "./GameLink";
import { scenePropTypes } from "../../propTypes";

export default function Scene({ title, description, options }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`p-4 theme-${theme}`}>
      {/* Scene Title */}
      <h1 className="text-2xl font-bold">{title}</h1>
      {/* Scene Description */}
      <p className="mt-2">{description}</p>
      {/* Scene Options */}
      <div className="mt-4">
        {options.map((option, index) => (
          <div key={index} className="mb-2">
            <GameLink text={option.text} path={option.path} />
          </div>
        ))}
      </div>
    </div>
  );
}

Scene.propTypes = scenePropTypes;
