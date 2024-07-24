'use client'
function getRandomNumber(count: number){
    return Math.floor(Math.random() * 2)
}
type ProductIdLayoutProps = {
    children: React.ReactNode
}
export default function ProductIdLayout({children}: ProductIdLayoutProps) {
    const random = getRandomNumber(2)

    if(random === 1){
        throw new Error('Error getting product')
    }
    return (
        <>
            <h1>Product Id Layout</h1>
            {children}
        </>
    )
}