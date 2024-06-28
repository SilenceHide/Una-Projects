import Link from "next/link";
import React from "react";
import SimpleCard from "../common/cards/SimpleCard";
import { useQuery } from "@tanstack/react-query";
import { getSubmenuApiCall } from "@/api/Menu";
import { ApiResponseType, EntityType, MenuItemType, ProductType } from "@/types";
import { getProductsApiCall } from "@/api/Product";

interface Props {
  subMenuData: Array<EntityType<MenuItemType>>;
}

export default function SubMenu({ subMenuData }: Props) {
  const { data: submenuData } = useQuery<ApiResponseType<MenuItemType>>({
    queryKey: [getSubmenuApiCall.name],
    queryFn: () => getSubmenuApiCall(),
  });

  const { data: productsData } = useQuery<ApiResponseType<ProductType>>({
    queryKey: [getProductsApiCall.name],
    queryFn: () => getProductsApiCall({ filters: { label: { $eq: "new" } } }),
  });

  return (
    <div className="mega-menu md:absolute bg-white lg:border-t border-disable-text-color top-[100px] bottom-0 left-0 right-0 transition-all lg:py-[60px] lg:px-[140px] xl:px-[70px] 3xl:px-[140px] md:shadow-main-box-shadow xl:justify-between flex invisible opacity-0 group-hover/menu-item:visible group-hover/menu-item:opacity-100 lg:h-fit md:h-[60vh] h-0 lg:group-hover/menu-item:h-fit group-hover/menu-item:h-[70vh] flex-wrap xl:gap-0 xs:px-5 gap-10 my-0 md:group-hover/menu-item:my-0 group-hover/menu-item:my-10 md:my-0 z-50 cursor-default lg:overflow-visible overflow-y-scroll md:pb-7">
      <ul className="mega-menu_left flex 2xl:gap-[40px] xl:gap-7 lg:gap-10 md:gap-5 sm:gap-0 gap-10 group-hover/menu-item:transition-all flex-wrap justify-center md:justify-between flex-grow xl:flex-grow-0">
        {subMenuData.map((subMenuItem, index) => {
          const links: Array<string> = [];
          submenuData?.data.map((item) => {
            if (item.attributes.heading === subMenuItem.attributes.heading) {
              item.attributes.link.map((link) => {
                links.push(link.title);
              });
            }
          });
          return (
            <li
              className="mega-item flex flex-col gap-4 lg:pt-0 md:basis-[20%] sm:basis-[25%] basis-[40%] shrink lg:shrink-0 lg:basis-auto"
              key={index}
            >
              <h4 className="mega-title text-main-text-color font-medium xl:tracking-[0px] 2xl:tracking-[2px]">
                {subMenuItem.attributes.heading}
              </h4>

              <div className="mega-subtitle-wrapper flex flex-col gap-3 tracking-[0px]">
                {}
                {links.map((link, index) => {
                  return (
                    <Link href={link} className="mega-subtitle" key={index}>
                      {link}
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
        {productsData?.data.map((productData, index) => {
          return <SimpleCard data={productData} key={index} inMenu={true} />;
        })}
      </div>
    </div>
  );
}
