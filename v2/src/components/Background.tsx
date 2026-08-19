/**
 * Page background.
 *
 * Deliberately CSS-only and `position: fixed` — no JS, no per-element
 * animation, no randomised particle field. It costs one composited layer on
 * every device instead of ~150 animated nodes, and it can't produce a
 * hydration mismatch. Everything below is painted once and then just sits
 * behind the content while it scrolls.
 */
export function Background() {
    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
            {/* Single soft accent wash anchored behind the hero. Sized in vmin so
                it stays proportional on phones and ultrawides alike. */}
            <div
                className="absolute left-1/2 top-[-30vmin] h-[85vmin] w-[85vmin] -translate-x-1/2 rounded-full opacity-40 blur-[70px] sm:blur-[110px]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(18,183,201,0.30) 0%, rgba(18,183,201,0.10) 45%, transparent 70%)",
                }}
            />

            {/* Cooler counterweight low on the page so the lower sections aren't
                flat black. */}
            <div
                className="absolute bottom-[-25vmin] right-[-15vmin] h-[70vmin] w-[70vmin] rounded-full opacity-25 blur-[70px] sm:blur-[110px]"
                style={{
                    background:
                        "radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 70%)",
                }}
            />

            {/* Fine grid, masked so it fades out toward the edges. 1px lines on a
                72px cell read as texture rather than decoration. */}
            <div
                className="absolute inset-0 opacity-[0.28]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
                    backgroundSize: "72px 72px",
                    maskImage:
                        "radial-gradient(ellipse 100% 70% at 50% 30%, black 20%, transparent 75%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 100% 70% at 50% 30%, black 20%, transparent 75%)",
                }}
            />

            {/* Grain. One tiled SVG turbulence, no network request. Keeps large
                flat gradients from banding on cheap panels. */}
            <div
                className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
            />

            {/* Vignette to seat the content. */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 120% 90% at 50% 40%, transparent 40%, rgba(4,5,7,0.65) 100%)",
                }}
            />
        </div>
    );
}
