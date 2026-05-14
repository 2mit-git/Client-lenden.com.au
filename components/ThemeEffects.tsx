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


    </div>
  );
}
