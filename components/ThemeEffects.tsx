"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../context/ThemeContext";
import type { Container, ISourceOptions } from "@tsparticles/engine";

export default function ThemeEffects() {
  const { activeTheme } = useTheme();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesConfig = useMemo((): ISourceOptions | null => {
    switch (activeTheme) {

      /* ─────────────── SUMMER BLAZE ─────────────── */
      case "summer":
        return {
          fpsLimit: 60,
          background: { color: { value: "transparent" } },
          particles: {
            color: { value: ["#FF9F0A", "#FFD700", "#FF6B35", "#FFF3B0"] },
            move: {
              direction: "top",
              enable: true,
              outModes: { default: "out" },
              random: true,
              speed: { min: 0.5, max: 2 },
              straight: false,
              warp: false,
            },
            number: { density: { enable: true, width: 1920 }, value: 80 },
            opacity: {
              value: { min: 0.05, max: 0.6 },
              animation: { enable: true, speed: 0.8, startValue: "random", sync: false },
            },
            shape: { type: "circle" },
            size: {
              value: { min: 1, max: 6 },
              animation: { enable: true, speed: 1.5, startValue: "random", sync: false },
            },
          },
          detectRetina: true,
        };

      /* ─────────────── ARCTIC FROST ─────────────── */
      case "winter":
        return {
          fpsLimit: 60,
          background: { color: { value: "transparent" } },
          particles: {
            color: { value: ["#ffffff", "#C8E8F8", "#A8D4F0", "#E0F4FF"] },
            move: {
              direction: "bottom",
              enable: true,
              outModes: { default: "out" },
              random: true,
              speed: { min: 0.5, max: 3 },
              straight: false,
            },
            number: { density: { enable: true, width: 1920 }, value: 220 },
            opacity: {
              value: { min: 0.2, max: 0.9 },
              animation: { enable: true, speed: 0.5, startValue: "random", sync: false },
            },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
            wobble: { enable: true, distance: 8, speed: { min: -2, max: 2 } },
          },
          detectRetina: true,
        };

      /* ─────────────── CHRISTMAS EVE ─────────────── */
      case "christmas":
        return {
          fpsLimit: 60,
          background: { color: { value: "transparent" } },
          particles: {
            color: { value: ["#ffffff", "#FFD700", "#FF0000", "#00CC44", "#FF8888"] },
            move: {
              direction: "bottom",
              enable: true,
              outModes: { default: "out" },
              random: true,
              speed: { min: 1, max: 3.5 },
              straight: false,
            },
            number: { density: { enable: true, width: 1920 }, value: 180 },
            opacity: {
              value: { min: 0.4, max: 1 },
              animation: { enable: true, speed: 1, startValue: "random", sync: false },
            },
            shape: { type: ["circle", "star"] },
            size: { value: { min: 2, max: 7 } },
            wobble: { enable: true, distance: 12, speed: { min: -3, max: 3 } },
          },
          detectRetina: true,
        };

      /* ─────────────── EID MUBARAK ─────────────── */
      case "eid":
        return {
          fpsLimit: 60,
          background: { color: { value: "transparent" } },
          particles: {
            color: { value: ["#C9A84C", "#FFD700", "#A8DFC0", "#FFFFFF", "#E0FFE8"] },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: { min: 0.1, max: 0.6 },
              straight: false,
            },
            number: { density: { enable: true, width: 1920 }, value: 120 },
            opacity: {
              value: { min: 0.0, max: 1 },
              animation: { enable: true, speed: 0.8, startValue: "random", sync: false },
            },
            shape: { type: "star" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        };

      /* ─────────────── HALLOWEEN NIGHT ─────────────── */
      case "halloween":
        return {
          fpsLimit: 60,
          background: { color: { value: "transparent" } },
          particles: {
            color: { value: ["#FF6B00", "#FF8C00", "#CC3300", "#FF4500"] },
            move: {
              direction: "top",
              enable: true,
              outModes: { default: "out" },
              random: true,
              speed: { min: 0.3, max: 1.2 },
              straight: false,
            },
            number: { density: { enable: true, width: 1920 }, value: 70 },
            opacity: {
              value: { min: 0.05, max: 0.35 },
              animation: { enable: true, speed: 0.5, startValue: "random", sync: false },
            },
            shape: { type: "circle" },
            size: { value: { min: 15, max: 50 } },
          },
          detectRetina: true,
        };

      /* ─────────────── NEW YEAR GALA ─────────────── */
      case "newyear":
        return {
          fpsLimit: 60,
          background: { color: { value: "transparent" } },
          particles: {
            color: { value: ["#FFD700", "#FFC0CB", "#00FFFF", "#FF00FF", "#FFFFFF", "#FF6B6B", "#98FB98"] },
            move: {
              direction: "bottom",
              enable: true,
              outModes: { default: "out" },
              random: false,
              speed: { min: 2, max: 6 },
              straight: false,
              gravity: { enable: true, acceleration: 3 },
            },
            number: { density: { enable: true, width: 1920 }, value: 200 },
            opacity: { value: { min: 0.6, max: 1 } },
            shape: { type: ["circle", "square"] },
            size: { value: { min: 3, max: 9 } },
            rotate: {
              value: { min: 0, max: 360 },
              direction: "random",
              animation: { enable: true, speed: 15, sync: false },
            },
          },
          detectRetina: true,
        };

      default:
        return null;
    }
  }, [activeTheme]);

  if (!init || activeTheme === "default" || !particlesConfig) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const particlesLoaded = async (_container?: Container) => {};

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particlesConfig}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Summer: warm radial sun-ray glow top-right */}
      {activeTheme === "summer" && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "60%",
            height: "60%",
            background:
              "radial-gradient(ellipse at top right, rgba(255,159,10,0.25) 0%, rgba(255,77,0,0.08) 50%, transparent 80%)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Winter: cool blue ambient vignette */}
      {activeTheme === "winter" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(76,201,240,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Christmas: warm golden glow top-center */}
      {activeTheme === "christmas" && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            height: "50%",
            background:
              "radial-gradient(ellipse at top center, rgba(255,215,0,0.18) 0%, rgba(184,0,32,0.06) 60%, transparent 90%)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Eid: green + gold ambient glow */}
      {activeTheme === "eid" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(201,168,76,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(0,132,61,0.12) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Halloween: deep purple fog at bottom + eerie vignette */}
      {activeTheme === "halloween" && (
        <>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "45%",
              background:
                "linear-gradient(to top, rgba(18,0,34,0.85) 0%, rgba(61,0,107,0.4) 50%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(10,0,20,0.6) 100%)",
              pointerEvents: "none",
            }}
          />
        </>
      )}

      {/* New Year: dark vignette to make confetti pop */}
      {activeTheme === "newyear" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.4) 100%)",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
