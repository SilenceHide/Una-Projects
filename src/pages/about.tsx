import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function About() {
  const [navOpen, isNavOpen] = useState(false);
  const [searchBoxOpen, isSearchBoxOpen] = useState(false);
  const [cartOpen, isCartOpen] = useState(false);
  const [promocodeBasketOpen, isPromocodeBasketOpen] = useState(false);

  return (
    <>
      <header className="header shadow-main-box-shadow lg:h-[100px] h-[70px] flex items-center justify-center lg:static fixed lg:z-0 z-40 w-full bg-white top-0">
        <div className="container ">
          <div className="header-wrapper flex items-center justify-between">
            <div className="header-left flex items-center lg:gap-8 gap-4">
              <div
                className="menu_button p-[10px] rounded-full border-disable-text-color border-[1.5px] cursor-pointer lg:hidden transition-all duration-300"
                onClick={() => {
                  isCartOpen(false);
                  isSearchBoxOpen(false);
                  isNavOpen(!navOpen);
                }}
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
                className={`menu text-secondary-text-color right-0 top-[70px] lg:p-0 lg:overflow-hidden md:overflow-visible overflow-scroll transition-all duration-300 px-4 md:py-0 py-10 lg:h-[100px] md:h-fit h-[90vh] md:shadow-main-box-shadow lg:shadow-none ${
                  navOpen
                    ? "left-0 bg-white border-t border-disable-text-color z-50 visible opacity-100"
                    : "-left-full z-0 invisible opacity-0 lg:left-0 lg:visible lg:opacity-100"
                } ${
                  searchBoxOpen
                    ? "lg:static fixed lg:-z-10 lg:invisible duration-150 lg:delay-0"
                    : "lg:static fixed lg:z-10 lg:visible duration-300 lg:delay-300"
                }`}
              >
                <ul
                  className={`menu-list flex lg:gap-5 gap-8 flex-col md:items-center md:flex-row md:h-full tracking-[2px] md:tracking-[0px] xl:tracking-[2px]  ${
                    navOpen ? "justify-between" : "justify-start"
                  }`}
                >
                  <li className="menu-item group/menu-item flex lg:items-center cursor-pointer hover:border-b-accent-color flex-col lg:flex-row h-full lg:p-0 md:py-10">
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
                  <li className="menu-item group/menu-item flex lg:items-center cursor-pointer hover:border-b-accent-color flex-col lg:flex-row h-full lg:p-0 md:py-10">
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
                  <li className="menu-item group/menu-item flex lg:items-center cursor-pointer hover:border-b-accent-color flex-col lg:flex-row h-full lg:p-0 md:py-10">
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
                  <li className="menu-item group/menu-item flex lg:items-center cursor-pointer hover:border-b-accent-color flex-col lg:flex-row h-full lg:p-0 md:py-10">
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
                  <li className="menu-item group/menu-item flex lg:items-center cursor-pointer hover:border-b-accent-color flex-col lg:flex-row h-full lg:p-0 md:py-10">
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
                  <li className="menu-item group/menu-item flex lg:items-center cursor-pointer hover:border-b-accent-color flex-col lg:flex-row h-full lg:p-0 md:py-10 ">
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
                    <div className="mega-menu md:absolute bg-white lg:border-t border-disable-text-color top-[100px] bottom-0 left-0 right-0 transition-all lg:py-[60px] lg:px-[140px] xl:px-[70px] 3xl:px-[140px] md:shadow-main-box-shadow xl:justify-between flex invisible opacity-0 group-hover/menu-item:visible group-hover/menu-item:opacity-100 lg:h-fit md:h-[70vh] h-0 lg:group-hover/menu-item:h-fit group-hover/menu-item:h-[70vh] flex-wrap xl:gap-0 xs:px-5 gap-10 my-0 md:group-hover/menu-item:my-0 group-hover/menu-item:my-10 md:my-0 z-50 cursor-default lg:overflow-visible overflow-y-scroll md:pb-7">
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
                  <li className="menu-item group/menu-item flex lg:items-center cursor-pointer hover:border-b-accent-color flex-col lg:flex-row h-full lg:p-0 md:py-10">
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
            <div className="header-right flex items-center gap-5">
              <a
                href="tel:(704)-555-0127"
                className={`header_contact-number border-b-2 border-accent-color hidden transition-all xl:block relative ${
                  searchBoxOpen ? "invisible -z-10" : "visible z-0"
                }`}
              >
                (704) 555-0127
              </a>
              <div className="header_icon-wrapper flex items-center justify-between gap-3 lg:h-[100px] h-[70px] ">
                <div className="header_search-wrapper cursor-pointer flex sm:overflow-hidden relative">
                  <div
                    onClick={() => {
                      isSearchBoxOpen(true);
                      isCartOpen(false);
                      isNavOpen(false);
                    }}
                    className={`header_search-inner-wrapper w-[46px] h-[46px] flex items-center justify-center rounded-full border-[1.5px] transition-all duration-300 ${
                      searchBoxOpen ? "border-accent-color" : "border-disable-text-color"
                    }`}
                  >
                    <Image
                      src={"/icons/Icon name=search.svg"}
                      alt={"search-icon"}
                      width={22}
                      height={22}
                    />
                  </div>
                  <div
                    className={`"header_search-input_wrapper flex items-center justify-between sm:ml-[14px] transition-all sm:duration-500 duration-300 sm:static fixed top-[70px] right-0 left-0 sm:p-0 px-5 xs:px-24 py-2  ${
                      searchBoxOpen
                        ? "shadow-main-box-shadow sm:shadow-none visible xl:w-[330px] sm:w-[240px] sm:mr-0 bg-white z-50"
                        : "shadow-none invisible sm:mr-[-14px] bg-transparent z-0 sm:w-0"
                    }`}
                  >
                    <input
                      type="text"
                      className={`header_search-input outline-none text-secondary-text-color transition-all duration-300 placeholder:text-placeholder-text-color ${
                        searchBoxOpen
                          ? "visible opacity-100 xl:w-[200px] sm:w-[180px]"
                          : "w-0 invisible opacity-0"
                      }`}
                      placeholder="Search Request..."
                    />
                    <div
                      onClick={() => isSearchBoxOpen(false)}
                      className={`header_search-close-btn w-[46px] h-[46px] flex items-center justify-center rounded-full border-disable-text-color border-[1.5px] transition-all duration-300 ${
                        searchBoxOpen ? "visible opacity-100" : "invisible opacity-0"
                      }`}
                    >
                      <Image
                        src={"/icons/Icon name=close.svg"}
                        alt={"search-icon"}
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
                <div className="header_profile-wrapper w-[46px] h-[46px] flex items-center justify-center rounded-full border-disable-text-color border-[1.5px] cursor-pointer transition-all ">
                  <Image
                    src={"/icons/Icon name=user.svg"}
                    alt={"user-icon"}
                    width={22}
                    height={22}
                  />
                </div>
                <div
                  className="header_basket-wrapper w-[46px] h-[46px] flex items-center justify-center rounded-full border-disable-text-color border-[1.5px] cursor-pointer basket-active relative  "
                  onClick={() => {
                    isNavOpen(false);
                    isSearchBoxOpen(false);
                    isCartOpen(!cartOpen);
                  }}
                >
                  <Image
                    src={"/icons/Icon name=cart.svg"}
                    alt={"cart-icon"}
                    width={22}
                    height={22}
                  />
                  <p className="absolute top-[-6px] right-[-7px] text-white bg-accent-color rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    10
                  </p>
                  <div
                    className={`header_basket_inner-wrapper max-w-[560px] absolute lg:top-[40px] top-[25px] md:left-[-520px] left-[-290px] bg-transparent transition-all cursor-default z-10 ${
                      cartOpen ? "visible opacity-100" : "invisible opacity-0"
                    }`}
                  >
                    <div className="header_basket_main-wrapper md:w-[560px] w-[343px] mt-[31px] bg-white border-t-[3px] border-accent-color lg:py-10 py-5 shadow-main-box-shadow overflow-y-scroll lg:static relative z-10 h-[85vh]">
                      <div className="header_basket_info-summery tracking-[3px] font-medium md:text-2xl text-xl flex items-center justify-between border-b border-disable-color md:px-10 px-3 lg:pb-10 pb-5">
                        <p className="header_basket-total-cart">CART (3)</p>
                        <p className="header_basket-total-price">$1 160</p>
                      </div>
                      <div className="header_basket_products flex flex-col md:py-10 px-10 py-8 border-b border-disable-color">
                        <div className="header_basket_product flex gap-[30px] md:flex-row flex-col  ">
                          <div className="header_basket_product-img md:min-w-[160px] w-[160px] h-[160px] bg-disable-text-color"></div>
                          <div className="header_basket_product-info_wrapper w-full flex flex-col md:items-stretch items-center">
                            <div className="header_basket_product-desc border-b border-disable-color pb-4 w-full">
                              <p className="header_basket_product-title font-medium tracking-[2px] mb-[10px]">
                                HARU SOFA BED
                              </p>
                              <p className="header_basket_product-sub text-sm text-placeholder-text-color">
                                yellow
                              </p>
                              <p className="header_basket_product-sub text-sm text-placeholder-text-color">
                                50 sm х 30 sm
                              </p>
                              <p className="header_basket_product-price font-medium text-accent-color mt-[10px]">
                                $460
                              </p>
                            </div>
                            <div className="header_basket_product-number flex items-center justify-between mt-4 md:w-auto w-[200px]">
                              <div className="header_basket_product-number_left flex items-center gap-4">
                                <div className="header_basket_product-number_minus-icon w-[46px] h-[46px] border border-disable-color rounded-full flex items-center justify-center cursor-pointer">
                                  <Image
                                    src={"/icons/Icon name=minus.svg"}
                                    alt={"cart-icon"}
                                    width={16}
                                    height={20}
                                  />
                                </div>
                                <p className="header_basket_product-number_count">2</p>
                                <div className="header_basket_product-number_plus-icon w-[46px] h-[46px] border border-disable-color rounded-full flex items-center justify-center cursor-pointer">
                                  <Image
                                    src={"/icons/Icon name=plus.svg"}
                                    alt={"cart-icon"}
                                    width={18}
                                    height={22}
                                  />
                                </div>
                              </div>
                              <div className="header_basket_product-number_right">
                                <div className="header_basket_product-number_delete-icon w-[46px] h-[46px] border border-disable-color rounded-full flex items-center justify-center cursor-pointer">
                                  <Image
                                    src={"/icons/Icon name=trash.svg"}
                                    alt={"cart-icon"}
                                    width={22}
                                    height={22}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="header_basket_products-divider w-full h-[1px] bg-disable-color md:my-10 my-8"></div>
                        <div className="header_basket_product flex gap-[30px] md:flex-row flex-col ">
                          <div className="header_basket_product-img md:min-w-[160px] w-[160px] h-[160px] bg-disable-text-color"></div>
                          <div className="header_basket_product-info_wrapper w-full flex flex-col md:items-stretch items-center">
                            <div className="header_basket_product-desc border-b border-disable-color pb-4 w-full">
                              <p className="header_basket_product-title font-medium tracking-[2px] mb-[10px]">
                                EMMI SET
                              </p>
                              <p className="header_basket_product-sub text-sm text-placeholder-text-color">
                                green
                              </p>
                              <p className="header_basket_product-price font-medium text-accent-color mt-[10px]">
                                $240
                              </p>
                            </div>
                            <div className="header_basket_product-number flex items-center justify-between mt-4 md:w-auto w-[200px]">
                              <div className="header_basket_product-number_left flex items-center gap-4">
                                <div className="header_basket_product-number_minus-icon w-[46px] h-[46px] border border-disable-color rounded-full flex items-center justify-center cursor-pointer">
                                  <Image
                                    src={"/icons/Icon name=minus.svg"}
                                    alt={"cart-icon"}
                                    width={16}
                                    height={20}
                                  />
                                </div>
                                <p className="header_basket_product-number_count">1</p>
                                <div className="header_basket_product-number_plus-icon w-[46px] h-[46px] border border-disable-color rounded-full flex items-center justify-center cursor-pointer">
                                  <Image
                                    src={"/icons/Icon name=plus.svg"}
                                    alt={"cart-icon"}
                                    width={18}
                                    height={22}
                                  />
                                </div>
                              </div>
                              <div className="header_basket_product-number_right">
                                <div className="header_basket_product-number_delete-icon w-[46px] h-[46px] border border-disable-color rounded-full flex items-center justify-center cursor-pointer">
                                  <Image
                                    src={"/icons/Icon name=trash.svg"}
                                    alt={"cart-icon"}
                                    width={22}
                                    height={22}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`header_basket_promo-code_wrapper md:px-10 px-3 py-4 shrink border-b border-disable-color flex flex-col justify-between transition-all duration-300 ${
                          promocodeBasketOpen ? "gap-5" : "gap-0"
                        }`}
                      >
                        <div
                          onClick={() => isPromocodeBasketOpen(!promocodeBasketOpen)}
                          className="header_basket_promo-code_top-wrapper cursor-pointer flex justify-between items-center"
                        >
                          <p className="header_basket_promo-code_title text-sub-text-color tracking-[2px] font-medium">
                            APPLY PROMOCODE
                          </p>
                          <Image
                            src={"/icons/Icon name=chevron_down.svg"}
                            alt={"checkout-icon"}
                            width={16}
                            height={8}
                            className={`cursor-pointer transition-all duration-300 ${
                              promocodeBasketOpen ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </div>
                        <div
                          className={`header_basket_promo-code_bottom-wrapper flex items-center justify-between transition-all duration-300 overflow-hidden lg:gap-0 gap-1 ${
                            promocodeBasketOpen
                              ? "visible opacity-100 h-[46px]"
                              : "invisible opacity-0 h-0"
                          }`}
                        >
                          <input
                            type="text"
                            className="header_basket_promo-code_input outline-none sm:w-[210px] w-[160px] h-full px-4 caret-secondary-text-color text-secondary-text-color border border-disable-color"
                            placeholder="Z34kKOY"
                          />
                          <p className="header_basket_promo-code_discount font-medium text-accent-color tracking-[1px] text-center">
                            $13 discount
                          </p>
                        </div>
                      </div>

                      <div className="header_basket_checkout-btn_wrapper lg:px-10 px-3 md:pt-10 pt-6">
                        <button className="header_basket_checkout-btn text-white bg-disable-color flex justify-center items-center gap-[14px] w-full h-[60px]">
                          <p className="header_basket_checkout-btn_title font-semibold md:text-lg tracking-[2px]">
                            PROCEED TO CHECKOUT
                          </p>
                          <Image
                            src={"/icons/Icon name=next arrow - white.svg"}
                            alt={"cart-icon"}
                            width={24}
                            height={16}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main-about lg:pt-10 pt-24 pb-[100px] bg-main-bg-color ">
        <div className="container">
          <div className="about_wrapper flex flex-col">
            <div className="about_breadcrumbs flex items-center gap-2">
              <p className="about_breadcrumb text-secondary-text-color font-medium text-[13px]">
                Home
              </p>
              <Image
                src={"/icons/Icon name=chevron_right.svg"}
                alt={"chevron_right"}
                width={7}
                height={10}
              />
              <p className="about_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
                About
              </p>
            </div>
            <div className="about_title-wrapper flex flex-col gap-[14px] mt-[54px]">
              <h1 className="about_title lg:text-3xl text-2xl font-medium tracking-[3px] uppercase">
                About
              </h1>
            </div>
            <div className="about_main-wrapper w-full pb-[100px] mt-[60px] flex flex-col items-center">
              <div className="about_header-img_wrapper max-w-[1640px] w-full md:h-[600px] h-[280px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="about_header_journal-wrapper flex justify-between mt-[100px]">
                <h1 className="about_header_journal-title flex basis-[30%] tracking-[3px] uppercase font-medium text-3xl">
                  Focus on Canada An introduction to Canada in intermediate-level English
                </h1>
                <p className="about_header_journal-desc flex basis-[30%] text-lg text-sub-text-color text-justify">
                  There is something else promised as well. The blessing was not only for Abraham.
                  It says that “all peoples on earth will be blessed through you” (through Abraham).
                  We should pay attention because you and I are part of ‘all peoples on earth’ – no
                  matter what our religion, color, background, nationality, social status, or what
                  language we speak.
                </p>
                <p className="about_header_journal-desc flex basis-[30%] text-lg text-sub-text-color text-justify">
                  Why? A look at Israel’s history in the book of Genesis in the Bible reveals that
                  4000 years ago a man, who is now very well known, went on a camping trip in that
                  part of the world. The Bible says that his story affects our future. This ancient
                  man is Abraham (also known as Abram). We can take his story seriously because the
                  places and cities he visited are mentioned in other old writings.
                </p>
              </div>
              <div className="about_feature-wrapper mt-[100px] flex flex-col items-center">
                <div className="about_divider w-10 h-[2px] bg-accent-color"></div>
                <h2 className="about_middle-title mt-8 md:text-3xl text-xl font-medium tracking-[3px] uppercase max-w-[660px] text-center">
                  why you should choose us
                </h2>
                <div className="about_feature_inner-wrapper mt-10 flex items-center gap-3 flex-wrap justify-center">
                  <div className="about_feature_box bg-white flex items-center max-w-[400px] w-[400px] h-[140px] p-[10px] group/about_feature hover:shadow-main-box-shadow transition-all duration-300">
                    <div className="about_feature_box-logo_wrapper transition-all duration-300 visible min-w-[140px] w-[140px] mr-5 group-hover/about_feature:min-w-0 group-hover/about_feature:visible group-hover/about_feature:mr-0 group-hover/about_feature:w-0">
                      <Image
                        src={"/about-logo/award-icon.svg"}
                        alt={"award-icon"}
                        width={140}
                        height={120}
                        className="about_feature-logo "
                      />
                    </div>
                    <div className="about_feature_box-logo_wrapper transition-all duration-300 invisible min-w-0 w-0 mr-0 group-hover/about_feature:min-w-[140px] group-hover/about_feature:visible group-hover/about_feature:mr-5 group-hover/about_feature:w-[140px]">
                      <Image
                        src={"/about-logo/award-icon - gold.svg"}
                        alt={"award-icon"}
                        width={140}
                        height={120}
                        className="about_feature-logo "
                      />
                    </div>
                    <h3 className="about_feature uppercase tracking-[2px] font-medium pr-[10px] text-xl">
                      Best furniture shop in 2021
                    </h3>
                  </div>
                  <div className="about_feature_box bg-white flex items-center max-w-[400px] w-[400px] h-[140px] p-[10px] group/about_feature hover:shadow-main-box-shadow transition-all duration-300">
                    <div className="about_feature_box-logo_wrapper transition-all duration-300 visible min-w-[140px] w-[140px] mr-5 group-hover/about_feature:min-w-0 group-hover/about_feature:visible group-hover/about_feature:mr-0 group-hover/about_feature:w-0">
                      <Image
                        src={"/about-logo/love-icon.svg"}
                        alt={"love-icon"}
                        width={140}
                        height={120}
                        className="about_feature-logo "
                      />
                    </div>
                    <div className="about_feature_box-logo_wrapper transition-all duration-300 invisible min-w-0 w-0 mr-0 group-hover/about_feature:min-w-[140px] group-hover/about_feature:visible group-hover/about_feature:mr-5 group-hover/about_feature:w-[140px]">
                      <Image
                        src={"/about-logo/love-icon - gold.svg"}
                        alt={"love-icon"}
                        width={140}
                        height={120}
                        className="about_feature-logo "
                      />
                    </div>
                    <h3 className="about_feature uppercase tracking-[2px] font-medium pr-[10px] text-xl">
                      500+ happy clients
                    </h3>
                  </div>
                  <div className="about_feature_box bg-white flex items-center max-w-[400px] w-[400px] h-[140px] p-[10px] group/about_feature hover:shadow-main-box-shadow transition-all duration-300">
                    <div className="about_feature_box-logo_wrapper transition-all duration-300 visible min-w-[140px] w-[140px] mr-5 group-hover/about_feature:min-w-0 group-hover/about_feature:visible group-hover/about_feature:mr-0 group-hover/about_feature:w-0">
                      <Image
                        src={"/about-logo/forniture-icon.svg"}
                        alt={"forniture-icon"}
                        width={140}
                        height={120}
                        className="about_feature-logo "
                      />
                    </div>
                    <div className="about_feature_box-logo_wrapper transition-all duration-300 invisible min-w-0 w-0 mr-0 group-hover/about_feature:min-w-[140px] group-hover/about_feature:visible group-hover/about_feature:mr-5 group-hover/about_feature:w-[140px]">
                      <Image
                        src={"/about-logo/forniture-icon - gold.svg"}
                        alt={"forniture-icon"}
                        width={140}
                        height={120}
                        className="about_feature-logo "
                      />
                    </div>
                    <h3 className="about_feature uppercase tracking-[2px] font-medium pr-[10px] text-xl">
                      rich assortment
                    </h3>
                  </div>
                  <div className="about_feature_box bg-white flex items-center max-w-[400px] w-[400px] h-[140px] p-[10px] group/about_feature hover:shadow-main-box-shadow transition-all duration-300">
                    <div className="about_feature_box-logo_wrapper transition-all duration-300 visible min-w-[140px] w-[140px] mr-5 group-hover/about_feature:min-w-0 group-hover/about_feature:visible group-hover/about_feature:mr-0 group-hover/about_feature:w-0">
                      <Image
                        src={"/about-logo/wood-icon.svg"}
                        alt={"wood-icon"}
                        width={140}
                        height={120}
                        className="about_feature-logo "
                      />
                    </div>
                    <div className="about_feature_box-logo_wrapper transition-all duration-300 invisible min-w-0 w-0 mr-0 group-hover/about_feature:min-w-[140px] group-hover/about_feature:visible group-hover/about_feature:mr-5 group-hover/about_feature:w-[140px]">
                      <Image
                        src={"/about-logo/wood-icon - gold.svg"}
                        alt={"wood-icon"}
                        width={140}
                        height={120}
                        className="about_feature-logo "
                      />
                    </div>
                    <h3 className="about_feature uppercase tracking-[2px] font-medium pr-[10px] text-xl">
                      100% natural and quality
                    </h3>
                  </div>
                  <div className="about_feature_box bg-white flex items-center max-w-[400px] w-[400px] h-[140px] p-[10px] group/about_feature hover:shadow-main-box-shadow transition-all duration-300">
                    <div className="about_feature_box-logo_wrapper transition-all duration-300 visible min-w-[140px] w-[140px] mr-5 group-hover/about_feature:min-w-0 group-hover/about_feature:visible group-hover/about_feature:mr-0 group-hover/about_feature:w-0">
                      <Image
                        src={"/about-logo/man-icon.svg"}
                        alt={"man-icon"}
                        width={140}
                        height={120}
                        className="about_feature-logo "
                      />
                    </div>
                    <div className="about_feature_box-logo_wrapper transition-all duration-300 invisible min-w-0 w-0 mr-0 group-hover/about_feature:min-w-[140px] group-hover/about_feature:visible group-hover/about_feature:mr-5 group-hover/about_feature:w-[140px]">
                      <Image
                        src={"/about-logo/man-icon - gold.svg"}
                        alt={"man-icon"}
                        width={140}
                        height={120}
                        className="about_feature-logo "
                      />
                    </div>
                    <h3 className="about_feature uppercase tracking-[2px] font-medium pr-[10px] text-xl">
                      10+ years of experience
                    </h3>
                  </div>
                  <div className="about_feature_box bg-white flex items-center max-w-[400px] w-[400px] h-[140px] p-[10px] group/about_feature hover:shadow-main-box-shadow transition-all duration-300">
                    <div className="about_feature_box-logo_wrapper transition-all duration-300 visible min-w-[140px] w-[140px] mr-5 group-hover/about_feature:min-w-0 group-hover/about_feature:visible group-hover/about_feature:mr-0 group-hover/about_feature:w-0">
                      <Image
                        src={"/about-logo/design-icon.svg"}
                        alt={"design-icon"}
                        width={140}
                        height={120}
                        className="about_feature-logo "
                      />
                    </div>
                    <div className="about_feature_box-logo_wrapper transition-all duration-300 invisible min-w-0 w-0 mr-0 group-hover/about_feature:min-w-[140px] group-hover/about_feature:visible group-hover/about_feature:mr-5 group-hover/about_feature:w-[140px]">
                      <Image
                        src={"/about-logo/design-icon - gold.svg"}
                        alt={"design-icon"}
                        width={140}
                        height={120}
                        className="about_feature-logo "
                      />
                    </div>
                    <h3 className="about_feature uppercase tracking-[2px] font-medium pr-[10px] text-xl">
                      modern design
                    </h3>
                  </div>
                  <div className="about_feature_box bg-white flex items-center max-w-[400px] w-[400px] h-[140px] p-[10px] group/about_feature hover:shadow-main-box-shadow transition-all duration-300">
                    <div className="about_feature_box-logo_wrapper transition-all duration-300 visible min-w-[140px] w-[140px] mr-5 group-hover/about_feature:min-w-0 group-hover/about_feature:visible group-hover/about_feature:mr-0 group-hover/about_feature:w-0">
                      <Image
                        src={"/about-logo/price-icon.svg"}
                        alt={"price-icon"}
                        width={140}
                        height={120}
                        className="about_feature-logo "
                      />
                    </div>
                    <div className="about_feature_box-logo_wrapper transition-all duration-300 invisible min-w-0 w-0 mr-0 group-hover/about_feature:min-w-[140px] group-hover/about_feature:visible group-hover/about_feature:mr-5 group-hover/about_feature:w-[140px]">
                      <Image
                        src={"/about-logo/price-icon - gold.svg"}
                        alt={"price-icon"}
                        width={140}
                        height={120}
                        className="about_feature-logo "
                      />
                    </div>
                    <h3 className="about_feature uppercase tracking-[2px] font-medium pr-[10px] text-xl">
                      profitable prices
                    </h3>
                  </div>
                </div>
              </div>
              <div className="about_middle-title_wrapper mt-[100px] flex flex-col items-center 2xl:px-[280px] lg:px-[140px] sm:px-[30px] px-4">
                <div className="about_divider w-10 h-[2px] bg-accent-color"></div>
                <h2 className="about_middle-title mt-8 mb-4 md:text-3xl text-xl font-medium tracking-[3px] uppercase max-w-[660px] text-center">
                  Conservationists oppose plans to modernise a wind
                </h2>
                <p className="about_middle-blog mt-[40px] text-lg text-sub-text-color text-center">
                  There is something else promised as well. The blessing was not only for Abraham.
                  It says that “all peoples on earth will be blessed through you” (through Abraham).
                  We should pay attention because you and I are part of ‘all peoples on earth’ – no
                  matter what our religion, color, background, nationality, social status, or what
                  language we speak.
                </p>
              </div>
              <div className="about_swiper-wrapper mt-20 w-full">
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
                    prevEl: ".about_left-btn",
                    nextEl: ".about_right-btn",
                  }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  className="about_items_swiper"
                >
                  <SwiperSlide className="about_item lg:w-[520px] min-w-[343px] max-w-[520px]">
                    <a href="#">
                      <div className="about_item-img lg:w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color"></div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="about_item lg:w-[520px] min-w-[343px] max-w-[520px]">
                    <a href="#">
                      <div className="about_item-img lg:w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color"></div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="about_item lg:w-[520px] min-w-[343px] max-w-[520px]">
                    <a href="#">
                      <div className="about_item-img lg:w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color"></div>
                    </a>
                  </SwiperSlide>
                </Swiper>
                <div className="about_nav-btn-wrapper flex items-center justify-center gap-5 2xl:mt-10 mt-[20px]">
                  <div className="about_left-btn w-[60px] h-[60px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                    <Image
                      src={"/icons/Icon name=prev arrow.svg"}
                      alt={"left-btn"}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="about_right-btn w-[60px] h-[60px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                    <Image
                      src={"/icons/Icon name=next arrow.svg"}
                      alt={"right-btn"}
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_instagram bg-main-bg-color md:pt-0 pt-[60px] pb-5 flex flex-col justify-center items-center md:px-8 px-4">
          <div className="about_divider w-10 h-[2px] bg-accent-color"></div>
          <h2 className="about_middle-title mt-8 mb-4 md:text-3xl text-xl font-medium tracking-[3px] uppercase max-w-[660px] text-center">
            INSTAGRAM INSPIRATION
          </h2>
          <div className="about-instagram_item-wrapper mt-14 flex md:gap-[10px] gap-[8px] items-center justify-center flex-wrap">
            <div className="about-instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/about-instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
              <div className="about-instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="about-instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/about-instagram_item:visible group-hover/about-instagram_item:opacity-100 transition-all duration-300">
                <a
                  href="#"
                  className="about-instagram_item-tag text-secondary-text-color hidden md:block"
                >
                  @decorinsta
                </a>
                <div className="about-instagram_item-info flex gap-4 items-center justify-center">
                  <div className="about-instagram_item-heart flex gap-1 items-center justify-center">
                    <Image
                      src={"/icons/Icon name=like - gold.svg"}
                      alt={"golden-heart"}
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                    <p>168</p>
                  </div>
                  <div className="about-instagram_item-comment flex gap-1 items-center justify-center">
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
            <div className="about-instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/about-instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
              <div className="about-instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="about-instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/about-instagram_item:visible group-hover/about-instagram_item:opacity-100 transition-all duration-300">
                <a
                  href="#"
                  className="about-instagram_item-tag text-secondary-text-color hidden md:block"
                >
                  @decorinsta
                </a>
                <div className="about-instagram_item-info flex gap-4 items-center justify-center">
                  <div className="about-instagram_item-heart flex gap-1 items-center justify-center">
                    <Image
                      src={"/icons/Icon name=like - gold.svg"}
                      alt={"golden-heart"}
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                    <p>168</p>
                  </div>
                  <div className="about-instagram_item-comment flex gap-1 items-center justify-center">
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
            <div className="about-instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/about-instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
              <div className="about-instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="about-instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/about-instagram_item:visible group-hover/about-instagram_item:opacity-100 transition-all duration-300">
                <a
                  href="#"
                  className="about-instagram_item-tag text-secondary-text-color hidden md:block"
                >
                  @decorinsta
                </a>
                <div className="about-instagram_item-info flex gap-4 items-center justify-center">
                  <div className="about-instagram_item-heart flex gap-1 items-center justify-center">
                    <Image
                      src={"/icons/Icon name=like - gold.svg"}
                      alt={"golden-heart"}
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                    <p>168</p>
                  </div>
                  <div className="about-instagram_item-comment flex gap-1 items-center justify-center">
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
            <div className="about-instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/about-instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
              <div className="about-instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="about-instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/about-instagram_item:visible group-hover/about-instagram_item:opacity-100 transition-all duration-300">
                <a
                  href="#"
                  className="about-instagram_item-tag text-secondary-text-color hidden md:block"
                >
                  @decorinsta
                </a>
                <div className="about-instagram_item-info flex gap-4 items-center justify-center">
                  <div className="about-instagram_item-heart flex gap-1 items-center justify-center">
                    <Image
                      src={"/icons/Icon name=like - gold.svg"}
                      alt={"golden-heart"}
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                    <p>168</p>
                  </div>
                  <div className="about-instagram_item-comment flex gap-1 items-center justify-center">
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
            <div className="about-instagram_item md:max-w-[364px] max-w-[343px] flex flex-col group/about-instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
              <div className="about-instagram_item-img md:w-[364px] md:h-[364px] w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="about-instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/about-instagram_item:visible group-hover/about-instagram_item:opacity-100 transition-all duration-300">
                <a href="#" className="about-instagram_item-tag text-secondary-text-color">
                  @decorinsta
                </a>
                <div className="about-instagram_item-info flex gap-4 items-center justify-center">
                  <div className="about-instagram_item-heart flex gap-1 items-center justify-center">
                    <Image
                      src={"/icons/Icon name=like - gold.svg"}
                      alt={"golden-heart"}
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                    <p>168</p>
                  </div>
                  <div className="about-instagram_item-comment flex gap-1 items-center justify-center">
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
        </div>
      </main>

      <footer className="footer lg:pt-[75px] pt-[60px] pb-5">
        <div className="container">
          <div className="footer_wrapper flex flex-col">
            <div className="footer_links-and-logo flex flex-col items-center border-b border-disable-color w-full lg:pb-[78px] pb-[60px] gap-8">
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
                    className="footer_subscribe_email-input outline-none text-secondary-text-color placeholder:text-placeholder-text-color "
                    placeholder="Email Address"
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
              <p className="footer_copyright text-placeholder-text-color">
                2022©All rights reserved
              </p>
              <div className="footer_gtt-btn_wrapper">
                <a
                  href="#"
                  className="footer_gtt-btn w-[60px] h-[60px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer transition-all"
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
