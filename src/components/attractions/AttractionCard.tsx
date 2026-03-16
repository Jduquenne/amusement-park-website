import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '@/lib/utils/assetPath';
import CategoryBadge from './CategoryBadge';
import type { Attraction } from '@/lib/data/attractions';

type AttractionCardProps = Attraction;

const AttractionCard = ({ id, name, category, description, minHeight, image }: AttractionCardProps) => (
    <Link href={`/attractions/${id}`} className="group">
        <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl hover:border-stone-200 transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col">

            <div className="h-52 relative">
                <Image
                    src={assetPath(image)}
                    alt={name}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-end justify-between p-4">
                    <CategoryBadge category={category} />
                    {minHeight && (
                        <span className="text-xs text-white/60 flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                            ↕ {minHeight} cm min.
                        </span>
                    )}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <h2 className="text-stone-900 text-lg font-black uppercase tracking-tight group-hover:text-[#1a5c3a] transition-colors duration-200">
                    {name}
                </h2>
                <p className="text-stone-500 mt-2 text-sm leading-relaxed flex-1">
                    {description}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-[#1a5c3a] text-sm font-medium">
                    <span>Découvrir</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">→</span>
                </div>
            </div>

        </article>
    </Link>
);

export default AttractionCard;
