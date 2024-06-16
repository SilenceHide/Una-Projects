import Link from "next/link";
import React from "react";
import Picture from "../picture/Picture";

interface Props {
  data: {
    id: number;
    title: string;
    image: string;
    label: string;
    price: number;
    sale_price?: number;
  };
}

export default function SimpleCard({ data }: Props) {
  return (
    <Link
      href="/product"
      target="_blank"
      className="product relative flex flex-col lg:gap-[30px] gap-7 lg:w-[380px] w-[343px] bg-white pb-12 "
    >
      <div className="product_img max-w-[380px] w-full lg:h-[380px] h-[343px]  border-[10px] border-white ">
        <Picture src={data.image} alt="product-img" width={370} height={370} />
      </div>
      {data.label &&
        (data.label === "hot" ? (
          <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-red-hot py-1 px-4 top-5 left-5 uppercase">
            {data.label}
          </p>
        ) : data.label === "popular" ? (
          <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5 uppercase">
            {data.label}
          </p>
        ) : (
          <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-green-new py-1 px-4 top-5 left-5 uppercase">
            {data.label}
          </p>
        ))}
      <div className="product_img-desc flex flex-col items-center gap-3">
        <div className="product_img-rectangle bg-disable-color w-[30px] h-[1px] mb-[10px]"></div>
        <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
          {data.title}
        </p>
        <div className="product_img-price_wrapper flex gap-2">
          {data.sale_price ? (
            <>
              <p className="product_img-price text-red-hot font-medium tracking-[1px]">
                ${data.sale_price}
              </p>
              <p className="product_img-price text-disable-color line-through decoration-[0.5px] tracking-[1px]">
                ${data.price}
              </p>
            </>
          ) : (
            <p className="product_img-price text-accent-color font-medium tracking-[1px]">
              ${data.price}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
