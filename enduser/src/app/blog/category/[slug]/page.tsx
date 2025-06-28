type Props = {
    params: {
        slug: string
    }
}

export default function BlogCategoryPage({ params: { slug } }: Props) {
    console.log({ slug });
    return (
        <main className="py-32 space-y-36"> 
           <h1>Category</h1>
        </main>
    ); 
}