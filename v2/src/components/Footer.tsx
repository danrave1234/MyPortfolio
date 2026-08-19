export function Footer() {
    return (
        <footer className="border-t border-line px-5 py-8">
            {/* The bottom padding clears the floating dock plus the home
                indicator, so the last line is never sitting under the nav. */}
            <p className="mx-auto max-w-6xl pb-[calc(4.5rem+env(safe-area-inset-bottom))] text-center text-sm text-dim">
                © {new Date().getFullYear()} Danrave C. Keh · Built with Next.js
            </p>
        </footer>
    );
}
