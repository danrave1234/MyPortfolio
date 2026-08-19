import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
            <p className="font-mono text-sm uppercase tracking-widest text-accent">404</p>
            <h1 className="text-heading mt-4 font-bold text-foreground">
                This page doesn&apos;t exist
            </h1>
            <p className="text-body mt-4 max-w-md text-muted">
                The link may be out of date, or the page may have moved.
            </p>
            <Link
                href="/"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-accent px-6 font-semibold text-[#04191c] transition-colors hover:bg-accent-ink"
            >
                Back to the portfolio
            </Link>
        </div>
    );
}
