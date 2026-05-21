import { notFound } from "next/navigation";
import BlogHeader from "@/components/blog/BlogHeader";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { blogPosts } from "@/components/media/Blogpost";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <BlogHeader showBreadcrumb postTitle={post.title} />

      {/* HERO IMAGE LEFT (NO OVERLAY TEXT) */}
      <div className="w-full flex justify-start px-6 pt-6">
        <div className="w-full max-w-[600px]">
          <div className="h-[340px] w-full overflow-hidden rounded-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* TITLE + META BELOW IMAGE */}
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">
              {post.author} &nbsp;•&nbsp; {post.date}
            </p>

            <h1 className="text-2xl md:text-3xl font-bold font-serif text-[#161750] leading-snug">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* BLOG CONTENT */}
      <div className="w-full flex justify-center px-4 py-10">
        <div
          className="
            w-full 
            max-w-[720px]
            prose prose-lg

            prose-headings:font-serif
            prose-h2:text-[#161750] prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3
            prose-h3:text-[#161750] prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2

            prose-p:text-[#2d3a47] prose-p:leading-relaxed

            prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
            prose-li:text-[#2d3a47]

            prose-blockquote:border-l-4 prose-blockquote:border-[#161750]
            prose-blockquote:bg-[#f7f6f2]
            prose-blockquote:py-3 prose-blockquote:px-5
            prose-blockquote:text-[#161750]

            prose-a:text-[#6941C6]

            [&_img]:w-full
            [&_img]:max-w-full
            [&_img]:h-auto
            [&_img]:rounded-xl
            [&_img]:mx-auto
            [&_img]:object-cover
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      <RelatedPosts posts={related} />
    </div>
  );
}