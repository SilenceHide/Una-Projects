import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function About() {
  return (
    <main className="main-about lg:pt-10 pt-24 lg:pb-[100px] pb-10 bg-main-bg-color ">
      <div className="container">
        <div className="about_wrapper flex flex-col">
          <div className="about_breadcrumbs flex items-center gap-2">
            <p className="about_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Home
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="about_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
              About
            </p>
          </div>
          <div className="about_title-wrapper flex flex-col gap-[14px] mt-[54px]">
            <h2 className="about_title lg:text-3xl text-2xl font-medium tracking-[3px] uppercase">
              About
            </h2>
          </div>
          <div className="about_main-wrapper w-full lg:pb-[100px] pb-14 lg:mt-[60px] mt-10 flex flex-col items-center">
            <div className="about_header-img_wrapper max-w-[1640px] w-full md:h-[740px] h-[280px] bg-disable-text-color border-[10px] border-white"></div>
            <div className="about_header_journal-wrapper flex lg:flex-row flex-col justify-between lg:mt-[100px] mt-[40px] lg:gap-0 gap-8">
              <h1 className="about_header_journal-title flex basis-[30%] tracking-[3px] uppercase font-medium lg:text-3xl text-xl">
                Focus on Canada An introduction to Canada in intermediate-level English
              </h1>
              <p className="about_header_journal-desc flex basis-[30%] text-lg text-sub-text-color text-justify">
                There is something else promised as well. The blessing was not only for Abraham. It
                says that “all peoples on earth will be blessed through you” (through Abraham). We
                should pay attention because you and I are part of ‘all peoples on earth’ – no
                matter what our religion, color, background, nationality, social status, or what
                language we speak.
              </p>
              <p className="about_header_journal-desc flex basis-[30%] text-lg text-sub-text-color text-justify">
                Why? A look at Israel’s history in the book of Genesis in the Bible reveals that
                4000 years ago a man, who is now very well known, went on a camping trip in that
                part of the world. The Bible says that his story affects our future. This ancient
                man is Abraham (also known as Abram). We can take his story seriously because the
                places and cities he visited are mentioned in other old writings.
              </p>
            </div>
            <div className="about_feature-wrapper lg:mt-[100px] mt-[40px] flex flex-col items-center">
              <div className="about_divider w-10 h-[2px] bg-accent-color"></div>
              <h2 className="about_feature-title mt-8 md:text-3xl text-xl font-medium tracking-[3px] uppercase max-w-[660px] lg:text-center">
                why you should choose us
              </h2>
              <div className="about_feature_inner-wrapper mt-10 flex items-center gap-3 flex-wrap justify-center">
                <div className="about_feature_box bg-white flex items-center xs:max-w-[400px] max-w-[343px] xs:w-[400px] w-[343px] xs:h-[140px] h-[120px] p-[10px] group/about_feature hover:shadow-main-box-shadow transition-all duration-300">
                  <div className="about_feature_box-logo_wrapper transition-all duration-300 visible min-w-[140px] w-[140px] mr-5 group-hover/about_feature:min-w-0 group-hover/about_feature:visible group-hover/about_feature:mr-0 group-hover/about_feature:w-0">
                    <Image
                      src={"/about-logo/award-icon.svg"}
                      alt={"award-icon"}
                      width={140}
                      height={120}
                      className="about_feature-logo "
                    />
                  </div>
                  <div className="about_feature_box-logo_wrapper transition-all duration-300 invisible min-w-0 w-0 mr-0 group-hover/about_feature:min-w-[140px] group-hover/about_feature:visible group-hover/about_feature:mr-5 group-hover/about_feature:w-[140px]">
                    <Image
                      src={"/about-logo/award-icon - gold.svg"}
                      alt={"award-icon"}
                      width={140}
                      height={120}
                      className="about_feature-logo "
                    />
                  </div>
                  <h3 className="about_feature uppercase tracking-[2px] font-medium pr-[10px] xs:text-xl">
                    Best furniture shop in 2021
                  </h3>
                </div>
                <div className="about_feature_box bg-white flex items-center xs:max-w-[400px] max-w-[343px] xs:w-[400px] w-[343px] xs:h-[140px] h-[120px] p-[10px] group/about_feature hover:shadow-main-box-shadow transition-all duration-300">
                  <div className="about_feature_box-logo_wrapper transition-all duration-300 visible min-w-[140px] w-[140px] mr-5 group-hover/about_feature:min-w-0 group-hover/about_feature:visible group-hover/about_feature:mr-0 group-hover/about_feature:w-0">
                    <Image
                      src={"/about-logo/love-icon.svg"}
                      alt={"love-icon"}
                      width={140}
                      height={120}
                      className="about_feature-logo "
                    />
                  </div>
                  <div className="about_feature_box-logo_wrapper transition-all duration-300 invisible min-w-0 w-0 mr-0 group-hover/about_feature:min-w-[140px] group-hover/about_feature:visible group-hover/about_feature:mr-5 group-hover/about_feature:w-[140px]">
                    <Image
                      src={"/about-logo/love-icon - gold.svg"}
                      alt={"love-icon"}
                      width={140}
                      height={120}
                      className="about_feature-logo "
                    />
                  </div>
                  <h3 className="about_feature uppercase tracking-[2px] font-medium pr-[10px] xs:text-xl">
                    500+ happy clients
                  </h3>
                </div>
                <div className="about_feature_box bg-white flex items-center xs:max-w-[400px] max-w-[343px] xs:w-[400px] w-[343px] xs:h-[140px] h-[120px] p-[10px] group/about_feature hover:shadow-main-box-shadow transition-all duration-300">
                  <div className="about_feature_box-logo_wrapper transition-all duration-300 visible min-w-[140px] w-[140px] mr-5 group-hover/about_feature:min-w-0 group-hover/about_feature:visible group-hover/about_feature:mr-0 group-hover/about_feature:w-0">
                    <Image
                      src={"/about-logo/forniture-icon.svg"}
                      alt={"forniture-icon"}
                      width={140}
                      height={120}
                      className="about_feature-logo "
                    />
                  </div>
                  <div className="about_feature_box-logo_wrapper transition-all duration-300 invisible min-w-0 w-0 mr-0 group-hover/about_feature:min-w-[140px] group-hover/about_feature:visible group-hover/about_feature:mr-5 group-hover/about_feature:w-[140px]">
                    <Image
                      src={"/about-logo/forniture-icon - gold.svg"}
                      alt={"forniture-icon"}
                      width={140}
                      height={120}
                      className="about_feature-logo "
                    />
                  </div>
                  <h3 className="about_feature uppercase tracking-[2px] font-medium pr-[10px] xs:text-xl">
                    rich assortment
                  </h3>
                </div>
                <div className="about_feature_box bg-white flex items-center xs:max-w-[400px] max-w-[343px] xs:w-[400px] w-[343px] xs:h-[140px] h-[120px] p-[10px] group/about_feature hover:shadow-main-box-shadow transition-all duration-300">
                  <div className="about_feature_box-logo_wrapper transition-all duration-300 visible min-w-[140px] w-[140px] mr-5 group-hover/about_feature:min-w-0 group-hover/about_feature:visible group-hover/about_feature:mr-0 group-hover/about_feature:w-0">
                    <Image
                      src={"/about-logo/wood-icon.svg"}
                      alt={"wood-icon"}
                      width={140}
                      height={120}
                      className="about_feature-logo "
                    />
                  </div>
                  <div className="about_feature_box-logo_wrapper transition-all duration-300 invisible min-w-0 w-0 mr-0 group-hover/about_feature:min-w-[140px] group-hover/about_feature:visible group-hover/about_feature:mr-5 group-hover/about_feature:w-[140px]">
                    <Image
                      src={"/about-logo/wood-icon - gold.svg"}
                      alt={"wood-icon"}
                      width={140}
                      height={120}
                      className="about_feature-logo "
                    />
                  </div>
                  <h3 className="about_feature uppercase tracking-[2px] font-medium pr-[10px] xs:text-xl">
                    100% natural and quality
                  </h3>
                </div>
                <div className="about_feature_box bg-white flex items-center xs:max-w-[400px] max-w-[343px] xs:w-[400px] w-[343px] xs:h-[140px] h-[120px] p-[10px] group/about_feature hover:shadow-main-box-shadow transition-all duration-300">
                  <div className="about_feature_box-logo_wrapper transition-all duration-300 visible min-w-[140px] w-[140px] mr-5 group-hover/about_feature:min-w-0 group-hover/about_feature:visible group-hover/about_feature:mr-0 group-hover/about_feature:w-0">
                    <Image
                      src={"/about-logo/man-icon.svg"}
                      alt={"man-icon"}
                      width={140}
                      height={120}
                      className="about_feature-logo "
                    />
                  </div>
                  <div className="about_feature_box-logo_wrapper transition-all duration-300 invisible min-w-0 w-0 mr-0 group-hover/about_feature:min-w-[140px] group-hover/about_feature:visible group-hover/about_feature:mr-5 group-hover/about_feature:w-[140px]">
                    <Image
                      src={"/about-logo/man-icon - gold.svg"}
                      alt={"man-icon"}
                      width={140}
                      height={120}
                      className="about_feature-logo "
                    />
                  </div>
                  <h3 className="about_feature uppercase tracking-[2px] font-medium pr-[10px] xs:text-xl">
                    10+ years of experience
                  </h3>
                </div>
                <div className="about_feature_box bg-white flex items-center xs:max-w-[400px] max-w-[343px] xs:w-[400px] w-[343px] xs:h-[140px] h-[120px] p-[10px] group/about_feature hover:shadow-main-box-shadow transition-all duration-300">
                  <div className="about_feature_box-logo_wrapper transition-all duration-300 visible min-w-[140px] w-[140px] mr-5 group-hover/about_feature:min-w-0 group-hover/about_feature:visible group-hover/about_feature:mr-0 group-hover/about_feature:w-0">
                    <Image
                      src={"/about-logo/design-icon.svg"}
                      alt={"design-icon"}
                      width={140}
                      height={120}
                      className="about_feature-logo "
                    />
                  </div>
                  <div className="about_feature_box-logo_wrapper transition-all duration-300 invisible min-w-0 w-0 mr-0 group-hover/about_feature:min-w-[140px] group-hover/about_feature:visible group-hover/about_feature:mr-5 group-hover/about_feature:w-[140px]">
                    <Image
                      src={"/about-logo/design-icon - gold.svg"}
                      alt={"design-icon"}
                      width={140}
                      height={120}
                      className="about_feature-logo "
                    />
                  </div>
                  <h3 className="about_feature uppercase tracking-[2px] font-medium pr-[10px] xs:text-xl">
                    modern design
                  </h3>
                </div>
                <div className="about_feature_box bg-white flex items-center xs:max-w-[400px] max-w-[343px] xs:w-[400px] w-[343px] xs:h-[140px] h-[120px] p-[10px] group/about_feature hover:shadow-main-box-shadow transition-all duration-300">
                  <div className="about_feature_box-logo_wrapper transition-all duration-300 visible min-w-[140px] w-[140px] mr-5 group-hover/about_feature:min-w-0 group-hover/about_feature:visible group-hover/about_feature:mr-0 group-hover/about_feature:w-0">
                    <Image
                      src={"/about-logo/price-icon.svg"}
                      alt={"price-icon"}
                      width={140}
                      height={120}
                      className="about_feature-logo "
                    />
                  </div>
                  <div className="about_feature_box-logo_wrapper transition-all duration-300 invisible min-w-0 w-0 mr-0 group-hover/about_feature:min-w-[140px] group-hover/about_feature:visible group-hover/about_feature:mr-5 group-hover/about_feature:w-[140px]">
                    <Image
                      src={"/about-logo/price-icon - gold.svg"}
                      alt={"price-icon"}
                      width={140}
                      height={120}
                      className="about_feature-logo "
                    />
                  </div>
                  <h3 className="about_feature uppercase tracking-[2px] font-medium pr-[10px] xs:text-xl">
                    profitable prices
                  </h3>
                </div>
              </div>
            </div>
            <div className="about_middle-title_wrapper lg:mt-[100px] mt-[60px] flex flex-col items-center 2xl:px-[280px] lg:px-[140px] sm:px-[30px] px-4">
              <div className="about_divider w-10 h-[2px] bg-accent-color"></div>
              <h2 className="about_middle-title mt-8 mb-4 md:text-3xl text-xl font-medium tracking-[3px] uppercase max-w-[660px] lg:text-center">
                Conservationists oppose plans to modernise a wind
              </h2>
              <p className="about_middle-blog lg:mt-10 mt-[20px] text-lg text-sub-text-color lg:text-center text-justify">
                There is something else promised as well. The blessing was not only for Abraham. It
                says that “all peoples on earth will be blessed through you” (through Abraham). We
                should pay attention because you and I are part of ‘all peoples on earth’ – no
                matter what our religion, color, background, nationality, social status, or what
                language we speak.
              </p>
            </div>
            <div className="about_swiper-wrapper mt-20 w-full">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
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
                  prevEl: ".about_left-btn",
                  nextEl: ".about_right-btn",
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="about_items_swiper"
              >
                <SwiperSlide className="about_item lg:w-[520px] min-w-[343px] max-w-[520px]">
                  <a href="#">
                    <div className="about_item-img lg:w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color"></div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="about_item lg:w-[520px] min-w-[343px] max-w-[520px]">
                  <a href="#">
                    <div className="about_item-img lg:w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color"></div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="about_item lg:w-[520px] min-w-[343px] max-w-[520px]">
                  <a href="#">
                    <div className="about_item-img lg:w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color"></div>
                  </a>
                </SwiperSlide>
              </Swiper>
              <div className="about_nav-btn-wrapper flex items-center justify-center gap-5 2xl:mt-10 mt-[20px]">
                <div className="about_left-btn w-[60px] h-[60px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                  <Image
                    src={"/icons/Icon name=prev arrow.svg"}
                    alt={"left-btn"}
                    width={24}
                    height={24}
                  />
                </div>
                <div className="about_right-btn w-[60px] h-[60px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                  <Image
                    src={"/icons/Icon name=next arrow.svg"}
                    alt={"right-btn"}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_instagram bg-main-bg-color pb-5 flex flex-col justify-center items-center md:px-8 px-4">
        <div className="about_divider w-10 h-[2px] bg-accent-color"></div>
        <h2 className="about_middle-title mt-8 mb-4 md:text-3xl text-xl font-medium tracking-[3px] uppercase max-w-[660px] text-center">
          INSTAGRAM INSPIRATION
        </h2>
        <div className="about-instagram_item-wrapper lg:mt-14 mt-10 flex md:gap-[10px] gap-[8px] items-center justify-center flex-wrap">
          <div className="about-instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/about-instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
            <div className="about-instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white"></div>
            <div className="about-instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/about-instagram_item:visible group-hover/about-instagram_item:opacity-100 transition-all duration-300">
              <a
                href="#"
                className="about-instagram_item-tag text-secondary-text-color hidden md:block"
              >
                @decorinsta
              </a>
              <div className="about-instagram_item-info flex gap-4 items-center justify-center">
                <div className="about-instagram_item-heart flex gap-1 items-center justify-center">
                  <Image
                    src={"/icons/Icon name=like - gold.svg"}
                    alt={"golden-heart"}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <p>168</p>
                </div>
                <div className="about-instagram_item-comment flex gap-1 items-center justify-center">
                  <Image
                    src={"/icons/Icon name=comment - gold.svg"}
                    alt={"golden-comment"}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <p>55</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/about-instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
            <div className="about-instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white"></div>
            <div className="about-instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/about-instagram_item:visible group-hover/about-instagram_item:opacity-100 transition-all duration-300">
              <a
                href="#"
                className="about-instagram_item-tag text-secondary-text-color hidden md:block"
              >
                @decorinsta
              </a>
              <div className="about-instagram_item-info flex gap-4 items-center justify-center">
                <div className="about-instagram_item-heart flex gap-1 items-center justify-center">
                  <Image
                    src={"/icons/Icon name=like - gold.svg"}
                    alt={"golden-heart"}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <p>168</p>
                </div>
                <div className="about-instagram_item-comment flex gap-1 items-center justify-center">
                  <Image
                    src={"/icons/Icon name=comment - gold.svg"}
                    alt={"golden-comment"}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <p>55</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/about-instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
            <div className="about-instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white"></div>
            <div className="about-instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/about-instagram_item:visible group-hover/about-instagram_item:opacity-100 transition-all duration-300">
              <a
                href="#"
                className="about-instagram_item-tag text-secondary-text-color hidden md:block"
              >
                @decorinsta
              </a>
              <div className="about-instagram_item-info flex gap-4 items-center justify-center">
                <div className="about-instagram_item-heart flex gap-1 items-center justify-center">
                  <Image
                    src={"/icons/Icon name=like - gold.svg"}
                    alt={"golden-heart"}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <p>168</p>
                </div>
                <div className="about-instagram_item-comment flex gap-1 items-center justify-center">
                  <Image
                    src={"/icons/Icon name=comment - gold.svg"}
                    alt={"golden-comment"}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <p>55</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/about-instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
            <div className="about-instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white"></div>
            <div className="about-instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/about-instagram_item:visible group-hover/about-instagram_item:opacity-100 transition-all duration-300">
              <a
                href="#"
                className="about-instagram_item-tag text-secondary-text-color hidden md:block"
              >
                @decorinsta
              </a>
              <div className="about-instagram_item-info flex gap-4 items-center justify-center">
                <div className="about-instagram_item-heart flex gap-1 items-center justify-center">
                  <Image
                    src={"/icons/Icon name=like - gold.svg"}
                    alt={"golden-heart"}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <p>168</p>
                </div>
                <div className="about-instagram_item-comment flex gap-1 items-center justify-center">
                  <Image
                    src={"/icons/Icon name=comment - gold.svg"}
                    alt={"golden-comment"}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <p>55</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-instagram_item md:max-w-[364px] max-w-[343px] flex flex-col group/about-instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
            <div className="about-instagram_item-img md:w-[364px] md:h-[364px] w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
            <div className="about-instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/about-instagram_item:visible group-hover/about-instagram_item:opacity-100 transition-all duration-300">
              <a href="#" className="about-instagram_item-tag text-secondary-text-color">
                @decorinsta
              </a>
              <div className="about-instagram_item-info flex gap-4 items-center justify-center">
                <div className="about-instagram_item-heart flex gap-1 items-center justify-center">
                  <Image
                    src={"/icons/Icon name=like - gold.svg"}
                    alt={"golden-heart"}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <p>168</p>
                </div>
                <div className="about-instagram_item-comment flex gap-1 items-center justify-center">
                  <Image
                    src={"/icons/Icon name=comment - gold.svg"}
                    alt={"golden-comment"}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <p>55</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
