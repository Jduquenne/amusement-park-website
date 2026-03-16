const AttractionsHero = ({ count }: { count: number }) => (
    <section className="relative bg-[#0a1a0f] px-6 py-28 text-center overflow-hidden">
        <div
            className="absolute inset-0 opacity-30"
            style={{
                backgroundImage: 'radial-gradient(circle, #1a5c3a 1px, transparent 1px)',
                backgroundSize: '28px 28px',
            }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,_#0f2d1a_0%,_transparent_100%)]" />

        <div className="relative">
            <p className="text-green-500 text-xs tracking-[0.4em] uppercase mb-5 font-medium">
                Parc Tivoli
            </p>
            <h1 className="text-white text-7xl md:text-9xl font-black uppercase leading-none tracking-tighter">
                Attrac<span className="text-[#4ade80]">tions</span>
            </h1>
            <p className="text-stone-400 mt-6 text-base max-w-md mx-auto leading-relaxed">
                Plus de 30 expériences inoubliables vous attendent. Des frissons pour tous les âges.
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
