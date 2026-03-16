import Image from 'next/image';

interface AttractionsHeroProps {
    count: number;
    image: string;
}

const AttractionsHero = ({ count, image }: AttractionsHeroProps) => (
    <section className="relative px-6 py-28 text-center overflow-hidden">
        <Image
            src={image}
            alt="Attractions Pawland"
            fill
            className="object-cover object-top"
            priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative">
            <p className="text-green-500 text-xs tracking-[0.4em] uppercase mb-5 font-medium">
                Pawland
            </p>
            <h1 className="text-white text-7xl md:text-9xl font-black uppercase leading-none tracking-tighter">
                Attrac<span className="text-[#4ade80]">tions</span>
            </h1>
            <p className="text-stone-400 mt-6 text-base max-w-md mx-auto leading-relaxed">
                {count} expériences inoubliables vous attendent. Des frissons pour tous les âges.
            </p>
            <div className="mt-10 inline-flex items-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-700" />
                <span className="text-green-600 text-xs tracking-[0.3em] font-medium">
                    {count} ATTRACTIONS
                </span>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-700" />
            </div>
        </div>
    </section>
);

export default AttractionsHero;
