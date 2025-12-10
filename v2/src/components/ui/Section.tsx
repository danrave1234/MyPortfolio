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
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
                {children}
            </div>
        </motion.section>
    );
}

