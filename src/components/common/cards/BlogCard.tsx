import Link from "next/link";
import React from "react";
import Picture from "../picture/Picture";
import { BlogType, EntityType } from "@/types";

interface Props {
  data: EntityType<BlogType>;
}

export default function BlogCard({ data }: Props) {
  return (
    <Link href="/postPage" target="_blank">
      <div className="blog_item-img lg:w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white overflow-hidden">
        <Picture
          alt="blog-pic"
          src={data.attributes.image.data?.attributes.url ?? ""}
          width={520}
          height={380}
          className="min-h-full object-cover bg-center bg-cover"
        />
      </div>
      <div className="blog_item-content flex flex-col items-center justify-center pt-5 pb-7 md:px-[60px] lg:px-[100px] px-3 transition-all duration-300 group-hover/blog_item:bg-white lg:w-[520px]">
        <div className="blog_divider w-[30px] h-[1px] bg-disable-color transition-all duration-300 group-hover/blog_item:opacity-0"></div>
        <h3 className="blog_item-title font-medium tracking-[2px] text-center mt-5 mb-3 text-sub-text-color transition-all duration-300 group-hover/blog_item:text-main-text-color group-hover/blog_item:mt-4">
          {data.attributes.title}
        </h3>
        <p className="blog_item-date font-medium text-disable-color group-hover/blog_item:text-accent-color transition-all duration-300">
          {data.attributes.date}
        </p>
      </div>
    </Link>
  );
}
