"use client"

import { ChevronLeft } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { formatBlogDate } from "@/lib/date-fns";
import { useEffect } from "react";
import Lenis from "lenis";
import BlogContent from "./BlogContent";
import Image from "next/image";
import { Blog } from "@/constant/example-type";

export default function BlogPost({ blog }: { blog: Blog }) {

    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
            smoothWheel: true,
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <section className="py-28">
            <div className="container mx-auto px-5 md:px-10">
                <div className="relative flex flex-col gap-x-32 lg:flex-row">
                    <aside className="top-20 h-fit flex-shrink-0 lg:sticky lg:w-[300px] xl:w-[400px] space-y-7">
                        <Link
                            className="text-muted-foreground hover:text-primary flex items-center gap-1"
                            href="/blog"
                        >
                            <ChevronLeft className="h-full w-4" />
                            Return to blog
                        </Link>
                        <h1 className="text-balance text-3xl font-bold lg:text-4xl !leading-10">
                            {blog.title}
                        </h1>
                        <div className="flex gap-3">
                            <Avatar className="size-7 rounded-full">
                                <AvatarImage
                                    src={blog.user.image}
                                    alt="blog author image"
                                />
                            </Avatar>
                            <div>
                                <h2 className="font-semibold">{blog.user.name}</h2>
                                <p className="text-muted-foreground text-xs">{formatBlogDate(blog.createdAt).relative}</p>
                            </div>
                        </div>
                    </aside>

                    <article className="max-w-2xl space-y-12">
                        <Image
                            width={1920}
                            height={1080}
                            quality={100}
                            src={blog.image}
                            alt="placeholder"
                            className="mb-8 mt-0 aspect-[16/12] w-full rounded-lg object-cover"
                        />
                        <BlogContent content={blog.content} className="body-parser space-y-6" />
                    </article>
                </div>
            </div>
        </section>
    )
}