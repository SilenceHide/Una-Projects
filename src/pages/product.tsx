import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function Product() {
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

      <main className="main-product lg:pt-10 pt-24 lg:pb-[100px] pb-[80px] bg-main-bg-color">
        <div className="container">
          <div className="product_wrapper flex flex-col">
            <div className="product_breadcrumbs flex items-center gap-2">
              <p className="product_breadcrumb text-secondary-text-color font-medium text-[13px]">
                Home
              </p>
              <Image
                src={"/icons/Icon name=chevron_right.svg"}
                alt={"chevron_right"}
                width={7}
                height={10}
              />
              <p className="product_breadcrumb text-secondary-text-color font-medium text-[13px]">
                Textile
              </p>
              <Image
                src={"/icons/Icon name=chevron_right.svg"}
                alt={"chevron_right"}
                width={7}
                height={10}
              />
              <p className="product_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
                Armchair, fleece
              </p>
            </div>
            <div className="product_img-filter-wrapper mt-14 flex xl:flex-row flex-col items-center 3xl:gap-20 2xl:gap-10 xl:gap-5 gap-10">
              <div className="product_img-wrapper flex lg:flex-row flex-col-reverse 3xl:gap-6 gap-5 3xl:min-w-[1070px] w-full 3xl:h-fit lg:h-[600px]">
                <div className="product_img-slider_wrapper lg:min-w-[140px] lg:max-w-[140px] w-full lg:h-auto h-[160px] overflow-hidden">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={15}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                      },
                      1024: {
                        direction: "vertical",
                        slidesPerView: 4,
                        spaceBetween: 15,
                      },
                      1280: {
                        direction: "vertical",
                        slidesPerView: 4,
                        spaceBetween: 15,
                      },
                      1450: {
                        direction: "vertical",
                        slidesPerView: 4,
                        spaceBetween: 15,
                      },
                      1640: {
                        direction: "vertical",
                        slidesPerView: 5,
                        spaceBetween: 15,
                      },
                    }}
                    className="product_img-swiper"
                  >
                    <SwiperSlide className="product_img-slide lg:max-h-[130px]">
                      <div className="product_slide lg:max-w-[130px] xs:w-full xs:min-h-[130px] xs:max-h-[130px] h-[109px] w-[109px] border-[10px] border-main-bg-color transition-all duration-200 hover:border-white hover:shadow-main-box-shadow bg-disable-text-color cursor-pointer product_slide-selected"></div>
                    </SwiperSlide>
                    <SwiperSlide className="product_img-slide lg:max-h-[130px]">
                      <div className="product_slide lg:max-w-[130px] xs:w-full xs:min-h-[130px] xs:max-h-[130px] h-[109px] w-[109px] border-[10px] border-main-bg-color transition-all duration-200 hover:border-white hover:shadow-main-box-shadow bg-disable-text-color cursor-pointer"></div>
                    </SwiperSlide>
                    <SwiperSlide className="product_img-slide lg:max-h-[130px]">
                      <div className="product_slide lg:max-w-[130px] xs:w-full xs:min-h-[130px] xs:max-h-[130px] h-[109px] w-[109px] border-[10px] border-main-bg-color transition-all duration-200 hover:border-white hover:shadow-main-box-shadow bg-disable-text-color cursor-pointer"></div>
                    </SwiperSlide>
                    <SwiperSlide className="product_img-slide lg:max-h-[130px]">
                      <div className="product_slide lg:max-w-[130px] xs:w-full xs:min-h-[130px] xs:max-h-[130px] h-[109px] w-[109px] border-[10px] border-main-bg-color transition-all duration-200 hover:border-white hover:shadow-main-box-shadow bg-disable-text-color cursor-pointer"></div>
                    </SwiperSlide>
                    <SwiperSlide className="product_img-slide lg:max-h-[130px]">
                      <div className="product_slide lg:max-w-[130px] xs:w-full xs:min-h-[130px] xs:max-h-[130px] h-[109px] w-[109px] border-[10px] border-main-bg-color transition-all duration-200 hover:border-white hover:shadow-main-box-shadow bg-disable-text-color cursor-pointer"></div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="product_img-selected 3xl:min-w-[900px] lg:min-w-[700px] w-full border-[10px] lg:h-auto sm:h-[500px] h-[240px] border-white bg-disable-text-color"></div>
              </div>
              <div className="product_info-wrapper flex flex-col w-full ">
                <div className="product_title-wrapper flex flex-col items-center 2xl:py-10 pb-5">
                  <div className="product_divider w-10 h-[2px] bg-accent-color mb-7"></div>
                  <h1 className="product_title font-medium text-2xl uppercase tracking-[3px] mb-4 text-center">
                    cesil micro velvet chair
                  </h1>
                  <div className="product_info_review-wrapper flex gap-[10px]">
                    <div className="product_info_review-star_wrapper flex">
                      <Image
                        src={"/icons/brown-Star.svg"}
                        alt={"brown-Star"}
                        width={16}
                        height={16}
                        className="cursor-pointer"
                      />
                      <Image
                        src={"/icons/brown-Star.svg"}
                        alt={"brown-Star"}
                        width={16}
                        height={16}
                        className="cursor-pointer"
                      />
                      <Image
                        src={"/icons/brown-Star.svg"}
                        alt={"brown-Star"}
                        width={16}
                        height={16}
                        className="cursor-pointer"
                      />
                      <Image
                        src={"/icons/brown-Star.svg"}
                        alt={"brown-Star"}
                        width={16}
                        height={16}
                        className="cursor-pointer"
                      />
                      <Image
                        src={"/icons/empty-Star.svg"}
                        alt={"empty-Star"}
                        width={16}
                        height={16}
                        className="cursor-pointer"
                      />
                    </div>
                    <p className="product_info_review-count border-b border-accent-color text-sm">
                      3 reviews
                    </p>
                  </div>
                </div>
                <div className="product_filter-wrapper border-y border-disable-color flex flex-col 2xl:py-10 py-5 gap-7">
                  <div className="product_filter_color-wrapper flex items-center xs:gap-[90px] gap-[70px]">
                    <p className="product_filter_color-title uppercase font-medium tracking-[2px] text-sub-text-color">
                      color
                    </p>
                    <div className="product_filter_colors flex items-center xs:gap-4 gap-2">
                      <div className="product_filter_color min-w-[60px] w-full h-[60px] bg-disable-text-color border-4 border-main-bg-color transition-all duration-300 hover:border-white hover:shadow-main-box-shadow cursor-pointer product_filter_color-selected"></div>
                      <div className="product_filter_color min-w-[60px] w-full h-[60px] bg-disable-text-color border-4 border-main-bg-color transition-all duration-300 hover:border-white hover:shadow-main-box-shadow cursor-pointer"></div>
                      <div className="product_filter_color min-w-[60px] w-full h-[60px] bg-disable-text-color border-4 border-main-bg-color transition-all duration-300 hover:border-white hover:shadow-main-box-shadow cursor-pointer"></div>
                    </div>
                  </div>
                  <div className="product_filter_dimensions-wrapper flex items-center gap-10">
                    <p className="product_filter_dimensions-title uppercase font-medium tracking-[2px] text-sub-text-color">
                      dimensions
                    </p>
                    <div className="product_filter_dimensions flex xs:flex-row flex-col xs:items-center gap-4">
                      <p className="product_filter_dimension text-xs font-medium text-disable-color cursor-pointer bg-white px-[10px] py-2 transition-all duration-200 hover:text-accent-color hover:shadow-main-box-shadow">
                        W:75 х H:82 cm
                      </p>
                      <p className="product_filter_dimension text-xs font-medium text-disable-color cursor-pointer bg-white px-[10px] py-2 transition-all duration-200 hover:text-accent-color hover:shadow-main-box-shadow">
                        W:120 х H:100 cm
                      </p>
                    </div>
                  </div>
                  <div className="product_filter_quantity-wrapper flex items-center gap-14">
                    <p className="product_filter_quantity-title uppercase font-medium tracking-[2px] text-sub-text-color">
                      quantity
                    </p>
                    <div className="product_filter_quantity-counter flex items-center gap-4">
                      <Image
                        src={"/icons/minus-btn.svg"}
                        alt={"minus-btn"}
                        width={36}
                        height={36}
                        className="cursor-pointer"
                      />
                      <p className="product_filter_quantity-number">1</p>
                      <Image
                        src={"/icons/plus-btn.svg"}
                        alt={"plus-btn"}
                        width={36}
                        height={36}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="product_price-add_wrapper flex flex-col 2xl:py-10 pt-5 gap-6">
                  <div className="product_price-wrapper flex">
                    <div className="product_price_left-wrapper flex items-center gap-3">
                      <p className="product_price tracking-[2px] text-xl font-medium text-red-hot">
                        $600
                      </p>
                      <p className="product_price tracking-[2px] text-xl font-medium text-disable-color line-through">
                        $675
                      </p>
                    </div>
                    <div className="product_price-divider mx-5 w-[2px] h-[26px] bg-disable-text-color"></div>
                    <div className="product_price_right-wrapper flex items-center gap-2">
                      <Image
                        src={"/icons/truck-Icon.svg"}
                        alt={"truck-Icon"}
                        width={20}
                        height={20}
                      />
                      <p className="product_price_icon-title text-sm text-sub-text-color">
                        Free delivery from $1 000
                      </p>
                    </div>
                  </div>
                  <div className="product_add-wrapper flex gap-5">
                    <button
                      type="button"
                      className="product_add-btn w-[204px] h-[60px] bg-disable-color font-semibold text-lg uppercase tracking-[2px] text-white"
                    >
                      add to cart
                    </button>
                    <div className="product_love-btn w-[60px] h-[60px] border border-secondary-text-color flex items-center justify-center rounded-full bg-white cursor-pointer">
                      <Image
                        src={"/icons/Icon name=like.svg"}
                        alt={"like"}
                        width={28}
                        height={28}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_detail-wrapper md:my-[100px] my-[60px] xl:pb-[100px] flex justify-between 2xl:gap-20 xl:gap-10 gap-14 xl:flex-nowrap flex-wrap xl:border-b xl:border-disable-color">
              <div className="product_desc-wrapper flex flex-col w-full">
                <h2 className="product_desc-title uppercase tracking-[2px] text-xl font-medium pb-[10px] border-b border-disable-color mb-10">
                  description
                </h2>
                <div className="product_desc-inner-wrapper flex flex-col gap-5 text-lg text-sub-text-color text-justify">
                  <p className="product_desc">
                    The chair uses a safe, environmentally friendly filler, the special properties
                    of which make the furniture not only soft and comfortable, but also orthopedic.
                    Relaxes the muscles of the back and waist, adjusts to your body.
                  </p>
                  <p className="product_desc">
                    Made of mat - the most popular furniture fabric. Pleasant to the touch and at
                    the same time durable and reliable fabric. Large selection of color shades.
                  </p>
                  <p className="product_desc">
                    Prepayment on a bank card. Delivery by mail or by courier. Delivery of goods
                    within 16 days, as goods are only by request.
                  </p>
                </div>
              </div>
              <div className="product_dimensions-wrapper flex flex-col w-full">
                <h2 className="product_dimensions-title uppercase tracking-[2px] text-xl font-medium pb-[10px] border-b border-disable-color mb-10">
                  dimensions
                </h2>
                <div className="product_dimensions_inner-wrapper flex flex-col gap-5">
                  <div className="product_dimension-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                    <p className="product_dimension_height font-medium">Height (cm)</p>
                    <p className="product_dimension_height-number text-sub-text-color">82</p>
                  </div>
                  <div className="product_dimension-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                    <p className="product_dimension_height font-medium">Width (cm)</p>
                    <p className="product_dimension_height-number text-sub-text-color">75</p>
                  </div>
                  <div className="product_dimension-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                    <p className="product_dimension_height font-medium">Arm dimensions (hwd)</p>
                    <p className="product_dimension_height-number text-sub-text-color">
                      53 x 7 x 69 cm
                    </p>
                  </div>
                  <div className="product_dimension-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                    <p className="product_dimension_height font-medium">Seat dimensions (hwd)</p>
                    <p className="product_dimension_height-number text-sub-text-color">
                      44 x 56 x 56 cm
                    </p>
                  </div>
                  <div className="product_dimension-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                    <p className="product_dimension_height font-medium">Leg height (cm)</p>
                    <p className="product_dimension_height-number text-sub-text-color">23</p>
                  </div>
                  <div className="product_dimension-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                    <p className="product_dimension_height font-medium">Packaging dimensions</p>
                    <p className="product_dimension_height-number text-sub-text-color">
                      1:H86 x W79 x D84 cm
                    </p>
                  </div>
                  <div className="product_dimension-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                    <p className="product_dimension_height font-medium">Weight (kg)</p>
                    <p className="product_dimension_height-number text-sub-text-color">17</p>
                  </div>
                </div>
              </div>
              <div className="product_details-wrapper flex flex-col w-full">
                <h2 className="product_details-title uppercase tracking-[2px] text-xl font-medium pb-[10px] border-b border-disable-color mb-10">
                  details
                </h2>
                <div className="product_details_inner-wrapper flex flex-col gap-5">
                  <div className="product_detail-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                    <p className="product_detail_height font-medium">Assembly</p>
                    <p className="product_detail_height-number text-sub-text-color">
                      No assembly required
                    </p>
                  </div>
                  <div className="product_detail-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                    <p className="product_detail_height font-medium">Number of seats</p>
                    <p className="product_detail_height-number text-sub-text-color">1 seater</p>
                  </div>
                  <div className="product_detail-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                    <p className="product_detail_height font-medium">Caring instructions</p>
                    <p className="product_detail_height-number text-sub-text-color">
                      Professional cleaning only
                    </p>
                  </div>
                  <div className="product_detail-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                    <p className="product_detail_height font-medium">Material</p>
                    <p className="product_detail_height-number text-sub-text-color">
                      Micro velvet, wood
                    </p>
                  </div>
                  <div className="product_detail-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                    <p className="product_detail_height font-medium">Assembly</p>
                    <p className="product_detail_height-number text-sub-text-color">
                      No assembly required
                    </p>
                  </div>
                  <div className="product_detail-wrapper flex items-center justify-between pb-5 border-b border-disable-color">
                    <p className="product_detail_height font-medium">Caring instructions</p>
                    <p className="product_detail_height-number text-sub-text-color">
                      Professional cleaning only
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product_also-like_wrapper flex flex-col">
              <div className="product_also-like_top-wrapper flex items-center justify-between">
                <h2 className="product_also-like_title font-medium lg:text-3xl text-2xl tracking-[3px] uppercase">
                  you may also like
                </h2>
                <div className="product_also-like_nav-btn-wrapper flex items-center justify-center gap-5">
                  <div className="product_also-like_left-btn w-[46px] h-[46px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                    <Image
                      src={"/icons/Icon name=chevron_left.svg"}
                      alt={"left-btn"}
                      width={10}
                      height={14}
                    />
                  </div>
                  <div className="product_also-like_right-btn w-[46px] h-[46px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                    <Image
                      src={"/icons/Icon name=chevron_right.svg"}
                      alt={"right-btn"}
                      width={10}
                      height={14}
                    />
                  </div>
                </div>
              </div>
              <div className="product_also-like_slider-wrapper mt-14">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  breakpoints={{
                    640: {
                      slidesPerView: 1.5,
                      spaceBetween: 20,
                    },
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
                    prevEl: ".product_also-like_left-btn",
                    nextEl: ".product_also-like_right-btn",
                  }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  className="popular-categories_swiper"
                >
                  <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
                    <a
                      href="#"
                      className="product relative flex flex-col lg:gap-[30px] gap-7 lg:w-[380px] w-[343px] bg-white pb-12 "
                    >
                      <div className="product_img bg-disable-text-color max-w-[380px] w-full lg:h-[380px] h-[343px]  border-[10px] border-white "></div>
                      <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-red-hot py-1 px-4 top-5 left-5 uppercase">
                        hot
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
                  </SwiperSlide>
                  <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
                    <a
                      href="#"
                      className="product relative flex flex-col lg:gap-[30px] gap-7 lg:w-[380px] w-[343px] bg-white pb-12"
                    >
                      <div className="product_img bg-disable-text-color max-w-[380px] w-full lg:h-[380px] h-[343px] border-[10px] border-white "></div>
                      {/* <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
                        POPULAR
                      </p> */}
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
                  </SwiperSlide>
                  <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
                    <a
                      href="#"
                      className="product relative flex flex-col lg:gap-[30px] gap-7 lg:w-[380px] w-[343px] bg-white pb-12"
                    >
                      <div className="product_img bg-disable-text-color max-w-[380px] w-full lg:h-[380px] h-[343px] border-[10px] border-white "></div>
                      {/* <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
                        POPULAR
                      </p> */}
                      <div className="product_img-desc flex flex-col items-center gap-3">
                        <div className="product_img-rectangle bg-disable-color w-[30px] h-[1px] mb-[10px]"></div>
                        <p className="product_img-title text-main-text-color font-medium tracking-[2px] uppercase">
                          emmi velvet chair
                        </p>
                        <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                          $240
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
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
                        <p className="product_img-title text-main-text-color font-medium tracking-[2px] uppercase">
                          caleido chair
                        </p>
                        <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                          $355
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                </Swiper>
                <a
                  href="#"
                  className="product-section_button flex items-center text-white justify-center gap-3 lg:max-w-[300px] max-w-[343px] mt-14 bg-disable-color py-3 sm:mx-auto"
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
            <div className="product_review-wrapper md:mt-[100px] mt-[60px] flex gap-10 lg:flex-row flex-col">
              <div className="product_customer-reviews_wrapper flex flex-col basis-2/3 items-center">
                <div className="product-divider w-10 h-[2px] bg-accent-color"></div>
                <h2 className="product_customer-reviews_title mt-[30px] text-3xl font-medium tracking-[3px] uppercase text-center">
                  customer reviews
                </h2>
                <div className="product-divider w-full h-[1px] bg-disable-color lg:my-[60px] my-10"></div>
                <p className="product_customer-reviews_desc text-lg text-sub-text-color max-w-[555px] text-center">
                  There is no any customer review of this product. Be the first and add your review
                </p>
                <div className="product-divider w-full h-[1px] bg-disable-color lg:mt-[60px] mt-10"></div>
              </div>
              <div className="product_add-review_wrapper flex flex-col basis-1/3 items-center">
                <form action="#" className="product_add-review_form flex flex-col items-center">
                  <div className="product-divider w-10 h-[2px] bg-accent-color"></div>
                  <h2 className="product_add-review_title mt-[30px] text-3xl font-medium tracking-[3px] uppercase text-center">
                    add review
                  </h2>
                  <div className="product_add-review-rate-wrapper lg:mt-14 lg:mb-12 my-10 flex flex-col gap-3 items-center">
                    <p className="product_add-review-rate_title uppercase text-sm text-sub-text-color">
                      your rate
                    </p>
                    <p className="product_add-review-rate_inner-wrapper flex items-center">
                      <Image
                        src={"/icons/empty-Star.svg"}
                        alt={"menu-close-btn"}
                        width={25}
                        height={25}
                        className="cursor-pointer"
                      />
                      <Image
                        src={"/icons/empty-Star.svg"}
                        alt={"menu-close-btn"}
                        width={25}
                        height={25}
                        className="cursor-pointer"
                      />
                      <Image
                        src={"/icons/empty-Star.svg"}
                        alt={"menu-close-btn"}
                        width={25}
                        height={25}
                        className="cursor-pointer"
                      />
                      <Image
                        src={"/icons/empty-Star.svg"}
                        alt={"menu-close-btn"}
                        width={25}
                        height={25}
                        className="cursor-pointer"
                      />
                      <Image
                        src={"/icons/empty-Star.svg"}
                        alt={"menu-close-btn"}
                        width={25}
                        height={25}
                        className="cursor-pointer"
                      />
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    id="product_add-review_name-input"
                    className="product_add-review_name-input outline-none w-full px-[15px] caret-secondary-text-color text-secondary-text-color border border-disable-color h-[46px]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    id="product_add-review_email-input"
                    className="product_add-review_email-input outline-none w-full px-[15px] caret-secondary-text-color text-secondary-text-color border border-disable-color h-[46px] lg:my-12 my-10"
                  />
                  <textarea
                    name="product_add-review_text"
                    id="product_add-review_text"
                    cols={30}
                    rows={10}
                    className="product_add-review_text outline-none w-full p-[15px] caret-secondary-text-color text-secondary-text-color border border-disable-color resize-none h-[80px]"
                    placeholder="Your review"
                  ></textarea>
                  <button
                    type="submit"
                    className="product-section_button flex items-center text-white justify-center gap-3 w-full lg:mt-14 mt-8 bg-disable-color py-3 sm:mx-auto"
                  >
                    <p className="product-section_button-title uppercase text-lg font-semibold tracking-[2px]">
                      post review
                    </p>
                    <Image
                      src={"icons/Icon name=next arrow - white.svg"}
                      alt={"next arrow"}
                      width={24}
                      height={16}
                      className="fill-white text-white"
                    />
                  </button>
                </form>
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
