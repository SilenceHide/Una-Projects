import { productBaseMock } from "@/mock/productBase";
import { subMenuMock } from "@/mock/subMenu";
import Link from "next/link";
import React from "react";
import SimpleCard from "../common/cards/SimpleCard";

export default function SubMenu() {
  return (
    <div className="mega-menu md:absolute bg-white lg:border-t border-disable-text-color top-[100px] bottom-0 left-0 right-0 transition-all lg:py-[60px] lg:px-[140px] xl:px-[70px] 3xl:px-[140px] md:shadow-main-box-shadow xl:justify-between flex invisible opacity-0 group-hover/menu-item:visible group-hover/menu-item:opacity-100 lg:h-fit md:h-[60vh] h-0 lg:group-hover/menu-item:h-fit group-hover/menu-item:h-[70vh] flex-wrap xl:gap-0 xs:px-5 gap-10 my-0 md:group-hover/menu-item:my-0 group-hover/menu-item:my-10 md:my-0 z-50 cursor-default lg:overflow-visible overflow-y-scroll md:pb-7">
      <ul className="mega-menu_left flex 2xl:gap-[40px] xl:gap-7 lg:gap-10 md:gap-5 sm:gap-0 gap-10 group-hover/menu-item:transition-all flex-wrap justify-center md:justify-between flex-grow xl:flex-grow-0">
        {subMenuMock.map((subMenuItem, index) => {
          return (
            <li
              className="mega-item flex flex-col gap-4 lg:pt-0 md:basis-[20%] sm:basis-[25%] basis-[40%] shrink lg:shrink-0 lg:basis-auto"
              key={index}
            >
              <h4 className="mega-title text-main-text-color font-medium xl:tracking-[0px] 2xl:tracking-[2px]">
                {subMenuItem.title}
              </h4>

              <div className="mega-subtitle-wrapper flex flex-col gap-3 tracking-[0px]">
                {subMenuItem.subCategories.map((subCategoryItem, index) => {
                  return (
                    <Link href={subCategoryItem.link} className="mega-subtitle" key={index}>
                      {subCategoryItem.title}
                    </Link>
                  );
                })}
              </div>
              <div className="mega-link-wrapper tracking-[0px]">
                <a href="#" className="mega-link border-b-2 active-tab">
                  Go to all
                </a>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mega-menu_right flex 2xl:gap-10 xl:gap-0 lg:gap-10 gap-14 flex-wrap justify-center lg:justify-between xl:justify-center flex-grow xl:flex-grow-0">
        {productBaseMock.map((productData, index) => {
          if (productData.label !== "" && index < 3) {
            return <SimpleCard data={productData} key={index} inMenu={true} />;
          }
        })}
        {/* <Link href="/product" className="mega-menu_left-img relative flex flex-col lg:gap-3 gap-7">
          <div className="mega-menu_img bg-disable-text-color w-[343px] h-[343px] lg:w-[240px] lg:h-[240px] border-[10px] border-white "></div>
          <p className="mega-menu_img-tag absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
            POPULAR
          </p>
          <div className="mega-menu_img-desc flex flex-col items-center gap-3">
            <div className="mega-menu_img-rectangle bg-disable-color w-[30px] h-[1px] mb-1"></div>
            <p className="mega-menu_img-title text-main-text-color font-medium">CALEIDO LAMP</p>
            <p className="mega-menu_img-price text-accent-color font-medium">$355</p>
          </div>
        </Link>
        <Link href="/product" className="mega-menu_right-img relative flex flex-col lg:gap-3 gap-7">
          <div className="mega-menu_img bg-disable-text-color w-[343px] h-[343px] lg:w-[240px] lg:h-[240px] border-[10px] border-white "></div>
          <p className="mega-menu_img-tag absolute text-white text-sm bg-red-hot py-1 px-4 top-5 left-5">
            HOT
          </p>
          <div className="mega-menu_img-desc flex flex-col items-center gap-3">
            <div className="mega-menu_img-rectangle bg-disable-color w-[30px] h-[1px] mb-1"></div>
            <p className="mega-menu_img-title text-main-text-color font-medium">
              EBRO BESIDE TABLE
            </p>
            <div className="mega-menu_img-price_wrapper flex gap-2">
              <p className="mega-menu_img-price text-red-hot font-medium">$250</p>
              <p className="mega-menu_img-price text-disable-color line-through decoration-[0.5px]">
                $310
              </p>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
}
