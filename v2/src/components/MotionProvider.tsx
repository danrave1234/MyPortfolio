"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

/**
 * Honour the OS "reduce motion" setting for Framer Motion.
 *
 * The `prefers-reduced-motion` block in globals.css only governs CSS
 * animation. Framer animates via JS, so without this every scroll reveal still
 * plays for someone who explicitly asked their system for less motion.
 * `reducedMotion="user"` disables transform and layout animations while
 * leaving opacity alone, so content still appears — it just doesn't move.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
