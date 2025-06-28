import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import TextMask from "../animate/TextMask";
import BlogContent from "./BlogContent";
import { formatBlogDate } from "@/lib/date-fns";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/constant/example-type";


const heading = "Latest Blog Posts";
const description = "Dive into photography tips, creative inspiration, and gear insights. Stay in focus with the latest from the world of visual storytelling.";

export default function BlogBody({ blogs }: { blogs: Blog[] }) {

    return (
        <section className="">
            <div className="container flex flex-col items-center gap-y-10 px-5 md:px-10 max-w-7xl mx-auto">
                <div className="self-start space-y-2">
                    <TextMask phrases={[heading]} tag="h2" className="mx-auto text-3xl font-semibold text-pretty md:text-4xl lg:max-w-3xl" />
                    <TextMask phrases={[description]} tag="p" className="mx-auto max-w-2xl text-muted-foreground/70 md:text-lg" />
                </div>

                <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
                    {blogs.map((post) => (
                        <Card
                            key={post.id}
                            className="order-last border-0 rounded-none bg-transparent shadow-none sm:order-first sm:col-span-12"
                        >
                            <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-32">
                                <div className="sm:col-span-6 space-y-6">
                                    <div className="">
                                        <div className="flex flex-wrap gap-3 text-xs tracking-wider text-muted-foreground uppercase md:gap-x-3">
                                            {post.tags?.map((tag) => <span className="bg-gray-100 rounded-md px-3 py-2" key={tag}>{tag}</span>)}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold md:text-2xl lg:text-2xl">
                                        <a
                                            href={`/blog/${post.slug}`}
                                            className="hover:underline"
                                        >
                                            {post.title}
                                        </a>
                                    </h3>
                                    <BlogContent content={post.content} className="text-muted-foreground/70 line-clamp-2" />
                                    <div className="flex items-center space-x-4 text-sm pb-5">
                                        <span className="text-muted-foreground">{post.user.name}</span>
                                        <span className="text-muted-foreground">•</span>
                                        <span className="text-muted-foreground">
                                            {formatBlogDate(post.createdAt).full}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center font-semibold hover:underline md:text-base"
                                        >
                                            <span>Read more</span>
                                            <ArrowRight className="ml-2 size-4 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="order-first sm:order-last sm:col-span-4">
                                    <Link href={`/blog/${post.slug}`} target="_blank" className="block">
                                        <div className="aspect-[16/14] overflow-clip rounded-lg border border-border">
                                            <Image
                                                width={500}
                                                height={500}
                                                src={post.image}
                                                alt={post.title}
                                                className="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
