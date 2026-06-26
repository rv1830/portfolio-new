"use client";

import React, { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";

interface CommandLog {
  command: string;
  output: React.ReactNode;
  isRoot?: boolean;
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: "system_init",
      output: (
        <div className="space-y-1">
          <p className="text-cyber-green/50">Initializing connection to Ravi_Raj server...</p>
          <p className="text-cyber-green/80">Connection established via SSH. SECURE ENCRYPTED PORT ACTIVE.</p>
          <p className="text-cyber-green font-bold">Welcome to Ravi Raj's Cyber Command Center (v2.4.9-release)</p>
          <p className="text-xs text-cyber-green/60">Type "help" to see available terminal commands.</p>
        </div>
      )
    }
  ]);
  const [isRoot, setIsRoot] = useState(false);
  const [isHacking, setIsHacking] = useState(false);
  const [hackProgress, setHackProgress] = useState(0);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  // Focus input on terminal container click
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    focusInput();
  }, []);

  // Scroll to bottom of terminal when history changes
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isHacking, hackProgress]);

  // Hacking simulation interval logic
  useEffect(() => {
    if (isHacking) {
      const interval = setInterval(() => {
        setHackProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.floor(Math.random() * 15) + 5;
        });
      }, 150);
      
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHacking]);

  // Handle side-effects of successful hack when progress reaches 100
  useEffect(() => {
    if (hackProgress >= 100) {
      setIsHacking(false);
      setIsRoot(true);
      setHackProgress(0); // Reset progress

      // Trigger confetti explosion
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#00ff66", "#ffffff", "#008833"]
      });

      setHistory((prevHistory) => [
        ...prevHistory,
        {
          command: "sudo hack",
          output: (
            <div className="space-y-1 text-cyber-green border border-cyber-green/40 p-3 bg-cyber-green/5 rounded shadow-[0_0_15px_rgba(0,255,102,0.15)] animate-flicker">
              <p className="font-bold text-center text-lg">ACCESS GRANTED: ROOT LOGGED IN</p>
              <p className="text-xs text-center text-cyber-green/70">ALL SYSTEM RESTRICTIONS DEACTIVATED. HOST BYPASSED.</p>
              <p className="text-xs text-center mt-2">Try typing commands in root mode! Prompt has changed.</p>
            </div>
          ),
          isRoot: true
        }
      ]);
    }
  }, [hackProgress]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const lowerInput = trimmedInput.toLowerCase();
    let response: React.ReactNode = "";

    switch (lowerInput) {
      case "help":
        response = (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 mt-1 text-xs">
            <p><span className="text-cyber-green font-bold">about</span> - Display Ravi's bio & background</p>
            <p><span className="text-cyber-green font-bold">skills</span> - List primary technical stack</p>
            <p><span className="text-cyber-green font-bold">projects</span> - View production-grade projects</p>
            <p><span className="text-cyber-green font-bold">experience</span> - View professional employment history</p>
            <p><span className="text-cyber-green font-bold">contact</span> - Show email, socials, and contact endpoints</p>
            <p><span className="text-cyber-green font-bold">cat resume</span> - Print entire resume in text format</p>
            <p><span className="text-cyber-green font-bold">sudo hack</span> - Execute security bypass (Gain root privileges)</p>
            <p><span className="text-cyber-green font-bold">clear</span> - Flush terminal command log</p>
          </div>
        );
        break;

      case "about":
      case "bio":
        response = (
          <div className="space-y-2 mt-1">
            <p className="text-sm font-semibold text-cyber-green">Ravi Raj | Software & Full-Stack Systems Engineer</p>
            <p className="text-xs text-cyber-green/90 leading-relaxed">
              I have built <span className="text-white font-semibold">10+ production-grade web applications</span> end-to-end. 
              I own the entire development lifecycle, from high-performance production code and rigorous testing suites to robust cloud deployments and automated DevOps configurations. 
              My expertise covers writing microservices in Go & FastAPI, designing 3D scroll experiences with GSAP, managing databases, and orchestrating containers.
            </p>
            <p className="text-xs text-cyber-green/60">
              Education: B.Tech in Electronics & Communication Eng. (Minor in CS) | CGPA: 7.80
            </p>
          </div>
        );
        break;

      case "skills":
      case "tech":
        response = (
          <div className="space-y-2 mt-1 text-xs">
            <p><span className="text-cyber-green font-semibold">LANGUAGES:</span> Java, Python, JavaScript, TypeScript, Go, Dart, SQL, HTML, CSS</p>
            <p><span className="text-cyber-green font-semibold">FRAMEWORKS & LIBS:</span> Next.js, React.js, Express.js, FastAPI, NestJS, Redux, Tailwind CSS, Bootstrap, Material UI, Shadcn UI, Fiber, Fastify, Flutter</p>
            <p><span className="text-cyber-green font-semibold">DATABASES & ORMs:</span> MongoDB, PostgreSQL, Prisma ORM, Redis, Supabase, Firebase</p>
            <p><span className="text-cyber-green font-semibold">DEVOPS & TOOLS:</span> Git, GitHub, Docker, Kubernetes, Nginx, Apache, CI/CD, AWS (S3), Ngrok, Nx Monorepo, Dokploy</p>
            <p><span className="text-cyber-green font-semibold">INTEGRATIONS & PROTOCOLS:</span> RESTful APIs, WebSockets (Socket.io), WebRTC, gRPC, STT/TTS Systems, n8n, Apache Kafka, RabbitMQ, Pinata IPFS, Google Analytics 4</p>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-3 mt-1 text-xs">
            <div>
              <p className="font-bold text-cyber-green text-sm">&gt; ASTROSERVICE (AI VOICE BACKEND)</p>
              <p className="text-cyber-green/80">Developed a 100K+ DAU voice-enabled AI astrology microservice. Integrated Prokerala API for real-time Kundali retrieval, speech-to-text (STT), text-to-speech (TTS), and custom regex-based intent parsing.</p>
              <p className="text-cyber-green/60">
                Link: <a href="https://github.com/rv1830" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors">https://github.com/rv1830 (Backend Repo)</a>
              </p>
            </div>
            <div>
              <p className="font-bold text-cyber-green text-sm">&gt; OCTOMATE AI (Sales OS & SaaS)</p>
              <p className="text-cyber-green/80">Built end-to-end full-stack SaaS. Engineered stream-based data pipelines for 100K+ records. Maintained &lt;50ms API latency. Integrated OAuth, HubSpot, CRM pipelines, and AI-powered copy generation.</p>
              <p className="text-cyber-green/60">
                Link: <a href="https://octomateai.online/" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors">https://octomateai.online/</a>
              </p>
            </div>
            <div>
              <p className="font-bold text-cyber-green text-sm">&gt; LINKUP CAPITAL (High-Security Ledger)</p>
              <p className="text-cyber-green/80">Developed encrypted backend featuring RSA-4096 & AES-256-GCM. Designed decentralized ledger audit trails anchored on IPFS. Built dual-database architecture (Postgres + MongoDB) for relational storage and real-time chat logs.</p>
              <p className="text-cyber-green/60">
                Link: <a href="https://www.linkup.capital/" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors">https://www.linkup.capital/</a>
              </p>
            </div>
          </div>
        );
        break;

      case "experience":
      case "jobs":
        response = (
          <div className="space-y-3 mt-1 text-xs">
            <div>
              <p className="font-bold text-cyber-green text-sm">&gt; Software Developer | Prodigal AI, Delhi (Sept 2025 - Feb 2026)</p>
              <p className="text-cyber-green/80">Scaled 4+ production apps (Astro, Linkup Capital). Developed STT/TTS pipelines. Owned Nginx load balancers, multi-tenant JWT auth, and cloud deployments independently.</p>
            </div>
            <div>
              <p className="font-bold text-cyber-green text-sm">&gt; Frontend Intern | Times Network, Noida (Mar 2025 - Aug 2025)</p>
              <p className="text-cyber-green/80">Optimized Vault Explorer loading states. Migrated NewsRadar to Next.js configuration-based setup, boosting load speed. Resolved GA4 tracking issues.</p>
            </div>
          </div>
        );
        break;

      case "contact":
      case "mail":
        response = (
          <div className="space-y-1 mt-1 text-xs">
            <p><span className="text-cyber-green font-semibold">EMAIL:</span> <a href="mailto:raviraj.bvcoe@gmail.com" className="underline hover:text-white transition-colors">raviraj.bvcoe@gmail.com</a></p>
            <p><span className="text-cyber-green font-semibold">PHONE:</span> <a href="tel:+919693877411" className="underline hover:text-white transition-colors">+91 9693877411</a></p>
            <p><span className="text-cyber-green font-semibold">GITHUB:</span> <a href="https://github.com/rv1830" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors">github.com/rv1830</a></p>
            <p><span className="text-cyber-green font-semibold">LINKEDIN:</span> <a href="https://www.linkedin.com/in/ravi-raj-596135216/" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors">linkedin.com/in/ravi-raj-596135216/</a></p>
            <p><span className="text-cyber-green font-semibold">X (TWITTER):</span> <a href="https://x.com/RaviRaj_sde" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors">x.com/RaviRaj_sde</a></p>
            <p><span className="text-cyber-green font-semibold">LOCATION:</span> New Delhi, INDIA</p>
          </div>
        );
        break;

      case "cat resume":
        response = (
          <div className="space-y-2 mt-2 text-[10px] md:text-xs leading-5 border-l-2 border-cyber-green/45 pl-3 text-cyber-green/90 font-mono">
            <p className="font-bold text-center text-sm border-b border-cyber-green/30 pb-1">RAVI RAJ - FULL-STACK SOFTWARE ENGINEER</p>
            <p>=========================================================</p>
            <p><span className="font-bold">[PROFILE]</span> Full-Stack Developer with a track record of building 10+ production web applications. Owner of absolute systems pipelines: testing, code quality, DevOps setups, and containerized deployments.</p>
            <p><span className="font-bold">[CONTACT]</span> Email: raviraj.bvcoe@gmail.com | Phone: +919693877411</p>
            <p><span className="font-bold">[NETWORKS]</span> GitHub: https://github.com/rv1830 | LinkedIn: https://www.linkedin.com/in/ravi-raj-596135216/</p>
            <p><span className="font-bold">[LANGUAGES]</span> Java, Python, JavaScript, TypeScript, Go, Dart, SQL, HTML, CSS</p>
            <p><span className="font-bold">[FRAMEWORKS]</span> Next.js, React.js, Express.js, FastAPI, NestJS, Redux, Tailwind CSS, Bootstrap, Material UI, Shadcn UI, Fiber, Fastify, Flutter</p>
            <p><span className="font-bold">[DATABASES]</span> MongoDB, PostgreSQL, Prisma ORM, Redis, Supabase, Firebase</p>
            <p><span className="font-bold">[DEVOPS & TOOLS]</span> Git, GitHub, Docker, Kubernetes, Nginx, Apache, CI/CD, AWS (S3), Ngrok, Nx Monorepo, Dokploy</p>
            <p><span className="font-bold">[INTEGRATIONS]</span> RESTful APIs, WebSockets (Socket.io), WebRTC, gRPC, STT/TTS Systems, n8n, Apache Kafka, RabbitMQ, Pinata IPFS, Google Analytics 4</p>
            <p><span className="font-bold">[EXPERIENCE]</span></p>
            <p>&nbsp;&nbsp;- Software Developer @ Prodigal AI (Sept 2025 - Feb 2026): Managed scaling & backend services (FastAPI/Express).</p>
            <p>&nbsp;&nbsp;- Frontend Intern @ Times Network (Mar 2025 - Aug 2025): Optimized caching & microfrontends.</p>
            <p><span className="font-bold">[KEY PROJECTS]</span></p>
            <p>&nbsp;&nbsp;- Astroservice (https://github.com/rv1830): Real-time AI voice astrology (STT/TTS, Prokerala API, 100K+ DAU capacity).</p>
            <p>&nbsp;&nbsp;- Octomate AI (https://octomateai.online/): Sales OS SaaS automation (Supabase, WebSockets, Redis cache).</p>
            <p>&nbsp;&nbsp;- Linkup Capital (https://www.linkup.capital/): Encrypted dual-database financial ledger (RSA-4096/AES-256, IPFS ledger).</p>
            <p>=========================================================</p>
          </div>
        );
        break;

      case "sudo hack":
      case "sudo access":
      case "sudo":
        if (isRoot) {
          response = <p className="text-cyber-green/70">Permission denied: Root access is already active, master.</p>;
        } else {
          setIsHacking(true);
          setHackProgress(0);
          setInput("");
          return;
        }
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        response = (
          <p className="text-red-500">
            bash: command not found: {trimmedInput}. Type "help" to see valid cyber-protocols.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: trimmedInput,
        output: response,
        isRoot
      }
    ]);
    setInput("");
  };

  return (
    <div 
      onClick={focusInput}
      className="w-full bg-black/90 border border-cyber-green/30 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,102,0.1)] flex flex-col h-[450px] md:h-[550px] font-mono select-none"
    >
      {/* Terminal Title Bar */}
      <div className="bg-zinc-900 border-b border-cyber-green/20 px-4 py-2 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-cyber-green/80"></div>
        </div>
        <div className="text-xs text-cyber-green/50 flex items-center space-x-1.5">
          <span>guest@raviraj:~</span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
        </div>
        <div className="text-xs text-cyber-green/30">TTY1</div>
      </div>

      {/* Terminal Output Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm scrollbar-thin select-text">
        {history.map((log, index) => (
          <div key={index} className="space-y-1.5">
            {log.command !== "system_init" && (
              <div className="flex items-center space-x-2">
                <span className="text-cyber-green/60">
                  {log.isRoot ? "root@raviraj:~#" : "guest@raviraj:~$"}
                </span>
                <span className="text-white font-semibold">{log.command}</span>
              </div>
            )}
            <div className="text-cyber-green/90 leading-relaxed font-mono whitespace-pre-wrap">
              {log.output}
            </div>
          </div>
        ))}

        {/* Hacking Animation Panel */}
        {isHacking && (
          <div className="space-y-2 p-3 border border-red-500/30 bg-red-950/10 rounded animate-pulse">
            <p className="text-red-500 font-bold text-center">!!! BYPASSING SECURITY LAYER !!!</p>
            <p className="text-xs text-red-400">Injecting SSH buffer payload: 0xDEADBEEF...</p>
            <p className="text-xs text-red-400">Decryption key cracked: AES-256 block size verified...</p>
            <div className="flex items-center space-x-3">
              <span className="text-xs text-red-500">EXPLOIT:</span>
              <div className="flex-1 bg-red-950/20 border border-red-500/30 h-2.5 rounded overflow-hidden">
                <div className="bg-red-500 h-full" style={{ width: `${hackProgress}%` }}></div>
              </div>
              <span className="text-xs text-red-400 font-bold">{hackProgress}%</span>
            </div>
          </div>
        )}

        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Input Line */}
      {!isHacking && (
        <form 
          onSubmit={handleCommandSubmit}
          className="border-t border-cyber-green/20 bg-black/50 p-3 flex items-center space-x-2"
        >
          <span className="text-cyber-green font-bold shrink-0">
            {isRoot ? "root@raviraj:~#" : "guest@raviraj:~$"}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isHacking}
            className="flex-1 bg-transparent text-white focus:outline-none font-mono caret-cyber-green text-sm selection:bg-cyber-green/30"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </form>
      )}
    </div>
  );
}
