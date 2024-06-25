import { getHomePageCategoriesApiCall } from "@/api/Category";
import CategoryCard from "@/components/common/cards/CategoryCard";
import { ApiResponseType, CategoryType, EntityType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PopularCategories() {
  const { data: homePageCategories } = useQuery<ApiResponseType<CategoryType>>({
    queryKey: [getHomePageCategoriesApiCall.name],
    queryFn: () => getHomePageCategoriesApiCall(),
  });

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      modules={[Navigation]}
      navigation={{
        prevEl: ".popular-categories_left-btn",
        nextEl: ".popular-categories_right-btn",
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="popular-categories_swiper"
    >
      <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
        {homePageCategories &&
          homePageCategories.data.map((homePageCategoryData: EntityType<CategoryType>, index) => {
            if (index <= 2) {
              return <CategoryCard data={homePageCategoryData} key={index} />;
            }
          })}
      </SwiperSlide>
      <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
        {homePageCategories &&
          homePageCategories.data.map((homePageCategoryData: EntityType<CategoryType>, index) => {
            if (index > 2 && index <= 5) {
              return <CategoryCard data={homePageCategoryData} key={index} />;
            }
          })}
      </SwiperSlide>
      <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
        {homePageCategories &&
          homePageCategories.data.map((homePageCategoryData: EntityType<CategoryType>, index) => {
            if (index > 5 && index <= 8) {
              return <CategoryCard data={homePageCategoryData} key={index} />;
            }
          })}
      </SwiperSlide>
      <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
        {homePageCategories &&
          homePageCategories.data.map((homePageCategoryData: EntityType<CategoryType>, index) => {
            if (index > 8 && index <= 11) {
              return <CategoryCard data={homePageCategoryData} key={index} />;
            }
          })}
      </SwiperSlide>
    </Swiper>
  );
}
