import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Section from "@/components/layouts/Section";
import BannerOffers from "@/components/common/ui/BannerOffers";
import Link from "next/link";
import SimpleCard from "@/components/common/cards/SimpleCard";
import Icon from "@/components/common/ui/Icon";
import PopularCategories from "@/components/pages/home/PopularCategories";
import InstagramCard from "@/components/common/cards/InstagramCard";
import InterestingBlogs from "@/components/pages/home/InterestingBlogs";
import { useQuery } from "@tanstack/react-query";
import { getProductsApiCall } from "@/api/Product";
import { ApiResponseType, InstagramType, ProductType } from "@/types";
import { getInstagramApiCall } from "@/api/Instagram";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<null | "popular" | "hot" | "new">(null);

  const { data: productsData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getProductsApiCall.name],
    queryFn: () => getProductsApiCall(),
  });

  const { data: instagramData } = useQuery<ApiResponseType<InstagramType>>({
    queryKey: [getInstagramApiCall.name],
    queryFn: () => getInstagramApiCall(),
  });

  return (
    <main className="main mt-[70px] lg:mt-0">
      <Section
        className="banner-section flex gap-1 justify-center items-center md:items-stretch md:flex-row flex-col"
        noContainer={true}
      >
        <BannerOffers />
      </Section>

      <Section className="product-section bg-main-bg-color mt-[10px] md:pt-[110px] pt-[80px] pb-5">
        <div className="product-section_wrapper">
          <div className="product_tab-wrapper">
            <Swiper
              spaceBetween={30}
              slidesPerView={2.5}
              breakpoints={{
                440: {
                  spaceBetween: 0,
                  slidesPerView: 4,
                },
              }}
              className="product_tab-swiper text-secondary-text-color flex lg:max-w-[600px] justify-between"
            >
              <SwiperSlide
                onClick={() => setActiveTab(null)}
                className="product_tab cursor-pointer flex justify-center items-center "
              >
                <p
                  className={`product_tab-title font-medium lg:text-3xl text-2xl tracking-[3px] text-center hover:text-main-text-color border-b-[3px] border-transparent hover:border-accent-color transition-all ${
                    activeTab === null ? "active-tab" : ""
                  } `}
                >
                  ALL
                </p>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => setActiveTab("popular")}
                className="product_tab cursor-pointer flex justify-center items-center "
              >
                <p
                  className={`product_tab-title font-medium lg:text-3xl text-2xl tracking-[3px] text-center hover:text-main-text-color border-b-[3px] border-transparent hover:border-accent-color transition-all ${
                    activeTab === "popular" ? "active-tab" : ""
                  } `}
                >
                  POPULAR
                </p>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => setActiveTab("hot")}
                className="product_tab cursor-pointer flex justify-center items-center "
              >
                <p
                  className={`product_tab-title font-medium lg:text-3xl text-2xl tracking-[3px] text-center hover:text-main-text-color border-b-[3px] border-transparent hover:border-accent-color transition-all ${
                    activeTab === "hot" ? "active-tab" : ""
                  } `}
                >
                  HOT
                </p>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => setActiveTab("new")}
                className="product_tab cursor-pointer flex justify-center items-center "
              >
                <p
                  className={`product_tab-title font-medium lg:text-3xl text-2xl tracking-[3px] text-center hover:text-main-text-color border-b-[3px] border-transparent hover:border-accent-color transition-all ${
                    activeTab === "new" ? "active-tab" : ""
                  } `}
                >
                  NEW
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="products_wrapper grid 3xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-10 lg:mt-14 mt-10 justify-center justify-items-center">
            {productsData &&
              productsData.data.map((productData, index) => {
                if (activeTab && productData.attributes.label === activeTab) {
                  return <SimpleCard data={productData} key={index} />;
                } else if (!activeTab) {
                  if (index < 8) {
                    return <SimpleCard data={productData} key={index} />;
                  }
                }
              })}
          </div>
          <Link
            href="/category"
            target="_blank"
            className="product-section_button flex items-center text-white justify-center gap-3 lg:max-w-[300px] max-w-[343px] mt-14 bg-disable-color py-3 m-auto h-[60px]"
          >
            <p className="product-section_button-title tracking-[2px]">SEE MORE PRODUCTS</p>
            <Icon iconName="i-nextarrow-icon-white" size="text-[24px]" />
          </Link>
        </div>
      </Section>

      <Section className="popular-categories-section bg-main-bg-color md:pt-[110px] pt-[60px] pb-5">
        <div className="popular-categories_wrapper">
          <div className="popular-categories_top-wrapper flex items-center justify-between">
            <h2 className="popular-categories_title font-medium lg:text-3xl text-2xl tracking-[3px]">
              POPULAR CATEGORIES
            </h2>
            <div className="popular-categories_nav-btn-wrapper flex items-center justify-center gap-5">
              <div className="popular-categories_left-btn w-[46px] h-[46px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                <Icon iconName="i-chevronleft-icon" size="text-[14px]" />
              </div>
              <div className="popular-categories_right-btn w-[46px] h-[46px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                <Icon iconName="i-chevronright-icon" size="text-[14px]" />
              </div>
            </div>
          </div>

          <div className="popular-categories mt-14">
            <PopularCategories />
          </div>
        </div>
      </Section>

      <Section
        className="instagram-section bg-main-bg-color md:pt-[100px] pt-[60px] pb-5 flex flex-col justify-center items-center md:px-8 px-4"
        noContainer={true}
      >
        <div className="instagram-section_divider bg-accent-color h-[3px] w-10 mb-[30px]"></div>
        <h2 className="instagram-section_title lg:text-3xl text-2xl font-medium tracking-[3px]">
          INSTAGRAM INSPIRATION
        </h2>
        <div className="instagram_item-wrapper mt-14 flex md:gap-[10px] gap-[8px] items-center justify-center flex-wrap">
          {instagramData &&
            instagramData.data.map((instagramPostData, index) => {
              return <InstagramCard data={instagramPostData} key={index} />;
            })}
        </div>
      </Section>

      <Section className="blog-section bg-main-bg-color md:pt-[80px] pt-[60px] md:pb-[120px] pb-[56px]">
        <div className="blog_top-wrapper flex items-center justify-between gap-2 sm:gap-0">
          <h2 className="blog_title font-medium lg:text-3xl text-2xl tracking-[3px]">
            INTERESTING IN BLOG
          </h2>
          <div className="blog_nav-btn-wrapper flex items-center justify-center gap-5">
            <div className="blog_left-btn w-[46px] h-[46px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
              <Icon iconName="i-chevronleft-icon" size="text-[14px]" />
            </div>
            <div className="blog_right-btn w-[46px] h-[46px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
              <Icon iconName="i-chevronright-icon" size="text-[14px]" />
            </div>
          </div>
        </div>

        <div className="blog_items-wrapper mt-14">
          <InterestingBlogs />
        </div>

        <Link
          href="/blog"
          className="blog-section_button flex items-center text-white justify-center gap-3 lg:max-w-[300px] max-w-[343px] sm:mt-14 mt-10 bg-disable-color py-3 m-auto h-[60px]"
        >
          <p className="blog-section_button-title tracking-[2px]">READ MORE ARTICLES</p>
          <Icon iconName="i-nextarrow-icon-white" size="text-[24px]" />
        </Link>
      </Section>
    </main>
  );
}
