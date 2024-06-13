import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function SearchResultEmpty() {
  return (
    <main className="main-search-result lg:pt-10 pt-24 pb-[100px] bg-main-bg-color">
      <div className="container">
        <div className="search-result_wrapper flex flex-col">
          <div className="search-result_breadcrumbs flex items-center gap-2">
            <p className="search-result_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Home
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="search-result_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
              Search results
            </p>
          </div>
          <div className="search-result_title-wrapper flex flex-col gap-[14px] mt-[54px]">
            <h1 className="search-result_title lg:text-3xl text-2xl font-medium tracking-[3px] uppercase">
              Showing results for «Desk lamp»
            </h1>
            <p className="search-result_found-number font-medium tracking-[2px] uppercase">
              Sorry, no results found
            </p>
          </div>
          {/* hidden when cannot find anything */}
          {/* <div className="search-result_main-wrapper mt-10 flex gap-8">
              <div className="search-result_products-wrapper flex flex-col items-center">
                <div className="search-result_products-inner-wrapper flex items-center gap-6 flex-wrap justify-center">
                  <div className="search-result_product bg-white overflow-hidden group/search-result_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                    <div className="search-result_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] min-h-[343px]: border-[10px] border-white relative">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          prevEl: ".search-result_product-swiper_left-btn",
                          nextEl: ".search-result_product-swiper_right-btn",
                        }}
                        modules={[Pagination, Navigation]}
                        className="search-result_product-swiper h-full"
                      >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                      </Swiper>
                      <Image
                        src={"/icons/prev-btn.svg"}
                        alt={"prev-btn"}
                        width={40}
                        height={40}
                        className="search-result_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all"
                      />
                      <Image
                        src={"/icons/next-btn.svg"}
                        alt={"next-btn"}
                        width={40}
                        height={40}
                        className="search-result_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all cursor-pointer"
                      />
                    </div>
                    <div className="search-result_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/search-result_product:pt-[15px] duration-200">
                      <div className="search-result_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/search-result_product:hidden transition-all duration-200"></div>
                      <p className="search-result_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/search-result_product:mt-0 duration-200 ">
                        Tirado chair
                      </p>
                      <p className="search-result_product-price text-accent-color font-medium tracking-[1px] transition-all group-hover/search-result_product:pb-[15px] duration-200 ">
                        $280
                      </p>
                      <button className="search-result_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all group-hover/search-result_product:mb-[20px] duration-100">
                        add to cart
                      </button>
                    </div>
                  </div>
                  <div className="search-result_product bg-white overflow-hidden group/search-result_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                    <div className="search-result_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          prevEl: ".search-result_product-swiper_left-btn",
                          nextEl: ".search-result_product-swiper_right-btn",
                        }}
                        modules={[Pagination, Navigation]}
                        className="search-result_product-swiper h-full"
                      >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                      </Swiper>
                      <Image
                        src={"/icons/prev-btn.svg"}
                        alt={"prev-btn"}
                        width={40}
                        height={40}
                        className="search-result_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all"
                      />
                      <Image
                        src={"/icons/next-btn.svg"}
                        alt={"next-btn"}
                        width={40}
                        height={40}
                        className="search-result_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all cursor-pointer"
                      />
                      <p className="search-result_product-swiper-tag absolute text-white text-sm bg-red-hot py-1 px-4 top-2 left-2 tracking-[1px]">
                        HOT
                      </p>
                    </div>
                    <div className="search-result_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/search-result_product:pt-[15px] duration-200">
                      <div className="search-result_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/search-result_product:hidden transition-all duration-200"></div>
                      <p className="search-result_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/search-result_product:mt-0 duration-200 ">
                        Kaleido
                      </p>
                      <div className="search-result_product-price_wrapper flex gap-2 transition-all group-hover/search-result_product:pb-[15px]">
                        <p className="search-result_product-price text-red-hot font-medium tracking-[1px]">
                          $199
                        </p>
                        <p className="search-result_product-price text-disable-color line-through decoration-[0.5px] tracking-[1px]">
                          $240
                        </p>
                      </div>
                      <button className="search-result_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all group-hover/search-result_product:mb-[20px] duration-100">
                        add to cart
                      </button>
                    </div>
                  </div>
                  <div className="search-result_product bg-white overflow-hidden group/search-result_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                    <div className="search-result_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          prevEl: ".search-result_product-swiper_left-btn",
                          nextEl: ".search-result_product-swiper_right-btn",
                        }}
                        modules={[Pagination, Navigation]}
                        className="search-result_product-swiper h-full"
                      >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                      </Swiper>
                      <Image
                        src={"/icons/prev-btn.svg"}
                        alt={"prev-btn"}
                        width={40}
                        height={40}
                        className="search-result_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all"
                      />
                      <Image
                        src={"/icons/next-btn.svg"}
                        alt={"next-btn"}
                        width={40}
                        height={40}
                        className="search-result_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all cursor-pointer"
                      />
                    </div>
                    <div className="search-result_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/search-result_product:pt-[15px] duration-200">
                      <div className="search-result_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/search-result_product:hidden transition-all duration-200"></div>
                      <p className="search-result_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/search-result_product:mt-0 duration-200 ">
                        damien
                      </p>
                      <p className="search-result_product-price text-accent-color font-medium tracking-[1px] transition-all group-hover/search-result_product:pb-[15px] duration-200 ">
                        $310
                      </p>
                      <button className="search-result_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all group-hover/search-result_product:mb-[20px] duration-100">
                        add to cart
                      </button>
                    </div>
                  </div>
                  <div className="search-result_product bg-white overflow-hidden group/search-result_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                    <div className="search-result_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          prevEl: ".search-result_product-swiper_left-btn",
                          nextEl: ".search-result_product-swiper_right-btn",
                        }}
                        modules={[Pagination, Navigation]}
                        className="search-result_product-swiper h-full"
                      >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                      </Swiper>
                      <Image
                        src={"/icons/prev-btn.svg"}
                        alt={"prev-btn"}
                        width={40}
                        height={40}
                        className="search-result_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all"
                      />
                      <Image
                        src={"/icons/next-btn.svg"}
                        alt={"next-btn"}
                        width={40}
                        height={40}
                        className="search-result_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all cursor-pointer"
                      />
                      <p className="search-result_product-swiper-tag absolute text-white text-sm bg-orange-popular py-1 px-4 top-2 left-2 tracking-[1px] uppercase">
                        popular
                      </p>
                    </div>
                    <div className="search-result_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/search-result_product:pt-[15px] duration-200">
                      <div className="search-result_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/search-result_product:hidden transition-all duration-200"></div>
                      <p className="search-result_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/search-result_product:mt-0 duration-200 ">
                        emmi set
                      </p>
                      <div className="search-result_product-price_wrapper flex gap-2 transition-all group-hover/search-result_product:pb-[15px]">
                        <p className="search-result_product-price text-accent-color font-medium tracking-[1px]">
                          $240
                        </p>
                      </div>
                      <button className="search-result_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all group-hover/search-result_product:mb-[20px] duration-100">
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          <div className="search-result_also-like_wrapper mt-[100px] flex flex-col items-center gap-[58px]">
            <h2 className="search-result_also-like_title uppercase font-medium text-2xl tracking-[3px]">
              you may also like
            </h2>
            <div className="search-result_products-wrapper flex flex-col items-center">
              <div className="search-result_products-inner-wrapper flex  gap-6 flex-wrap justify-center">
                <div className="search-result_product bg-white overflow-hidden group/search-result_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                  <div className="search-result_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        prevEl: ".search-result_product-swiper_left-btn",
                        nextEl: ".search-result_product-swiper_right-btn",
                      }}
                      modules={[Pagination, Navigation]}
                      className="search-result_product-swiper h-full"
                    >
                      <SwiperSlide></SwiperSlide>
                      <SwiperSlide></SwiperSlide>
                      <SwiperSlide></SwiperSlide>
                      <SwiperSlide></SwiperSlide>
                    </Swiper>
                    <Image
                      src={"/icons/prev-btn.svg"}
                      alt={"prev-btn"}
                      width={40}
                      height={40}
                      className="search-result_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all"
                    />
                    <Image
                      src={"/icons/next-btn.svg"}
                      alt={"next-btn"}
                      width={40}
                      height={40}
                      className="search-result_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all cursor-pointer"
                    />
                  </div>
                  <div className="search-result_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/search-result_product:pt-[15px] duration-200">
                    <div className="search-result_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/search-result_product:hidden transition-all duration-200"></div>
                    <p className="search-result_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/search-result_product:mt-0 duration-200 ">
                      ebro bedside table
                    </p>
                    <p className="search-result_product-price text-accent-color font-medium tracking-[1px] transition-all group-hover/search-result_product:pb-[15px] duration-200 ">
                      $300
                    </p>
                    <button className="search-result_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all group-hover/search-result_product:mb-[20px] duration-100">
                      add to cart
                    </button>
                  </div>
                </div>
                <div className="search-result_product bg-white overflow-hidden group/search-result_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                  <div className="search-result_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        prevEl: ".search-result_product-swiper_left-btn",
                        nextEl: ".search-result_product-swiper_right-btn",
                      }}
                      modules={[Pagination, Navigation]}
                      className="search-result_product-swiper h-full"
                    >
                      <SwiperSlide></SwiperSlide>
                      <SwiperSlide></SwiperSlide>
                      <SwiperSlide></SwiperSlide>
                      <SwiperSlide></SwiperSlide>
                    </Swiper>
                    <Image
                      src={"/icons/prev-btn.svg"}
                      alt={"prev-btn"}
                      width={40}
                      height={40}
                      className="search-result_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all"
                    />
                    <Image
                      src={"/icons/next-btn.svg"}
                      alt={"next-btn"}
                      width={40}
                      height={40}
                      className="search-result_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all cursor-pointer"
                    />
                    <p className="search-result_product-swiper-tag absolute text-white text-sm bg-red-hot py-1 px-4 top-2 left-2 tracking-[1px]">
                      HOT
                    </p>
                  </div>
                  <div className="search-result_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/search-result_product:pt-[15px] duration-200">
                    <div className="search-result_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/search-result_product:hidden transition-all duration-200"></div>
                    <p className="search-result_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/search-result_product:mt-0 duration-200 ">
                      aula coffee table
                    </p>
                    <div className="search-result_product-price_wrapper flex gap-2 transition-all group-hover/search-result_product:pb-[15px]">
                      <p className="search-result_product-price text-red-hot font-medium tracking-[1px]">
                        $299
                      </p>
                      <p className="search-result_product-price text-disable-color line-through decoration-[0.5px] tracking-[1px]">
                        $380
                      </p>
                    </div>
                    <button className="search-result_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all group-hover/search-result_product:mb-[20px] duration-100">
                      add to cart
                    </button>
                  </div>
                </div>
                <div className="search-result_product bg-white overflow-hidden group/search-result_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                  <div className="search-result_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        prevEl: ".search-result_product-swiper_left-btn",
                        nextEl: ".search-result_product-swiper_right-btn",
                      }}
                      modules={[Pagination, Navigation]}
                      className="search-result_product-swiper h-full"
                    >
                      <SwiperSlide></SwiperSlide>
                      <SwiperSlide></SwiperSlide>
                      <SwiperSlide></SwiperSlide>
                      <SwiperSlide></SwiperSlide>
                    </Swiper>
                    <Image
                      src={"/icons/prev-btn.svg"}
                      alt={"prev-btn"}
                      width={40}
                      height={40}
                      className="search-result_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all"
                    />
                    <Image
                      src={"/icons/next-btn.svg"}
                      alt={"next-btn"}
                      width={40}
                      height={40}
                      className="search-result_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all cursor-pointer"
                    />
                  </div>
                  <div className="search-result_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/search-result_product:pt-[15px] duration-200">
                    <div className="search-result_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/search-result_product:hidden transition-all duration-200"></div>
                    <p className="search-result_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/search-result_product:mt-0 duration-200 ">
                      haru small sofa bed
                    </p>
                    <p className="search-result_product-price text-accent-color font-medium tracking-[1px] transition-all group-hover/search-result_product:pb-[15px] duration-200 ">
                      $2 500
                    </p>
                    <button className="search-result_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/search-result_product:visible group-hover/search-result_product:opacity-100 transition-all group-hover/search-result_product:mb-[20px] duration-100">
                      add to cart
                    </button>
                  </div>
                </div>
                <a
                  href="#"
                  className="search-result_product overflow-hidden group/search-result_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] lg:w-[380px] w-[343px] h-[380px] border-[10px] border-white flex flex-col items-center justify-center"
                >
                  <div className="search-result_also-like_img w-[160px] h-[120px] bg-disable-text-color"></div>
                  <p className="search-result_also-like_img-title uppercase text-sub-text-color mt-5 mb-4">
                    Lamps
                  </p>
                  <Image
                    src={"/icons/Icon name=next arrow.svg"}
                    alt={"next arrow"}
                    width={24}
                    height={16}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
