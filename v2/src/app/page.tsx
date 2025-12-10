"use client";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";

export default function Home() {
  // Generate circuit nodes - increased count
  const nodes = Array.from({ length: 60 }).map((_, i) => {
    const startY = (i / 60) * 600; // Distribute across 600vh
    const startX = Math.random() * 90 + 5;
    const size = Math.random() * 3 + 2;
    const duration = Math.random() * 2 + 2;
    const delay = Math.random() * 5;
    
    return {
      id: i,
      startX,
      startY,
      size,
      duration,
      delay,
    };
  });

  // Generate vertical data lines - increased count
  const dataLines = Array.from({ length: 30 }).map((_, i) => {
    const x = Math.random() * 100;
    const height = Math.random() * 40 + 20; // percent height of viewport
    const top = Math.random() * 550; // vh
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    return {
      id: i,
      x,
      height,
      top,
      duration,
      delay,
    };
  });

  // Generate floating light particles
  const lightParticles = Array.from({ length: 25 }).map((_, i) => {
    const startY = (i / 25) * 600;
    const startX = Math.random() * 100;
    const size = Math.random() * 6 + 3;
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * 3;
    
    return {
      id: i,
      startX,
      startY,
      size,
      duration,
      delay,
    };
  });

  return (
    <div className="relative flex flex-col w-full min-h-full">
      {/* Unified background that spans all sections - scrolls with content */}
      <div className="absolute inset-0 w-full min-h-[600vh] z-0 overflow-hidden pointer-events-none bg-[#050505]">
        
        {/* Large bright glow areas for atmosphere - More light sources */}
        <div className="absolute inset-0 overflow-hidden">
             {/* Top-focused bright glows - repositioned to avoid existing lights */}
             <motion.div 
                className="absolute top-[3%] left-[0%] w-[50vw] h-[50vw] bg-[#12B7C9] rounded-full blur-[160px] opacity-[0.18]"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.18, 0.28, 0.18],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
             />
             <motion.div 
                className="absolute top-[1%] right-[0%] w-[48vw] h-[48vw] bg-cyan-400 rounded-full blur-[155px] opacity-[0.16]"
                animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.16, 0.24, 0.16],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
             />
             <motion.div 
                className="absolute top-[6%] left-[75%] w-[45vw] h-[45vw] bg-blue-400 rounded-full blur-[145px] opacity-[0.17]"
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -15, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             />
             <motion.div 
                className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] bg-[#12B7C9] rounded-full blur-[150px] opacity-[0.15]"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             />
             <motion.div 
                className="absolute top-[40%] right-[10%] w-[60vw] h-[60vw] bg-blue-500 rounded-full blur-[180px] opacity-[0.12]"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -30, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
             />
             <motion.div 
                className="absolute top-[70%] left-[30%] w-[55vw] h-[55vw] bg-cyan-500 rounded-full blur-[160px] opacity-[0.14]"
                animate={{
                    scale: [1, 1.4, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
             />
             <motion.div 
                className="absolute top-[25%] right-[25%] w-[45vw] h-[45vw] bg-[#12B7C9] rounded-full blur-[140px] opacity-[0.13]"
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.13, 0.2, 0.13],
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
             />
             <motion.div 
                className="absolute top-[55%] left-[5%] w-[40vw] h-[40vw] bg-cyan-400 rounded-full blur-[130px] opacity-[0.11]"
                animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.11, 0.18, 0.11],
                }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
             />
             <motion.div 
                className="absolute top-[15%] right-[40%] w-[48vw] h-[48vw] bg-blue-400 rounded-full blur-[145px] opacity-[0.12]"
                animate={{
                    scale: [1, 1.28, 1],
                    x: [0, 25, 0],
                }}
                transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
             />
             <motion.div 
                className="absolute top-[80%] right-[30%] w-[42vw] h-[42vw] bg-[#12B7C9] rounded-full blur-[135px] opacity-[0.13]"
                animate={{
                    scale: [1, 1.32, 1],
                }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
             />
        </div>

        {/* Top-focused vertical data lines - positioned to avoid existing glows */}
        {Array.from({ length: 15 }).map((_, i) => {
          // Position in areas that avoid the existing glow orbs (left 0-10%, 15-20%, 50%, 75-80%, right 0-10%)
          const positions = [5, 12, 25, 30, 35, 40, 45, 55, 60, 65, 70, 85, 90, 95, 3];
          const x = positions[i] || Math.random() * 100;
          const top = Math.random() * 80; // Concentrated in top 80vh
          const height = Math.random() * 30 + 25;
          const duration = Math.random() * 8 + 8;
          const delay = Math.random() * 3;
          
          return (
            <motion.div
              key={`top-line-${i}`}
              className="absolute w-[2px] bg-gradient-to-b from-transparent via-[#12B7C9] to-transparent opacity-50 shadow-[0_0_10px_#12B7C9]"
              style={{
                left: `${x}%`,
                top: `${top}vh`,
                height: `${height}vh`,
              }}
              animate={{
                opacity: [0, 0.7, 0],
                y: [0, 80],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
                delay: delay,
              }}
            />
          );
        })}

        {/* Animated Vertical Data Lines - Brighter */}
        {dataLines.map((line) => (
            <motion.div
                key={`line-${line.id}`}
                className="absolute w-[2px] bg-gradient-to-b from-transparent via-[#12B7C9] to-transparent opacity-40 shadow-[0_0_8px_#12B7C9]"
                style={{
                    left: `${line.x}%`,
                    top: `${line.top}vh`,
                    height: `${line.height}vh`,
                }}
                animate={{
                    opacity: [0, 0.6, 0],
                    y: [0, 100],
                }}
                transition={{
                    duration: line.duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: line.delay,
                }}
            />
        ))}

        {/* Glowing Circuit Nodes - Brighter */}
        {nodes.map((node) => (
          <motion.div
            key={`node-${node.id}`}
            className="absolute rounded-full bg-[#12B7C9]"
            style={{
              width: `${node.size}px`,
              height: `${node.size}px`,
              left: `${node.startX}%`,
              top: `${node.startY}vh`,
              boxShadow: `0 0 ${node.size * 8}px 2px #12B7C9`,
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay,
            }}
          />
        ))}

        {/* Connecting Circuit Traces (SVG) - Brighter */}
        <svg className="absolute inset-0 w-full h-full opacity-35">
            {/* We draw some predefined paths that repeat/flow down */}
            {[0, 100, 200, 300, 400, 500].map((offset, i) => (
                <g key={i} transform={`translate(0, ${offset * 8}0)`}> 
                    {/* Horizontal traces */}
                    <motion.path
                        d="M0,50 h100 l20,20 h200 l-20,20 h100"
                        fill="none"
                        stroke="#12B7C9"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: i }}
                    />
                    <motion.path
                        d="M1000,150 h-200 l-30,30 h-100 l30,30 h-300"
                        fill="none"
                        stroke="#12B7C9"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: i + 2 }}
                    />
                     {/* Random flowing bits */}
                     <motion.circle 
                        cx="200" 
                        cy="100" 
                        r="2" 
                        fill="#12B7C9"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i }}
                     />
                </g>
            ))}
        </svg>

        {/* Floating light particles */}
        {lightParticles.map((particle) => (
          <motion.div
            key={`particle-${particle.id}`}
            className="absolute rounded-full bg-[#12B7C9]"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.startX}%`,
              top: `${particle.startY}vh`,
              boxShadow: `0 0 ${particle.size * 6}px rgba(18, 183, 201, 0.8)`,
            }}
            animate={{
              x: [
                Math.random() * 150 - 75,
                Math.random() * 150 - 75,
                Math.random() * 150 - 75,
              ],
              y: [
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
              ],
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}

        {/* Additional light streaks for more brightness */}
        {[0, 100, 200, 300, 400, 500].map((offset, idx) => (
          <motion.div
            key={`streak-${idx}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#12B7C9] to-transparent opacity-30"
            style={{
              top: `${offset + 20}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 8 + idx * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: idx * 1.2,
            }}
          />
        ))}

        {/* Top-focused radial light bursts - positioned to avoid existing glows */}
        {Array.from({ length: 8 }).map((_, i) => {
          // Position in areas that avoid existing glow orbs
          const leftPositions = [12, 28, 35, 42, 58, 65, 88, 95];
          const topPositions = [5, 15, 25, 35, 45, 55, 20, 30];
          const left = leftPositions[i] || Math.random() * 80 + 10;
          const top = topPositions[i] || Math.random() * 60; // Concentrated in top 60vh
          const size = Math.random() * 200 + 250;
          
          return (
            <motion.div
              key={`top-burst-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}vh`,
                background: "radial-gradient(circle, rgba(18, 183, 201, 0.25), transparent 70%)",
              }}
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6,
              }}
            />
          );
        })}

        {/* Radial light bursts */}
        {[0, 100, 200, 300, 400, 500].map((offset, idx) => (
          <motion.div
            key={`burst-${idx}`}
            className="absolute rounded-full"
            style={{
              width: "300px",
              height: "300px",
              left: `${Math.random() * 80 + 10}%`,
              top: `${offset + Math.random() * 30}vh`,
              background: "radial-gradient(circle, rgba(18, 183, 201, 0.2), transparent 70%)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4 + idx * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.8,
            }}
          />
        ))}

        {/* Top-focused light streaks - positioned at specific heights */}
        {[12, 22, 32, 42, 52].map((topPos, i) => (
          <motion.div
            key={`top-streak-${i}`}
            className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#12B7C9] to-transparent opacity-40"
            style={{
              top: `${topPos}vh`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1,
            }}
          />
        ))}

        {/* Softer Vignette Overlay */}
        <div 
            className="absolute inset-0 pointer-events-none"
            style={{
                background: "radial-gradient(circle at center, transparent 0%, transparent 70%, rgba(5, 5, 5, 0.8) 100%)"
            }}
        />
      </div>
      
      {/* Content sections */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
}
