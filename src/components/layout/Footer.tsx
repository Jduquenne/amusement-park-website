import Link from 'next/link';
import Image from 'next/image';

const COLUMNS = [
    {
        title: 'Attractions',
        links: [
            { label: 'Sensations fortes', href: '/attractions' },
            { label: 'Pour tous', href: '/attractions' },
            { label: 'Pour les petits', href: '/attractions' },
            { label: 'Plan du parc', href: '/map' },
        ],
    },
    {
        title: 'Billets',
        links: [
            { label: 'Tarifs & entrées', href: '/tickets' },
            { label: 'Pass annuel', href: '/tickets' },
            { label: 'Groupes & scolaires', href: '/tickets' },
            { label: 'Cartes cadeaux', href: '/tickets' },
        ],
    },
    {
        title: 'Le Parc',
        links: [
            { label: 'À propos de Pawland', href: '/' },
            { label: 'Carrières', href: '/' },
            { label: 'Presse', href: '/' },
            { label: 'FAQ', href: '/' },
        ],
    },
    {
        title: 'Informations',
        links: [
            { label: 'Accès & transports', href: '/map' },
            { label: 'Horaires d\'ouverture', href: '/' },
            { label: 'Accessibilité', href: '/' },
            { label: 'Contact', href: '/' },
        ],
    },
];

const SOCIALS = [
    {
        label: 'Facebook',
        href: 'https://facebook.com',
        icon: (
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        label: 'Instagram',
        href: 'https://instagram.com',
        icon: (
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: 'YouTube',
        href: 'https://youtube.com',
        icon: (
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
            </svg>
        ),
    },
];

const Footer = () => (
    <footer className="bg-[#0a1a0f] text-stone-400">

        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-white/10">

                <div className="lg:col-span-2">
                    <Link href="/">
                        <Image src="/pawland.png" alt="Logo Pawland" width={110} height={36} />
                    </Link>
                    <p className="mt-5 text-sm leading-relaxed text-stone-500 max-w-xs">
                        Le premier parc d&apos;attractions entièrement dédié aux chats. Frissons, magie et ronrons garantis à Purrington.
                    </p>
                    <div className="mt-6 space-y-1.5 text-sm text-stone-500">
                        <p>12 Whisker Lane — Purrington</p>
                        <p>+33 1 42 00 00 00</p>
                        <p>hello@pawland.fr</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                        {SOCIALS.map(({ label, href, icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-stone-500 hover:text-white hover:border-white/30 transition-colors"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {COLUMNS.map(({ title, links }) => (
                    <div key={title}>
                        <p className="text-white text-xs font-black uppercase tracking-widest mb-5">
                            {title}
                        </p>
                        <ul className="space-y-3">
                            {links.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-sm text-stone-500 hover:text-white transition-colors"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>

            <div className="pt-8 mb-6 text-xs text-stone-700 bg-white/5 rounded-xl px-5 py-4 border border-white/5 text-center">
                🐾 Pawland est un site fictif créé à des fins d&apos;apprentissage. Toutes les données, attractions, prix et informations présentés sont inventés et n&apos;ont aucune valeur réelle.
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-600">
                <p>© {new Date().getFullYear()} Pawland — Tous droits réservés</p>
                <div className="flex gap-6">
                    {['Politique de confidentialité', 'Mentions légales', 'CGU', 'Cookies'].map(label => (
                        <Link key={label} href="/" className="hover:text-stone-400 transition-colors">
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    </footer>
);

export default Footer;
