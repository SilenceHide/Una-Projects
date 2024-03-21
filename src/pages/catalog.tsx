import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import nextArrowSvg from "../../public/icons/Icon name=next arrow - white.svg";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function Catalog() {
  const [navOpen, isNavOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      isNavOpen(true);
    }
  }, [navOpen]);

  return (
    <>
      <header className="header shadow-main-box-shadow lg:h-[100px] h-[70px] flex items-center justify-center lg:static fixed lg:z-0 z-40 w-full bg-white top-0">
        <div className="container ">
          <div className="header-wrapper flex items-center justify-between ">
            <div className="left-header flex items-center lg:gap-8 gap-4">
              <div
                className="menu_button p-[10px] rounded-full border-disable-text-color border-[1.5px] cursor-pointer lg:hidden transition-all duration-300"
                onClick={() => isNavOpen(!navOpen)}
              >
                {navOpen ? (
                  <Image
                    src={"/icons/Icon name=close.svg"}
                    alt={"menu-close-btn"}
                    width={22}
                    height={22}
                  />
                ) : (
                  <Image
                    src={"/icons/Icon name=burger menu.svg"}
                    alt={"menu-burger-btn"}
                    width={22}
                    height={22}
                  />
                )}
              </div>
              <Image
                src={"/logo/logo-small.svg"}
                alt={"logo-default"}
                width={72}
                height={60}
                priority
                className="header_logo"
              />
              <nav
                className={`menu text-secondary-text-color fixed lg:static right-0 top-[70px] bottom-0 lg:p-0 lg:overflow-hidden overflow-scroll transition-all duration-300 px-4 py-10 lg:h-[100px] ${
                  navOpen
                    ? "left-0 bg-white border-t border-disable-text-color z-50 visible opacity-100"
                    : "-left-full z-0 invisible opacity-0"
                }`}
              >
                <ul
                  className={`menu-list flex lg:gap-5 gap-8 flex-col md:items-center md:flex-row md:h-full tracking-[2px] md:tracking-[0px] xl:tracking-[2px] ${
                    navOpen ? "justify-between" : "justify-start"
                  }`}
                >
                  <li className="menu-item group/menu-item flex lg:items-center cursor-pointer hover:border-b-accent-color flex-col lg:flex-row h-full">
                    <div className="menu-item_wrapper flex items-center gap-1">
                      <p className="menu-item_title border-b-2 border-transparent group-hover/menu-item:border-b-accent-color group-hover/menu-item:text-main-text-color transition-all duration-300">
                        NEW IN
                      </p>
                      <Image
                        src={"/icons/Icon name=chevron_down.svg"}
                        alt={"arrow-down"}
                        width={12}
                        height={12}
                        className="menu-item_icon group-hover/menu-item:rotate-180 transition-all duration-300"
                        priority
                      />
                    </div>
                  </li>
                  <li className="menu-item group/menu-item flex lg:items-center cursor-pointer hover:border-b-accent-color flex-col lg:flex-row h-full">
                    <div className="menu-item_wrapper flex items-center gap-1">
                      <p className="menu-item_title border-b-2 border-transparent group-hover/menu-item:border-b-accent-color group-hover/menu-item:text-main-text-color transition-all duration-300">
                        SOFAS
                      </p>
                      <Image
                        src={"/icons/Icon name=chevron_down.svg"}
                        alt={"arrow-down"}
                        width={12}
                        height={12}
                        className="menu-item_icon group-hover/menu-item:rotate-180 transition-all duration-300"
                        priority
                      />
                    </div>
                  </li>
                  <li className="menu-item group/menu-item flex lg:items-center cursor-pointer hover:border-b-accent-color flex-col lg:flex-row h-full">
                    <div className="menu-item_wrapper flex items-center gap-1">
                      <p className="menu-item_title border-b-2 border-transparent group-hover/menu-item:border-b-accent-color group-hover/menu-item:text-main-text-color transition-all duration-300">
                        TABLES
                      </p>
                      <Image
                        src={"/icons/Icon name=chevron_down.svg"}
                        alt={"arrow-down"}
                        width={12}
                        height={12}
                        className="menu-item_icon group-hover/menu-item:rotate-180 transition-all duration-300"
                        priority
                      />
                    </div>
                  </li>
                  <li className="menu-item group/menu-item flex lg:items-center cursor-pointer hover:border-b-accent-color flex-col lg:flex-row h-full">
                    <div className="menu-item_wrapper flex items-center gap-1">
                      <p className="menu-item_title border-b-2 border-transparent group-hover/menu-item:border-b-accent-color group-hover/menu-item:text-main-text-color transition-all duration-300">
                        BEDS
                      </p>
                      <Image
                        src={"/icons/Icon name=chevron_down.svg"}
                        alt={"arrow-down"}
                        width={12}
                        height={12}
                        className="menu-item_icon group-hover/menu-item:rotate-180 transition-all duration-300"
                        priority
                      />
                    </div>
                  </li>
                  <li className="menu-item group/menu-item flex lg:items-center cursor-pointer hover:border-b-accent-color flex-col lg:flex-row h-full">
                    <div className="menu-item_wrapper flex items-center gap-1">
                      <p className="menu-item_title border-b-2 border-transparent group-hover/menu-item:border-b-accent-color group-hover/menu-item:text-main-text-color transition-all duration-300">
                        LIGHTING
                      </p>
                      <Image
                        src={"/icons/Icon name=chevron_down.svg"}
                        alt={"arrow-down"}
                        width={12}
                        height={12}
                        className="menu-item_icon group-hover/menu-item:rotate-180 transition-all duration-300"
                        priority
                      />
                    </div>
                  </li>
                  <li className="menu-item group/menu-item flex lg:items-center cursor-pointer hover:border-b-accent-color flex-col lg:flex-row h-full ">
                    <div className="menu-item_wrapper flex items-center gap-1">
                      <p className="menu-item_title border-b-2 border-transparent group-hover/menu-item:border-b-accent-color group-hover/menu-item:text-main-text-color transition-all duration-300 relative">
                        KITCHEN
                      </p>
                      <Image
                        src={"/icons/Icon name=chevron_down.svg"}
                        alt={"arrow-down"}
                        width={12}
                        height={12}
                        className="menu-item_icon group-hover/menu-item:rotate-180 transition-all duration-300"
                        priority
                      />
                    </div>
                    <div className="mega-menu md:absolute bg-white lg:border-t border-disable-text-color top-[100px] bottom-0 left-0 right-0 transition-all lg:py-[60px] lg:px-[140px] xl:px-[70px] 3xl:px-[140px] lg:shadow-main-box-shadow h-fit xl:justify-between flex invisible opacity-0 group-hover/menu-item:visible group-hover/menu-item:opacity-100 flex-wrap xl:gap-0 xs:px-5 gap-10 my-10 md:my-0 z-50 cursor-default">
                      <ul className="mega-menu_left flex 2xl:gap-[40px] xl:gap-7 lg:gap-10 md:gap-5 sm:gap-0 gap-10 group-hover/menu-item:transition-all flex-wrap justify-center md:justify-between flex-grow xl:flex-grow-0">
                        <li className="mega-item flex flex-col gap-4 lg:pt-0 md:basis-[20%] sm:basis-[25%] basis-[40%] shrink lg:shrink-0 lg:basis-auto">
                          <h4 className="mega-title text-main-text-color font-medium xl:tracking-[0px] 2xl:tracking-[2px]">
                            TABLEWARE
                          </h4>
                          <div className="mega-subtitle-wrapper flex flex-col gap-3 tracking-[0px]">
                            <a href="#" className="mega-subtitle">
                              Dinnerware
                            </a>
                            <a href="#" className="mega-subtitle">
                              Serveware
                            </a>
                            <a href="#" className="mega-subtitle">
                              Cutlery
                            </a>
                            <a href="#" className="mega-subtitle">
                              Glassware
                            </a>
                            <a href="#" className="mega-subtitle">
                              Table Linen
                            </a>
                          </div>
                          <div className="mega-link-wrapper tracking-[0px]">
                            <a href="#" className="mega-link border-b-2 active-tab">
                              Go to all
                            </a>
                          </div>
                        </li>
                        <li className="mega-item flex flex-col gap-4 lg:pt-0 md:basis-[20%] sm:basis-[25%] basis-[40%] shrink lg:shrink-0 lg:basis-auto">
                          <h4 className="mega-title text-main-text-color font-medium xl:tracking-[0px] 2xl:tracking-[2px]">
                            DRINKWARE
                          </h4>
                          <div className="mega-subtitle-wrapper flex flex-col gap-3 tracking-[0px]">
                            <a href="#" className="mega-subtitle">
                              Glassware
                            </a>
                            <a href="#" className="mega-subtitle">
                              Barware
                            </a>
                            <a href="#" className="mega-subtitle">
                              Mugs
                            </a>
                            <a href="#" className="mega-subtitle">
                              Wine Racks
                            </a>
                            <a href="#" className="mega-subtitle">
                              Water Bottles
                            </a>
                            <a href="#" className="mega-subtitle">
                              Travel Cups
                            </a>
                            <a href="#" className="mega-subtitle">
                              Teapots
                            </a>
                            <a href="#" className="mega-subtitle">
                              Jugs & Carafes
                            </a>
                          </div>
                          <div className="mega-link-wrapper tracking-[0px]">
                            <a href="#" className="mega-link  border-b-2 active-tab">
                              Go to all
                            </a>
                          </div>
                        </li>
                        <li className="mega-item flex flex-col gap-4 lg:pt-0 md:basis-[20%] sm:basis-[25%] basis-[40%] shrink lg:shrink-0 lg:basis-auto">
                          <h4 className="mega-title text-main-text-color font-medium xl:tracking-[0px] 2xl:tracking-[2px]">
                            COOK&BAKE WARE
                          </h4>
                          <div className="mega-subtitle-wrapper flex flex-col gap-3 tracking-[0px]">
                            <a href="#" className="mega-subtitle">
                              Pots & Pans
                            </a>
                            <a href="#" className="mega-subtitle">
                              Frying Pans
                            </a>
                            <a href="#" className="mega-subtitle">
                              Baking Dishes
                            </a>
                            <a href="#" className="mega-subtitle">
                              Silicone forms
                            </a>
                          </div>
                          <div className="mega-link-wrapper tracking-[0px]">
                            <a href="#" className="mega-link  border-b-2 active-tab">
                              Go to all
                            </a>
                          </div>
                        </li>
                        <li className="mega-item flex flex-col gap-4 lg:pt-0 md:basis-[20%] sm:basis-[25%] basis-[40%] shrink lg:shrink-0 lg:basis-auto">
                          <h4 className="mega-title text-main-text-color font-medium xl:tracking-[0px] 2xl:tracking-[2px]">
                            KITCHEN ACCESSORIES
                          </h4>
                          <div className="mega-subtitle-wrapper flex flex-col gap-3 tracking-[0px]">
                            <a href="#" className="mega-subtitle">
                              Utensils
                            </a>
                            <a href="#" className="mega-subtitle">
                              Food Storage
                            </a>
                            <a href="#" className="mega-subtitle">
                              Racks & Shelves
                            </a>
                            <a href="#" className="mega-subtitle">
                              Wine Racks
                            </a>
                            <a href="#" className="mega-subtitle">
                              Bins
                            </a>
                          </div>
                          <div className="mega-link-wrapper tracking-[0px]">
                            <a href="#" className="mega-link  border-b-2 active-tab">
                              Go to all
                            </a>
                          </div>
                        </li>
                      </ul>
                      <div className="mega-menu_right flex 2xl:gap-10 xl:gap-0 lg:gap-10 gap-14 flex-wrap justify-center lg:justify-between xl:justify-center flex-grow xl:flex-grow-0">
                        <a
                          href="#"
                          className="mega-menu_left-img relative flex flex-col lg:gap-3 gap-7"
                        >
                          <div className="mega-menu_img bg-disable-text-color w-[343px] h-[343px] lg:w-[240px] lg:h-[240px] border-[10px] border-white "></div>
                          <p className="mega-menu_img-tag absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
                            POPULAR
                          </p>
                          <div className="mega-menu_img-desc flex flex-col items-center gap-3">
                            <div className="mega-menu_img-rectangle bg-disable-color w-[30px] h-[1px] mb-1"></div>
                            <p className="mega-menu_img-title text-main-text-color font-medium">
                              CALEIDO LAMP
                            </p>
                            <p className="mega-menu_img-price text-accent-color font-medium">
                              $355
                            </p>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="mega-menu_right-img relative flex flex-col lg:gap-3 gap-7"
                        >
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
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item group/menu-item flex lg:items-center cursor-pointer hover:border-b-accent-color flex-col lg:flex-row h-full">
                    <div className="menu-item_wrapper flex items-center gap-1">
                      <p className="menu-item_title border-b-2 border-transparent group-hover/menu-item:border-b-accent-color group-hover/menu-item:text-main-text-color transition-all duration-300">
                        STORAGE
                      </p>
                      <Image
                        src={"/icons/Icon name=chevron_down.svg"}
                        alt={"arrow-down"}
                        width={12}
                        height={12}
                        className="menu-item_icon group-hover/menu-item:rotate-180 transition-all duration-300"
                        priority
                      />
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="right-header flex items-center gap-5">
              <a
                href="tel:(704)-555-0127"
                className="header_contact-number border-b-2 border-accent-color hidden xl:block"
              >
                (704) 555-0127
              </a>
              <div className="header_icon-wrapper flex items-center gap-3 lg:h-[100px] h-[70px]">
                <div className="header_search-wrapper p-[10px] rounded-full border-disable-text-color border-[1.5px] cursor-pointer ">
                  <Image
                    src={"/icons/Icon name=search.svg"}
                    alt={"search-icon"}
                    width={22}
                    height={22}
                  />
                </div>
                <div className="header_profile-wrapper p-[10px] rounded-full border-disable-text-color border-[1.5px] cursor-pointer">
                  <Image
                    src={"/icons/Icon name=user.svg"}
                    alt={"user-icon"}
                    width={22}
                    height={22}
                  />
                </div>
                <div className="header_basket-wrapper group/header_basket-icon p-[10px] rounded-full border-disable-text-color border-[1.5px] cursor-pointer basket-active relative">
                  <Image
                    src={"/icons/Icon name=cart.svg"}
                    alt={"cart-icon"}
                    width={22}
                    height={22}
                  />
                  <p className="absolute top-[-6px] right-[-7px] text-white bg-accent-color rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    10
                  </p>
                  <div className="w-[560px] h-[808px] absolute top-[40px] left-[-520px] bg-transparent invisible opacity-0 group-hover/header_basket-icon:visible group-hover/header_basket-icon:opacity-100 transition-all">
                    <div className="w-[560px] h-[808px] mt-[31px] bg-white border-t-[3px] border-accent-color "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main "></main>

      <footer className="footer pt-[75px] pb-5">
        <div className="container">
          <div className="footer_wrapper flex flex-col">
            <div className="footer_links-and-logo flex flex-col items-center border-b border-disable-color w-full pb-[78px] gap-8">
              <Image
                src={"/logo/logo-default.svg"}
                alt={"logo-default"}
                width={82}
                height={80}
                priority
                className="footer_logo"
              />
              <div className="footer_links flex md:flex-row flex-col items-center gap-[30px] text-secondary-text-color tracking-[2px]">
                <a
                  href="#"
                  className="footer_link border-b-2 border-transparent hover:border-b-accent-color hover:text-main-text-color transition-all"
                >
                  ABOUT
                </a>
                <a
                  href="#"
                  className="footer_link border-b-2 border-transparent hover:border-b-accent-color hover:text-main-text-color transition-all"
                >
                  BLOG
                </a>
                <a
                  href="#"
                  className="footer_link border-b-2 border-transparent hover:border-b-accent-color hover:text-main-text-color transition-all"
                >
                  DISCOUNTS
                </a>
                <a
                  href="#"
                  className="footer_link border-b-2 border-transparent hover:border-b-accent-color hover:text-main-text-color transition-all"
                >
                  FOR PARTNERS
                </a>
                <a
                  href="#"
                  className="footer_link border-b-2 border-transparent hover:border-b-accent-color hover:text-main-text-color transition-all"
                >
                  CONTACTS
                </a>
              </div>
            </div>
            <div className="footer_info py-10 border-b border-disable-color w-full flex lg:flex-row flex-col justify-between lg:gap-0 gap-10 sm:items-center lg:items-start">
              <div className="footer_info-left flex xl:gap-[110px] lg:gap-[40px] md:gap-[80px] gap-10 sm:flex-row flex-col">
                <div className="footer_information flex flex-col gap-4">
                  <p className="footer_info-title font-medium tracking-[2px]">INFORMATION</p>
                  <div className="footer_info-link_wrapper text-secondary-text-color flex sm:flex-col sm:gap-[10px] gap-14">
                    <div className="footer_info-link_inner-wrapper flex flex-col gap-2">
                      <a href="#" className="footer_info-link">
                        shipping
                      </a>
                      <a href="#" className="footer_info-link">
                        Payment options
                      </a>
                    </div>
                    <div className="footer_info-link_inner-wrapper flex flex-col gap-2">
                      <a href="#" className="footer_info-link">
                        Terms and Conditions
                      </a>
                      <a href="#" className="footer_info-link">
                        FAQ
                      </a>
                    </div>
                  </div>
                </div>
                <div className="footer_schedule-and-shipping flex sm:flex-col gap-[30px] sm:max-w-[175px] ">
                  <div className="footer_schedule-wrapper flex flex-col gap-4">
                    <p className="footer_schedule-title font-medium tracking-[2px]">SCHEDULE</p>
                    <p className="footer_schedule-desc text-sub-text-color md:max-w-max max-w-[155px]">
                      We accept orders from 9:00 to 22:00
                    </p>
                  </div>
                  <div className="footer_shipping-wrapper flex flex-col gap-4">
                    <p className="footer_shipping-title font-medium tracking-[2px]">
                      SHIPPING ORDERS
                    </p>
                    <div className="footer_shipping-desc_wrapper">
                      <p className="footer_shipping-desc text-sub-text-color">
                        Mon-Sat – 9:00-19:00
                      </p>
                      <p className="footer_shipping-desc text-sub-text-color">Sun – weekend</p>
                    </div>
                  </div>
                </div>
                <div className="footer_stay-in-touch flex flex-col gap-4">
                  <p className="footer_schedule-title font-medium tracking-[2px]">STAY IN TOUCH</p>
                  <div className="footer_stay-in-touch_links-wrapper flex sm:flex-col sm:gap-3 gap-5">
                    <div className="footer_stay-in-touch_links-inner-wrapper flex flex-col gap-2">
                      <a
                        href="mailto:siteemail@gmail.com"
                        className="footer_stay-in-touch_link text-secondary-text-color"
                      >
                        siteemail@gmail.com
                      </a>
                      <a
                        href="tel:(406) 555-0120"
                        className="footer_stay-in-touch_link text-secondary-text-color"
                      >
                        (406) 555-0120
                      </a>
                    </div>
                    <div className="footer_stay-in-touch_links-inner-wrapper flex flex-col gap-2">
                      <a
                        href="tel:(480) 555-0103"
                        className="footer_stay-in-touch_link text-secondary-text-color"
                      >
                        (480) 555-0103
                      </a>
                      <div className="footer_stay-in-touch_icon-wrapper flex gap-3 mt-1">
                        <a href="#" className="footer_stay-in-touch_icon">
                          <Image
                            src={"/icons/Icon name=Facebook.svg"}
                            alt={"facebook"}
                            width={24}
                            height={24}
                            priority
                            className="footer_icon"
                          />
                        </a>
                        <a href="#" className="footer_stay-in-touch_icon">
                          <Image
                            src={"/icons/Icon name=twitter.svg"}
                            alt={"facebook"}
                            width={24}
                            height={24}
                            priority
                            className="footer_icon"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer_info-right max-w-[380px] flex flex-col gap-4">
                <p className="footer_subscribe-title font-medium tracking-[2px]">SUBSCRIBE</p>
                <p className="footer_subscribe-desc text-sub-text-color pr-24">
                  Get the latest news and promotions on your inbox
                </p>
                <form
                  action="#"
                  className="footer_subscribe-form flex items-center border border-disable-color h-12 justify-between px-4 mt-4"
                >
                  <input
                    type="email"
                    className="footer_subscribe_email-input outline-none text-secondary-text-color placeholder:text-secondary-text-color selection:text-white selection:bg-secondary-text-color"
                    placeholder="Email address"
                  />
                  <button type="submit" className="footer_subscribe_submit-btn">
                    <Image
                      src={"/icons/Icon name=next arrow.svg"}
                      alt={"facebook"}
                      width={24}
                      height={16}
                      priority
                      className="footer_subscribe_submit-icon"
                    />
                  </button>
                </form>
              </div>
            </div>
            <div className="footer_copyright_wrapper flex items-center justify-between mt-5">
              <p className="footer_copyright text-[#999]">2022©All rights reserved</p>
              <div className="footer_gtt-btn_wrapper">
                <a
                  href="#"
                  className="footer_gtt-btn w-[60px] h-[60px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer swiper-button-disabled swiper-button-lock transition-all"
                >
                  <Image
                    src={"/icons/Icon name=up arrow.svg"}
                    alt={"facebook"}
                    width={24}
                    height={24}
                    priority
                    className="footer_gtt-btn-icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
