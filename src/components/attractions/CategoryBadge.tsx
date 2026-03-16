import type { AttractionCategory } from '@/lib/data/attractions';

const STYLES: Record<AttractionCategory, string> = {
    'Sensations fortes': 'bg-red-950/50 text-red-300',
    'Pour tous': 'bg-emerald-950/50 text-emerald-300',
    'Pour les petits': 'bg-violet-950/50 text-violet-300',
};

interface CategoryBadgeProps {
    category: AttractionCategory;
}

const CategoryBadge = ({ category }: CategoryBadgeProps) => (
    <span className={`text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm ${STYLES[category]}`}>
        {category}
    </span>
);

export default CategoryBadge;
