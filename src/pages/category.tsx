import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function Category() {
  const [filterOpen, isFilterOpen] = useState(false);

  return (
    <main className="main-catalog lg:pt-10 pt-24 pb-[100px] bg-main-bg-color">
      <div className="container">
        <div className="catalog_wrapper flex flex-col">
          <div className="catalog_breadcrumbs flex items-center gap-2">
            <p className="catalog_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Home
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="catalog_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
              Furniture
            </p>
          </div>
          <div className="catalog_title-wrapper lg:mt-[54px] mt-8">
            <h1 className="catalog_title lg:text-3xl text-2xl font-medium tracking-[3px]">
              FURNITURE
            </h1>
          </div>
          <div className="catalog_filter-sort-btns mt-6 flex items-center gap-4 xl:hidden">
            <button
              onClick={() => isFilterOpen(!filterOpen)}
              className="catalog_filter-btn flex items-center justify-center bg-disable-color w-[162px] h-[46px] gap-[10px]"
            >
              <p className="catalog_filter-title tracking-[2px] text-white uppercase">Filters</p>
              <p className="catalog_filter-number tracking-[2px] text-white">4</p>
              <Image
                src={"/icons/Icon name=close - white.svg"}
                alt={"close"}
                width={20}
                height={20}
              />
            </button>
            <button className="catalog_sort-btn flex items-center justify-center bg-white w-[162px] h-[46px] gap-[10px] border border-disable-color">
              <p className="catalog_filter-title tracking-[2px] text-secondary-text-color uppercase">
                Sort
              </p>
              <p className="catalog_filter-number tracking-[2px] text-secondary-text-color">1</p>
              <Image src={"/icons/Icon name=close.svg"} alt={"close"} width={20} height={20} />
            </button>
          </div>
          <div className="catalog_filter-sort-tags mt-[30px] flex flex-row items-center gap-[10px] flex-wrap">
            <div className="catalog_sort-tag_wrapper flex items-center justify-center gap-[6px] bg-white w-fit py-1 px-[14px] border border-disable-text-color cursor-pointer">
              <p className="catalog_sort-tag-title font-medium text-disable-color">Price: </p>
              <p className="catalog_sort-tag-desc uppercase font-medium text-sm leading-6 tracking-[1px] align-middle">
                low to high
              </p>
            </div>
            <div className="catalog_sort-tag_wrapper flex items-center justify-center gap-[6px] bg-white w-fit py-1 px-[14px] border border-disable-text-color cursor-pointer">
              <p className="catalog_sort-tag-title font-medium text-disable-color">Price: </p>
              <p className="catalog_sort-tag-desc uppercase font-medium text-sm leading-6 tracking-[1px] align-middle">
                high to low
              </p>
            </div>
            <div className="catalog_sort-tag_wrapper flex items-center justify-center gap-[6px] bg-white w-fit py-1 px-[14px] border border-disable-text-color cursor-pointer text-secondary-text-color selected-sort">
              <p className="catalog_sort-tag-desc uppercase font-medium text-sm leading-6 tracking-[1px] align-middle">
                Bestselling
              </p>
            </div>
            <div className="catalog_sort-tag_wrapper flex items-center justify-center gap-[6px] bg-white w-fit py-1 px-[14px] border border-disable-text-color cursor-pointer text-secondary-text-color">
              <p className="catalog_sort-tag-desc uppercase font-medium text-sm leading-6 tracking-[1px] align-middle">
                Relevance
              </p>
            </div>
            <div className="catalog_filter-sort-tags_divider w-[2px] h-[32px] bg-disable-color max-w-[2px]"></div>
            <div className="catalog_filter-tag_wrapper flex items-center justify-center gap-[6px] bg-white w-fit py-1 px-[14px] border border-disable-text-color cursor-pointer">
              <p className="catalog_filter-tag-title font-medium text-disable-color">Color: </p>
              <p className="catalog_filter-tag-desc uppercase font-medium text-sm leading-6 tracking-[1px] align-middle">
                Black
              </p>
              <Image src={"/icons/Icon name=close.svg"} alt={"close"} width={16} height={16} />
            </div>
            <div className="catalog_filter-tag_wrapper flex items-center justify-center gap-[6px] bg-white w-fit py-1 px-[14px] border border-disable-text-color cursor-pointer">
              <p className="catalog_filter-tag-title font-medium text-disable-color">Material:</p>
              <p className="catalog_filter-tag-desc uppercase font-medium text-sm leading-6 tracking-[1px] align-middle">
                Leather
              </p>
              <Image src={"/icons/Icon name=close.svg"} alt={"close"} width={16} height={16} />
            </div>
            <div className="catalog_filter-tag_wrapper flex items-center justify-center gap-[6px] bg-white w-fit py-1 px-[14px] border border-disable-text-color cursor-pointer">
              <p className="catalog_filter-tag-title font-medium text-disable-color">Collection:</p>
              <p className="catalog_filter-tag-desc uppercase font-medium text-sm leading-6 tracking-[1px] align-middle">
                Minimalism
              </p>
              <Image src={"/icons/Icon name=close.svg"} alt={"close"} width={16} height={16} />
            </div>
            <button className="catalog_filter-tags_clear-btn flex items-center justify-center w-fit py-1 px-[14px] uppercase border border-accent-color bg-accent-color text-white font-medium tracking-[1px] text-sm leading-6">
              clear all
            </button>
          </div>
          <div className="catalog_main-wrapper mt-10 flex gap-8 relative">
            <div className="catalog_products-wrapper flex flex-col items-center">
              <div className="catalog_products-inner-wrapper flex items-center gap-6 flex-wrap justify-center">
                <div className="catalog_product bg-white overflow-hidden group/catalog_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                  <div className="catalog_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] min-h-[343px]: border-[10px] border-white relative">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        prevEl: ".catalog_product-swiper_left-btn",
                        nextEl: ".catalog_product-swiper_right-btn",
                      }}
                      modules={[Pagination, Navigation]}
                      className="catalog_product-swiper h-full"
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
                      className="catalog_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <Image
                      src={"/icons/next-btn.svg"}
                      alt={"next-btn"}
                      width={40}
                      height={40}
                      className="catalog_product-swiper_right-btn cursor-pointer absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                  </div>
                  <div className="catalog_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/catalog_product:pt-[15px] duration-200">
                    <div className="catalog_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/catalog_product:hidden transition-all duration-200"></div>
                    <p className="catalog_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/catalog_product:mt-0 duration-200 ">
                      Tirado chair
                    </p>
                    <p className="catalog_product-price text-accent-color font-medium tracking-[1px] transition-all group-hover/catalog_product:pb-[15px] duration-200 ">
                      $280
                    </p>
                    <button className="catalog_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all group-hover/catalog_product:mb-[20px] duration-100">
                      add to cart
                    </button>
                  </div>
                </div>
                <div className="catalog_product bg-white overflow-hidden group/catalog_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                  <div className="catalog_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        prevEl: ".catalog_product-swiper_left-btn",
                        nextEl: ".catalog_product-swiper_right-btn",
                      }}
                      modules={[Pagination, Navigation]}
                      className="catalog_product-swiper h-full"
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
                      className="catalog_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <Image
                      src={"/icons/next-btn.svg"}
                      alt={"next-btn"}
                      width={40}
                      height={40}
                      className="catalog_product-swiper_right-btn cursor-pointer absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <p className="catalog_product-swiper-tag absolute text-white text-sm bg-red-hot py-1 px-4 top-2 left-2 tracking-[1px]">
                      HOT
                    </p>
                  </div>
                  <div className="catalog_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/catalog_product:pt-[15px] duration-200">
                    <div className="catalog_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/catalog_product:hidden transition-all duration-200"></div>
                    <p className="catalog_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/catalog_product:mt-0 duration-200 ">
                      Kaleido
                    </p>
                    <div className="catalog_product-price_wrapper flex gap-2 transition-all group-hover/catalog_product:pb-[15px]">
                      <p className="catalog_product-price text-red-hot font-medium tracking-[1px]">
                        $199
                      </p>
                      <p className="catalog_product-price text-disable-color line-through decoration-[0.5px] tracking-[1px]">
                        $240
                      </p>
                    </div>
                    <button className="catalog_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all group-hover/catalog_product:mb-[20px] duration-100">
                      add to cart
                    </button>
                  </div>
                </div>
                <div className="catalog_product bg-white overflow-hidden group/catalog_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                  <div className="catalog_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        prevEl: ".catalog_product-swiper_left-btn",
                        nextEl: ".catalog_product-swiper_right-btn",
                      }}
                      modules={[Pagination, Navigation]}
                      className="catalog_product-swiper h-full"
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
                      className="catalog_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <Image
                      src={"/icons/next-btn.svg"}
                      alt={"next-btn"}
                      width={40}
                      height={40}
                      className="catalog_product-swiper_right-btn cursor-pointer absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                  </div>
                  <div className="catalog_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/catalog_product:pt-[15px] duration-200">
                    <div className="catalog_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/catalog_product:hidden transition-all duration-200"></div>
                    <p className="catalog_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/catalog_product:mt-0 duration-200 ">
                      damien
                    </p>
                    <p className="catalog_product-price text-accent-color font-medium tracking-[1px] transition-all group-hover/catalog_product:pb-[15px] duration-200 ">
                      $310
                    </p>
                    <button className="catalog_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all group-hover/catalog_product:mb-[20px] duration-100">
                      add to cart
                    </button>
                  </div>
                </div>
                <div className="catalog_product bg-white overflow-hidden group/catalog_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                  <div className="catalog_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        prevEl: ".catalog_product-swiper_left-btn",
                        nextEl: ".catalog_product-swiper_right-btn",
                      }}
                      modules={[Pagination, Navigation]}
                      className="catalog_product-swiper h-full"
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
                      className="catalog_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <Image
                      src={"/icons/next-btn.svg"}
                      alt={"next-btn"}
                      width={40}
                      height={40}
                      className="catalog_product-swiper_right-btn cursor-pointer absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <p className="catalog_product-swiper-tag absolute text-white text-sm bg-orange-popular py-1 px-4 top-2 left-2 tracking-[1px] uppercase">
                      popular
                    </p>
                  </div>
                  <div className="catalog_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/catalog_product:pt-[15px] duration-200">
                    <div className="catalog_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/catalog_product:hidden transition-all duration-200"></div>
                    <p className="catalog_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/catalog_product:mt-0 duration-200 ">
                      emmi set
                    </p>
                    <div className="catalog_product-price_wrapper flex gap-2 transition-all group-hover/catalog_product:pb-[15px]">
                      <p className="catalog_product-price text-accent-color font-medium tracking-[1px]">
                        $240
                      </p>
                    </div>
                    <button className="catalog_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all group-hover/catalog_product:mb-[20px] duration-100">
                      add to cart
                    </button>
                  </div>
                </div>
                <div className="catalog_product bg-white overflow-hidden group/catalog_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                  <div className="catalog_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        prevEl: ".catalog_product-swiper_left-btn",
                        nextEl: ".catalog_product-swiper_right-btn",
                      }}
                      modules={[Pagination, Navigation]}
                      className="catalog_product-swiper h-full"
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
                      className="catalog_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <Image
                      src={"/icons/next-btn.svg"}
                      alt={"next-btn"}
                      width={40}
                      height={40}
                      className="catalog_product-swiper_right-btn cursor-pointer absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                  </div>
                  <div className="catalog_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/catalog_product:pt-[15px] duration-200">
                    <div className="catalog_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/catalog_product:hidden transition-all duration-200"></div>
                    <p className="catalog_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/catalog_product:mt-0 duration-200 ">
                      caleido lamp
                    </p>
                    <p className="catalog_product-price text-accent-color font-medium tracking-[1px] transition-all group-hover/catalog_product:pb-[15px] duration-200 ">
                      $355
                    </p>
                    <button className="catalog_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all group-hover/catalog_product:mb-[20px] duration-100">
                      add to cart
                    </button>
                  </div>
                </div>
                <div className="catalog_product bg-white overflow-hidden group/catalog_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                  <div className="catalog_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        prevEl: ".catalog_product-swiper_left-btn",
                        nextEl: ".catalog_product-swiper_right-btn",
                      }}
                      modules={[Pagination, Navigation]}
                      className="catalog_product-swiper h-full"
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
                      className="catalog_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <Image
                      src={"/icons/next-btn.svg"}
                      alt={"next-btn"}
                      width={40}
                      height={40}
                      className="catalog_product-swiper_right-btn cursor-pointer absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <p className="catalog_product-swiper-tag absolute text-white text-sm bg-green-new py-1 px-4 top-2 left-2 tracking-[1px] uppercase">
                      new
                    </p>
                  </div>
                  <div className="catalog_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/catalog_product:pt-[15px] duration-200">
                    <div className="catalog_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/catalog_product:hidden transition-all duration-200"></div>
                    <p className="catalog_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/catalog_product:mt-0 duration-200 ">
                      haru sofa bef
                    </p>
                    <div className="catalog_product-price_wrapper flex gap-2 transition-all group-hover/catalog_product:pb-[15px]">
                      <p className="catalog_product-price text-accent-color font-medium tracking-[1px]">
                        $460
                      </p>
                    </div>
                    <button className="catalog_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all group-hover/catalog_product:mb-[20px] duration-100">
                      add to cart
                    </button>
                  </div>
                </div>
                <div className="catalog_product bg-white overflow-hidden group/catalog_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                  <div className="catalog_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        prevEl: ".catalog_product-swiper_left-btn",
                        nextEl: ".catalog_product-swiper_right-btn",
                      }}
                      modules={[Pagination, Navigation]}
                      className="catalog_product-swiper h-full"
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
                      className="catalog_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <Image
                      src={"/icons/next-btn.svg"}
                      alt={"next-btn"}
                      width={40}
                      height={40}
                      className="catalog_product-swiper_right-btn cursor-pointer absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <p className="catalog_product-swiper-tag absolute text-white text-sm bg-red-hot py-1 px-4 top-2 left-2 tracking-[1px]">
                      HOT
                    </p>
                  </div>
                  <div className="catalog_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/catalog_product:pt-[15px] duration-200">
                    <div className="catalog_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/catalog_product:hidden transition-all duration-200"></div>
                    <p className="catalog_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/catalog_product:mt-0 duration-200 ">
                      Scott angle sofa
                    </p>
                    <div className="catalog_product-price_wrapper flex gap-2 transition-all group-hover/catalog_product:pb-[15px]">
                      <p className="catalog_product-price text-red-hot font-medium tracking-[1px]">
                        $4 900
                      </p>
                      <p className="catalog_product-price text-disable-color line-through decoration-[0.5px] tracking-[1px]">
                        $5 400
                      </p>
                    </div>
                    <button className="catalog_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all group-hover/catalog_product:mb-[20px] duration-100">
                      add to cart
                    </button>
                  </div>
                </div>
                <div className="catalog_product bg-white overflow-hidden group/catalog_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                  <div className="catalog_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        prevEl: ".catalog_product-swiper_left-btn",
                        nextEl: ".catalog_product-swiper_right-btn",
                      }}
                      modules={[Pagination, Navigation]}
                      className="catalog_product-swiper h-full"
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
                      className="catalog_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <Image
                      src={"/icons/next-btn.svg"}
                      alt={"next-btn"}
                      width={40}
                      height={40}
                      className="catalog_product-swiper_right-btn cursor-pointer absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                  </div>
                  <div className="catalog_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/catalog_product:pt-[15px] duration-200">
                    <div className="catalog_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/catalog_product:hidden transition-all duration-200"></div>
                    <p className="catalog_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/catalog_product:mt-0 duration-200 ">
                      hainess wide sideboard
                    </p>
                    <p className="catalog_product-price text-accent-color font-medium tracking-[1px] transition-all group-hover/catalog_product:pb-[15px] duration-200 ">
                      $1 750
                    </p>
                    <button className="catalog_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all group-hover/catalog_product:mb-[20px] duration-100">
                      add to cart
                    </button>
                  </div>
                </div>
                <div className="catalog_product bg-white overflow-hidden group/catalog_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                  <div className="catalog_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        prevEl: ".catalog_product-swiper_left-btn",
                        nextEl: ".catalog_product-swiper_right-btn",
                      }}
                      modules={[Pagination, Navigation]}
                      className="catalog_product-swiper h-full"
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
                      className="catalog_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <Image
                      src={"/icons/next-btn.svg"}
                      alt={"next-btn"}
                      width={40}
                      height={40}
                      className="catalog_product-swiper_right-btn cursor-pointer absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <p className="catalog_product-swiper-tag absolute text-white text-sm bg-green-new py-1 px-4 top-2 left-2 tracking-[1px] uppercase">
                      new
                    </p>
                  </div>
                  <div className="catalog_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/catalog_product:pt-[15px] duration-200">
                    <div className="catalog_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/catalog_product:hidden transition-all duration-200"></div>
                    <p className="catalog_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/catalog_product:mt-0 duration-200 ">
                      illaria floor lamp
                    </p>
                    <div className="catalog_product-price_wrapper flex gap-2 transition-all group-hover/catalog_product:pb-[15px]">
                      <p className="catalog_product-price text-accent-color font-medium tracking-[1px]">
                        $380
                      </p>
                    </div>
                    <button className="catalog_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all group-hover/catalog_product:mb-[20px] duration-100">
                      add to cart
                    </button>
                  </div>
                </div>
                <div className="catalog_product bg-white overflow-hidden group/catalog_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                  <div className="catalog_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        prevEl: ".catalog_product-swiper_left-btn",
                        nextEl: ".catalog_product-swiper_right-btn",
                      }}
                      modules={[Pagination, Navigation]}
                      className="catalog_product-swiper h-full"
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
                      className="catalog_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <Image
                      src={"/icons/next-btn.svg"}
                      alt={"next-btn"}
                      width={40}
                      height={40}
                      className="catalog_product-swiper_right-btn cursor-pointer absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                  </div>
                  <div className="catalog_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/catalog_product:pt-[15px] duration-200">
                    <div className="catalog_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/catalog_product:hidden transition-all duration-200"></div>
                    <p className="catalog_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/catalog_product:mt-0 duration-200 ">
                      ebro bedside table
                    </p>
                    <p className="catalog_product-price text-accent-color font-medium tracking-[1px] transition-all group-hover/catalog_product:pb-[15px] duration-200 ">
                      $300
                    </p>
                    <button className="catalog_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all group-hover/catalog_product:mb-[20px] duration-100">
                      add to cart
                    </button>
                  </div>
                </div>
                <div className="catalog_product bg-white overflow-hidden group/catalog_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                  <div className="catalog_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        prevEl: ".catalog_product-swiper_left-btn",
                        nextEl: ".catalog_product-swiper_right-btn",
                      }}
                      modules={[Pagination, Navigation]}
                      className="catalog_product-swiper h-full"
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
                      className="catalog_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <Image
                      src={"/icons/next-btn.svg"}
                      alt={"next-btn"}
                      width={40}
                      height={40}
                      className="catalog_product-swiper_right-btn cursor-pointer absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <p className="catalog_product-swiper-tag absolute text-white text-sm bg-red-hot py-1 px-4 top-2 left-2 tracking-[1px]">
                      HOT
                    </p>
                  </div>
                  <div className="catalog_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/catalog_product:pt-[15px] duration-200">
                    <div className="catalog_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/catalog_product:hidden transition-all duration-200"></div>
                    <p className="catalog_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/catalog_product:mt-0 duration-200 ">
                      aula coffee table
                    </p>
                    <div className="catalog_product-price_wrapper flex gap-2 transition-all group-hover/catalog_product:pb-[15px]">
                      <p className="catalog_product-price text-red-hot font-medium tracking-[1px]">
                        $299
                      </p>
                      <p className="catalog_product-price text-disable-color line-through decoration-[0.5px] tracking-[1px]">
                        $380
                      </p>
                    </div>
                    <button className="catalog_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all group-hover/catalog_product:mb-[20px] duration-100">
                      add to cart
                    </button>
                  </div>
                </div>
                <div className="catalog_product bg-white overflow-hidden group/catalog_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                  <div className="catalog_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={{
                        prevEl: ".catalog_product-swiper_left-btn",
                        nextEl: ".catalog_product-swiper_right-btn",
                      }}
                      modules={[Pagination, Navigation]}
                      className="catalog_product-swiper h-full"
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
                      className="catalog_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                    <Image
                      src={"/icons/next-btn.svg"}
                      alt={"next-btn"}
                      width={40}
                      height={40}
                      className="catalog_product-swiper_right-btn cursor-pointer absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all"
                    />
                  </div>
                  <div className="catalog_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/catalog_product:pt-[15px] duration-200">
                    <div className="catalog_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/catalog_product:hidden transition-all duration-200"></div>
                    <p className="catalog_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/catalog_product:mt-0 duration-200 ">
                      haru small sofa bed
                    </p>
                    <p className="catalog_product-price text-accent-color font-medium tracking-[1px] transition-all group-hover/catalog_product:pb-[15px] duration-200 ">
                      $2 500
                    </p>
                    <button className="catalog_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all group-hover/catalog_product:mb-[20px] duration-100">
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="catalog_product_page-number flex items-center mt-10 sm:gap-7 gap-[18px]">
                <div className="catalog_product_prev-page cursor-pointer w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center border border-disable-color">
                  <Image
                    src={"/icons/Icon name=chevron_left.svg"}
                    alt={"chevron_left"}
                    width={10}
                    height={14}
                  />
                </div>
                <div className="catalog_product_page-btns flex items-center sm:gap-4 gap-[10px]">
                  <div className="catalog_product_page-btn w-[46px] h-[46px] cursor-pointer font-medium text-disable-color bg-white rounded-full flex items-center justify-center border border-disable-text-color selected-page">
                    1
                  </div>
                  <div className="catalog_product_page-btn w-[46px] h-[46px] cursor-pointer font-medium text-disable-color bg-white rounded-full flex items-center justify-center border border-disable-text-color">
                    2
                  </div>
                  <div className="catalog_product_page-btn w-[46px] h-[46px] cursor-pointer font-medium text-disable-color bg-white rounded-full flex items-center justify-center border border-disable-text-color">
                    3
                  </div>
                  <div className="catalog_product_page-btn w-[46px] h-[46px] cursor-pointer font-medium text-disable-color bg-white rounded-full flex items-center justify-center border border-disable-text-color">
                    4
                  </div>
                  <div className="catalog_product_page-btn w-[46px] h-[46px] cursor-pointer font-medium text-disable-color bg-white rounded-full items-center justify-center border border-disable-text-color sm:flex hidden">
                    5
                  </div>
                </div>
                <div className="catalog_product_next-page cursor-pointer w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center border border-disable-color">
                  <Image
                    src={"/icons/Icon name=chevron_right.svg"}
                    alt={"chevron_right"}
                    width={10}
                    height={14}
                  />
                </div>
              </div>
              <div className="catalog_product-divider w-full h-[1px] bg-disable-color my-10"></div>
              <button className="catalog_product_show-btn w-[214px] h-[60px] flex items-center justify-center bg-disable-color gap-[14px]">
                <p className="catalog_product_show-btn_title uppercase text-white tracking-[2px]">
                  show more
                </p>
                <Image
                  src={"/icons/Icon name=down arrow - white.svg"}
                  alt={"down arrow"}
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <div
              className={`catalog_filters-wrapper bg-white sm:min-w-[380px] min-w-[375px] max-h-[1800px] sm:py-[50px] py-[40px] px-[30px] flex xl:flex-col sm:flex-row flex-col xl:gap-[60px] sm:gap-x-24 gap-[40px] xl:static absolute top-0 sm:left-0 left-[-20px] right-0 xl:z-0 z-10 flex-wrap transition-all duration-300 ${
                filterOpen
                  ? "visible opacity-100 xl:shadow-none shadow-main-box-shadow"
                  : "xl:visible xl:opacity-100 invisible opacity-0 shadow-none"
              }`}
            >
              <div className="catalog_filter_price-wrapper">
                <h2 className="catalog_filter_price-title uppercase font-medium text-xl tracking-[2.5px]">
                  price
                </h2>
                <div className="catalog_filter_divider w-[30px] h-[1px] bg-disable-color mt-[15px] mb-[30px]"></div>
                <div className="catalog_filter_price-range_wrapper mb-[14px] relative min-h-[20px]">
                  <input
                    id="fromSlider"
                    type="range"
                    className="catalog_filter_price-range"
                    value={0}
                    min={0}
                    max={50}
                  />
                  <input
                    id="toSlider"
                    type="range"
                    className="catalog_filter_price-range"
                    value={100}
                    min={51}
                    max={100}
                  />
                </div>
                <div className="catalog_filter_price-input_wrapper flex items-center gap-[10px]">
                  <input
                    type="number"
                    className="catalog_filter_price-input border border-disable-color max-w-[90px] h-[46px] p-4 outline-none caret-secondary-text-color text-secondary-text-color placeholder:text-placeholder-text-color"
                    placeholder="$50"
                    min={1}
                  />
                  <p className="catalog_filter_price-input-divider uppercase font-medium tracking-[1px] text-sub-text-color">
                    —
                  </p>
                  <input
                    type="number"
                    className="catalog_filter_price-input border border-disable-color max-w-[90px] h-[46px] p-4 outline-none caret-secondary-text-color text-secondary-text-color placeholder:text-placeholder-text-color"
                    placeholder="$1200"
                    min={1}
                  />
                  <button
                    type="button"
                    className="catalog_filter_price-btn h-[46px] w-[74px] text-white bg-disable-color"
                  >
                    OK
                  </button>
                </div>
              </div>
              <div className="catalog_filter_material-wrapper">
                <h2 className="catalog_filter_material-title uppercase font-medium text-xl tracking-[2.5px]">
                  Material
                </h2>
                <div className="catalog_filter_divider w-[30px] h-[1px] bg-disable-color mt-[15px] mb-[30px]"></div>
                <div className="catalog_filter_material-checkbox-wrapper flex flex-col gap-5">
                  <div className="catalog_filter_material-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_material-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-metal"
                      value={"metal"}
                    />
                    <label
                      htmlFor="material-checkbox-metal"
                      className="catalog_filter_material-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      metal
                    </label>
                  </div>
                  <div className="catalog_filter_material-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_material-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-plastic"
                      value={"plastic"}
                    />
                    <label
                      htmlFor="material-checkbox-plastic"
                      className="catalog_filter_material-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      plastic
                    </label>
                  </div>
                  <div className="catalog_filter_material-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_material-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-leather"
                      value={"leather"}
                    />
                    <label
                      htmlFor="material-checkbox-leather"
                      className="catalog_filter_material-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      leather
                    </label>
                  </div>
                  <div className="catalog_filter_material-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_material-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-marble"
                      value={"marble"}
                    />
                    <label
                      htmlFor="material-checkbox-marble"
                      className="catalog_filter_material-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      marble
                    </label>
                  </div>
                  <div className="catalog_filter_material-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_material-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-glass"
                      value={"glass"}
                    />
                    <label
                      htmlFor="material-checkbox-glass"
                      className="catalog_filter_material-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      glass
                    </label>
                  </div>
                  <div className="catalog_filter_material-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_material-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-rattan"
                      value={"rattan"}
                    />
                    <label
                      htmlFor="material-checkbox-rattan"
                      className="catalog_filter_material-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      rattan
                    </label>
                  </div>
                </div>
              </div>
              <div className="catalog_filter_color-wrapper">
                <h2 className="catalog_filter_color-title uppercase font-medium text-xl tracking-[2.5px]">
                  color
                </h2>
                <div className="catalog_filter_divider w-[30px] h-[1px] bg-disable-color mt-[15px] mb-[30px]"></div>
                <div className="catalog_filter_color-checkbox-wrapper flex flex-col gap-5">
                  <div className="catalog_filter_color-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_color-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-white"
                      value={"#FFFFFF"}
                    />
                    <label
                      htmlFor="material-checkbox-white"
                      className="catalog_filter_color-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      white
                    </label>
                  </div>
                  <div className="catalog_filter_color-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_color-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-black"
                      value={"#000000"}
                    />
                    <label
                      htmlFor="material-checkbox-black"
                      className="catalog_filter_color-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      black
                    </label>
                  </div>
                  <div className="catalog_filter_color-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_color-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-gold"
                      value={"#DBA514"}
                    />
                    <label
                      htmlFor="material-checkbox-gold"
                      className="catalog_filter_color-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      gold
                    </label>
                  </div>
                  <div className="catalog_filter_color-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_color-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-orange"
                      value={"#E59D49"}
                    />
                    <label
                      htmlFor="material-checkbox-orange"
                      className="catalog_filter_color-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      orange
                    </label>
                  </div>
                  <div className="catalog_filter_color-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_color-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-light-beige"
                      value={"#EDE4E0"}
                    />
                    <label
                      htmlFor="material-checkbox-light-beige"
                      className="catalog_filter_color-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      light beige
                    </label>
                  </div>
                  <div className="catalog_filter_color-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_color-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-dark-gray"
                      value={"#666666"}
                    />
                    <label
                      htmlFor="material-checkbox-dark-gray"
                      className="catalog_filter_color-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      dark gray
                    </label>
                  </div>
                  <div className="catalog_filter_collection-more-btn_wrapper">
                    <button className="catalog_filter_collection-more-btn border-b border-accent-color">
                      Show 8 more
                    </button>
                  </div>
                </div>
              </div>
              <div className="catalog_filter_collection-wrapper">
                <h2 className="catalog_filter_collection-title uppercase font-medium text-xl tracking-[2.5px]">
                  collection
                </h2>
                <div className="catalog_filter_divider w-[30px] h-[1px] bg-disable-color mt-[15px] mb-[30px]"></div>
                <div className="catalog_filter_collection-checkbox-wrapper flex flex-col gap-5">
                  <div className="catalog_filter_collection-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_collection-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-minimalism"
                      value={"minimalism"}
                    />
                    <label
                      htmlFor="material-checkbox-minimalism"
                      className="catalog_filter_collection-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      minimalism
                    </label>
                  </div>
                  <div className="catalog_filter_collection-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_collection-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-eco-style"
                      value={"eco style"}
                    />
                    <label
                      htmlFor="material-checkbox-eco-style"
                      className="catalog_filter_collection-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      eco style
                    </label>
                  </div>
                  <div className="catalog_filter_collection-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_collection-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-glam"
                      value={"glam"}
                    />
                    <label
                      htmlFor="material-checkbox-glam"
                      className="catalog_filter_collection-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      glam
                    </label>
                  </div>
                  <div className="catalog_filter_collection-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_collection-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-royal"
                      value={"royal"}
                    />
                    <label
                      htmlFor="material-checkbox-royal"
                      className="catalog_filter_collection-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      royal
                    </label>
                  </div>
                  <div className="catalog_filter_collection-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_collection-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-pink-rose"
                      value={"pink rose"}
                    />
                    <label
                      htmlFor="material-checkbox-pink-rose"
                      className="catalog_filter_collection-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      pink rose
                    </label>
                  </div>
                  <div className="catalog_filter_collection-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_collection-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-hi-tech"
                      value={"hi tech"}
                    />
                    <label
                      htmlFor="material-checkbox-hi-tech"
                      className="catalog_filter_collection-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      hi tech
                    </label>
                  </div>
                  <div className="catalog_filter_collection-more-btn_wrapper">
                    <button className="catalog_filter_collection-more-btn border-b border-accent-color">
                      Show 8 more
                    </button>
                  </div>
                </div>
              </div>
              <div className="catalog_filter_additional-wrapper">
                <h2 className="catalog_filter_additional-title uppercase font-medium text-xl tracking-[2.5px]">
                  additional
                </h2>
                <div className="catalog_filter_divider w-[30px] h-[1px] bg-disable-color mt-[15px] mb-[30px]"></div>
                <div className="catalog_filter_additional-checkbox-wrapper flex flex-col gap-5">
                  <div className="catalog_filter_additional-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_additional-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-set"
                      value={"set"}
                    />
                    <label
                      htmlFor="material-checkbox-set"
                      className="catalog_filter_additional-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      set
                    </label>
                  </div>
                  <div className="catalog_filter_additional-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_additional-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-combined"
                      value={"combined"}
                    />
                    <label
                      htmlFor="material-checkbox-combined"
                      className="catalog_filter_additional-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      combined
                    </label>
                  </div>
                  <div className="catalog_filter_additional-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_additional-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-transformer"
                      value={"transformer"}
                    />
                    <label
                      htmlFor="material-checkbox-transformer"
                      className="catalog_filter_additional-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      transformer
                    </label>
                  </div>
                  <div className="catalog_filter_additional-checkbox-inner-wrapper flex items-center gap-[10px] ">
                    <input
                      type="checkbox"
                      className="catalog_filter_additional-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                      id="material-checkbox-frameless"
                      value={"frameless"}
                    />
                    <label
                      htmlFor="material-checkbox-frameless"
                      className="catalog_filter_additional-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                    >
                      frameless
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
