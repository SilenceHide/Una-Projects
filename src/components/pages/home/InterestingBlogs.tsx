import BlogCard from "@/components/common/cards/BlogCard";
import { blogPostsMock } from "@/mock/blogPosts";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function InterestingBlogs() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 1.8,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 2.3,
          spaceBetween: 40,
        },
        1450: {
          slidesPerView: 2.6,
          spaceBetween: 20,
        },
        1640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      modules={[Navigation]}
      navigation={{
        prevEl: ".blog_left-btn",
        nextEl: ".blog_right-btn",
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="blog_items_swiper"
    >
      {blogPostsMock.map((blogPostData, index) => {
        return (
          <SwiperSlide
            className="blog_item lg:w-[520px] min-w-[343px] group/blog_item transition-all duration-300 hover:shadow-main-box-shadow max-w-[520px] "
            key={index}
          >
            <BlogCard data={blogPostData} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
