"use client";

import React, { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix characters - binary & cyber elements for senior backend vibe
    const chars = "0101010101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ<>[]{}#@$%&*+_=-~/|";
    const charArray = chars.split("");

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize) + 1;

    // Drops array - tracks Y position for each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      // Randomize initial positions so they don't fall all together
      drops[i] = Math.random() * -100;
    }

    let animationId: number;

    const draw = () => {
      // Translucent black background to create trail effect
      ctx.fillStyle = "rgba(2, 2, 2, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green text
      ctx.fillStyle = "#00ff66";
      ctx.font = `${fontSize}px var(--font-geist-mono), monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Calculate X coordinate
        const x = i * fontSize;
        // Calculate Y coordinate
        const y = drops[i] * fontSize;

        // Draw character
        // Highlight some characters with bright green/white for dynamic visual interest
        if (Math.random() > 0.98) {
          ctx.fillStyle = "#ffffff";
        } else if (Math.random() > 0.95) {
          ctx.fillStyle = "#a3ffc2";
        } else {
          ctx.fillStyle = "#00ff66";
        }

        ctx.fillText(char, x, y);

        // Reset drop to top once it goes offscreen, or randomly after a threshold
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-[0.25]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
