import { Button } from "../ui/button";

export default function BlogCategory() {
    return (
        <section className="w-6/12 mx-auto overflow-x-scroll flex space-x-5 scrollbar-hidden">
            {Array.from({ length: 10 }).map((_, index) => (
                <Button key={index} className="min-w-[150px] rounded-md text-base text-gray-800 font-semibold py-2 text-center bg-primary/30 hover:bg-primary/40 duration-300 transition-all ease-in-out">Category {index + 1}</Button>
            ))}
        </section>

    )
}