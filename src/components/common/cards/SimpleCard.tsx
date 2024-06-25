import Link from "next/link";
import React from "react";
import Picture from "../picture/Picture";
import { EntityType, ProductType } from "@/types";

interface Props {
  data: EntityType<ProductType>;
  inMenu?: true;
}

export default function SimpleCard({ data, inMenu }: Props) {
  return (
    <Link
      href="/product"
      target="_blank"
      className={`product relative flex flex-col   bg-white pb-12  ${
        inMenu
          ? "w-[343px] h-[343px] lg:w-[240px] lg:gap-3 gap-7 shadow-main-box-shadow"
          : "lg:w-[380px] w-[343px] lg:gap-[30px] gap-7"
      } `}
    >
      <div className="product_img max-w-[380px] w-full lg:h-[380px] h-[343px]  border-[10px] border-white ">
        <Picture
          src={data.attributes?.image?.data![0].attributes.url}
          alt="product-img"
          width={370}
          height={370}
        />
      </div>
      {data.attributes?.label &&
        (data.attributes.label === "hot" ? (
          <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-red-hot py-1 px-4 top-5 left-5 uppercase">
            {data.attributes.label}
          </p>
        ) : data.attributes.label === "popular" ? (
          <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5 uppercase">
            {data.attributes.label}
          </p>
        ) : (
          <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-green-new py-1 px-4 top-5 left-5 uppercase">
            {data.attributes.label}
          </p>
        ))}
      <div className="product_img-desc flex flex-col items-center gap-3">
        <div className="product_img-rectangle bg-disable-color w-[30px] h-[1px] mb-[10px]"></div>
        <p className="product_img-title text-main-text-color font-medium tracking-[2px] uppercase">
          {data.attributes?.title}
        </p>
        <div className="product_img-price_wrapper flex gap-2">
          {data.attributes?.sale_price ? (
            <>
              <p className="product_img-price text-red-hot font-medium tracking-[1px]">
                ${data.attributes?.sale_price}
              </p>
              <p className="product_img-price text-disable-color line-through decoration-[0.5px] tracking-[1px]">
                ${data.attributes?.price}
              </p>
            </>
          ) : (
            <p className="product_img-price text-accent-color font-medium tracking-[1px]">
              ${data.attributes?.price}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
