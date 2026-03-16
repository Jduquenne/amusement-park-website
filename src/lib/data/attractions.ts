export type AttractionCategory = 'Sensations fortes' | 'Pour tous' | 'Pour les petits';

export type Attraction = {
    id: string;
    name: string;
    category: AttractionCategory;
    description: string;
    minHeight: number | null;
    gradient: string;
};

export const CATEGORIES: ReadonlyArray<'Tous' | AttractionCategory> = [
    'Tous',
    'Sensations fortes',
    'Pour tous',
    'Pour les petits',
];

export const attractions: Attraction[] = [
    {
        id: '1',
        name: 'Aquila',
        category: 'Sensations fortes',
        description: 'Un vol vertigineux à travers l\'univers. Préparez-vous à défier la gravité et à repousser vos limites.',
        minHeight: 140,
        gradient: 'from-red-950 via-red-900 to-orange-800',
    },
    {
        id: '2',
        name: 'Rutschebanen',
        category: 'Pour tous',
        description: 'Le mythique montagnes russes en bois construit en 1914. Un classique intemporel qui traverse l\'histoire.',
        minHeight: 120,
        gradient: 'from-emerald-950 via-green-900 to-teal-800',
    },
    {
        id: '3',
        name: 'Golden Tower',
        category: 'Sensations fortes',
        description: 'Montez à 63 mètres dans les airs avant de plonger en chute libre vers le sol.',
        minHeight: 130,
        gradient: 'from-amber-900 via-yellow-800 to-orange-700',
    },
    {
        id: '4',
        name: 'Star Flyer',
        category: 'Sensations fortes',
        description: 'Tournez à 80 mètres d\'altitude avec une vue panoramique à 360° sur le parc et la ville.',
        minHeight: 130,
        gradient: 'from-slate-900 via-blue-950 to-indigo-900',
    },
    {
        id: '5',
        name: 'Mælkevejen',
        category: 'Pour les petits',
        description: 'Un voyage enchanté à travers la voie lactée pour les plus jeunes explorateurs de l\'univers.',
        minHeight: null,
        gradient: 'from-violet-950 via-purple-900 to-fuchsia-900',
    },
    {
        id: '6',
        name: 'Bumper Cars',
        category: 'Pour tous',
        description: 'Les incontournables autos tamponneuses pour petits et grands. Défis et rires garantis.',
        minHeight: 100,
        gradient: 'from-cyan-950 via-teal-900 to-green-900',
    },
    {
        id: '7',
        name: 'Fatamorgana',
        category: 'Pour tous',
        description: 'Partez à la découverte des mystères de l\'Orient dans ce voyage fantastique et envoûtant.',
        minHeight: null,
        gradient: 'from-rose-950 via-pink-900 to-red-900',
    },
    {
        id: '8',
        name: 'Vandpyramiden',
        category: 'Pour les petits',
        description: 'Une aventure aquatique rafraîchissante en famille. Jeux d\'eau et glissades au programme.',
        minHeight: 90,
        gradient: 'from-sky-950 via-blue-900 to-cyan-800',
    },
    {
        id: '9',
        name: 'Vertigo',
        category: 'Sensations fortes',
        description: 'La rotation extrême à grande vitesse qui va pousser vos sens et votre courage au maximum.',
        minHeight: 140,
        gradient: 'from-zinc-900 via-stone-900 to-neutral-800',
    },
];
