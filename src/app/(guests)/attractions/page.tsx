import AttractionsHero from '@/components/attractions/AttractionsHero';
import AttractionsGrid from '@/components/attractions/AttractionsGrid';
import { attractions } from '@/lib/data/attractions';

const AttractionsPage = () => (
    <div className="min-h-screen bg-stone-50">
        <AttractionsHero count={attractions.length} />
        <AttractionsGrid attractions={attractions} />
    </div>
);

export default AttractionsPage;
