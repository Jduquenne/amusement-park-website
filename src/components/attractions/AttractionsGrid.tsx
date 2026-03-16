'use client';

import { useState } from 'react';
import AttractionCard from './AttractionCard';
import { CATEGORIES } from '@/lib/data/attractions';
import type { Attraction, AttractionCategory } from '@/lib/data/attractions';

type ActiveCategory = 'Tous' | AttractionCategory;

interface AttractionsGridProps {
    attractions: Attraction[];
}

const AttractionsGrid = ({ attractions }: AttractionsGridProps) => {
    const [activeCategory, setActiveCategory] = useState<ActiveCategory>('Tous');

    const filtered = activeCategory === 'Tous'
        ? attractions
        : attractions.filter(({ category }) => category === activeCategory);

    return (
        <>
            <div className="sticky top-16 z-40 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
                <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2 flex-wrap">
                    {CATEGORIES.map(cat => {
                        const count = cat === 'Tous'
                            ? attractions.length
                            : attractions.filter(({ category }) => category === cat).length;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                                    activeCategory === cat
                                        ? 'bg-[#1a5c3a] text-white shadow-sm shadow-green-900/20'
                                        : 'bg-white text-stone-600 border border-stone-200 hover:border-[#1a5c3a] hover:text-[#1a5c3a]'
                                }`}
                            >
                                {cat}
                                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                                    activeCategory === cat ? 'bg-green-700 text-green-100' : 'bg-stone-100 text-stone-400'
                                }`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-6 py-12">
                <p
                    className="text-stone-400 text-sm mb-8"
                    style={{ animation: 'fadeUp 0.5s ease both' }}
                >
                    {filtered.length} attraction{filtered.length > 1 ? 's' : ''}
                </p>
                <div key={activeCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((attraction, index) => (
                        <div
                            key={attraction.id}
                            style={{
                                animation: 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
                                animationDelay: `${Math.floor(index / 3) * 0.12}s`,
                            }}
                        >
                            <AttractionCard {...attraction} />
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default AttractionsGrid;
