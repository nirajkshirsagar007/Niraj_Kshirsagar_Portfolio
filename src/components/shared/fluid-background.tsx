"use client";

import { useEffect, useRef } from "react";

export function HeroFluid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: -999, y: -999 };

    // 3 lazy blobs that lerp toward the mouse at different speeds
    const blobs = [
      { x: 0, y: 0, speed: 0.05, size: 160, hue: 195 },
      { x: 0, y: 0, speed: 0.03, size: 100, hue: 260 },
      { x: 0, y: 0, speed: 0.08, size: 70,  hue: 180 },
    ];

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;

    const draw = () => {
      raf = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const b of blobs) {
        b.x += (mouse.x - b.x) * b.speed;
        b.y += (mouse.y - b.y) * b.speed;

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.size);
        grad.addColorStop(0, `hsla(${b.hue}, 100%, 65%, 0.18)`);
        grad.addColorStop(1, `hsla(${b.hue}, 100%, 65%, 0)`);

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
