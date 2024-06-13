import Image from "next/image";
import { useState } from "react";

export default function Blog() {
  return (
    <main className="main-blog lg:pt-10 pt-24 pb-[100px] bg-main-bg-color">
      <div className="container">
        <div className="blog_wrapper flex flex-col">
          <div className="blog_breadcrumbs flex items-center gap-2">
            <p className="blog_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Home
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="blog_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Textile
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="blog_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
              Blog
            </p>
          </div>
          <div className="blog_title-wrapper flex flex-col gap-[14px] mt-[54px]">
            <h1 className="blog_title lg:text-3xl text-2xl font-medium tracking-[3px] uppercase">
              Blog
            </h1>
          </div>
          <div className="blog_main-wrapper flex flex-col lg:flex-row lg::justify-between justify-center lg:mt-14 mt-8 xl:items-start items-center flex-wrap 3xl:gap-10 gap-10">
            <a
              href="#"
              className="blog_item lg:min-w-[415px] min-w-[343px] group/blog_item transition-all duration-300 hover:shadow-main-box-shadow max-w-[520px] flex flex-col 3xl:basis-[30%] basis-1/4"
            >
              <div className="blog_item-img lg:max-w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="blog_item-content flex flex-col items-center justify-center pt-5 pb-7 xl:px-[60px] 2xl:px-[80px] sm:px-[40px] px-4 transition-all duration-300 group-hover/blog_item:bg-white">
                <div className="blog_divider w-[30px] h-[1px] bg-disable-color transition-all duration-300 group-hover/blog_item:opacity-0"></div>
                <h3 className="blog_item-title font-medium tracking-[2px] text-center mt-5 mb-3 text-sub-text-color transition-all duration-300 group-hover/blog_item:text-main-text-color group-hover/blog_item:mt-4">
                  UPDATING YOUR BEDROOM? IT’S EASIER THAN YOU THINK
                </h3>
                <p className="blog_item-date font-medium text-disable-color group-hover/blog_item:text-accent-color transition-all duration-300">
                  May 2, 2022
                </p>
              </div>
            </a>
            <a
              href="#"
              className="blog_item lg:min-w-[415px] min-w-[343px] group/blog_item transition-all duration-300 hover:shadow-main-box-shadow max-w-[520px] flex flex-col 3xl:basis-[30%] basis-1/4"
            >
              <div className="blog_item-img lg:max-w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="blog_item-content flex flex-col items-center justify-center pt-5 pb-7 xl:px-[60px] 2xl:px-[80px] sm:px-[40px] px-4 transition-all duration-300 group-hover/blog_item:bg-white">
                <div className="blog_divider w-[30px] h-[1px] bg-disable-color transition-all duration-300 group-hover/blog_item:opacity-0"></div>
                <h3 className="blog_item-title font-medium tracking-[2px] text-center mt-5 mb-3 text-sub-text-color transition-all duration-300 group-hover/blog_item:text-main-text-color group-hover/blog_item:mt-4">
                  BACK ON THE MENU: HOSTING A POST-LOCKDOWN DINNER PARTY
                </h3>
                <p className="blog_item-date font-medium text-disable-color group-hover/blog_item:text-accent-color transition-all duration-300">
                  May 1, 2022
                </p>
              </div>
            </a>
            <a
              href="#"
              className="blog_item lg:min-w-[415px] min-w-[343px] group/blog_item transition-all duration-300 hover:shadow-main-box-shadow max-w-[520px] flex flex-col 3xl:basis-[30%] basis-1/4"
            >
              <div className="blog_item-img lg:max-w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="blog_item-content flex flex-col items-center justify-center pt-5 pb-7 xl:px-[60px] 2xl:px-[80px] sm:px-[40px] px-4 transition-all duration-300 group-hover/blog_item:bg-white">
                <div className="blog_divider w-[30px] h-[1px] bg-disable-color transition-all duration-300 group-hover/blog_item:opacity-0"></div>
                <h3 className="blog_item-title font-medium tracking-[2px] text-center mt-5 mb-3 text-sub-text-color transition-all duration-300 group-hover/blog_item:text-main-text-color group-hover/blog_item:mt-4">
                  HOW TO REFRESH YOUR KITCHEN IN 5 EASY STEPS
                </h3>
                <p className="blog_item-date font-medium text-disable-color group-hover/blog_item:text-accent-color transition-all duration-300">
                  February 27, 2022
                </p>
              </div>
            </a>
            <a
              href="#"
              className="blog_item lg:min-w-[415px] min-w-[343px] group/blog_item transition-all duration-300 hover:shadow-main-box-shadow max-w-[520px] flex flex-col 3xl:basis-[30%] basis-1/4"
            >
              <div className="blog_item-img lg:max-w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="blog_item-content flex flex-col items-center justify-center pt-5 pb-7 xl:px-[60px] 2xl:px-[80px] sm:px-[40px] px-4 transition-all duration-300 group-hover/blog_item:bg-white">
                <div className="blog_divider w-[30px] h-[1px] bg-disable-color transition-all duration-300 group-hover/blog_item:opacity-0"></div>
                <h3 className="blog_item-title font-medium tracking-[2px] text-center mt-5 mb-3 text-sub-text-color transition-all duration-300 group-hover/blog_item:text-main-text-color group-hover/blog_item:mt-4">
                  UPDATING YOUR BEDROOM? IT’S EASIER THAN YOU THINK
                </h3>
                <p className="blog_item-date font-medium text-disable-color group-hover/blog_item:text-accent-color transition-all duration-300">
                  May 2, 2022
                </p>
              </div>
            </a>
            <a
              href="#"
              className="blog_item lg:min-w-[415px] min-w-[343px] group/blog_item transition-all duration-300 hover:shadow-main-box-shadow max-w-[520px] flex flex-col 3xl:basis-[30%] basis-1/4"
            >
              <div className="blog_item-img lg:max-w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="blog_item-content flex flex-col items-center justify-center pt-5 pb-7 xl:px-[60px] 2xl:px-[80px] sm:px-[40px] px-4 transition-all duration-300 group-hover/blog_item:bg-white">
                <div className="blog_divider w-[30px] h-[1px] bg-disable-color transition-all duration-300 group-hover/blog_item:opacity-0"></div>
                <h3 className="blog_item-title font-medium tracking-[2px] text-center mt-5 mb-3 text-sub-text-color transition-all duration-300 group-hover/blog_item:text-main-text-color group-hover/blog_item:mt-4">
                  BACK ON THE MENU: HOSTING A POST-LOCKDOWN DINNER PARTY
                </h3>
                <p className="blog_item-date font-medium text-disable-color group-hover/blog_item:text-accent-color transition-all duration-300">
                  May 1, 2022
                </p>
              </div>
            </a>
            <a
              href="#"
              className="blog_item lg:min-w-[415px] min-w-[343px] group/blog_item transition-all duration-300 hover:shadow-main-box-shadow max-w-[520px] flex flex-col 3xl:basis-[30%] basis-1/4"
            >
              <div className="blog_item-img lg:max-w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="blog_item-content flex flex-col items-center justify-center pt-5 pb-7 xl:px-[60px] 2xl:px-[80px] sm:px-[40px] px-4 transition-all duration-300 group-hover/blog_item:bg-white">
                <div className="blog_divider w-[30px] h-[1px] bg-disable-color transition-all duration-300 group-hover/blog_item:opacity-0"></div>
                <h3 className="blog_item-title font-medium tracking-[2px] text-center mt-5 mb-3 text-sub-text-color transition-all duration-300 group-hover/blog_item:text-main-text-color group-hover/blog_item:mt-4">
                  HOW TO REFRESH YOUR KITCHEN IN 5 EASY STEPS
                </h3>
                <p className="blog_item-date font-medium text-disable-color group-hover/blog_item:text-accent-color transition-all duration-300">
                  February 27, 2022
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
