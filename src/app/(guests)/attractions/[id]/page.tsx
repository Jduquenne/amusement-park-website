import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { assetPath } from '@/lib/utils/assetPath';
import CategoryBadge from '@/components/attractions/CategoryBadge';
import { attractions } from '@/lib/data/attractions';

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
    return attractions.map(({ id }) => ({ id }));
}

interface AttractionDetailPageProps {
    params: Promise<{ id: string }>;
}

const AttractionDetailPage = async ({ params }: AttractionDetailPageProps) => {
    const { id } = await params;
    const attraction = attractions.find(a => a.id === id);

    if (!attraction) notFound();

    const { name, category, description, minHeight, image } = attraction;

    return (
        <div className="min-h-screen bg-[#0a1a0f] text-white">

            <section
                className="relative h-[78vh] w-full overflow-hidden"
                style={{ animation: 'fadeIn 0.9s ease both' }}
            >
                <Image
                    src={assetPath(image)}
                    alt={name}
                    fill
                    className="object-cover object-top scale-105"
                    style={{ animation: 'fadeIn 1.2s ease both' }}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a0f] via-[#0a1a0f]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a0f]/40 to-transparent" />

                <div
                    className="absolute top-8 left-8"
                    style={{ animation: 'slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both' }}
                >
                    <Link
                        href="/attractions"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:border-white/30"
                    >
                        ← Attractions
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-12 max-w-6xl">
                    <div style={{ animation: 'fadeUp 0.6s ease 0.3s both' }}>
                        <CategoryBadge category={category} />
                    </div>
                    <h1
                        className="mt-5 text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter text-white"
                        style={{ animation: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both' }}
                    >
                        {name}
                    </h1>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-8 md:px-16 py-16">

                <div
                    className="flex flex-wrap gap-4 mb-14"
                    style={{ animation: 'fadeUp 0.7s ease 0.55s both' }}
                >
                    <div className="border border-white/10 rounded-2xl px-7 py-5 bg-white/[0.04] backdrop-blur-sm">
                        <p className="text-xs text-stone-500 uppercase tracking-[0.2em] mb-2">Catégorie</p>
                        <p className="text-white font-semibold text-lg">{category}</p>
                    </div>

                    {minHeight ? (
                        <div className="border border-amber-900/40 rounded-2xl px-7 py-5 bg-amber-950/20">
                            <p className="text-xs text-amber-700 uppercase tracking-[0.2em] mb-2">Taille minimum</p>
                            <p className="text-amber-300 font-semibold text-lg">{minHeight} cm</p>
                        </div>
                    ) : (
                        <div className="border border-green-900/40 rounded-2xl px-7 py-5 bg-green-950/20">
                            <p className="text-xs text-green-700 uppercase tracking-[0.2em] mb-2">Accès</p>
                            <p className="text-green-400 font-semibold text-lg">Sans restriction</p>
                        </div>
                    )}
                </div>

                <div
                    className="h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-14"
                    style={{ animation: 'fadeIn 0.8s ease 0.65s both' }}
                />

                <p
                    className="text-stone-300 text-xl md:text-2xl leading-relaxed max-w-3xl"
                    style={{ animation: 'fadeUp 0.8s ease 0.7s both' }}
                >
                    {description}
                </p>

                <div
                    className="mt-20 pt-10 border-t border-white/5 flex items-center justify-between"
                    style={{ animation: 'fadeUp 0.7s ease 0.85s both' }}
                >
                    <Link
                        href="/attractions"
                        className="inline-flex items-center gap-3 text-stone-400 hover:text-white text-sm font-medium transition-colors group"
                    >
                        <span className="transition-transform duration-200 group-hover:-translate-x-1 inline-block">←</span>
                        Toutes les attractions
                    </Link>
                    <p className="text-xs text-stone-600 tracking-[0.2em] uppercase">Pawland · Purrington</p>
                </div>

            </section>

        </div>
    );
};

export default AttractionDetailPage;
