export async function generateStaticParams() {
    return [];
}

export default function EditAttractionPage({ params }: { params: Promise<{ id: string }> }) {
    return <h1>Modifier l&apos;attraction</h1>;
}
