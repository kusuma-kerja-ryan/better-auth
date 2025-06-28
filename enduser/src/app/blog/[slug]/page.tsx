import { BlogPost } from "@/components/blog";
import { blogsPayload } from "@/constant/example";
import { Blog } from "@/constant/example-type";
import { notFound } from "next/navigation";

type Props = {
    params: {
        slug: string
    };
}


export default async function BlogPostPage({ params: { slug } }: Props) {
    let data: Blog | null = null;

    try {
        const blog = blogsPayload.find(blog => blog.slug === slug);
        data = blog || null;
    } catch (error) {
        console.log(error);
        return notFound();
    }

    if (!data) return notFound();

    return (
        <main>
            <BlogPost blog={data} />
        </main>
    );
};
