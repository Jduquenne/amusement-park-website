export async function generateStaticParams(): Promise<Array<{ id: string }>> {
    return [{ id: '1' }];
}

const AttractionDetailPage = () => {
    return <h1>Détail de l&apos;attraction</h1>;
};

export default AttractionDetailPage;
