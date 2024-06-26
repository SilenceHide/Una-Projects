import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function Product() {
  return (
    <main className="main-product lg:pt-10 pt-24 lg:pb-[100px] pb-[80px] bg-main-bg-color">
      <div className="container">
        <div className="product_wrapper flex flex-col">
          <div className="product_breadcrumbs flex items-center gap-2">
            <p className="product_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Home
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="product_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Textile
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="product_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
              Armchair, fleece
            </p>
          </div>
          <div className="product_img-filter-wrapper mt-14 flex xl:flex-row flex-col items-center 3xl:gap-20 2xl:gap-10 xl:gap-5 gap-10">
            <div className="product_img-wrapper flex lg:flex-row flex-col-reverse 3xl:gap-6 gap-5 3xl:min-w-[1070px] w-full 3xl:h-fit lg:h-[600px]">
              <div className="product_img-slider_wrapper lg:min-w-[140px] lg:max-w-[140px] w-full lg:h-auto h-[160px] overflow-hidden">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={15}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  breakpoints={{
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 15,
                    },
                    1024: {
                      direction: "vertical",
                      slidesPerView: 4,
                      spaceBetween: 15,
                    },
                    1280: {
                      direction: "vertical",
                      slidesPerView: 4,
                      spaceBetween: 15,
                    },
                    1450: {
                      direction: "vertical",
                      slidesPerView: 4,
                      spaceBetween: 15,
                    },
                    1640: {
                      direction: "vertical",
                      slidesPerView: 5,
                      spaceBetween: 15,
                    },
                  }}
                  className="product_img-swiper"
                >
                  <SwiperSlide className="product_img-slide lg:max-h-[130px]">
                    <div className="product_slide lg:max-w-[130px] xs:w-full xs:min-h-[130px] xs:max-h-[130px] h-[109px] w-[109px] border-[10px] border-main-bg-color transition-all duration-200 hover:border-white hover:shadow-main-box-shadow bg-disable-text-color cursor-pointer product_slide-selected"></div>
                  </SwiperSlide>
                  <SwiperSlide className="product_img-slide lg:max-h-[130px]">
                    <div className="product_slide lg:max-w-[130px] xs:w-full xs:min-h-[130px] xs:max-h-[130px] h-[109px] w-[109px] border-[10px] border-main-bg-color transition-all duration-200 hover:border-white hover:shadow-main-box-shadow bg-disable-text-color cursor-pointer"></div>
                  </SwiperSlide>
                  <SwiperSlide className="product_img-slide lg:max-h-[130px]">
                    <div className="product_slide lg:max-w-[130px] xs:w-full xs:min-h-[130px] xs:max-h-[130px] h-[109px] w-[109px] border-[10px] border-main-bg-color transition-all duration-200 hover:border-white hover:shadow-main-box-shadow bg-disable-text-color cursor-pointer"></div>
                  </SwiperSlide>
                  <SwiperSlide className="product_img-slide lg:max-h-[130px]">
                    <div className="product_slide lg:max-w-[130px] xs:w-full xs:min-h-[130px] xs:max-h-[130px] h-[109px] w-[109px] border-[10px] border-main-bg-color transition-all duration-200 hover:border-white hover:shadow-main-box-shadow bg-disable-text-color cursor-pointer"></div>
                  </SwiperSlide>
                  <SwiperSlide className="product_img-slide lg:max-h-[130px]">
                    <div className="product_slide lg:max-w-[130px] xs:w-full xs:min-h-[130px] xs:max-h-[130px] h-[109px] w-[109px] border-[10px] border-main-bg-color transition-all duration-200 hover:border-white hover:shadow-main-box-shadow bg-disable-text-color cursor-pointer"></div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="product_img-selected 3xl:min-w-[900px] lg:min-w-[700px] w-full border-[10px] lg:h-auto sm:h-[500px] h-[240px] border-white bg-disable-text-color"></div>
            </div>
            <div className="product_info-wrapper flex flex-col w-full ">
              <div className="product_title-wrapper flex flex-col items-center 2xl:py-10 pb-5">
                <div className="product_divider w-10 h-[2px] bg-accent-color mb-7"></div>
                <h1 className="product_title font-medium text-2xl uppercase tracking-[3px] mb-4 text-center">
                  cesil micro velvet chair
                </h1>
                <div className="product_info_review-wrapper flex gap-[10px]">
                  <div className="product_info_review-star_wrapper flex">
                    <Image
                      src={"/icons/brown-Star.svg"}
                      alt={"brown-Star"}
                      width={16}
                      height={16}
                      className="cursor-pointer"
                    />
                    <Image
                      src={"/icons/brown-Star.svg"}
                      alt={"brown-Star"}
                      width={16}
                      height={16}
                      className="cursor-pointer"
                    />
                    <Image
                      src={"/icons/brown-Star.svg"}
                      alt={"brown-Star"}
                      width={16}
                      height={16}
                      className="cursor-pointer"
                    />
                    <Image
                      src={"/icons/brown-Star.svg"}
                      alt={"brown-Star"}
                      width={16}
                      height={16}
                      className="cursor-pointer"
                    />
                    <Image
                      src={"/icons/empty-Star.svg"}
                      alt={"empty-Star"}
                      width={16}
                      height={16}
                      className="cursor-pointer"
                    />
                  </div>
                  <p className="product_info_review-count border-b border-accent-color text-sm">
                    3 reviews
                  </p>
                </div>
              </div>
              <div className="product_filter-wrapper border-y border-disable-color flex flex-col 2xl:py-10 py-5 gap-7">
                <div className="product_filter_color-wrapper flex items-center xs:gap-[90px] gap-[70px]">
                  <p className="product_filter_color-title uppercase font-medium tracking-[2px] text-sub-text-color">
                    color
                  </p>
                  <div className="product_filter_colors flex items-center xs:gap-4 gap-2">
                    <div className="product_filter_color min-w-[60px] w-full h-[60px] bg-disable-text-color border-4 border-main-bg-color transition-all duration-300 hover:border-white hover:shadow-main-box-shadow cursor-pointer product_filter_color-selected"></div>
                    <div className="product_filter_color min-w-[60px] w-full h-[60px] bg-disable-text-color border-4 border-main-bg-color transition-all duration-300 hover:border-white hover:shadow-main-box-shadow cursor-pointer"></div>
                    <div className="product_filter_color min-w-[60px] w-full h-[60px] bg-disable-text-color border-4 border-main-bg-color transition-all duration-300 hover:border-white hover:shadow-main-box-shadow cursor-pointer"></div>
                  </div>
                </div>
                <div className="product_filter_dimensions-wrapper flex items-center gap-10">
                  <p className="product_filter_dimensions-title uppercase font-medium tracking-[2px] text-sub-text-color">
                    dimensions
                  </p>
                  <div className="product_filter_dimensions flex xs:flex-row flex-col xs:items-center gap-4">
                    <p className="product_filter_dimension text-xs font-medium text-disable-color cursor-pointer bg-white px-[10px] py-2 transition-all duration-200 hover:text-accent-color hover:shadow-main-box-shadow">
                      W:75 х H:82 cm
                    </p>
                    <p className="product_filter_dimension text-xs font-medium text-disable-color cursor-pointer bg-white px-[10px] py-2 transition-all duration-200 hover:text-accent-color hover:shadow-main-box-shadow">
                      W:120 х H:100 cm
                    </p>
                  </div>
                </div>
                <div className="product_filter_quantity-wrapper flex items-center gap-14">
                  <p className="product_filter_quantity-title uppercase font-medium tracking-[2px] text-sub-text-color">
                    quantity
                  </p>
                  <div className="product_filter_quantity-counter flex items-center gap-4">
                    <Image
                      src={"/icons/minus-btn.svg"}
                      alt={"minus-btn"}
                      width={36}
                      height={36}
                      className="cursor-pointer"
                    />
                    <p className="product_filter_quantity-number">1</p>
                    <Image
                      src={"/icons/plus-btn.svg"}
                      alt={"plus-btn"}
                      width={36}
                      height={36}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="product_price-add_wrapper flex flex-col 2xl:py-10 pt-5 gap-6">
                <div className="product_price-wrapper flex">
                  <div className="product_price_left-wrapper flex items-center gap-3">
                    <p className="product_price tracking-[2px] text-xl font-medium text-red-hot">
                      $600
                    </p>
                    <p className="product_price tracking-[2px] text-xl font-medium text-disable-color line-through">
                      $675
                    </p>
                  </div>
                  <div className="product_price-divider mx-5 w-[2px] h-[26px] bg-disable-text-color"></div>
                  <div className="product_price_right-wrapper flex items-center gap-2">
                    <Image
                      src={"/icons/truck-Icon.svg"}
                      alt={"truck-Icon"}
                      width={20}
                      height={20}
                    />
                    <p className="product_price_icon-title text-sm text-sub-text-color">
                      Free delivery from $1 000
                    </p>
                  </div>
                </div>
                <div className="product_add-wrapper flex gap-5">
                  <button
                    type="button"
                    className="product_add-btn w-[204px] h-[60px] bg-disable-color font-semibold text-lg uppercase tracking-[2px] text-white"
                  >
                    add to cart
                  </button>
                  <div className="product_love-btn w-[60px] h-[60px] border border-secondary-text-color flex items-center justify-center rounded-full bg-white cursor-pointer">
                    <Image src={"/icons/Icon name=like.svg"} alt={"like"} width={28} height={28} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product_detail-wrapper md:my-[100px] my-[60px] xl:pb-[100px] flex justify-between 2xl:gap-20 xl:gap-10 gap-14 xl:flex-nowrap flex-wrap xl:border-b xl:border-disable-color">
            <div className="product_desc-wrapper flex flex-col w-full">
              <h2 className="product_desc-title uppercase tracking-[2px] text-xl font-medium pb-[10px] border-b border-disable-color mb-10">
                description
              </h2>
              <div className="product_desc-inner-wrapper flex flex-col gap-5 text-lg text-sub-text-color text-justify">
                <p className="product_desc">
                  The chair uses a safe, environmentally friendly filler, the special properties of
                  which make the furniture not only soft and comfortable, but also orthopedic.
                  Relaxes the muscles of the back and waist, adjusts to your body.
                </p>
                <p className="product_desc">
                  Made of mat - the most popular furniture fabric. Pleasant to the touch and at the
                  same time durable and reliable fabric. Large selection of color shades.
                </p>
                <p className="product_desc">
                  Prepayment on a bank card. Delivery by mail or by courier. Delivery of goods
                  within 16 days, as goods are only by request.
                </p>
              </div>
            </div>
            <div className="product_dimensions-wrapper flex flex-col w-full">
              <h2 className="product_dimensions-title uppercase tracking-[2px] text-xl font-medium pb-[10px] border-b border-disable-color mb-10">
                dimensions
              </h2>
              <div className="product_dimensions_inner-wrapper flex flex-col gap-5">
                <div className="product_dimension-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                  <p className="product_dimension_height font-medium">Height (cm)</p>
                  <p className="product_dimension_height-number text-sub-text-color">82</p>
                </div>
                <div className="product_dimension-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                  <p className="product_dimension_height font-medium">Width (cm)</p>
                  <p className="product_dimension_height-number text-sub-text-color">75</p>
                </div>
                <div className="product_dimension-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                  <p className="product_dimension_height font-medium">Arm dimensions (hwd)</p>
                  <p className="product_dimension_height-number text-sub-text-color">
                    53 x 7 x 69 cm
                  </p>
                </div>
                <div className="product_dimension-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                  <p className="product_dimension_height font-medium">Seat dimensions (hwd)</p>
                  <p className="product_dimension_height-number text-sub-text-color">
                    44 x 56 x 56 cm
                  </p>
                </div>
                <div className="product_dimension-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                  <p className="product_dimension_height font-medium">Leg height (cm)</p>
                  <p className="product_dimension_height-number text-sub-text-color">23</p>
                </div>
                <div className="product_dimension-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                  <p className="product_dimension_height font-medium">Packaging dimensions</p>
                  <p className="product_dimension_height-number text-sub-text-color">
                    1:H86 x W79 x D84 cm
                  </p>
                </div>
                <div className="product_dimension-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                  <p className="product_dimension_height font-medium">Weight (kg)</p>
                  <p className="product_dimension_height-number text-sub-text-color">17</p>
                </div>
              </div>
            </div>
            <div className="product_details-wrapper flex flex-col w-full">
              <h2 className="product_details-title uppercase tracking-[2px] text-xl font-medium pb-[10px] border-b border-disable-color mb-10">
                details
              </h2>
              <div className="product_details_inner-wrapper flex flex-col gap-5">
                <div className="product_detail-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                  <p className="product_detail_height font-medium">Assembly</p>
                  <p className="product_detail_height-number text-sub-text-color">
                    No assembly required
                  </p>
                </div>
                <div className="product_detail-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                  <p className="product_detail_height font-medium">Number of seats</p>
                  <p className="product_detail_height-number text-sub-text-color">1 seater</p>
                </div>
                <div className="product_detail-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                  <p className="product_detail_height font-medium">Caring instructions</p>
                  <p className="product_detail_height-number text-sub-text-color">
                    Professional cleaning only
                  </p>
                </div>
                <div className="product_detail-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                  <p className="product_detail_height font-medium">Material</p>
                  <p className="product_detail_height-number text-sub-text-color">
                    Micro velvet, wood
                  </p>
                </div>
                <div className="product_detail-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                  <p className="product_detail_height font-medium">Assembly</p>
                  <p className="product_detail_height-number text-sub-text-color">
                    No assembly required
                  </p>
                </div>
                <div className="product_detail-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                  <p className="product_detail_height font-medium">Caring instructions</p>
                  <p className="product_detail_height-number text-sub-text-color">
                    Professional cleaning only
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="product_also-like_wrapper flex flex-col">
            <div className="product_also-like_top-wrapper flex items-center justify-between">
              <h2 className="product_also-like_title font-medium lg:text-3xl text-2xl tracking-[3px] uppercase">
                you may also like
              </h2>
              <div className="product_also-like_nav-btn-wrapper flex items-center justify-center gap-5">
                <div className="product_also-like_left-btn w-[46px] h-[46px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                  <Image
                    src={"/icons/Icon name=chevron_left.svg"}
                    alt={"left-btn"}
                    width={10}
                    height={14}
                  />
                </div>
                <div className="product_also-like_right-btn w-[46px] h-[46px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                  <Image
                    src={"/icons/Icon name=chevron_right.svg"}
                    alt={"right-btn"}
                    width={10}
                    height={14}
                  />
                </div>
              </div>
            </div>
            <div className="product_also-like_slider-wrapper mt-14">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
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
                  prevEl: ".product_also-like_left-btn",
                  nextEl: ".product_also-like_right-btn",
                }}
                className="popular-categories_swiper"
              >
                <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
                  <a
                    href="#"
                    className="product relative flex flex-col lg:gap-[30px] gap-7 lg:w-[380px] w-[343px] bg-white pb-12 "
                  >
                    <div className="product_img bg-disable-text-color max-w-[380px] w-full lg:h-[380px] h-[343px]  border-[10px] border-white "></div>
                    <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-red-hot py-1 px-4 top-5 left-5 uppercase">
                      hot
                    </p>
                    <div className="product_img-desc flex flex-col items-center gap-3">
                      <div className="product_img-rectangle bg-disable-color w-[30px] h-[1px] mb-[10px]"></div>
                      <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
                        EBRO BESIDE TABLE
                      </p>
                      <div className="product_img-price_wrapper flex gap-2">
                        <p className="product_img-price text-red-hot font-medium tracking-[1px]">
                          $250
                        </p>
                        <p className="product_img-price text-disable-color line-through decoration-[0.5px] tracking-[1px]">
                          $310
                        </p>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
                  <a
                    href="#"
                    className="product relative flex flex-col lg:gap-[30px] gap-7 lg:w-[380px] w-[343px] bg-white pb-12"
                  >
                    <div className="product_img bg-disable-text-color max-w-[380px] w-full lg:h-[380px] h-[343px] border-[10px] border-white "></div>
                    {/* <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
                        POPULAR
                      </p> */}
                    <div className="product_img-desc flex flex-col items-center gap-3">
                      <div className="product_img-rectangle bg-disable-color w-[30px] h-[1px] mb-[10px]"></div>
                      <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
                        TIRADO CHAIR
                      </p>
                      <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                        $280
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
                  <a
                    href="#"
                    className="product relative flex flex-col lg:gap-[30px] gap-7 lg:w-[380px] w-[343px] bg-white pb-12"
                  >
                    <div className="product_img bg-disable-text-color max-w-[380px] w-full lg:h-[380px] h-[343px] border-[10px] border-white "></div>
                    {/* <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
                        POPULAR
                      </p> */}
                    <div className="product_img-desc flex flex-col items-center gap-3">
                      <div className="product_img-rectangle bg-disable-color w-[30px] h-[1px] mb-[10px]"></div>
                      <p className="product_img-title text-main-text-color font-medium tracking-[2px] uppercase">
                        emmi velvet chair
                      </p>
                      <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                        $240
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
                  <a
                    href="#"
                    className="product relative flex flex-col lg:gap-[30px] gap-7 lg:w-[380px] w-[343px] bg-white pb-12"
                  >
                    <div className="product_img bg-disable-text-color max-w-[380px] w-full lg:h-[380px] h-[343px] border-[10px] border-white "></div>
                    <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
                      POPULAR
                    </p>
                    <div className="product_img-desc flex flex-col items-center gap-3">
                      <div className="product_img-rectangle bg-disable-color w-[30px] h-[1px] mb-[10px]"></div>
                      <p className="product_img-title text-main-text-color font-medium tracking-[2px] uppercase">
                        caleido chair
                      </p>
                      <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                        $355
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
              <a
                href="#"
                className="product-section_button flex items-center text-white justify-center gap-3 lg:max-w-[300px] max-w-[343px] mt-14 bg-disable-color py-3 sm:mx-auto"
              >
                <p className="product-section_button-title tracking-[2px]">SEE MORE PRODUCTS</p>
                <Image
                  src={"icons/Icon name=next arrow - white.svg"}
                  alt={"next arrow"}
                  width={24}
                  height={16}
                  className="fill-white text-white"
                />
              </a>
            </div>
          </div>
          <div className="product_review-wrapper md:mt-[100px] mt-[60px] flex gap-10 lg:flex-row flex-col">
            <div className="product_customer-reviews_wrapper flex flex-col basis-2/3 items-center">
              <div className="product-divider w-10 h-[2px] bg-accent-color"></div>
              <h2 className="product_customer-reviews_title mt-[30px] text-3xl font-medium tracking-[3px] uppercase text-center">
                customer reviews
              </h2>
              <div className="product-divider w-full h-[1px] bg-disable-color lg:my-[60px] my-10"></div>
              <p className="product_customer-reviews_desc text-lg text-sub-text-color max-w-[555px] text-center">
                There is no any customer review of this product. Be the first and add your review
              </p>
              <div className="product-divider w-full h-[1px] bg-disable-color lg:mt-[60px] mt-10"></div>
            </div>
            <div className="product_add-review_wrapper flex flex-col basis-1/3 items-center">
              <form action="#" className="product_add-review_form flex flex-col items-center">
                <div className="product-divider w-10 h-[2px] bg-accent-color"></div>
                <h2 className="product_add-review_title mt-[30px] text-3xl font-medium tracking-[3px] uppercase text-center">
                  add review
                </h2>
                <div className="product_add-review-rate-wrapper lg:mt-14 lg:mb-12 my-10 flex flex-col gap-3 items-center">
                  <p className="product_add-review-rate_title uppercase text-sm text-sub-text-color">
                    your rate
                  </p>
                  <p className="product_add-review-rate_inner-wrapper flex items-center">
                    <Image
                      src={"/icons/empty-Star.svg"}
                      alt={"menu-close-btn"}
                      width={25}
                      height={25}
                      className="cursor-pointer"
                    />
                    <Image
                      src={"/icons/empty-Star.svg"}
                      alt={"menu-close-btn"}
                      width={25}
                      height={25}
                      className="cursor-pointer"
                    />
                    <Image
                      src={"/icons/empty-Star.svg"}
                      alt={"menu-close-btn"}
                      width={25}
                      height={25}
                      className="cursor-pointer"
                    />
                    <Image
                      src={"/icons/empty-Star.svg"}
                      alt={"menu-close-btn"}
                      width={25}
                      height={25}
                      className="cursor-pointer"
                    />
                    <Image
                      src={"/icons/empty-Star.svg"}
                      alt={"menu-close-btn"}
                      width={25}
                      height={25}
                      className="cursor-pointer"
                    />
                  </p>
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  id="product_add-review_name-input"
                  className="product_add-review_name-input outline-none w-full px-[15px] caret-secondary-text-color text-secondary-text-color border border-disable-color h-[46px]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  id="product_add-review_email-input"
                  className="product_add-review_email-input outline-none w-full px-[15px] caret-secondary-text-color text-secondary-text-color border border-disable-color h-[46px] lg:my-12 my-10"
                />
                <textarea
                  name="product_add-review_text"
                  id="product_add-review_text"
                  cols={30}
                  rows={10}
                  className="product_add-review_text outline-none w-full p-[15px] caret-secondary-text-color text-secondary-text-color border border-disable-color resize-none h-[80px]"
                  placeholder="Your review"
                ></textarea>
                <button
                  type="submit"
                  className="product-section_button flex items-center text-white justify-center gap-3 w-full lg:mt-14 mt-8 bg-disable-color py-3 sm:mx-auto"
                >
                  <p className="product-section_button-title uppercase text-lg font-semibold tracking-[2px]">
                    post review
                  </p>
                  <Image
                    src={"icons/Icon name=next arrow - white.svg"}
                    alt={"next arrow"}
                    width={24}
                    height={16}
                    className="fill-white text-white"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
