import Link from "next/link";

interface Props {
  showBreadcrumb?: boolean;
  postTitle?: string;
}

export default function BlogHeader({ showBreadcrumb, postTitle }: Props) {
  return (
    <>
      {/* HERO HEADER */}
      <div
        className="relative text-white text-center py-27 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/blog-bg.jpg')" }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-[#161750]/80"></div>

        <div className="relative z-10">
          <h1 className="text-5xl font-bold tracking-widest font-serif">
            RFC BLOG
          </h1>
        </div>
      </div>

      {/* BREADCRUMB */}
      {showBreadcrumb && (
        <div className="bg-white border-b border-gray-200 px-6 py-3 text-sm text-gray-500 flex gap-2 items-center">
          <Link href="/media/blog" className="text-[#6941C6] hover:underline">
            All posts
          </Link>
          <span>›</span>
          <Link href="/media/blog" className="text-[#6941C6] hover:underline">
            Recent post
          </Link>

          {postTitle && (
            <>
              <span>›</span>
              <span className="text-gray-400 truncate max-w-[200px]">
                {postTitle}
              </span>
            </>
          )}
        </div>
      )}
    </>
  );
}