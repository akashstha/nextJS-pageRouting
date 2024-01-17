export default function BlogPostPages({params}){
    return(
        <main>
        <h1>This is the Blog Post Page</h1>
        <p>{params.slug}</p>
        </main>

    )
}