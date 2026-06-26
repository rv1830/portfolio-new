"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Database, Cpu, Radio, Award } from "lucide-react";

import PROJECTS_DATA from "@/data/projects.json";

interface MainProject {
  title: string;
  tagline: string;
  role: string;
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
  stack: string[];
  integrity: string;
  color: string;
  link: string;
}

const MAIN_PROJECTS: MainProject[] = PROJECTS_DATA;

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative max-w-6xl mx-auto space-y-16 select-none">
      {/* HUD Heading */}
      <div className="space-y-2 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start space-x-2 text-cyber-green text-xs font-mono">
          <Radio className="w-4 h-4 animate-[pulse_1.5s_infinite]" />
          <span>PROJECTS_DB_LOADED_SECURELY</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-wider text-white">
          PRIMARY ARTIFACTS
        </h2>
        <p className="text-xs text-cyber-green/60">
          Showing detailed records of core systems architected from scratch (representing 10+ production-grade web applications built and successfully deployed).
        </p>
        <div className="h-[1px] w-full bg-gradient-to-r from-cyber-green/50 to-transparent"></div>
      </div>

      {/* Main 3 Projects Layout */}
      <div className="space-y-8">
        {/* Astroservice - Featured Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="cyber-card flex flex-col justify-between p-6 md:p-8 rounded-lg relative overflow-hidden bg-black/80 border-cyber-green shadow-[0_0_25px_rgba(0,255,102,0.15)]"
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-cyber-green" />
          
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div className="flex items-center space-x-2.5">
                <Award className="w-6 h-6 text-cyber-green animate-pulse" />
                <h3 className="text-xl md:text-3xl font-mono font-extrabold text-white tracking-wide break-words">
                  {MAIN_PROJECTS[0].title}
                </h3>
              </div>
              <span className="flex items-center space-x-1.5 px-2.5 py-1 border border-cyber-green/45 text-[10px] font-mono rounded bg-cyber-green/10 text-cyber-green">
                <ShieldCheck className="w-4 h-4 animate-pulse" />
                <span>{MAIN_PROJECTS[0].integrity}</span>
              </span>
            </div>

            <p className="text-sm font-mono text-cyber-green/80 italic">
              {MAIN_PROJECTS[0].tagline}
            </p>

            <div className="grid grid-cols-3 gap-2 border-y border-cyber-green/20 py-4 my-2 bg-cyber-green/5 p-3 rounded">
              {MAIN_PROJECTS[0].metrics.map((metric) => (
                <div key={metric.label} className="text-center space-y-1">
                  <p className="text-[9px] font-mono text-zinc-500 tracking-wider">
                    {metric.label}
                  </p>
                  <p className="text-xs md:text-base font-extrabold font-mono text-cyber-green">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            <ul className="space-y-2 mt-4">
              {MAIN_PROJECTS[0].bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs md:text-sm leading-relaxed text-zinc-300">
                  <span className="font-mono font-bold text-cyber-green mt-0.5 shrink-0">&gt;&gt;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 pt-6 mt-6 border-t border-zinc-800/40">
            <div className="flex flex-wrap gap-1.5">
              {MAIN_PROJECTS[0].stack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 border border-cyber-green/20 bg-black text-[10px] font-mono text-zinc-400 rounded hover:text-cyber-green hover:border-cyber-green transition-colors">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
              <span className="text-[10px] font-mono text-zinc-500 flex items-center space-x-1">
                <Cpu className="w-3.5 h-3.5 text-cyber-green" />
                <span>CHALLENGING_DEVOPS_CORE_01</span>
              </span>
              <a 
                href={MAIN_PROJECTS[0].link}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 border border-cyber-green px-4 py-2 rounded text-xs font-mono tracking-widest bg-cyber-green/10 text-cyber-green hover:bg-cyber-green hover:text-black hover:shadow-[0_0_15px_rgba(0,255,102,0.4)] transition-all duration-300 cursor-pointer text-center"
              >
                <span>DECRYPT_PIPELINES</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Octomate AI & Linkup Capital - 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {MAIN_PROJECTS.slice(1).map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`cyber-card flex flex-col justify-between p-6 rounded-lg relative overflow-hidden bg-black/80 ${
                project.color === "blue" 
                  ? "border-blue-500/30 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]" 
                  : "border-cyber-green/30 hover:border-cyber-green hover:shadow-[0_0_20px_rgba(0,255,102,0.15)]"
              }`}
            >
              <div className={`absolute top-0 left-0 w-full h-[1.5px] ${
                project.color === "blue" ? "bg-blue-500" : "bg-cyber-green"
              }`} />
              
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`text-[10px] font-mono font-semibold tracking-widest ${
                      project.color === "blue" ? "text-blue-400" : "text-cyber-green"
                    }`}>
                      {project.role}
                    </span>
                    <h3 className="text-lg md:text-xl font-mono font-extrabold text-white tracking-wide mt-1 break-words">
                      {project.title}
                    </h3>
                  </div>
                  <span className={`flex items-center space-x-1.5 px-2 py-0.5 border text-[9px] font-mono rounded ${
                    project.color === "blue" 
                      ? "border-blue-500/20 text-blue-400 bg-blue-500/5" 
                      : "border-cyber-green/20 text-cyber-green bg-cyber-green/5"
                  }`}>
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{project.integrity}</span>
                  </span>
                </div>

                <p className="text-xs font-mono text-zinc-400">{project.tagline}</p>

                <div className="grid grid-cols-3 gap-2 border-y border-zinc-800/60 py-3 my-2 bg-black/30 p-2 rounded">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center space-y-1">
                      <p className="text-[9px] font-mono text-zinc-500 tracking-wider">{metric.label}</p>
                      <p className={`text-xs md:text-sm font-bold font-mono ${
                        project.color === "blue" ? "text-blue-400" : "text-cyber-green"
                      }`}>{metric.value}</p>
                    </div>
                  ))}
                </div>

                <ul className="space-y-2 mt-4">
                  {project.bulletPoints.map((point, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start space-x-2 text-xs leading-relaxed text-zinc-300">
                      <span className={`font-mono font-bold mt-1 shrink-0 ${
                        project.color === "blue" ? "text-blue-400" : "text-cyber-green"
                      }`}>[-]</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 pt-6 mt-6 border-t border-zinc-800/40">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 border border-zinc-800 bg-zinc-950 text-[10px] font-mono text-zinc-400 rounded-sm hover:text-white hover:border-zinc-700 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
                  <span className="text-[10px] font-mono text-zinc-600 flex items-center space-x-1">
                    <Database className="w-3 h-3" />
                    <span>DATA_SECTOR_{idx + 2}</span>
                  </span>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 border px-3 py-1.5 rounded text-xs font-mono tracking-widest transition-all duration-300 cursor-pointer text-center ${
                      project.color === "blue"
                        ? "border-blue-500/40 text-blue-400 hover:bg-blue-500 hover:text-black hover:shadow-[0_0_10px_rgba(56,189,248,0.4)]"
                        : "border-cyber-green/40 text-cyber-green hover:bg-cyber-green hover:text-black hover:shadow-[0_0_10px_rgba(0,255,102,0.4)]"
                    }`}
                  >
                    <span>DECRYPT_SOURCE</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
