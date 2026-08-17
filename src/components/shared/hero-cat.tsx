"use client";

import { useEffect, useRef, useState, useCallback } from "react";

function TomSVG({ running }: { running: boolean }) {
  const dur = running ? "0.28s" : "0.55s";
  const legA = running ? { animation: `tomA ${dur} ease-in-out infinite`, transformOrigin: "0px 0px" } : { transformOrigin: "0px 0px" };
  const legB = running ? { animation: `tomB ${dur} ease-in-out infinite`, transformOrigin: "0px 0px" } : { transformOrigin: "0px 0px" };

  return (
    <svg viewBox="0 0 145 105" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <defs>
        <style>{`
          @keyframes tomA { 0%,100%{transform:rotate(-35deg)} 50%{transform:rotate(35deg)} }
          @keyframes tomB { 0%,100%{transform:rotate(35deg)}  50%{transform:rotate(-35deg)} }
        `}</style>
      </defs>

      {/* Tail - Fluffier */}
      <path d="M26 54 C2 46 -4 20 14 10 C24 4 36 12 28 22" stroke="#8899CC" strokeWidth="9" strokeLinecap="round" fill="none"/>

      {/* Far-back leg */}
      <g transform="translate(46,63)"><g style={legA}><path d="M-5,0 L-7,24 Q-5,33 0,33 Q5,33 7,24 L5,0 Z" fill="#7080AA" opacity="0.65"/></g></g>
      {/* Far-front leg */}
      <g transform="translate(82,63)"><g style={legB}><path d="M-5,0 L-7,24 Q-5,33 0,33 Q5,33 7,24 L5,0 Z" fill="#7080AA" opacity="0.75"/></g></g>

      {/* Body */}
      <ellipse cx="68" cy="53" rx="43" ry="21" fill="#8899CC"/>
      {/* Belly */}
      <ellipse cx="59" cy="57" rx="26" ry="14" fill="#C8D8F0"/>

      {/* Near-back leg */}
      <g transform="translate(53,63)"><g style={legB}><path d="M-5,0 L-7,24 Q-5,33 0,33 Q5,33 7,24 L5,0 Z" fill="#9AAAD0"/></g></g>
      {/* Near-front leg */}
      <g transform="translate(88,63)"><g style={legA}><path d="M-5,0 L-7,24 Q-5,33 0,33 Q5,33 7,24 L5,0 Z" fill="#9AAAD0"/></g></g>

      {/* Neck */}
      <path d="M90 40 L110 20 L110 50 Z" fill="#8899CC"/>

      {/* Head */}
      <circle cx="106" cy="34" r="22" fill="#8899CC"/>
      
      {/* Cheek Tufts (fluffy cat cheeks) */}
      <path d="M85 34 L75 30 L82 38 L73 40 L84 44 Z" fill="#8899CC"/>
      <path d="M127 34 L137 30 L130 38 L139 40 L128 44 Z" fill="#8899CC"/>

      {/* Pointy Cat Ears */}
      <polygon points="88,18 90,2 102,15" fill="#7080AA"/>
      <polygon points="110,15 122,2 124,18" fill="#7080AA"/>
      {/* Ear insides */}
      <polygon points="91,16 92,6 99,15" fill="#FFB0C0"/>
      <polygon points="113,15 120,6 121,16" fill="#FFB0C0"/>

      {/* Cat Eyes (Almond/Slit-like) */}
      <ellipse cx="98" cy="28" rx="6" ry="8" fill="white" transform="rotate(-10,98,28)"/>
      <ellipse cx="114" cy="28" rx="6" ry="8" fill="white" transform="rotate(10,114,28)"/>
      <ellipse cx="100" cy="29" rx="2" ry="5" fill="#1A3A0A"/>
      <ellipse cx="112" cy="29" rx="2" ry="5" fill="#1A3A0A"/>
      <circle cx="101" cy="27" r="1.5" fill="white"/>
      <circle cx="113" cy="27" r="1.5" fill="white"/>

      {/* Cat Nose (Small triangle) */}
      <polygon points="103,37 109,37 106,40" fill="#CC5566"/>

      {/* Cat Mouth (W shape) */}
      <path d="M106 40 Q101 44 98 42" stroke="#553344" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M106 40 Q111 44 114 42" stroke="#553344" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* Whiskers */}
      <line x1="120" y1="37" x2="140" y2="33" stroke="#AABBDD" strokeWidth="1.2" opacity="0.9"/>
      <line x1="120" y1="40" x2="142" y2="40" stroke="#AABBDD" strokeWidth="1.2" opacity="0.9"/>
      <line x1="120" y1="43" x2="138" y2="46" stroke="#AABBDD" strokeWidth="1.2" opacity="0.9"/>
      
      <line x1="92" y1="37" x2="72" y2="33" stroke="#AABBDD" strokeWidth="1.2" opacity="0.9"/>
      <line x1="92" y1="40" x2="70" y2="40" stroke="#AABBDD" strokeWidth="1.2" opacity="0.9"/>
      <line x1="92" y1="43" x2="74" y2="46" stroke="#AABBDD" strokeWidth="1.2" opacity="0.9"/>
    </svg>
  );
}

function JerrySVG({ running }: { running: boolean }) {
  const legA = running ? { animation: "jerryA 0.22s ease-in-out infinite", transformOrigin: "0px 0px" } : { transformOrigin: "0px 0px" };
  const legB = running ? { animation: "jerryB 0.22s ease-in-out infinite", transformOrigin: "0px 0px" } : { transformOrigin: "0px 0px" };

  return (
    <svg viewBox="0 0 95 88" xmlns="http://www.w3.org/2000/svg" overflow="visible">
      <defs>
        <style>{`
          @keyframes jerryA { 0%,100%{transform:rotate(-30deg)} 50%{transform:rotate(30deg)} }
          @keyframes jerryB { 0%,100%{transform:rotate(30deg)}  50%{transform:rotate(-30deg)} }
        `}</style>
      </defs>

      {/* Tail */}
      <path d="M17 54 C4 46 2 28 11 19 C16 13 23 17 19 25" stroke="#A0704A" strokeWidth="4.5" strokeLinecap="round" fill="none"/>

      {/* Far back leg */}
      <g transform="translate(30,63)"><g style={legA}><path d="M-4,0 L-5,19 Q-3,26 0,26 Q3,26 5,19 L4,0 Z" fill="#9B6B4A" opacity="0.65"/></g></g>
      {/* Far front leg */}
      <g transform="translate(58,63)"><g style={legB}><path d="M-4,0 L-5,19 Q-3,26 0,26 Q3,26 5,19 L4,0 Z" fill="#9B6B4A" opacity="0.75"/></g></g>

      {/* Body */}
      <ellipse cx="44" cy="54" rx="31" ry="21" fill="#B07A55"/>
      {/* Belly */}
      <ellipse cx="38" cy="58" rx="19" ry="14" fill="#D4A07A"/>

      {/* Near back leg */}
      <g transform="translate(36,63)"><g style={legB}><path d="M-4,0 L-5,19 Q-3,26 0,26 Q3,26 5,19 L4,0 Z" fill="#C08860"/></g></g>
      {/* Near front leg */}
      <g transform="translate(64,63)"><g style={legA}><path d="M-4,0 L-5,19 Q-3,26 0,26 Q3,26 5,19 L4,0 Z" fill="#C08860"/></g></g>

      {/* Head */}
      <circle cx="71" cy="36" r="21" fill="#B07A55"/>
      {/* Big round mouse ears */}
      <circle cx="61" cy="17" r="14" fill="#9B6B4A"/>
      <circle cx="79" cy="14" r="13" fill="#9B6B4A"/>
      <circle cx="61" cy="17" r="9" fill="#E8A090"/>
      <circle cx="79" cy="14" r="8.5" fill="#E8A090"/>
      {/* Eyes */}
      <circle cx="65" cy="32" r="6.5" fill="white"/>
      <circle cx="78" cy="30" r="6" fill="white"/>
      <circle cx="66.5" cy="33" r="3.8" fill="#1A1A30"/>
      <circle cx="79.5" cy="31" r="3.5" fill="#1A1A30"/>
      <circle cx="68" cy="32" r="1.8" fill="white"/>
      <circle cx="81" cy="30" r="1.8" fill="white"/>
      {/* Nose */}
      <ellipse cx="85" cy="39" rx="4" ry="3" fill="#CC3344"/>
      {/* Mouth */}
      <path d="M85 42 Q81 46 78 45" stroke="#553333" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      <path d="M85 42 Q89 46 92 45" stroke="#553333" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
      {/* Whiskers */}
      <line x1="85" y1="38" x2="95" y2="33" stroke="#D4A07A" strokeWidth="0.9" opacity="0.9"/>
      <line x1="85" y1="40" x2="95" y2="40" stroke="#D4A07A" strokeWidth="0.9" opacity="0.9"/>
      <line x1="85" y1="38" x2="74" y2="34" stroke="#D4A07A" strokeWidth="0.9" opacity="0.9"/>
      <line x1="85" y1="40" x2="74" y2="40" stroke="#D4A07A" strokeWidth="0.9" opacity="0.9"/>
    </svg>
  );
}

type CatState = "wander" | "chase" | "sit" | "idle";

export function HeroCat() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tomPos = useRef({ x: 200, y: 300 });
  const tomVel = useRef({ x: 0, y: 0 });
  const tomTarget = useRef({ x: 200, y: 300 });
  const tomState = useRef<CatState>("wander");
  const tomBob = useRef(0);
  const tomBobDir = useRef(1);
  const jerryPos = useRef({ x: -999, y: -999 });
  const lastJerryPos = useRef({ x: -999, y: -999 });
  const mouseInHero = useRef(false);
  const stateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef(0);

  const [tomRender, setTomRender] = useState({ x: 200, y: 300, facing: 1, running: false });
  const [jerryRender, setJerryRender] = useState({ x: -999, y: -999, visible: false, facing: 1, running: false });

  const getBounds = useCallback(() => {
    const el = containerRef.current;
    if (!el) return { w: 900, h: 500 };
    return { w: el.offsetWidth, h: el.offsetHeight };
  }, []);

  const pickTarget = useCallback(() => {
    const { w, h } = getBounds();
    const mx = 100; const my = 80;
    tomTarget.current = {
      x: mx + Math.random() * (w - mx * 2),
      y: my + Math.random() * (h - my * 2),
    };
  }, [getBounds]);

  const scheduleWander = useCallback(() => {
    if (stateTimer.current) clearTimeout(stateTimer.current);
    stateTimer.current = setTimeout(() => {
      if (mouseInHero.current) return;
      const r = Math.random();
      if (r < 0.25) {
        tomState.current = "sit";
        stateTimer.current = setTimeout(() => {
          tomState.current = "wander"; pickTarget(); scheduleWander();
        }, 1800 + Math.random() * 2500);
      } else {
        tomState.current = "wander"; pickTarget(); scheduleWander();
      }
    }, 1500 + Math.random() * 3000);
  }, [pickTarget]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const { w, h } = getBounds();
    tomPos.current = { x: w * 0.2, y: h * 0.65 };
    pickTarget(); scheduleWander();

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      jerryPos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onEnter = () => { mouseInHero.current = true; tomState.current = "chase"; if (stateTimer.current) clearTimeout(stateTimer.current); };
    const onLeave = () => { mouseInHero.current = false; jerryPos.current = { x: -999, y: -999 }; tomState.current = "wander"; pickTarget(); scheduleWander(); };

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);
    container.addEventListener("mousemove", onMove);

    const loop = () => {
      const state = tomState.current;
      const pos = tomPos.current;
      const vel = tomVel.current;
      const target = state === "chase" ? jerryPos.current : tomTarget.current;
      const dx = target.x - pos.x;
      const dy = target.y - pos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const stopDist = state === "chase" ? 80 : 8;
      const accel = state === "chase" ? 0.22 : 0.10;
      const friction = state === "chase" ? 0.84 : 0.78;

      if (dist > stopDist && state !== "sit") {
        const nx = dx / dist; const ny = dy / dist;
        vel.x += nx * accel; vel.y += ny * accel;
      }
      const maxSpeed = state === "chase" ? 4.5 : 2.2;
      const spd = Math.sqrt(vel.x ** 2 + vel.y ** 2);
      if (spd > maxSpeed) { vel.x = (vel.x / spd) * maxSpeed; vel.y = (vel.y / spd) * maxSpeed; }
      vel.x *= friction; vel.y *= friction;
      pos.x += vel.x; pos.y += vel.y;

      const { w, h } = getBounds();
      pos.x = Math.max(60, Math.min(w - 60, pos.x));
      pos.y = Math.max(50, Math.min(h - 50, pos.y));

      const actuallyMoving = spd > 0.4;
      if (actuallyMoving) {
        tomBob.current += tomBobDir.current * (state === "chase" ? 0.5 : 0.25);
        if (Math.abs(tomBob.current) > (state === "chase" ? 5 : 3)) tomBobDir.current *= -1;
      } else { tomBob.current *= 0.75; }

      const jvis = mouseInHero.current && jerryPos.current.x > -900;
      
      const mouseDx = jerryPos.current.x - lastJerryPos.current.x;
      const mouseDy = jerryPos.current.y - lastJerryPos.current.y;
      const mouseSpeed = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
      const jerryRunning = mouseSpeed > 0.5;
      lastJerryPos.current = { ...jerryPos.current };

      setTomRender({ x: pos.x, y: pos.y + tomBob.current, facing: vel.x >= 0 ? 1 : -1, running: actuallyMoving });
      setJerryRender({ x: jerryPos.current.x, y: jerryPos.current.y, visible: jvis, facing: 1, running: jerryRunning });
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      container.removeEventListener("mousemove", onMove);
      if (stateTimer.current) clearTimeout(stateTimer.current);
    };
  }, [getBounds, pickTarget, scheduleWander]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-visible pointer-events-auto"
      style={{ cursor: jerryRender.visible ? "none" : "auto", zIndex: 20 }}
    >
      {/* Tom */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          left: tomRender.x,
          top: tomRender.y,
          width: 130,
          height: 105,
          transform: `translate(-50%,-60%) scaleX(${tomRender.facing})`,
          filter: "drop-shadow(0 8px 14px rgba(0,0,0,0.55))",
        }}
      >
        <TomSVG running={tomRender.running} />
      </div>

      {/* Jerry at cursor */}
      {jerryRender.visible && (
        <div
          className="absolute pointer-events-none select-none"
          style={{
            left: jerryRender.x,
            top: jerryRender.y,
            width: 45,
            height: 42,
            transform: "translate(-50%,-60%)",
            filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.5))",
            zIndex: 30,
          }}
        >
          <JerrySVG running={jerryRender.running} />
        </div>
      )}
    </div>
  );
}
