"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "../media/BlogData";

interface Props {
  post: BlogPost;
  variant?: "large" | "small";
}

export default function BlogCard({ post, variant = "small" }: Props) {
  if (variant === "large") {
    return (
      <Link href={`/media/blog/${post.slug}`} className="group block">
        <div className="relative w-full h-[260px] rounded-lg overflow-hidden mb-4">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <p className="text-sm font-bold text-[#6941C6] mb-2">
          {post.author} &nbsp;•&nbsp; {post.date}
        </p>

        <div className="flex justify-between items-start gap-2">
          <h2 className="text-2xl font-bold text-[#161750] font-serif leading-snug group-hover:text-[#6941C6] transition-colors">
            {post.title}
          </h2>
          <span className="text-xl mt-1 shrink-0">↗</span>
        </div>

        <p className="text-[#394452] mt-3 text-base leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        <p className="text-[#394452] mt-3 text-sm font-semibold uppercase tracking-wide group-hover:text-[#00913D] transition-colors">
          Read More →
        </p>
      </Link>
    );
  }

  return (
    <Link
      href={`/media/blog/${post.slug}`}
      className="group flex gap-4 items-start p-3 rounded-lg hover:bg-white hover:border hover:border-gray-200 transition-all"
    >
      <div className="relative w-[90px] h-[70px] rounded-md overflow-hidden shrink-0">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex-1">
        <p className="text-[11px] font-bold text-[#6941C6] mb-1">
          {post.author} &nbsp;•&nbsp; {post.date}
        </p>

        <h4 className="text-sm font-bold text-[#161750] font-serif leading-snug mb-1 group-hover:text-[#6941C6] transition-colors">
          {post.title}
        </h4>

        <p className="text-xs text-[#394452] line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}