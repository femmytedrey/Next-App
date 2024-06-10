type ProductIdLayoutProps = {
    children: React.ReactNode
}
export default function ProductIdLayout({children}: ProductIdLayoutProps) {
    return (
        <>
            <h1>Product Id Layout</h1>
            {children}
        </>
    )
}