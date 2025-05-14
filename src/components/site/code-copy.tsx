"use client";
import { Check, Clipboard } from "lucide-react";
import React, { useState } from "react";

const CodeCopy = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <button
      onClick={copyCode}
      className="absolute top-4 right-5 cursor-pointer z-20 p-2"
    >
      <div
        className={`absolute inset-0 transform transition-all duration-300 ${
          copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <Clipboard className="h-4 w-4 text-zinc-50" />
      </div>
      <div
        className={`absolute inset-0 transform transition-all duration-300 ${
          copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <Check className="h-4 w-4 text-zinc-50" />
      </div>
    </button>
  );
};

export default CodeCopy;
