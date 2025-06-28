export type Blog = {
    id: string;
    title: string;
    slug: string;
    user: {
        name: string;
        image: string;
    };
    createdAt: string;
    content: string;
    image: string;
    tags : string[]
}
