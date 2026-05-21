import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../media/Blogpost";
import { BlogPost } from "../media/BlogData";

interface Props {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: Props) {
  return (
    <section className="bg-[#f7f6f2] py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-semibold border-b-2 border-[#161750] inline-block pb-1 mb-6">
          Related Posts
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/media/blog/${post.slug}`}
              className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:-translate-y-1 transition-transform duration-200 block"
            >
              <div className="relative w-full h-[110px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-3">
                <h4 className="text-sm font-bold text-[#161750] font-serif leading-snug mb-2 group-hover:text-[#6941C6] transition-colors">
                  {post.title}
                </h4>

                <span className="text-[10px] bg-[#161750] text-white px-2 py-1 rounded-sm font-semibold">
                  {post.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}