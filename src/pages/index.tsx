import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

export default function Home() {
  return (
    <main className="main mt-[70px] lg:mt-0">
      <section className="banner-section flex gap-1 relative justify-center items-center md:items-stretch">
        <div className="banner_heading-wrapper xl:min-w-[660px] lg:min-w-[450px] max-w-[400px] flex flex-col gap-3 shadow-white-box-shadow-plus">
          <div className="banner_heading bg-main-bg-color xl:px-[140px] lg:px-[70px] px-4 lg:py-[130px] py-[60px] order">
            <div className="banner_divider w-10 h-[2px] bg-accent-color mb-[30px]"></div>
            <h1 className="banner_title font-medium text-3xl w-[290px] sm:w-[400px] md:w-[290px] tracking-[3px]">
              PROFITABLE OFFERS! DON’T MISS IT
            </h1>
            <div className="banner_nav-btn_wrapper flex gap-6 lg:mt-[60px] mt-10">
              <div className="banner_nav-left-btn_wrapper border border-disable-color w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center cursor-pointer">
                <Image
                  src={"/icons/Icon name=prev arrow.svg"}
                  alt={"prev-icon"}
                  width={24}
                  height={16}
                />
              </div>
              <div className="banner_nav-right-btn_wrapper border border-disable-color w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center cursor-pointer">
                <Image
                  src={"/icons/Icon name=next arrow.svg"}
                  alt={"next-icon"}
                  width={24}
                  height={16}
                />
              </div>
            </div>
          </div>
          <div className="banner_inner-img-wrapper bg-disable-text-color shadow-white-box-shadow min-h-[260px] w-full md:hidden">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              cssMode={true}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              modules={[Autoplay, Navigation]}
              navigation={{
                prevEl: ".banner_nav-left-btn_wrapper",
                nextEl: ".banner_nav-right-btn_wrapper",
              }}
              className="banner_img-swiper text-secondary-text-color flex max-w-[400px] max-h-[260px] items-center justify-center "
            >
              <SwiperSlide className="banner_img-wrapper">
                <div className="banner_img-wrapper flex items-center justify-center">
                  <Image
                    alt="img"
                    src={"/images/Banner/Chandelir1.webp"}
                    width={600}
                    height={600}
                    className="w-full bg-center bg-cover object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="banner_img-wrapper">
                <div className="banner_img-wrapper flex items-center justify-center">
                  <Image
                    alt="img"
                    src={"/images/Banner/Consool3.webp"}
                    width={600}
                    height={600}
                    className="w-full bg-center bg-cover object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="banner_img-wrapper">
                <div className="banner_img-wrapper flex items-center justify-center">
                  <Image
                    alt="img"
                    src={"/images/Banner/DinnerTable1.webp"}
                    width={600}
                    height={600}
                    className="w-full bg-center bg-cover object-cover "
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="banner_product-info bg-main-bg-color xl:px-[140px] lg:px-[70px] lg:py-[130px] px-4 pt-[110px] pb-[60px]">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              cssMode={true}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              modules={[Autoplay, Navigation]}
              navigation={{
                prevEl: ".banner_nav-left-btn_wrapper",
                nextEl: ".banner_nav-right-btn_wrapper",
              }}
              className="banner_product-info-swiper text-secondary-text-color flex lg:max-w-[600px] w-full justify-between"
            >
              <SwiperSlide className="banner_product-info_wrapper">
                <div className="banner_product-info_wrapper flex flex-col">
                  <p className="banner_product-tag text-white text-sm bg-red-hot py-1 px-4 w-[65px] tracking-[1px]">
                    HOT
                  </p>
                  <h2 className="banner_product-title font-medium text-2xl max-w-[340px] mt-[30px] mb-4 tracking-[3px] uppercase">
                    PENNY PENDANT LAMP SHADE, MUTED GREY
                  </h2>
                  <div className="banner_product-price_wrapper flex gap-3 text-xl">
                    <p className="banner_product-price text-red-hot font-medium">$300</p>
                    <p className="banner_product-price text-disable-color line-through decoration-[0.5px]">
                      $390
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="banner_product-info_wrapper">
                <div className="banner_product-info_wrapper flex flex-col">
                  <p className="banner_product-tag text-white text-sm bg-red-hot py-1 px-4 w-[65px] tracking-[1px]">
                    HOT
                  </p>
                  <h2 className="banner_product-title font-medium text-2xl max-w-[340px] mt-[30px] mb-4 tracking-[3px]">
                    PENNY PENDANT LAMP SHADE, MUTED GREY
                  </h2>
                  <div className="banner_product-price_wrapper flex gap-3 text-xl">
                    <p className="banner_product-price text-red-hot font-medium">$300</p>
                    <p className="banner_product-price text-disable-color line-through decoration-[0.5px]">
                      $390
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="banner_product-info_wrapper">
                <div className="banner_product-info_wrapper flex flex-col">
                  <p className="banner_product-tag text-white text-sm bg-red-hot py-1 px-4 w-[65px] tracking-[1px]">
                    HOT
                  </p>
                  <h2 className="banner_product-title font-medium text-2xl max-w-[340px] mt-[30px] mb-4 tracking-[3px]">
                    PENNY PENDANT LAMP SHADE, MUTED GREY
                  </h2>
                  <div className="banner_product-price_wrapper flex gap-3 text-xl">
                    <p className="banner_product-price text-red-hot font-medium">$300</p>
                    <p className="banner_product-price text-disable-color line-through decoration-[0.5px]">
                      $390
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="banner_img-wrapper bg-disable-text-color min-h-full w-full md:block hidden overflow-hidden">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            cssMode={true}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".banner_nav-left-btn_wrapper",
              nextEl: ".banner_nav-right-btn_wrapper",
            }}
            className="banner_img-swiper text-secondary-text-color flex max-w-[1035px] max-h-[958px] items-center justify-center "
          >
            <SwiperSlide className="banner_img-wrapper">
              <div className="banner_img-wrapper flex items-center justify-center">
                <Image
                  alt="img"
                  src={"/images/Banner/Chandelir1.webp"}
                  width={600}
                  height={600}
                  className="w-full bg-center bg-cover object-cover "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="banner_img-wrapper">
              <div className="banner_img-wrapper flex items-center justify-center">
                <Image
                  alt="img"
                  src={"/images/Banner/Consool3.webp"}
                  width={600}
                  height={600}
                  className="w-full bg-center bg-cover object-cover "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="banner_img-wrapper">
              <div className="banner_img-wrapper flex items-center justify-center">
                <Image
                  alt="img"
                  src={"/images/Banner/DinnerTable1.webp"}
                  width={600}
                  height={600}
                  className="w-full bg-center bg-cover object-cover "
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="banner_detail-img-wrapper bg-white absolute xl:w-[460px] lg:w-[400px] md:w-[280px] w-[200px] xl:h-[460px] lg:h-[400px] md:h-[280px] h-[200px] rounded-full xl:left-[425px] lg:left-[255px] md:left-[190px] xl:top-[265px] lg:top-[330px] md:top-[225px] top-[535px] sm:top-[500px] z-[5] flex items-center justify-center overflow-hidden">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            cssMode={true}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".banner_nav-left-btn_wrapper",
              nextEl: ".banner_nav-right-btn_wrapper",
            }}
            className="banner_detail-img-swiper text-secondary-text-color flex lg:max-w-[300px] max-w-[150px] w-full justify-between"
          >
            <SwiperSlide className="banner_detail-img-wrapper">
              <div className="banner_detail-img-wrapper flex items-center justify-center">
                <Image
                  alt="img"
                  src={"/images/Banner/Chandelir2.webp"}
                  width={450}
                  height={450}
                  className="w-full bg-center bg-cover object-cover "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="banner_detail-img-wrapper">
              <div className="banner_detail-img-wrapper flex items-center justify-center">
                <Image
                  alt="img"
                  src={"/images/Banner/Consool2.webp"}
                  width={450}
                  height={450}
                  className="w-full bg-center bg-cover object-cover "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="banner_detail-img-wrapper">
              <div className="banner_detail-img-wrapper flex items-center justify-center">
                <Image
                  alt="img"
                  src={"/images/Banner/DinnerTable2.webp"}
                  width={450}
                  height={450}
                  className="w-full bg-center bg-cover object-cover "
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="product-section bg-main-bg-color mt-[10px] md:pt-[110px] pt-[80px] pb-5">
        <div className="container">
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
                  <a className="product_tab-title font-medium lg:text-3xl text-2xl tracking-[3px] text-center hover:text-main-text-color border-b-[3px] border-transparent hover:border-accent-color transition-all">
                    ALL
                  </a>
                </SwiperSlide>
                <SwiperSlide className="product_tab cursor-pointer flex justify-center items-center ">
                  <a className="product_tab-title font-medium lg:text-3xl text-2xl tracking-[3px] text-center hover:text-main-text-color border-b-[3px] border-transparent hover:border-accent-color transition-all active-tab">
                    POPULAR
                  </a>
                </SwiperSlide>
                <SwiperSlide className="product_tab cursor-pointer flex justify-center items-center ">
                  <a className="product_tab-title font-medium lg:text-3xl text-2xl tracking-[3px] text-center hover:text-main-text-color border-b-[3px] border-transparent hover:border-accent-color transition-all">
                    HOT
                  </a>
                </SwiperSlide>
                <SwiperSlide className="product_tab cursor-pointer flex justify-center items-center ">
                  <a className="product_tab-title font-medium lg:text-3xl text-2xl tracking-[3px] text-center hover:text-main-text-color border-b-[3px] border-transparent hover:border-accent-color transition-all">
                    NEW
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="products_wrapper grid 3xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-10 lg:mt-14 mt-10 justify-center justify-items-center">
              <a
                href="#"
                className="product relative flex flex-col lg:gap-[30px] gap-7 lg:w-[380px] w-[343px] bg-white pb-12 "
              >
                <div className="product_img bg-disable-text-color max-w-[380px] w-full lg:h-[380px] h-[343px]  border-[10px] border-white "></div>
                <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
                  POPULAR
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
                  <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
                    TIRADO CHAIR
                  </p>
                  <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                    $280
                  </p>
                </div>
              </a>
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
                  <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
                    CALEIDO LAMP
                  </p>
                  <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                    $355
                  </p>
                </div>
              </a>
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
                  <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
                    EMMI SET
                  </p>
                  <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                    $240
                  </p>
                </div>
              </a>
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
                  <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
                    ILLARIA FLOOR LAMP
                  </p>
                  <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                    $380
                  </p>
                </div>
              </a>
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
                  <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
                    CALEIDO CHAIR
                  </p>
                  <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                    $355
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="product relative flex flex-col lg:gap-[30px] gap-7 lg:w-[380px] w-[343px] bg-white pb-12"
              >
                <div className="product_img bg-disable-text-color max-w-[380px] w-full lg:h-[380px] h-[343px]  border-[10px] border-white "></div>
                <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
                  POPULAR
                </p>
                <div className="product_img-desc flex flex-col items-center gap-3">
                  <div className="product_img-rectangle bg-disable-color w-[30px] h-[1px] mb-[10px]"></div>
                  <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
                    SCOTT ANGLE SOFA
                  </p>
                  <div className="product_img-price_wrapper flex gap-2">
                    <p className="product_img-price text-red-hot font-medium tracking-[1px]">
                      $4 900
                    </p>
                    <p className="product_img-price text-disable-color line-through decoration-[0.5px] tracking-[1px]">
                      $5 400
                    </p>
                  </div>
                </div>
              </a>
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
                  <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
                    HAINESS WIDE SIDEBOARD
                  </p>
                  <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                    $1 750
                  </p>
                </div>
              </a>
            </div>
            <a
              href="#"
              className="product-section_button flex items-center text-white justify-center gap-3 lg:max-w-[300px] max-w-[343px] mt-14 bg-disable-color py-3 m-auto h-[60px]"
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
      </section>

      <section className="popular-categories-section bg-main-bg-color md:pt-[110px] pt-[60px] pb-5 ">
        <div className="container">
          <div className="popular-categories_wrapper">
            <div className="popular-categories_top-wrapper flex items-center justify-between">
              <h2 className="popular-categories_title font-medium lg:text-3xl text-2xl tracking-[3px]">
                POPULAR CATEGORIES
              </h2>
              <div className="popular-categories_nav-btn-wrapper flex items-center justify-center gap-5">
                <div className="popular-categories_left-btn w-[46px] h-[46px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                  <Image
                    src={"/icons/Icon name=chevron_left.svg"}
                    alt={"left-btn"}
                    width={10}
                    height={14}
                  />
                </div>
                <div className="popular-categories_right-btn w-[46px] h-[46px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                  <Image
                    src={"/icons/Icon name=chevron_right.svg"}
                    alt={"right-btn"}
                    width={10}
                    height={14}
                  />
                </div>
              </div>
            </div>
            <div className="popular-categories mt-14">
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
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
                  <a
                    href="#"
                    className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                    <p className="popular-category_title tracking-[2px]">SOFAS</p>
                  </a>
                  <a
                    href="#"
                    className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                    <p className="popular-category_title tracking-[2px]">BEDS</p>
                  </a>
                  <a
                    href="#"
                    className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                    <p className="popular-category_title tracking-[2px]">LIGHTING</p>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
                  <a
                    href="#"
                    className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                    <p className="popular-category_title tracking-[2px]">CHAIRS</p>
                  </a>
                  <a
                    href="#"
                    className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                    <p className="popular-category_title tracking-[2px]">GARDEN</p>
                  </a>
                  <a
                    href="#"
                    className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                    <p className="popular-category_title tracking-[2px]">TEXTILES</p>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
                  <a
                    href="#"
                    className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                    <p className="popular-category_title tracking-[2px]">TABLE</p>
                  </a>
                  <a
                    href="#"
                    className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                    <p className="popular-category_title tracking-[2px]">PET BEDS</p>
                  </a>
                  <a
                    href="#"
                    className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                    <p className="popular-category_title tracking-[2px]">DECOR</p>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
                  <a
                    href="#"
                    className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                    <p className="popular-category_title tracking-[2px] ">STORAGE</p>
                  </a>
                  <a
                    href="#"
                    className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                    <p className="popular-category_title tracking-[2px]">DRINKWARE</p>
                  </a>
                  <a
                    href="#"
                    className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                    <p className="popular-category_title tracking-[2px]">KITCHEN</p>
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="instagram-section bg-main-bg-color md:pt-[100px] pt-[60px] pb-5 flex flex-col justify-center items-center md:px-8 px-4">
        <div className="instagram-section_divider bg-accent-color h-[3px] w-10 mb-[30px]"></div>
        <h2 className="instagram-section_title lg:text-3xl text-2xl font-medium tracking-[3px]">
          INSTAGRAM INSPIRATION
        </h2>
        <div className="instagram_item-wrapper mt-14 flex md:gap-[10px] gap-[8px] items-center justify-center flex-wrap">
          <div className="instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
            <div className="instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white"></div>
            <div className="instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/instagram_item:visible group-hover/instagram_item:opacity-100 transition-all duration-300">
              <a href="#" className="instagram_item-tag text-secondary-text-color hidden md:block">
                @decorinsta
              </a>
              <div className="instagram_item-info flex gap-4 items-center justify-center">
                <div className="instagram_item-heart flex gap-1 items-center justify-center">
                  <Image
                    src={"/icons/Icon name=like - gold.svg"}
                    alt={"golden-heart"}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <p>168</p>
                </div>
                <div className="instagram_item-comment flex gap-1 items-center justify-center">
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
          <div className="instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
            <div className="instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white"></div>
            <div className="instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/instagram_item:visible group-hover/instagram_item:opacity-100 transition-all duration-300">
              <a href="#" className="instagram_item-tag text-secondary-text-color hidden md:block">
                @decorinsta
              </a>
              <div className="instagram_item-info flex gap-4 items-center justify-center">
                <div className="instagram_item-heart flex gap-1 items-center justify-center">
                  <Image
                    src={"/icons/Icon name=like - gold.svg"}
                    alt={"golden-heart"}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <p>168</p>
                </div>
                <div className="instagram_item-comment flex gap-1 items-center justify-center">
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
          <div className="instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
            <div className="instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white"></div>
            <div className="instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/instagram_item:visible group-hover/instagram_item:opacity-100 transition-all duration-300">
              <a href="#" className="instagram_item-tag text-secondary-text-color hidden md:block">
                @decorinsta
              </a>
              <div className="instagram_item-info flex gap-4 items-center justify-center">
                <div className="instagram_item-heart flex gap-1 items-center justify-center">
                  <Image
                    src={"/icons/Icon name=like - gold.svg"}
                    alt={"golden-heart"}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <p>168</p>
                </div>
                <div className="instagram_item-comment flex gap-1 items-center justify-center">
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
          <div className="instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
            <div className="instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white"></div>
            <div className="instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/instagram_item:visible group-hover/instagram_item:opacity-100 transition-all duration-300">
              <a href="#" className="instagram_item-tag text-secondary-text-color hidden md:block">
                @decorinsta
              </a>
              <div className="instagram_item-info flex gap-4 items-center justify-center">
                <div className="instagram_item-heart flex gap-1 items-center justify-center">
                  <Image
                    src={"/icons/Icon name=like - gold.svg"}
                    alt={"golden-heart"}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <p>168</p>
                </div>
                <div className="instagram_item-comment flex gap-1 items-center justify-center">
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
          <div className="instagram_item md:max-w-[364px] max-w-[343px] flex flex-col group/instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
            <div className="instagram_item-img md:w-[364px] md:h-[364px] w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
            <div className="instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/instagram_item:visible group-hover/instagram_item:opacity-100 transition-all duration-300">
              <a href="#" className="instagram_item-tag text-secondary-text-color">
                @decorinsta
              </a>
              <div className="instagram_item-info flex gap-4 items-center justify-center">
                <div className="instagram_item-heart flex gap-1 items-center justify-center">
                  <Image
                    src={"/icons/Icon name=like - gold.svg"}
                    alt={"golden-heart"}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                  <p>168</p>
                </div>
                <div className="instagram_item-comment flex gap-1 items-center justify-center">
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
      </section>

      <section className="blog-section bg-main-bg-color md:pt-[80px] pt-[60px] md:pb-[120px] pb-[56px]">
        <div className="container">
          <div className="blog_top-wrapper flex items-center justify-between gap-2 sm:gap-0">
            <h2 className="blog_title font-medium lg:text-3xl text-2xl tracking-[3px]">
              INTERESTING IN BLOG
            </h2>
            <div className="blog_nav-btn-wrapper flex items-center justify-center gap-5">
              <div className="blog_left-btn w-[46px] h-[46px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                <Image
                  src={"/icons/Icon name=chevron_left.svg"}
                  alt={"left-btn"}
                  width={10}
                  height={14}
                />
              </div>
              <div className="blog_right-btn w-[46px] h-[46px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                <Image
                  src={"/icons/Icon name=chevron_right.svg"}
                  alt={"right-btn"}
                  width={10}
                  height={14}
                />
              </div>
            </div>
          </div>
          <div className="blog_items-wrapper mt-14">
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
                prevEl: ".blog_left-btn",
                nextEl: ".blog_right-btn",
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="blog_items_swiper"
            >
              <SwiperSlide className="blog_item lg:w-[520px] min-w-[343px] group/blog_item transition-all duration-300 hover:shadow-main-box-shadow max-w-[520px] ">
                <a href="#">
                  <div className="blog_item-img lg:w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
                  <div className="blog_item-content flex flex-col items-center justify-center pt-5 pb-7 md:px-[60px] lg:px-[100px] px-3 transition-all duration-300 group-hover/blog_item:bg-white lg:w-[520px]">
                    <div className="blog_divider w-[30px] h-[1px] bg-disable-color transition-all duration-300 group-hover/blog_item:opacity-0"></div>
                    <h3 className="blog_item-title font-medium tracking-[2px] text-center mt-5 mb-3 text-sub-text-color transition-all duration-300 group-hover/blog_item:text-main-text-color group-hover/blog_item:mt-4">
                      UPDATING YOUR BEDROOM? IT’S EASIER THAN YOU THINK
                    </h3>
                    <p className="blog_item-date font-medium text-disable-color group-hover/blog_item:text-accent-color transition-all duration-300">
                      May 2, 2022
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="blog_item lg:w-[520px] min-w-[343px] group/blog_item transition-all duration-300 hover:shadow-main-box-shadow max-w-[520px]">
                <a href="#">
                  <div className="blog_item-img lg:w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
                  <div className="blog_item-content flex flex-col items-center justify-center pt-5 pb-7 md:px-[60px] lg:px-[100px] px-3 transition-all duration-300 group-hover/blog_item:bg-white lg:w-[520px]">
                    <div className="blog_divider w-[30px] h-[1px] bg-disable-color transition-all duration-300 group-hover/blog_item:opacity-0"></div>
                    <h3 className="blog_item-title font-medium tracking-[2px] text-center mt-5 mb-3 text-sub-text-color transition-all duration-300 group-hover/blog_item:text-main-text-color group-hover/blog_item:mt-4">
                      BACK ON THE MENU: HOSTING A POST-LOCKDOWN DINNER PARTY
                    </h3>
                    <p className="blog_item-date font-medium text-disable-color group-hover/blog_item:text-accent-color transition-all duration-300">
                      May 1, 2022
                    </p>
                  </div>
                </a>
              </SwiperSlide>
              <SwiperSlide className="blog_item lg:w-[520px] min-w-[343px] group/blog_item transition-all duration-300 hover:shadow-main-box-shadow max-w-[520px]">
                <a href="#">
                  <div className="blog_item-img lg:w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
                  <div className="blog_item-content flex flex-col items-center justify-center pt-5 pb-7 md:px-[60px] lg:px-[100px] px-3 transition-all duration-300 group-hover/blog_item:bg-white lg:w-[520px]">
                    <div className="blog_divider w-[30px] h-[1px] bg-disable-color transition-all duration-300 group-hover/blog_item:opacity-0"></div>
                    <h3 className="blog_item-title font-medium tracking-[2px] text-center mt-5 mb-3 text-sub-text-color transition-all duration-300 group-hover/blog_item:text-main-text-color group-hover/blog_item:mt-4">
                      HOW TO REFRESH YOUR KITCHEN IN 5 EASY STEPS
                    </h3>
                    <p className="blog_item-date font-medium text-disable-color group-hover/blog_item:text-accent-color transition-all duration-300">
                      February 27, 2022
                    </p>
                  </div>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
          <a
            href="#"
            className="blog-section_button flex items-center text-white justify-center gap-3 lg:max-w-[300px] max-w-[343px] sm:mt-14 mt-10 bg-disable-color py-3 m-auto h-[60px]"
          >
            <p className="blog-section_button-title tracking-[2px]">READ MORE ARTICLES</p>
            <Image
              src={"icons/Icon name=next arrow - white.svg"}
              alt={"next arrow"}
              width={24}
              height={16}
              className="fill-white text-white"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
