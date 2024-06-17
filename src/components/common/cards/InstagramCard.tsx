import Link from "next/link";
import React from "react";
import Icon from "../ui/Icon";
import Picture from "../picture/Picture";

interface Props {
  data: {
    user: string;
    image: string;
    like: number;
    comment: number;
    link: string;
  };
}

export default function InstagramCard({ data }: Props) {
  return (
    <div className="instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
      <div className="instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white overflow-hidden">
        <Picture
          alt="insta-post"
          src={data.image}
          width={364}
          height={364}
          className="min-h-full"
        />
      </div>
      <div className="instagram_item-content bg-white flex items-center justify-between md:py-3 py-2 md:px-6 px-3 invisible opacity-0 group-hover/instagram_item:visible group-hover/instagram_item:opacity-100 transition-all duration-300">
        <Link href="/blog" className="instagram_item-tag text-secondary-text-color hidden md:block">
          @{data.user}
        </Link>
        <div className="instagram_item-info flex md:gap-4 gap-1 items-center md:w-fit w-full justify-between">
          <div className="instagram_item-heart flex gap-1 items-center justify-center">
            <Icon iconName="i-likegold-icon" />
            <p>{data.like}</p>
          </div>
          <div className="instagram_item-comment flex gap-1 items-center justify-center">
            <Icon iconName="i-commentgold-icon" />
            <p>{data.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
