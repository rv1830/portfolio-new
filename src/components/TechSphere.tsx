"use client";

import React, { useEffect, useRef, useState } from "react";

import SKILLS_DATA from "@/data/skills.json";

// Complete Tech stack data
const SKILLS = SKILLS_DATA;


interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  name: string;
  category: string;
  color: string;
  glowColor: string;
  hovered: boolean;
  baseScale: number;
}

export default function TechSphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight || 550;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Color definitions based on category
    const getCategoryColors = (cat: string) => {
      switch (cat) {
        case "language":
          return { color: "#10b981", glow: "rgba(16, 185, 129, 0.4)" }; // Emerald
        case "backend":
          return { color: "#00ff66", glow: "rgba(0, 255, 102, 0.4)" };  // Cyber Green
        case "database":
          return { color: "#3b82f6", glow: "rgba(59, 130, 246, 0.4)" };  // Blue
        case "devops":
          return { color: "#eab308", glow: "rgba(234, 179, 8, 0.4)" };   // Yellow
        case "frontend":
          return { color: "#06b6d4", glow: "rgba(6, 182, 212, 0.4)" };   // Cyan
        default:
          return { color: "#a855f7", glow: "rgba(168, 85, 247, 0.4)" };  // Purple
      }
    };

    // Initialize node dimensions
    ctx.font = "11px var(--font-mono), monospace";
    const nodes: Node[] = SKILLS.map((skill) => {
      const textWidth = ctx.measureText(`> ${skill.name}`).width;
      const width = textWidth + 24; // Padding
      const height = 24;

      const colors = getCategoryColors(skill.category);

      return {
        // Random initial coordinates within canvas boundaries
        x: Math.random() * (canvas.width - width - 40) + width / 2 + 20,
        y: Math.random() * (canvas.height - height - 40) + height / 2 + 20,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        width,
        height,
        name: skill.name,
        category: skill.category,
        color: colors.color,
        glowColor: colors.glow,
        hovered: false,
        baseScale: 1
      };
    });

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw hacker grid inside tech space
      ctx.strokeStyle = "rgba(0, 255, 102, 0.025)";
      ctx.lineWidth = 1;
      const gridSize = 30;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // 1. Update node physics
      let currentHovered: string | null = null;
      
      nodes.forEach((node) => {
        // Check mouse collision
        const isMouseOver =
          mouseX >= node.x - node.width / 2 &&
          mouseX <= node.x + node.width / 2 &&
          mouseY >= node.y - node.height / 2 &&
          mouseY <= node.y + node.height / 2;

        node.hovered = isMouseOver;
        if (isMouseOver) {
          currentHovered = node.name;
        }

        // Apply velocities
        if (node.hovered) {
          node.x += node.vx * 0.15;
          node.y += node.vy * 0.15;
        } else {
          // Attract nodes gently to mouse if close
          const dx = mouseX - node.x;
          const dy = mouseY - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) * 0.0003;
            node.vx += dx * force;
            node.vy += dy * force;
          }

          // Limit maximum velocity
          const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
          const maxSpeed = 0.6;
          if (speed > maxSpeed) {
            node.vx = (node.vx / speed) * maxSpeed;
            node.vy = (node.vy / speed) * maxSpeed;
          }

          node.x += node.vx;
          node.y += node.vy;
        }

        // Boundary collision detection (Ensure tags NEVER go off-screen)
        const padX = node.width / 2 + 10;
        const padY = node.height / 2 + 10;

        if (node.x - padX < 0) {
          node.x = padX;
          node.vx *= -1;
        }
        if (node.x + padX > canvas.width) {
          node.x = canvas.width - padX;
          node.vx *= -1;
        }
        if (node.y - padY < 0) {
          node.y = padY;
          node.vy *= -1;
        }
        if (node.y + padY > canvas.height) {
          node.y = canvas.height - padY;
          node.vy *= -1;
        }
      });

      setHoveredNode(currentHovered);

      // 2. Draw connections (Constellation effect)
      nodes.forEach((nodeA, indexA) => {
        nodes.forEach((nodeB, indexB) => {
          if (indexA >= indexB) return;

          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect if close
          if (dist < 110) {
            const alpha = (110 - dist) / 110 * 0.15;
            
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            
            // Brighten line if either node is hovered
            if (nodeA.hovered || nodeB.hovered) {
              ctx.strokeStyle = `rgba(0, 255, 102, ${alpha * 2.5})`;
              ctx.lineWidth = 1.2;
            } else {
              ctx.strokeStyle = `rgba(0, 255, 102, ${alpha})`;
              ctx.lineWidth = 0.8;
            }
            ctx.stroke();
          }
        });
      });

      // 3. Draw nodes
      nodes.forEach((node) => {
        ctx.save();

        const scale = node.hovered ? 1.12 : 1.0;
        const w = node.width * scale;
        const h = node.height * scale;

        ctx.shadowColor = node.color;
        ctx.shadowBlur = node.hovered ? 15 : 4;

        ctx.fillStyle = "rgba(2, 2, 2, 0.92)";
        ctx.strokeStyle = node.color;
        ctx.lineWidth = node.hovered ? 1.8 : 1.0;

        ctx.beginPath();
        const radius = h / 2;
        ctx.roundRect(node.x - w / 2, node.y - h / 2, w, h, radius);
        ctx.fill();
        ctx.stroke();

        ctx.shadowBlur = 0;

        ctx.fillStyle = node.hovered ? "#ffffff" : node.color;
        ctx.font = `${node.hovered ? "bold" : ""} 11px var(--font-mono), monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`> ${node.name}`, node.x, node.y + 0.5);

        ctx.restore();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-[500px] md:h-[550px] relative border border-cyber-green/20 bg-black/45 rounded-lg overflow-hidden select-none"
    >
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none z-0"></div>
      
      <canvas 
        ref={canvasRef} 
        className="w-full h-full relative z-10 block cursor-crosshair"
      />

      <div className="absolute top-3 left-3 z-20 font-mono text-[9px] text-cyber-green/50 space-y-0.5 pointer-events-none">
        <p>&gt; DIALOGUE: ACTIVE_NEURAL_NET</p>
        <p>&gt; STATUS: {hoveredNode ? `HOVERED_NODE[${hoveredNode.toUpperCase()}]` : "MONITORING_NODES..."}</p>
        <p>&gt; TOTAL_SECTORS: {SKILLS.length}</p>
      </div>
    </div>
  );
}
