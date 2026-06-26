import type { Metadata } from "next";
import MatrixRain from "@/components/MatrixRain";
import Hero from "@/components/Hero";
import TechSphere from "@/components/TechSphere";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Terminal from "@/components/Terminal";
import Header from "@/components/Header";
import CONTACT_DATA from "@/data/contact.json";

export const metadata: Metadata = {
  title: "Ravi Raj | Software Engineer, SDE & Founder - Octomate AI",
  description: "Ravi Raj is a Full-Stack Software Engineer (SDE) and Founder of Octomate AI. Over 1+ years of experience building 10+ production-grade web systems. Specialized in high-performance backends (Go, Python/FastAPI,Nextjs, Node.js), Flutter/Dart Mobile Application,  WebSockets, WebRTC, DevOps (Docker, Kubernetes, Dokploy, Nginx), and database scaling (Postgres, Redis).",
  keywords: [
    "Ravi Raj",
    "Ravi Raj SDE",
    "Ravi Raj Software Engineer",
    "Ravi Raj Octomate AI",
    "Ravi Raj Octomate AI Founder",
    "Octomate AI Founder",
    "Astrotalk Founder",
    "Astrotalk Backend Engineer",
    "Ravi Raj SDE Delhi",
    "Hire Software Engineer",
    "Hire Full Stack Developer",
    "Hire Go Developer",
    "Hire FastAPI Developer",
    "Go Developer",
    "Next.js Developer",
    "Python SDE",
    "NodeJS Developer",
    "Kubernetes DevOps",
    "Docker SDE",
    "WebSockets Engineer",
    "WebRTC SDE",
    "gRPC backend",
    "Kafka engineer",
    "RabbitMQ developer",
    "n8n automation",
    "Dokploy DevOps",
    "SaaS architect Delhi",
    "full stack engineer portfolio"
  ],
  authors: [{ name: "Ravi Raj", url: "https://github.com/rv1830" }],
  creator: "Ravi Raj",
  publisher: "Ravi Raj",
  verification: {
    google: "oYL17s2KIwBFGyJY99B1hj49YrxhlmCF8-lZOJAaOkg"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  openGraph: {
    title: "Ravi Raj | Software Engineer, SDE & Founder - Octomate AI",
    description: "Full-Stack Software Engineer (SDE) and Founder of Octomate AI. Specialized in high-concurrency systems, secure cryptographic pipelines, and interactive web/mobile platforms.",
    type: "website",
    locale: "en_US",
    siteName: "Ravi Raj Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Raj | Software Engineer & SDE",
    description: "Building robust systems end-to-end using Go, Node, Python, Next.js, and Kubernetes."
  }
};


export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ravi Raj",
    "url": "https://raviraj-two.vercel.app/",
    "jobTitle": "Full-Stack Software Engineer & SDE",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY (GGSIPU), Delhi"
    },
    "knowsAbout": [
      "Software Engineering",
      "Backend Development",
      "Full-Stack Development",
      "GoLang",
      "Fiber",
      "FastAPI",
      "Next.js",
      "React.js",
      "Node.js",
      "WebSockets",
      "WebRTC",
      "gRPC",
      "Express.js",
      "Fastify",
      "Docker",
      "Kubernetes",
      "n8n",
      "Apache Kafka",
      "RabbitMQ",
      "Dokploy"
    ],
    "sameAs": [
      "https://github.com/rv1830",
      "https://www.linkedin.com/in/ravi-raj-596135216/",
      "https://x.com/RaviRaj_sde"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Octomate AI",
        "jobTitle": "Founder & Lead Architect"
      },
      {
        "@type": "Organization",
        "name": "Prodigal AI",
        "jobTitle": "Software Developer"
      },
      {
        "@type": "Organization",
        "name": "Times Network / Times Of India",
        "jobTitle": "Frontend Developer Intern"
      }
    ],
    "description": "Ravi Raj is a Full-Stack Software Engineer (SDE) and Founder of Octomate AI. Expert SDE specializing in building scalable backend systems, voice orchestrators (Astroservice), SaaS applications, and DevOps deployment pipelines."
  };

  return (
    <main className="min-h-screen bg-black text-cyber-green flex flex-col font-mono relative overflow-hidden">
      {/* JSON-LD Structured Data Schema for Next-Level Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 3D background elements */}
      <MatrixRain />

      
      {/* Retro CRT monitor flicker and scanline overlays */}
      <div className="crt-overlay" />
      <div className="absolute inset-0 bg-black/40 z-[-1] pointer-events-none" />

      {/* Dynamic client-side Navigation Header Bar with IP tracking alert */}
      <Header />

      {/* Landing Section */}
      <Hero />

      {/* Skills Section with 3D Cloud */}
      <section id="skills" className="py-20 px-4 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative select-none">
        <div className="absolute top-0 right-10 w-[200px] h-[200px] bg-cyber-green/5 rounded-full blur-[80px] pointer-events-none z-0"></div>
        
        {/* Left Side: Skills classifications */}
        <div className="lg:col-span-5 space-y-6 z-10">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-cyber-green text-xs">
              <span className="inline-block w-1.5 h-1.5 bg-cyber-green"></span>
              <span>INDEXING_KNOWLEDGE_SPHERE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-wider text-white">
              TECH STACK
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-cyber-green/50 to-transparent"></div>
          </div>
          
          <p className="text-xs md:text-sm text-cyber-green/70 leading-relaxed font-mono">
            Ravi's full-stack, mobile, and backend capabilities compiled as a real-time interactive node constellation map. Drag to interact, hover to track network nodes.
          </p>

          <div className="space-y-4 pt-2 text-xs">
            <div className="border border-zinc-800 bg-zinc-950/60 p-4 rounded hover:border-cyber-green/20 transition-all duration-300">
              <h3 className="font-bold text-white mb-2 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                <span>LANGUAGES, CORE & MESSAGING</span>
              </h3>
              <p className="text-zinc-400">Java, Python, JavaScript, TypeScript, Go, Dart, SQL, HTML, CSS, Apache Kafka, RabbitMQ, WebSockets (Socket.io), WebRTC, gRPC</p>
            </div>
            
            <div className="border border-zinc-800 bg-zinc-950/60 p-4 rounded hover:border-cyber-green/20 transition-all duration-300">
              <h3 className="font-bold text-white mb-2 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-cyber-green rounded-full"></span>
                <span>FRAMEWORKS, LIBRARIES & DATABASES</span>
              </h3>
              <p className="text-zinc-400">Next.js, React.js, Express.js, FastAPI, NestJS, Redux, Tailwind CSS, Bootstrap, Material UI, Shadcn UI, Fiber, Fastify, Flutter (Mobile), MongoDB, PostgreSQL, Redis, Prisma ORM, Supabase, Firebase</p>
            </div>

            <div className="border border-zinc-800 bg-zinc-950/60 p-4 rounded hover:border-cyber-green/20 transition-all duration-300">
              <h3 className="font-bold text-white mb-2 flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                <span>DEVOPS, AUTOMATION & TOOLS</span>
              </h3>
              <p className="text-zinc-400">Git, GitHub, Docker, Kubernetes, Nginx, Apache, CI/CD, AWS (S3), Ngrok, Nx Monorepo, Dokploy, n8n, Pinata IPFS, Google Analytics 4</p>
            </div>
          </div>
        </div>

        {/* Right Side: 3D rotating Tag Cloud */}
        <div className="lg:col-span-7 flex justify-center items-center relative z-10 w-full">
          <TechSphere />
        </div>
      </section>

      {/* Experience Timeline */}
      <Experience />

      {/* Projects Cards */}
      <Projects />

      {/* Terminal Hacking Environment */}
      <section id="terminal" className="py-20 px-4 max-w-5xl mx-auto w-full space-y-8 z-10">
        <div className="space-y-2 text-center">
          <div className="flex items-center justify-center space-x-2 text-cyber-green text-xs font-mono">
            <span className="inline-block w-2.5 h-0.5 bg-cyber-green animate-pulse"></span>
            <span>CYBER_SSH_TERMINAL_ONLINE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-wider text-white">
            INTERACTIVE SHELL
          </h2>
          <p className="text-xs md:text-sm text-cyber-green/60 max-w-md mx-auto">
            Access secure database endpoints or bypass system firewalls using our interactive mock bash shell environment.
          </p>
        </div>

        <Terminal />
      </section>

      {/* Interactive Footer */}
      <footer className="mt-auto border-t border-cyber-green/20 bg-zinc-950/80 px-6 py-8 text-center text-xs text-cyber-green/40 select-none space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto gap-4">
          <p className="font-mono">
            © {new Date().getFullYear()} RAVI_RAJ. SECURE PORTFOLIO LOG. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <a href={`mailto:${CONTACT_DATA.email}`} className="hover:text-cyber-green transition-colors">EMAIL</a>
            <span>/</span>
            <a href={CONTACT_DATA.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyber-green transition-colors">LINKEDIN</a>
            <span>/</span>
            <a href={CONTACT_DATA.github} target="_blank" rel="noreferrer" className="hover:text-cyber-green transition-colors">GITHUB</a>
            <span>/</span>
            <a href={`tel:${CONTACT_DATA.phone.replace(/\s+/g, '')}`} className="hover:text-cyber-green transition-colors">PHONE: {CONTACT_DATA.phone}</a>
          </div>
        </div>
        <p className="text-[10px] text-cyber-green/20 max-w-xl mx-auto">
          DISCLAIMER: This system contains mock penetration testing vectors. Security bypass instructions (sudo hack) are simulated. No actual firewalls or protocols were compromised.
        </p>
      </footer>
    </main>
  );
}
