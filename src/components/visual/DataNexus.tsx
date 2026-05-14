import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  BrainCircuit, Receipt, Database, Sparkles, Network, FileSearch, FileText, Bot, LineChart, ShieldCheck, Fingerprint, Activity
} from 'lucide-react';
import React, { useRef } from 'react';

const taxNodes = [
  { icon: Receipt, label: 'INVOICE' },
  { icon: FileText, label: 'REPORT' },
  { icon: Database, label: 'DATA' },
  { icon: FileSearch, label: 'AUDIT' },
  { icon: LineChart, label: 'STATS' },
  { icon: ShieldCheck, label: 'POLICY' },
];

const aiNodes = [
  { icon: Sparkles, label: 'LLM' },
  { icon: Bot, label: 'AGENT' },
  { icon: Network, label: 'GRAPH' },
  { icon: BrainCircuit, label: 'ALGO' },
  { icon: Fingerprint, label: 'VISION' },
  { icon: Activity, label: 'AUTO' },
];

export default function DataNexus() {
  const ref = useRef<HTMLDivElement>(null);

  // Interactive Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 150 });

  const rotateX = useTransform(smoothY, [-400, 400], [15, -15]);
  const rotateY = useTransform(smoothX, [-400, 400], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Helper to position items on a circle
  const getPos = (radius: number, index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    // container is w-16 h-16 (64px) roughly, so margin -32px centers it
    return { left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, marginLeft: '-32px', marginTop: '-32px' };
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-[700px] w-full items-center justify-center overflow-visible lg:-ml-12"
      style={{ perspective: '1500px' }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative flex h-full w-full items-center justify-center"
      >
         {/* =======================
             CENTER ORB: SMART TAX
             ======================= */}
         <div className="absolute z-30 flex flex-col items-center justify-center" style={{ transform: 'translateZ(60px)' }}>
           <motion.div
             animate={{ scale: [1, 1.15, 1], rotateZ: 180 }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute h-44 w-44 rounded-full border border-emerald-400/30 bg-emerald-500/10 shadow-[0_0_60px_rgba(52,211,153,0.3)] backdrop-blur-md"
           />
           <motion.div
             animate={{ rotateZ: -360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute h-48 w-48 rounded-full border-2 border-dashed border-emerald-300/30"
           />
           <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-emerald-400/50 bg-slate-100 dark:bg-slate-950/90 shadow-[0_0_50px_rgba(52,211,153,0.6)]">
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-full" />
             <span className="relative z-10 text-[22px] font-black leading-tight tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white to-emerald-200 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] text-center">
               SMART<br/>TAX
             </span>
           </div>
         </div>

         {/* =======================
             RING 1: TAX ELEMENTS (Blue)
             ======================= */}
         <motion.div
           className="absolute flex items-center justify-center rounded-full border-[2px] border-sky-400/30 border-dashed"
           style={{
             width: '400px', height: '400px',
             transformStyle: 'preserve-3d',
             rotateX: 65, rotateY: -15
           }}
           animate={{ rotateZ: 360 }}
           transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
         >
            {taxNodes.map((node, i) => (
              <motion.div
                key={node.label}
                className="absolute flex h-16 w-16 flex-col items-center justify-center"
                style={{ ...getPos(200, i, 6), transformStyle: 'preserve-3d' }}
                animate={{ rotateZ: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              >
                {/* Counter-rotate the 3D tilt so icons face the camera */}
                <div
                   className="flex flex-col items-center gap-1.5"
                   style={{ transform: 'rotateY(15deg) rotateX(-65deg)' }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-400/60 bg-slate-50 dark:bg-[#020617]/90 shadow-[0_0_20px_rgba(56,189,248,0.5)] backdrop-blur-md">
                    <node.icon className="h-5 w-5 text-sky-400" />
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-sky-300 drop-shadow-md">{node.label}</span>
                </div>
              </motion.div>
            ))}
         </motion.div>

         {/* =======================
             RING 2: AI ELEMENTS (Indigo/Purple)
             ======================= */}
         <motion.div
           className="absolute flex items-center justify-center rounded-full border-[2px] border-indigo-400/30 border-dashed"
           style={{
             width: '580px', height: '580px',
             transformStyle: 'preserve-3d',
             rotateX: 65, rotateY: 20
           }}
           animate={{ rotateZ: -360 }}
           transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
         >
            {aiNodes.map((node, i) => (
              <motion.div
                key={node.label}
                className="absolute flex h-16 w-16 flex-col items-center justify-center"
                style={{ ...getPos(290, i, 6), transformStyle: 'preserve-3d' }}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              >
                {/* Counter-rotate the 3D tilt so icons face the camera */}
                <div
                   className="flex flex-col items-center gap-1.5"
                   style={{ transform: 'rotateY(-20deg) rotateX(-65deg)' }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-400/60 bg-slate-50 dark:bg-[#020617]/90 shadow-[0_0_25px_rgba(99,102,241,0.5)] backdrop-blur-md">
                    <node.icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-indigo-300 drop-shadow-md">{node.label}</span>
                </div>
              </motion.div>
            ))}
         </motion.div>

         {/* =======================
             AMBIENT BACKGROUND
             ======================= */}
         <div className="absolute h-[800px] w-[800px] rounded-full border border-slate-900/5 dark:border-white/5 border-dashed" style={{ transform: 'translateZ(-150px) rotateX(60deg)' }} />
         <motion.div
           animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           className="absolute h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-[150px]"
           style={{ transform: 'translateZ(-100px)' }}
         />
      </motion.div>
    </div>
  );
}
