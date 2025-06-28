"use client"
import { ArrowRight } from "lucide-react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { useEffect } from "react";
import Lenis from "lenis";
import TextMask from "../animate/TextMask";
import { blogsPayload } from "@/constant/example";
import BlogContent from "./BlogContent";
import Image from "next/image";

const data = {
    tagline: "Through the Lens",
    heading: "Photography Journal",
    description: "Dive into photography tips, creative inspiration, and gear insights. Stay in focus with the latest from the world of visual storytelling.",
    posts: blogsPayload.slice(0, 3),
}

export default function BlogHeader() {

    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
            smoothWheel: true,
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    const {
        description,
        heading,
        posts,

    } = data
    return (
        <header className="">
            <div className="container mx-auto flex flex-col items-center gap-y-10 px-5 md:px-10 max-w-7xl">
                <div className="text-center">
                    <TextMask phrases={[heading]} className={`mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl`} tag="h2" />
                    <TextMask phrases={[description]} className="mb-8 text-muted-foreground/70 md:text-base lg:max-w-2xl lg:text-lg" tag="p" />
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {posts.map((post) => (
                        <Card
                            key={post.id}
                            className="grid grid-rows-[auto_auto_1fr_auto] pt-0 overflow-hidden"
                        >
                            <div className="aspect-[16/12] w-full">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="transition-opacity duration-200 fade-in hover:opacity-70"
                                >
                                    <Image
                                        height={720}
                                        width={1280}
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full object-cover object-center"
                                    />
                                </Link>
                            </div>

                            <CardHeader>
                                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <BlogContent className="text-muted-foreground/60 text-sm line-clamp-2" content={post.content} />
                            </CardContent>
                            <CardFooter>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="flex items-center text-foreground hover:underline font-semibold"
                                >
                                    Read more
                                    <ArrowRight className="ml-2 size-4" />
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </header>
    );
};
