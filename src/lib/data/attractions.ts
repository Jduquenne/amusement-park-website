export type AttractionCategory =
  | "Sensations fortes"
  | "Pour tous"
  | "Aquatique"
  | "Manèges"
  | "Pour les chatons";

export type Attraction = {
  id: string;
  name: string;
  category: AttractionCategory;
  description: string;
  minHeight: number | null;
  image: string;
};

export const CATEGORIES: ReadonlyArray<"Tous" | AttractionCategory> = [
  "Tous",
  "Sensations fortes",
  "Pour tous",
  "Aquatique",
  "Manèges",
  "Pour les chatons",
];

export const attractions: Attraction[] = [
  {
    id: "1",
    name: "Catapulte",
    category: "Sensations fortes",
    description:
      "Propulsé à 110 km/h en moins de 3 secondes, ce coaster à lancement envoie les félins droit dans les nuages de Purrington.",
    minHeight: 35,
    image: "/attractions/catapulte.jpg",
  },
  {
    id: "2",
    name: "Nine Lives",
    category: "Sensations fortes",
    description:
      "Neuf inversions, neuf vies. Ce coaster acier défie chaque sens à travers des loopings enchaînés à toute vitesse.",
    minHeight: 33,
    image: "/attractions/nine-lives.jpg",
  },
  {
    id: "3",
    name: "Griffe",
    category: "Sensations fortes",
    description:
      "Un coaster suspendu aux mouvements imprévisibles. Pattes dans le vide, le sol défile à 90 km/h sous vos coussinets.",
    minHeight: 32,
    image: "/attractions/griffe.jpg",
  },
  {
    id: "4",
    name: "Féroce",
    category: "Sensations fortes",
    description:
      "Le coaster le plus haut du parc. 58 mètres de montée, puis une descente verticale qui aplatit les moustaches.",
    minHeight: 35,
    image: "/attractions/feroce.png",
  },
  {
    id: "5",
    name: "Poil Dressé",
    category: "Sensations fortes",
    description:
      "Un coaster inversé qui vous laisse la tête en bas pendant de longues secondes. Garantit de faire dresser chaque poil.",
    minHeight: 30,
    image: "/attractions/poil-dresse.png",
  },
  {
    id: "6",
    name: "Tunnel Noir",
    category: "Sensations fortes",
    description:
      "Un dark coaster intégral. Aucune lumière, aucun repère — seulement la vitesse et vos instincts félins pour survivre.",
    minHeight: 28,
    image: "/attractions/tunnel-noir.png",
  },
  {
    id: "7",
    name: "Le Félin",
    category: "Pour tous",
    description:
      "Le grand classique de Pawland. Ce coaster en bois à l'ancienne traverse le parc dans un vacarme de planches et d'éclats de rire.",
    minHeight: 20,
    image: "/attractions/le-felin.png",
  },
  {
    id: "8",
    name: "Ronron Express",
    category: "Pour tous",
    description:
      "Un voyage doux et rythmé à travers les décors du parc. Le coaster familial par excellence — frissons sans excès.",
    minHeight: 18,
    image: "/attractions/ronron-express.png",
  },
  {
    id: "9",
    name: "Patte Folle",
    category: "Pour tous",
    description:
      "Un coaster tournoyant où chaque wagon pivote librement. Deux félins assis côte à côte ne vivront jamais le même trajet.",
    minHeight: 22,
    image: "/attractions/patte-folle.png",
  },
  {
    id: "10",
    name: "Vol du Tigron",
    category: "Pour tous",
    description:
      "Allongés face au sol, les passagers survolent le parc comme de vrais félins en chasse. Dépaysant et accessible.",
    minHeight: 20,
    image: "/attractions/vol-du-tigron.png",
  },
  {
    id: "11",
    name: "Mine Miaoule",
    category: "Pour tous",
    description:
      "Un mine train qui serpente à travers des cavernes décorées et des virages inattendus. Toute la famille embarque.",
    minHeight: 15,
    image: "/attractions/mine-miaoule.png",
  },
  {
    id: "12",
    name: "Tsunami Félin",
    category: "Aquatique",
    description:
      "Un coaster aquatique à grande vitesse qui finit en gerbe d'eau massive. Vos moustaches ne sèchent pas avant le soir.",
    minHeight: 28,
    image: "/attractions/tsunami-felin.png",
  },
  {
    id: "13",
    name: "Splash Moustache",
    category: "Aquatique",
    description:
      "Descendez les rapides en bouée gonflable à travers les gorges de Purrington. Rafraîchissant et imprévisible.",
    minHeight: 20,
    image: "/attractions/splash-moustache.png",
  },
  {
    id: "14",
    name: "La Rivière Ronronnante",
    category: "Aquatique",
    description:
      "Une descente en radeau familiale au fil d'une rivière parsemée de cascades et de jets d'eau surprises.",
    minHeight: 15,
    image: "/attractions/riviere-ronronnante.png",
  },
  {
    id: "15",
    name: "Le Lac des Coussinets",
    category: "Aquatique",
    description:
      "Une paisible balade en barque sur le lac central du parc. Pour les félins qui préfèrent l'eau... de loin.",
    minHeight: null,
    image: "/attractions/lac-des-coussinets.png",
  },
  {
    id: "16",
    name: "Les Cartons Fous",
    category: "Manèges",
    description:
      "Des cartons géants qui tournent et s'emboîtent. Le manège préféré des félins — parce qu'un chat dans un carton qui tourne, c'est le bonheur.",
    minHeight: null,
    image: "/attractions/cartons-fous.png",
  },
  {
    id: "17",
    name: "Le Bal des Souris",
    category: "Manèges",
    description:
      "Le grand carrousel de Pawland. Les félins y prennent place sur des souris mécaniques géantes ornées de plumes et de clochettes.",
    minHeight: null,
    image: "/attractions/bal-des-souris.png",
  },
  {
    id: "18",
    name: "Queues en l'Air",
    category: "Manèges",
    description:
      "Les chaises volantes version Pawland. Les sièges sont suspendus à de grandes queues tourbillonnantes. Gracieux et étourdi.",
    minHeight: 15,
    image: "/attractions/queues-en-lair.png",
  },
  {
    id: "19",
    name: "La Pelote Géante",
    category: "Manèges",
    description:
      "Une immense balançoire en forme de pelote de laine qui oscille de plus en plus haut. Simple, intemporel, addictif.",
    minHeight: 20,
    image: "/attractions/pelote-geante.png",
  },
  {
    id: "20",
    name: "Les Sardines Volantes",
    category: "Manèges",
    description:
      "Un manège tentaculaire où chaque bras porte une boîte de sardines suspendue. Tourne, monte, descend, recommence.",
    minHeight: 12,
    image: "/attractions/sardines-volantes.png",
  },
  {
    id: "21",
    name: "Kitty Dash",
    category: "Pour les chatons",
    description:
      "Le premier coaster des mini-félins ! Une aventure rapide et rigolote pensée pour les plus petits explorateurs du parc.",
    minHeight: null,
    image: "/attractions/kitty-dash.png",
  },
  {
    id: "22",
    name: "Chaton Bolide",
    category: "Pour les chatons",
    description:
      "Un circuit coloré avec de petites montées et de grandes descentes adaptées aux chatons qui découvrent les coasters.",
    minHeight: 12,
    image: "/attractions/chaton-bolide.png",
  },
  {
    id: "23",
    name: "Pelote Express",
    category: "Pour les chatons",
    description:
      "Le coaster le plus doux du parc, tout en rondeurs et en couleurs. Idéal pour les tout-petits et leurs parents.",
    minHeight: null,
    image: "/attractions/pelote-express.png",
  },
];
