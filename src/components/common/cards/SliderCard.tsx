import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Picture from "../picture/Picture";
import { EntityType, ProductType } from "@/types";

interface Props {
  data: EntityType<ProductType>;
}

export default function SliderCard({ data }: Props) {
  const productId = data.id;
  return (
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
            prevEl: ".catalog_product-swiper_left-btn" + productId,
            nextEl: ".catalog_product-swiper_right-btn" + productId,
          }}
          modules={[Pagination, Navigation]}
          className="catalog_product-swiper h-full"
        >
          {data.attributes.image.data?.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <Picture
                  alt={image.attributes.name}
                  src={image.attributes.url}
                  width={image.attributes.width}
                  height={image.attributes.height}
                  className="max-w-[360px] max-h-[360px]"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Picture
          src={"/icons/prev-btn.svg"}
          alt={"prev-btn"}
          width={40}
          height={40}
          className={`${
            "catalog_product-swiper_left-btn" + productId
          } catalog_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all`}
        />
        <Picture
          src={"/icons/next-btn.svg"}
          alt={"next-btn"}
          width={40}
          height={40}
          className={`${
            "catalog_product-swiper_right-btn" + productId
          } catalog_product-swiper_right-btn cursor-pointer absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all`}
        />
      </div>
      <div className="catalog_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/catalog_product:pt-[15px] duration-200">
        <div className="catalog_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/catalog_product:hidden transition-all duration-200"></div>
        <p className="catalog_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/catalog_product:mt-0 duration-200 ">
          {data.attributes.title}
        </p>

        <div className="catalog_product-price_wrapper flex gap-2 transition-all group-hover/catalog_product:pb-[15px]">
          {data.attributes?.sale_price ? (
            <>
              <p className="catalog_product-price text-red-hot font-medium tracking-[1px]">
                ${data.attributes?.sale_price}
              </p>
              <p className="catalog_product-price text-disable-color line-through decoration-[0.5px] tracking-[1px]">
                ${data.attributes?.price}
              </p>
            </>
          ) : (
            <p className="catalog_product-price text-accent-color font-medium tracking-[1px] transition-all duration-200 ">
              ${data.attributes?.price}
            </p>
          )}
        </div>
        <button className="catalog_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/catalog_product:visible group-hover/catalog_product:opacity-100 transition-all group-hover/catalog_product:mb-[20px] duration-100">
          add to cart
        </button>
      </div>
    </div>
  );
}
