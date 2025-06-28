"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

export default function BlogSearch() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!search || search.trim().length === 0) return;
        router.push(`/blog/search/${search}`);
    }

    return (
        <form onSubmit={handleSubmit} className="md:max-w-lg mx-auto flex items-center gap-2">
            <Input
                onChange={handleChange}
                type="text"
                placeholder="Search Blog ..."
                className="bg-background w-full border-[1px] border-primary h-12"
            />
            <Button
                type="submit"
                className="h-12 px-4"
            >Search</Button>
        </form>
    )
}