import Link from "next/link";

export default function f4(){
    return(
        <>
            <h1>F4 Page</h1>
            <Link href='/f1/f3'>F3</Link>
            <Link href="/about">about</Link>
        </>
    )
}