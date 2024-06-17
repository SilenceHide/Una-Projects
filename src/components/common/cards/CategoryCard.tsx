import Link from "next/link";
import React from "react";
import Picture from "../picture/Picture";

interface Props {
  data: {
    title: string;
    image: string;
    link: string;
  };
}

export default function CategoryCard({ data }: Props) {
  return (
    <>
      <Link
        href="/category"
        target="_blank"
        className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3 md:justify-start justify-center"
      >
        <div className="popular-category_img-wrapper w-[120px] h-[120px] bg-disable-text-color">
          <Picture alt="category-pic" src={data.image} width={120} height={120} />
        </div>
        <p className="popular-category_title tracking-[2px] uppercase min-w-[120px]">
          {data.title}
        </p>
      </Link>
    </>
  );
}
