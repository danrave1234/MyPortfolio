"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef, useState } from "react";
import {
  User,
  Briefcase,
  Code2,
  FolderOpen,
  Trophy,
  Mail,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/portfolio";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const ICONS: Record<string, typeof User> = {
  About: User,
  Experience: Briefcase,
  Capabilities: Code2,
  Projects: FolderOpen,
  Achievements: Trophy,
  Contact: Mail,
  Resume: FileText,
};

export function Navbar({ activeSection }: { activeSection?: string }) {
  const mouseX = useMotionValue(Infinity);
  // Magnification needs both a cursor to drive it and enough room to grow
  // into. Below 640px the dock is already close to the viewport width, so
  // growing an icon to 68px would push the last one off screen.
  const fine = useMediaQuery("(pointer: fine) and (min-width: 640px)");

  const items = [
    // Root-relative ("/#about", not "#about") so the dock still works from
    // routes other than "/" — otherwise it is inert on the 404 page.
    ...navItems.map((i) => ({ ...i, href: `/${i.href}`, external: false })),
    { label: "Resume", href: "/danrave-keh-resume.pdf", external: true },
  ];

  return (
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2"
    >
      <motion.div
        onMouseMove={(e) => fine && mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 24 }}
        className={cn(
          "flex max-w-full items-end gap-0.5 overflow-x-auto rounded-2xl border border-line bg-[#0d0f13]/85 px-1.5 py-2 backdrop-blur-xl",
          "shadow-[0_8px_32px_rgba(0,0,0,0.5)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "sm:gap-2 sm:px-3"
        )}
      >
        {items.map((item, i) => (
          <div key={item.label} className="flex items-end">
            {item.external && (
              <div className="mx-0.5 mb-3 h-6 w-px shrink-0 bg-line sm:mx-1.5" />
            )}
            <DockIcon
              mouseX={mouseX}
              fine={fine}
              item={item}
              isActive={activeSection === item.href.replace("/#", "")}
              index={i}
            />
          </div>
        ))}
      </motion.div>
    </nav>
  );
}

function DockIcon({
  mouseX,
  fine,
  item,
  isActive,
}: {
  mouseX: MotionValue;
  fine: boolean;
  item: { label: string; href: string; external: boolean };
  isActive: boolean;
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const widthSync = useTransform(distance, [-140, 0, 140], [44, 68, 44]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const Icon = ICONS[item.label] ?? User;

  return (
    <div className="relative flex shrink-0 flex-col items-center">
      {fine && hovered && (
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-md border border-line bg-black/90 px-2 py-1 text-xs text-foreground"
        >
          {item.label}
        </motion.span>
      )}

      <Link
        ref={ref}
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        aria-label={item.label}
        aria-current={isActive ? "true" : undefined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="block"
      >
        <motion.span
          // Magnification only when there's a cursor to drive it. On touch the
          // icon stays a fixed 44px — the minimum comfortable tap target.
          style={fine ? { width } : undefined}
          className={cn(
            "flex aspect-square w-10 shrink-0 items-center justify-center rounded-xl border transition-colors sm:w-11",
            isActive
              ? "border-accent/50 bg-accent/15 text-accent"
              : "border-line bg-white/[0.04] text-foreground/80 hover:border-accent/40 hover:text-accent"
          )}
        >
          <Icon className="h-[45%] w-[45%]" strokeWidth={1.75} />
        </motion.span>
      </Link>
    </div>
  );
}
