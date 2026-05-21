import BlogHeader from "@/components/blog/BlogHeader";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/components/media/Blogpost";
import Link from "next/link";

export default function Page() {
  const editorsPick = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);
  const allPosts = blogPosts;

  return (
    <div className="min-h-screen bg-[#f7f6f2]">
      <BlogHeader />

      <div className="max-w-6xl mx-auto px-6">
        {/* Editors Pick + Recent Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-semibold border-b-2 border-[#161750] inline-block pb-1 mb-6">
              Editors Pick
            </p>

            <BlogCard post={editorsPick} variant="large" />
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-semibold border-b-2 border-[#161750] inline-block pb-1 mb-6">
              Recent Blog Posts
            </p>

            <div className="flex flex-col gap-3">
              {recentPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  post={post}
                  variant="small"
                />
              ))}
            </div>
          </div>
        </div>

        <hr className="border-gray-200 my-2" />

        {/* All Blog Posts */}
        <div className="py-8">
          <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-semibold border-b-2 border-[#161750] inline-block pb-1 mb-6">
            All Blog Posts
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {allPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/media/blog/${post.slug}`}
                className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all duration-200 block"
              >
                <div className="relative w-full h-[170px]">
                  <img
                    src={post.thumb}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <p className="text-[11px] font-bold text-[#6941C6] mb-2">
                    {post.author} • {post.date}
                  </p>

                  <h3 className="text-base font-bold text-[#161750] font-serif leading-snug mb-2 group-hover:text-[#6941C6] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#394452] line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>

                  <p className="text-[10px] font-bold uppercase tracking-wide text-[#394452] group-hover:text-[#00913D] transition-colors mb-3">
                    READ MORE →
                  </p>

                  <span className="text-[10px] bg-[#161750] text-white px-2 py-1 rounded-sm font-semibold">
                    {post.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}