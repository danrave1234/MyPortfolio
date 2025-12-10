import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps extends HTMLMotionProps<"section"> {
    children: ReactNode;
    id?: string;
    className?: string;
}

export function Section({ children, id, className, ...props }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className={cn(
                "min-h-screen w-full flex flex-col justify-center items-center px-6 md:px-20 py-20 relative snap-start scroll-margin-top-0",
                className
            )}
            {...props}
        >
            {/* Shared background grid overlay */}
            <div
                className="absolute inset-0 z-0 opacity-60 pointer-events-none bg-[#0b0c0f]"
                style={{
                    backgroundImage: [
                        "radial-gradient(ellipse at 50% 40%, rgba(18,183,201,0.08), rgba(18,183,201,0) 45%)",
                        "linear-gradient(#1b1c20 1px, transparent 1px)",
                        "linear-gradient(90deg, #1b1c20 1px, transparent 1px)"
                    ].join(", "),
                    backgroundSize: ["100% 100%", "40px 40px", "40px 40px"].join(", "),
                    backgroundPosition: ["center", "0 0", "0 0"].join(", "),
                    maskImage:
                        "radial-gradient(circle at center, rgba(0,0,0,0.95) 55%, rgba(0,0,0,0.65) 75%, rgba(0,0,0,0) 100%)",
                    WebkitMaskImage:
                        "radial-gradient(circle at center, rgba(0,0,0,0.95) 55%, rgba(0,0,0,0.65) 75%, rgba(0,0,0,0) 100%)",
                }}
            />
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
                {children}
            </div>
        </motion.section>
    );
}

