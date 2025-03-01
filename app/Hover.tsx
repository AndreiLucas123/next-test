"use client";

import Link from "next/link";
import { useState } from "react";

export default function Hover() {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`transition-colors duration-300 ${
        hover ? "text-blue-500" : "text-white"
      }`}
    >
      Hover me to go to counter{" "}
      {hover && (
        <Link className="text-green" href="/counter">
          Counter
        </Link>
      )}
    </div>
  );
}
