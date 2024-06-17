import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Section from "@/components/layouts/Section";
import BannerOffers from "@/components/common/ui/BannerOffers";
import Link from "next/link";
import { productBaseMock } from "@/mock/productBase";
import SimpleCard from "@/components/common/cards/SimpleCard";
import Icon from "@/components/common/ui/Icon";
import PopularCategories from "@/components/pages/home/PopularCategories";
import { instagramPostsMock } from "@/mock/instagramPosts";
import InstagramCard from "@/components/common/cards/InstagramCard";
import InterestingBlogs from "@/components/pages/home/InterestingBlogs";

export default function Home() {
  return (
    <main className="main mt-[70px] lg:mt-0">
      <Section
        className="banner-section flex gap-1 justify-center items-center md:items-stretch"
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
              <SwiperSlide className="product_tab cursor-pointer flex justify-center items-center ">
                <p className="product_tab-title font-medium lg:text-3xl text-2xl tracking-[3px] text-center hover:text-main-text-color border-b-[3px] border-transparent hover:border-accent-color transition-all active-tab">
                  ALL
                </p>
              </SwiperSlide>
              <SwiperSlide className="product_tab cursor-pointer flex justify-center items-center ">
                <p className="product_tab-title font-medium lg:text-3xl text-2xl tracking-[3px] text-center hover:text-main-text-color border-b-[3px] border-transparent hover:border-accent-color transition-all ">
                  POPULAR
                </p>
              </SwiperSlide>
              <SwiperSlide className="product_tab cursor-pointer flex justify-center items-center ">
                <p className="product_tab-title font-medium lg:text-3xl text-2xl tracking-[3px] text-center hover:text-main-text-color border-b-[3px] border-transparent hover:border-accent-color transition-all">
                  HOT
                </p>
              </SwiperSlide>
              <SwiperSlide className="product_tab cursor-pointer flex justify-center items-center ">
                <p className="product_tab-title font-medium lg:text-3xl text-2xl tracking-[3px] text-center hover:text-main-text-color border-b-[3px] border-transparent hover:border-accent-color transition-all">
                  NEW
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="products_wrapper grid 3xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-10 lg:mt-14 mt-10 justify-center justify-items-center">
            {productBaseMock &&
              productBaseMock.map((productBaseData, index) => {
                if (index < 8) {
                  return <SimpleCard data={productBaseData} key={index} />;
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
          {instagramPostsMock.map((instagramPostData, index) => {
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
