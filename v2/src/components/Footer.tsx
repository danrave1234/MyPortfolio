export function Footer() {
    return (
        <footer className="site-footer">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 text-sm text-muted">
                <span>© {new Date().getFullYear()} Danrave C. Keh</span>
                <a href="#top" className="editorial-link">Back to top</a>
            </div>
        </footer>
    );
}
