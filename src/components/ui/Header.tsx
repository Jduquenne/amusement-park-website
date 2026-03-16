import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="fixed top-0 w-full bg-white shadow z-50">
            <nav className="flex items-center justify-center h-16 relative">
                <div className="absolute left-4 flex space-x-4">
                    <Link href="/attractions" className="text-gray-700 hover:text-red-600 font-medium">
                        Attractions
                    </Link>
                    <Link href="/tickets" className="text-gray-700 hover:text-red-600 font-medium">
                        Billets
                    </Link>
                </div>

                <Link href="/" className="mx-auto">
                    <Image src="/logo-tivoli.svg" alt="Logo" width={120} height={40} />
                </Link>

                <div className="absolute right-4 flex space-x-4">
                    <Link href="/map" className="text-gray-700 hover:text-red-600 font-medium">
                        Plan
                    </Link>
                    <Link href="/account" className="text-gray-700 hover:text-red-600 font-medium">
                        Mon Compte
                    </Link>
                </div>
            </nav>
        </header>
    );
}