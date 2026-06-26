"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Cpu, Wifi, Activity, Terminal as AlertIcon, X } from "lucide-react";

import CONTACT_DATA from "@/data/contact.json";

export default function Header() {
  // Stats states
  const [cpuLoad, setCpuLoad] = useState(12.4);
  const [rtt, setRtt] = useState(14);
  const [tunnelStatus, setTunnelStatus] = useState("SECURE");

  // Hacker visitor tracking states
  const [showTrackerAlert, setShowTrackerAlert] = useState(false);
  const [visitorInfo, setVisitorInfo] = useState<any>({
    ip: "SCANNING...",
    location: "SCANNING...",
    isp: "SCANNING...",
    os: "SCANNING..."
  });

  // Dynamic real-time stats simulator
  useEffect(() => {
    const statsInterval = setInterval(() => {
      // Simulate CPU Fluctuations (between 8% and 22%)
      setCpuLoad((prev) => {
        const change = (Math.random() - 0.5) * 4;
        const nextVal = prev + change;
        return parseFloat(Math.max(8.0, Math.min(22.0, nextVal)).toFixed(1));
      });

      // Simulate network ping RTT jitter (between 9ms and 36ms)
      setRtt((prev) => {
        const change = Math.floor((Math.random() - 0.5) * 6);
        const nextVal = prev + change;
        return Math.max(9, Math.min(36, nextVal));
      });
    }, 2500);

    return () => clearInterval(statsInterval);
  }, []);

  // IP Tracking and visitor warning hook
  useEffect(() => {
    const fetchVisitorDetails = async () => {
      // Detect Operating System
      let osName = "Unknown Device";
      if (typeof window !== "undefined" && window.navigator) {
        const ua = window.navigator.userAgent;
        if (ua.indexOf("Windows") !== -1) osName = "Windows OS";
        else if (ua.indexOf("Mac") !== -1) osName = "macOS X";
        else if (ua.indexOf("Linux") !== -1) osName = "Linux System";
        else if (ua.indexOf("Android") !== -1) osName = "Android Device";
        else if (ua.indexOf("iPhone") !== -1) osName = "iOS iPhone";
      }

      try {
        // Fetch public IP details
        const res = await fetch("https://ipapi.co/json/");
        if (res.ok) {
          const data = await res.json();
          setVisitorInfo({
            ip: data.ip || "127.0.0.1",
            location: `${data.city || "Unknown"}, ${data.country_name || "Unknown"}`,
            isp: data.org || "Local Host Provider",
            os: osName
          });
          // Show alert after short delay so they see page load first
          setTimeout(() => setShowTrackerAlert(true), 1200);
        } else {
          throw new Error("API failed");
        }
      } catch (err) {
        // Fallback info if blocked by adblockers
        setVisitorInfo({
          ip: "DYNAMIC_GATEWAY_IP",
          location: "REMOTE_NODE",
          isp: "UNKNOWN_ENCRYPTED_ISP",
          os: osName
        });
        setTimeout(() => setShowTrackerAlert(true), 1200);
      }
    };

    fetchVisitorDetails();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-45 bg-black/80 backdrop-blur-md border-b border-cyber-green/20 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 select-none">
        <div className="flex items-center space-x-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-cyber-green animate-pulse shadow-[0_0_8px_#00ff66]"></div>
          <span className="font-extrabold text-sm tracking-widest text-white hover:text-cyber-green transition-colors">
            RAVIRAJ_SYS_v2.4
          </span>
        </div>

        {/* Center Contact Connections */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono">
          <a href={`mailto:${CONTACT_DATA.email}`} className="text-cyber-green/80 hover:text-white transition-colors">[EMAIL]</a>
          <span className="text-cyber-green/30">|</span>
          <a href={CONTACT_DATA.linkedin} target="_blank" rel="noreferrer" className="text-cyber-green/80 hover:text-white transition-colors">[LINKEDIN]</a>
          <span className="text-cyber-green/30">|</span>
          <a href={`tel:${CONTACT_DATA.phone.replace(/\s+/g, '')}`} className="text-cyber-green/80 hover:text-white transition-colors">[{CONTACT_DATA.phone}]</a>
        </div>


        {/* HUD Realtime Stats (Dynamic Updates) */}
        <div className="flex items-center space-x-6 text-[10px] text-cyber-green/60">
          <div className="flex items-center space-x-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyber-green/80" />
            <span>CPU_LOAD: {cpuLoad}%</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Activity className="w-3.5 h-3.5 text-cyber-green/80 animate-[pulse_1s_infinite]" />
            <span>RTT: {rtt}ms</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Wifi className="w-3.5 h-3.5 text-cyber-green/80" />
            <span>TUNNEL: {tunnelStatus}</span>
          </div>
        </div>

        <div className="flex items-center space-x-1.5 border border-cyber-green/30 bg-cyber-green/5 px-2.5 py-1 rounded text-xs">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span className="text-[10px] tracking-wider font-semibold">ROOT_ACTIVE</span>
        </div>
      </header>

      {/* Cyber Hacker Warning overlay popup */}
      {showTrackerAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="w-full max-w-md bg-black border border-red-500 rounded-lg overflow-hidden shadow-[0_0_40px_rgba(239,68,68,0.3)] animate-flicker">
            
            {/* Title block */}
            <div className="bg-red-950/60 border-b border-red-500/30 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-red-500 font-mono font-bold text-sm">
                <AlertIcon className="w-4 h-4 animate-bounce" />
                <span>!!! INTRUSION DETECTED !!!</span>
              </div>
              <button 
                onClick={() => setShowTrackerAlert(false)}
                className="text-red-500/60 hover:text-red-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Warning diagnostic values */}
            <div className="p-5 space-y-4 font-mono text-xs text-red-400">
              <p className="text-[11px] leading-relaxed text-red-500/80">
                WARNING: Connection protocol scanned. Gathering visitor packet signatures...
              </p>
              
              <div className="border border-red-500/20 bg-red-950/10 p-3 rounded space-y-2 text-[11px]">
                <p><span className="text-red-500 font-semibold">&gt; TARGET IP:</span> {visitorInfo.ip}</p>
                <p><span className="text-red-500 font-semibold">&gt; NODE GEOLOCATION:</span> {visitorInfo.location}</p>
                <p><span className="text-red-500 font-semibold">&gt; SERVICE PROVIDER:</span> {visitorInfo.isp}</p>
                <p><span className="text-red-500 font-semibold">&gt; DETECTED ENDPOINT OS:</span> {visitorInfo.os}</p>
              </div>

              <div className="space-y-1">
                <p className="text-[10px] text-red-500/50">FIREWALL BYPASS PERCENTAGE:</p>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-red-950/30 border border-red-500/30 h-2 rounded overflow-hidden">
                    <div className="bg-red-500 h-full animate-[pulse_1s_infinite]" style={{ width: "100%" }}></div>
                  </div>
                  <span className="text-[10px] font-bold">100%</span>
                </div>
              </div>

              <p className="text-[11px] text-center text-cyber-green border border-cyber-green/30 bg-cyber-green/5 p-2 rounded">
                SIMULATION INITIATED: Welcome to Ravi Raj's digital sandbox, guest.
              </p>

              <button
                onClick={() => setShowTrackerAlert(false)}
                className="w-full py-2 border border-red-500 bg-red-950/20 hover:bg-red-500 hover:text-black transition-all duration-300 font-bold text-red-500 rounded cursor-pointer text-center text-xs tracking-wider"
              >
                BYPASS WARNING & ACCESS FILE SYSTEM
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
