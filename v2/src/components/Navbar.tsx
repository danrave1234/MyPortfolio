"use client";

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { User, Code2, FolderOpen, Trophy, Mail, FileText } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/portfolio";

export function Navbar({ activeSection }: { activeSection?: string }) {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex h-16 items-end gap-4 rounded-2xl bg-gray-900/80 px-4 pb-3 backdrop-blur-md border border-white/10"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    >
      {navItems.map((item) => {
        const sectionId = item.href.replace('#', '');
        const isActive = activeSection === sectionId;
        return (
          <DockIcon 
            key={item.label} 
            mouseX={mouseX} 
            item={item} 
            isActive={isActive}
          />
        );
      })}
      {/* Separator */}
      <div className="h-8 w-[1px] bg-white/10 mb-1 mx-1" />
      <DockIcon 
        mouseX={mouseX} 
        item={{ label: 'Resume', href: '/Resume with QR with picture.pdf', shortcut: 'R' }} 
        icon={<FileText className="h-full w-full text-white" />}
        isExternal
      />
    </motion.div>
  );
}

function DockIcon({ 
    mouseX, 
    item, 
    icon,
    isExternal,
    isActive = false
}: { 
    mouseX: MotionValue; 
    item: { label: string; href: string; shortcut?: string }; 
    icon?: React.ReactNode; 
    isExternal?: boolean;
    isActive?: boolean;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  const getIcon = (label: string, className?: string) => {
    const iconClass = className || "h-full w-full";
    switch (label) {
      case 'About': return <User className={iconClass} />;
      case 'Capabilities': return <Code2 className={iconClass} />;
      case 'Projects': return <FolderOpen className={iconClass} />;
      case 'Achievements': return <Trophy className={iconClass} />;
      case 'Contact': return <Mail className={iconClass} />;
      default: return <User className={iconClass} />;
    }
  };

  return (
    <div className="relative flex flex-col items-center">
        {/* Tooltip */}
        {hovered && (
             <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -top-10 px-2 py-1 bg-black/90 text-white text-xs rounded border border-white/10 whitespace-nowrap pointer-events-none"
             >
                {item.label}
             </motion.div>
        )}
        
        <Link href={item.href} target={isExternal ? "_blank" : undefined}>
            <motion.div
                ref={ref}
                style={{ width }}
                className={cn(
                    "aspect-square rounded-full flex items-center justify-center border transition-colors cursor-pointer",
                    isActive 
                        ? "bg-[#12B7C9]/20 border-[#12B7C9]/50 shadow-lg shadow-[#12B7C9]/20" 
                        : "bg-gray-800 border-white/10 hover:border-[#12B7C9]/50 hover:bg-gray-700"
                )}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                whileTap={{ scale: 0.9 }}
            >
                <div className="h-1/2 w-1/2">
                    {icon || getIcon(item.label, cn(
                        "h-full w-full transition-colors",
                        isActive ? "text-[#12B7C9]" : "text-white"
                    ))}
                </div>
            </motion.div>
        </Link>
    </div>
  );
}

