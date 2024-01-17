import Link from "next/link";

export default function BlogPage(){
    return(
        <main>
            <h1>Blog Post</h1>
            <p><Link href='/blogs/post-1'>Blog Post 1</Link></p>
            <p><Link href='/blogs/post-2'>Blog Post 2</Link></p>
        </main>
    )
}