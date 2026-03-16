import Link from 'next/link';
import Image from 'next/image';

const NAV_LEFT = [
    { label: 'Attractions', href: '/attractions' },
    { label: 'Billets', href: '/tickets' },
];

const NAV_RIGHT = [
    { label: 'Plan', href: '/map' },
    { label: 'Mon Compte', href: '/account' },
];

const Header = () => (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-stone-100 z-50">
        <nav className="max-w-3xl mx-auto grid grid-cols-3 items-center h-16 px-6">

            <div className="flex items-center justify-end gap-8">
                {NAV_LEFT.map(({ label, href }) => (
                    <Link
                        key={href}
                        href={href}
                        className="text-sm text-stone-600 hover:text-[#1a5c3a] font-medium transition-colors"
                    >
                        {label}
                    </Link>
                ))}
            </div>

            <div className="flex justify-center">
                <Link href="/attractions">
                    <Image src="/pawland.png" alt="Pawland" width={50} height={50} />
                </Link>
            </div>

            <div className="flex items-center justify-start gap-8">
                {NAV_RIGHT.map(({ label, href }) => (
                    <Link
                        key={href}
                        href={href}
                        className="text-sm text-stone-600 hover:text-[#1a5c3a] font-medium transition-colors"
                    >
                        {label}
                    </Link>
                ))}
            </div>

        </nav>
    </header>
);

export default Header;
