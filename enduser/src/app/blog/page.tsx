import { BlogBody, BlogCategory, BlogHeader, BlogPagination, BlogSearch } from "@/components/blog";
import { blogsPayload } from "@/constant/example";

export default function BlogPage() {
  return (
    <main className="py-32 space-y-36">
      <BlogHeader />
      {blogsPayload.length > 3 && <>
        <div className="space-y-10 px-5 md:px-10">
          <BlogSearch />
          <BlogCategory />
        </div>
        <BlogBody blogs={blogsPayload.slice(3)} />
        <BlogPagination
          totalPage={blogsPayload.length}
        />
      </>}
    </main>
  );
}