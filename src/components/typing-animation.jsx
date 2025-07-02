"use client";

import { useState, useEffect } from "react";

export function TypingAnimation({ text, speed = 100 }) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (typedText.length < text.length) {
      const timeout = setTimeout(() => {
        setTypedText(text.slice(0, typedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [typedText, text, speed]);

  return (
    <div className="text-gray-300 font-mono">
      {typedText}
      <span className="animate-pulse">|</span>
    </div>
  );
}
