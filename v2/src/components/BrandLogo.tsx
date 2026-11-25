import Link from "next/link";
import Image from "next/image";

export function BrandLogo() {
    return (
        <Link href="/#home" className="inline-flex min-h-11 min-w-0 items-center gap-2 rounded-lg text-sm font-bold text-foreground hover:text-accent">
            <Image src="/assets/dk-logo.png" alt="" width={40} height={40} className="object-contain" />
            <span className="min-w-0">Danrave Keh</span>
        </Link>
    );
}
