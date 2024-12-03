"use client";

import Link from "next/link";
import { GameLinkPropTypes } from "../../propTypes/index";

export default function GameLink({ text, path }) {
  return (
    <Link href={path}>
      {/* Link component for navigation */}
      <a className="text-blue-500 hover:underline">{text}</a>
    </Link>
  );
}

GameLink.propTypes = GameLinkPropTypes;
