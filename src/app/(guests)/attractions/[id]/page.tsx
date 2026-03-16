export async function generateStaticParams() {
    return [];
}

export default function AttractionDetailPage({ params }: { params: Promise<{ id: string }> }) {
    return <h1>Détail de l&apos;attraction</h1>;
}
