"use client";

import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

// Tech stack data
const SKILLS = [
  // Languages
  { name: "Java", category: "language" },
  { name: "Python", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "Go", category: "language" },
  { name: "Dart", category: "language" },
  { name: "SQL", category: "language" },
  { name: "HTML", category: "language" },
  { name: "CSS", category: "language" },

  // Frameworks & Libraries
  { name: "Next.js", category: "framework" },
  { name: "React.js", category: "framework" },
  { name: "Express.js", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "NestJS", category: "backend" },
  { name: "Redux", category: "framework" },
  { name: "Tailwind CSS", category: "framework" },
  { name: "Bootstrap", category: "framework" },
  { name: "Material UI", category: "framework" },
  { name: "Shadcn UI", category: "framework" },
  { name: "Flutter", category: "frontend" },
  { name: "Fiber", category: "backend" },
  { name: "Fastify", category: "backend" },

  // Databases & ORMs
  { name: "MongoDB", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Prisma ORM", category: "database" },
  { name: "Redis", category: "database" },
  { name: "Supabase", category: "database" },
  { name: "Firebase", category: "database" },
  { name: "Pinata IPFS", category: "database" },

  // DevOps & Tools
  { name: "Git", category: "devops" },
  { name: "GitHub", category: "devops" },
  { name: "Docker", category: "devops" },
  { name: "Kubernetes", category: "devops" },
  { name: "Nginx", category: "devops" },
  { name: "Apache", category: "devops" },
  { name: "CI/CD", category: "devops" },
  { name: "AWS (S3)", category: "devops" },
  { name: "Ngrok", category: "devops" },
  { name: "Nx Monorepo", category: "devops" },
  { name: "Dokploy", category: "devops" },
  { name: "n8n", category: "devops" },
  { name: "Google Analytics 4", category: "devops" },

  // Technologies & Integrations
  { name: "RESTful APIs", category: "backend" },
  { name: "WebSockets (Socket.io)", category: "backend" },
  { name: "STT/TTS Systems", category: "backend" },
  { name: "Apache Kafka", category: "backend" },
  { name: "RabbitMQ", category: "backend" },
  { name: "WebRTC", category: "backend" },
  { name: "gRPC", category: "backend" }
];


interface SkillTagProps {
  name: string;
  category: string;
  position: [number, number, number];
}

function SkillTag({ name, category, position }: SkillTagProps) {
  const containerRef = useRef<THREE.Group | null>(null);
  const [hovered, setHovered] = useState(false);
  const [depthStyle, setDepthStyle] = useState({
    opacity: 1,
    scale: 1,
    isBehind: false
  });

  useFrame(({ camera }) => {
    if (!containerRef.current) return;

    // Get world position of the tag
    const worldPos = new THREE.Vector3();
    containerRef.current.getWorldPosition(worldPos);

    // Calculate distance to camera
    const distance = camera.position.distanceTo(worldPos);

    // Camera is at Z=12.5, Sphere radius is 7.2
    // Distance ranges from 12.5 - 7.2 = 5.3 (closest) to 12.5 + 7.2 = 19.7 (furthest)
    const minDistance = 5.3;
    const maxDistance = 19.7;

    const t = Math.max(0, Math.min(1, (distance - minDistance) / (maxDistance - minDistance)));

    // Fades tags in the back to 0.40 opacity
    const opacity = 1 - t * 0.60; 
    
    // Scale tags from 1.1 (front) to 0.70 (back) for solid perspective depth
    const scale = 1.1 - t * 0.40;   
    
    // Disable interactions if the tag is in the back half (distance > 12.5)
    const isBehind = distance > 12.5;

    setDepthStyle({ opacity, scale, isBehind });
  });

  const getColorClass = () => {
    if (hovered) {
      return "bg-cyber-green text-black border-cyber-green shadow-[0_0_20px_rgba(0,255,102,0.8)] scale-110";
    }
    
    switch (category) {
      case "language":
        return "border-emerald-500 text-emerald-400 bg-black/90 shadow-[0_0_8px_rgba(16,185,129,0.15)]";
      case "backend":
        return "border-cyber-green text-cyber-green bg-black/90 shadow-[0_0_8px_rgba(0,255,102,0.15)]";
      case "database":
        return "border-blue-500 text-blue-400 bg-black/90 shadow-[0_0_8px_rgba(59,130,246,0.15)]";
      case "devops":
        return "border-yellow-500 text-yellow-400 bg-black/90 shadow-[0_0_8px_rgba(234,179,8,0.15)]";
      case "frontend":
        return "border-cyan-500 text-cyan-400 bg-black/90 shadow-[0_0_8px_rgba(6,182,212,0.15)]";
      default:
        return "border-purple-500 text-purple-400 bg-black/90 shadow-[0_0_8px_rgba(168,85,247,0.15)]";
    }
  };

  return (
    <group ref={containerRef} position={position}>
      <Html
        center
        distanceFactor={13} // Increased from 10 to make tags significantly larger and readable
        style={{
          transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
          opacity: depthStyle.opacity,
          transform: `scale(${depthStyle.scale * (hovered ? 1.1 : 1)})`,
          pointerEvents: depthStyle.isBehind ? "none" : "auto",
          userSelect: "none"
        }}
      >
        <div
          onPointerOver={() => !depthStyle.isBehind && setHovered(true)}
          onPointerOut={() => setHovered(false)}
          className={`px-3 py-1.5 rounded-md border text-xs font-semibold whitespace-nowrap cursor-pointer transition-all duration-300 font-mono tracking-wider ${getColorClass()}`}
        >
          <span className="opacity-60 mr-1.5">&gt;</span>
          {name}
        </div>
      </Html>
    </group>
  );
}

function CloudGroup() {
  const groupRef = useRef<THREE.Group | null>(null);

  // Distribute points evenly on a sphere using Fibonacci sphere algorithm
  const points = useMemo(() => {
    const count = SKILLS.length;
    const pts: [number, number, number][] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
    const radius = 7.2; // Sphere size increased significantly to spread tags out

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const radAtY = Math.sqrt(1 - y * y); // radius at y

      const theta = phi * i;

      const x = Math.cos(theta) * radAtY;
      const z = Math.sin(theta) * radAtY;

      pts.push([x * radius, y * radius, z * radius]);
    }
    return pts;
  }, []);

  // Spin the group inside R3F frame loop
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle automatic rotation
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.04) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.2, 0]}>
      {SKILLS.map((skill, index) => (
        <SkillTag
          key={skill.name}
          name={skill.name}
          category={skill.category}
          position={points[index]}
        />
      ))}
    </group>
  );
}

export default function TechSphereContent() {
  return (
    <div className="w-full h-full relative min-h-[500px] md:min-h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 12.5], fov: 60 }}
        style={{ pointerEvents: "auto" }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <CloudGroup />
      </Canvas>
    </div>
  );
}
