"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [mouse, setMouse] = useState({ x: -999, y: -999 });
  const [cat, setCat] = useState({ x: -999, y: -999 });
  const [catAngle, setCatAngle] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const catPos = useRef({ x: -999, y: -999 });
  const mousePos = useRef({ x: -999, y: -999 });
  const rafRef = useRef(0);
  const runTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setMouse({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      setIsRunning(true);
      if (runTimerRef.current) clearTimeout(runTimerRef.current);
      runTimerRef.current = setTimeout(() => setIsRunning(false), 150);
    };

    const onLeave = () => setIsVisible(false);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    // Lerp cat toward mouse
    const loop = () => {
      const dx = mousePos.current.x - catPos.current.x;
      const dy = mousePos.current.y - catPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Only move cat if far enough from mouse (keeps gap between them)
      if (dist > 40) {
        catPos.current.x += dx * 0.08;
        catPos.current.y += dy * 0.08;

        // Angle cat faces toward the mouse
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        setCatAngle(angle);
      }

      setCat({ x: catPos.current.x, y: catPos.current.y });
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (runTimerRef.current) clearTimeout(runTimerRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mouse cursor emoji — exact position */}
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block select-none"
        style={{
          left: mouse.x - 12,
          top: mouse.y - 12,
          fontSize: "24px",
          lineHeight: 1,
          filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))",
          transform: "scaleX(-1)",
        }}
      >
        🐭
      </div>

      {/* Cat — lags behind, faces toward mouse, bounces while running */}
      <div
        className="fixed pointer-events-none z-[9998] hidden md:block select-none"
        style={{
          left: cat.x - 16,
          top: cat.y - 16,
          fontSize: "28px",
          lineHeight: 1,
          transform: `rotate(${catAngle}deg)`,
          transition: "transform 0.1s ease",
          filter: "drop-shadow(0 0 4px rgba(255,200,100,0.5))",
          animation: isRunning ? "catRun 0.25s steps(2) infinite" : "none",
        }}
      >
        🐱
      </div>

      <style>{`
        @keyframes catRun {
          0%   { margin-top: 0px; }
          50%  { margin-top: -4px; }
          100% { margin-top: 0px; }
        }
      `}</style>
    </>
  );
}
