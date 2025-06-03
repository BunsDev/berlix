import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex items-center justify-between py-4 text-sm font-medium text-zinc-500 dark:text-zinc-300">
      <span>© 2025 Spectrum UI. All rights reserved.</span>
      <span>
        built with 🔥 by{" "}
        <Link
          href="https://x.com/rechesoares13"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Reche
        </Link>
      </span>
    </div>
  );
};
