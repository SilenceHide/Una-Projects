import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Icon from "./Icon";
import { useQuery } from "@tanstack/react-query";
import { ApiResponseType, OfferType } from "@/types";
import { getOffersApiCall } from "@/api/Offers";
import Picture from "../picture/Picture";

export default function BannerOffers() {
  const { data: offersData } = useQuery<ApiResponseType<OfferType>>({
    queryKey: [getOffersApiCall.name],
    queryFn: () => getOffersApiCall(),
  });

  return (
    <>
      <div className="banner_heading-wrapper xl:min-w-[660px] lg:min-w-[450px] max-w-[400px] flex flex-col gap-3 shadow-white-box-shadow-plus relative">
        <div className="banner_heading bg-main-bg-color xl:px-[140px] lg:px-[70px] px-4 lg:py-[130px] py-[60px] order">
          <div className="banner_divider w-10 h-[2px] bg-accent-color mb-[30px]"></div>
          <h1 className="banner_title font-medium text-3xl w-[290px] sm:w-[400px] md:w-[290px] tracking-[3px]">
            PROFITABLE OFFERS! DON’T MISS IT
          </h1>
          <div className="banner_nav-btn_wrapper flex gap-6 lg:mt-[60px] mt-10">
            <div className="banner_nav-left-btn_wrapper border border-disable-color w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center cursor-pointer">
              <Icon iconName="i-prevarrow-icon" size="text-[24px]" />
            </div>
            <div className="banner_nav-right-btn_wrapper border border-disable-color w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center cursor-pointer">
              <Icon iconName="i-nextarrow-icon" size="text-[24px]" />
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
            {offersData &&
              offersData.data.map((item, index) => {
                return (
                  <SwiperSlide className="banner_img-wrapper" key={index}>
                    <div className="banner_img-wrapper flex items-center justify-center">
                      <Picture
                        alt="img"
                        src={item.attributes.image.data?.attributes.url ?? ""}
                        width={600}
                        height={600}
                        className="w-full bg-center bg-cover object-cover "
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
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
            {offersData &&
              offersData.data.map((item, index) => {
                return (
                  <SwiperSlide className="banner_product-info_wrapper" key={index}>
                    <div className="banner_product-info_wrapper flex flex-col">
                      <p className="banner_product-tag text-white text-sm bg-red-hot py-1 px-4 w-[65px] tracking-[1px]">
                        {item.attributes.label}
                      </p>
                      <h2 className="banner_product-title font-medium text-2xl max-w-[340px] mt-[30px] mb-4 tracking-[3px] uppercase">
                        {item.attributes.title}
                      </h2>
                      <div className="banner_product-price_wrapper flex gap-3 text-xl">
                        <p className="banner_product-price text-red-hot font-medium">
                          ${item.attributes.sale_price}
                        </p>
                        <p className="banner_product-price text-disable-color line-through decoration-[0.5px]">
                          ${item.attributes.price}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>

        <div className="banner_detail-img-wrapper bg-white absolute xl:w-[460px] lg:w-[400px] md:w-[280px] w-[200px] xl:h-[460px] lg:h-[400px] md:h-[280px] h-[200px] rounded-full xl:left-[425px] lg:left-[255px] md:left-[190px] left-[50%] xl:top-[265px] lg:top-[330px] md:top-[225px] top-[580px] sm:top-[550px] z-[5] flex items-center justify-center overflow-hidden ">
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
            {offersData &&
              offersData.data.map((item, index) => {
                return (
                  <SwiperSlide className="banner_detail-img-wrapper" key={index}>
                    <div className="banner_detail-img-wrapper flex items-center justify-center">
                      <Picture
                        alt="img"
                        src={item.attributes.center_image.data?.attributes.url ?? ""}
                        width={450}
                        height={450}
                        className="w-full bg-center bg-cover object-cover "
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
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
          {offersData &&
            offersData.data.map((item, index) => {
              return (
                <SwiperSlide className="banner_img-wrapper" key={index}>
                  <div className="banner_img-wrapper flex items-center justify-center">
                    <Picture
                      alt="img"
                      src={item.attributes.image.data?.attributes.url ?? ""}
                      width={600}
                      height={600}
                      className="w-full bg-center bg-cover object-cover "
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}
