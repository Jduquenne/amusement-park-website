export async function generateStaticParams(): Promise<Array<{ id: string }>> {
    return [{ id: '1' }];
}

const AttractionEditLayout = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

export default AttractionEditLayout;
