"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.body.style.overflow = "";
      setHidden(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div className="transition_screen" />
      <div className={`preloader_wrap ${hidden ? "is-hidden" : ""}`}>
        <div className="preloader_contain">
          <div className="preloader_content">
            <div className="preloader_oh">OH</div>
            <div className="preloader_text u-text-small">
              (Architecture + Interior Design Studio)
            </div>
          </div>
          <svg
            className="preloader_spinner"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1C5.477 1 1 5.477 1 11s4.477 10 10 10 10-4.477 10-10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="preloader_line" />
      </div>
    </>
  );
}
