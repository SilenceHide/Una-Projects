import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function Home() {
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

      <main className="main mt-[70px] lg:mt-0">
        <section className="banner-section flex gap-1 relative justify-center items-center md:items-stretch">
          <div className="banner_heading-wrapper xl:min-w-[660px] lg:min-w-[450px] max-w-[400px] flex flex-col gap-3 shadow-white-box-shadow-plus">
            <div className="banner_heading bg-main-bg-color xl:px-[140px] lg:px-[70px] px-4 lg:py-[130px] py-[60px] order">
              <div className="banner_divider w-10 h-[2px] bg-accent-color mb-[30px]"></div>
              <h1 className="banner_title font-medium text-3xl w-[290px] sm:w-[400px] md:w-[290px] tracking-[3px]">
                PROFITABLE OFFERS! DON’T MISS IT
              </h1>
              <div className="banner_nav-btn_wrapper flex gap-6 lg:mt-[60px] mt-10">
                <div className="banner_nav-left-btn_wrapper border border-disable-color w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center cursor-pointer">
                  <Image
                    src={"/icons/Icon name=prev arrow.svg"}
                    alt={"prev-icon"}
                    width={24}
                    height={16}
                  />
                </div>
                <div className="banner_nav-right-btn_wrapper border border-disable-color w-[60px] h-[60px] rounded-full bg-white flex justify-center items-center cursor-pointer">
                  <Image
                    src={"/icons/Icon name=next arrow.svg"}
                    alt={"next-icon"}
                    width={24}
                    height={16}
                  />
                </div>
              </div>
            </div>
            <div className="banner_inner-img-wrapper bg-disable-text-color shadow-white-box-shadow min-h-[260px] w-full md:hidden">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".banner_nav-left-btn_wrapper",
                  nextEl: ".banner_nav-right-btn_wrapper",
                }}
                className="banner_img-swiper text-secondary-text-color flex max-w-[400px] max-h-[260px] items-center justify-center "
              >
                <SwiperSlide className="banner_img-wrapper">
                  <div className="banner_img-wrapper flex items-center justify-center">
                    <Image
                      alt="img"
                      src={"/images/Banner/Chandelir1.webp"}
                      width={600}
                      height={600}
                      className="w-full bg-center bg-cover object-cover "
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="banner_img-wrapper">
                  <div className="banner_img-wrapper flex items-center justify-center">
                    <Image
                      alt="img"
                      src={"/images/Banner/Consool3.webp"}
                      width={600}
                      height={600}
                      className="w-full bg-center bg-cover object-cover "
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="banner_img-wrapper">
                  <div className="banner_img-wrapper flex items-center justify-center">
                    <Image
                      alt="img"
                      src={"/images/Banner/DinnerTable1.webp"}
                      width={600}
                      height={600}
                      className="w-full bg-center bg-cover object-cover "
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="banner_product-info bg-main-bg-color xl:px-[140px] lg:px-[70px] lg:py-[130px] px-4 pt-[110px] pb-[60px]">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".banner_nav-left-btn_wrapper",
                  nextEl: ".banner_nav-right-btn_wrapper",
                }}
                className="banner_product-info-swiper text-secondary-text-color flex lg:max-w-[600px] w-full justify-between"
              >
                <SwiperSlide className="banner_product-info_wrapper">
                  <div className="banner_product-info_wrapper flex flex-col">
                    <p className="banner_product-tag text-white text-sm bg-red-hot py-1 px-4 w-[65px] tracking-[1px]">
                      HOT
                    </p>
                    <h2 className="banner_product-title font-medium text-2xl max-w-[340px] mt-[30px] mb-4 tracking-[3px]">
                      PENNY PENDANT LAMP SHADE, MUTED GREY
                    </h2>
                    <div className="banner_product-price_wrapper flex gap-3 text-xl">
                      <p className="banner_product-price text-red-hot font-medium">$300</p>
                      <p className="banner_product-price text-disable-color line-through decoration-[0.5px]">
                        $390
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="banner_product-info_wrapper">
                  <div className="banner_product-info_wrapper flex flex-col">
                    <p className="banner_product-tag text-white text-sm bg-red-hot py-1 px-4 w-[65px] tracking-[1px]">
                      HOT
                    </p>
                    <h2 className="banner_product-title font-medium text-2xl max-w-[340px] mt-[30px] mb-4 tracking-[3px]">
                      PENNY PENDANT LAMP SHADE, MUTED GREY
                    </h2>
                    <div className="banner_product-price_wrapper flex gap-3 text-xl">
                      <p className="banner_product-price text-red-hot font-medium">$300</p>
                      <p className="banner_product-price text-disable-color line-through decoration-[0.5px]">
                        $390
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="banner_product-info_wrapper">
                  <div className="banner_product-info_wrapper flex flex-col">
                    <p className="banner_product-tag text-white text-sm bg-red-hot py-1 px-4 w-[65px] tracking-[1px]">
                      HOT
                    </p>
                    <h2 className="banner_product-title font-medium text-2xl max-w-[340px] mt-[30px] mb-4 tracking-[3px]">
                      PENNY PENDANT LAMP SHADE, MUTED GREY
                    </h2>
                    <div className="banner_product-price_wrapper flex gap-3 text-xl">
                      <p className="banner_product-price text-red-hot font-medium">$300</p>
                      <p className="banner_product-price text-disable-color line-through decoration-[0.5px]">
                        $390
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="banner_img-wrapper bg-disable-text-color min-h-full w-full md:block hidden overflow-hidden">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              modules={[Navigation]}
              navigation={{
                prevEl: ".banner_nav-left-btn_wrapper",
                nextEl: ".banner_nav-right-btn_wrapper",
              }}
              className="banner_img-swiper text-secondary-text-color flex max-w-[1035px] max-h-[958px] items-center justify-center "
            >
              <SwiperSlide className="banner_img-wrapper">
                <div className="banner_img-wrapper flex items-center justify-center">
                  <Image
                    alt="img"
                    src={"/images/Banner/Chandelir1.webp"}
                    width={600}
                    height={600}
                    className="w-full bg-center bg-cover object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="banner_img-wrapper">
                <div className="banner_img-wrapper flex items-center justify-center">
                  <Image
                    alt="img"
                    src={"/images/Banner/Consool3.webp"}
                    width={600}
                    height={600}
                    className="w-full bg-center bg-cover object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="banner_img-wrapper">
                <div className="banner_img-wrapper flex items-center justify-center">
                  <Image
                    alt="img"
                    src={"/images/Banner/DinnerTable1.webp"}
                    width={600}
                    height={600}
                    className="w-full bg-center bg-cover object-cover "
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="banner_detail-img-wrapper bg-white absolute xl:w-[460px] lg:w-[400px] md:w-[280px] w-[200px] xl:h-[460px] lg:h-[400px] md:h-[280px] h-[200px] rounded-full xl:left-[425px] lg:left-[255px] md:left-[190px] xl:top-[265px] lg:top-[330px] md:top-[225px] top-[535px] sm:top-[500px] z-10 flex items-center justify-center overflow-hidden">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              modules={[Navigation]}
              navigation={{
                prevEl: ".banner_nav-left-btn_wrapper",
                nextEl: ".banner_nav-right-btn_wrapper",
              }}
              className="banner_detail-img-swiper text-secondary-text-color flex lg:max-w-[300px] max-w-[150px] w-full justify-between"
            >
              <SwiperSlide className="banner_detail-img-wrapper">
                <div className="banner_detail-img-wrapper flex items-center justify-center">
                  <Image
                    alt="img"
                    src={"/images/Banner/Chandelir2.webp"}
                    width={450}
                    height={450}
                    className="w-full bg-center bg-cover object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="banner_detail-img-wrapper">
                <div className="banner_detail-img-wrapper flex items-center justify-center">
                  <Image
                    alt="img"
                    src={"/images/Banner/Consool2.webp"}
                    width={450}
                    height={450}
                    className="w-full bg-center bg-cover object-cover "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="banner_detail-img-wrapper">
                <div className="banner_detail-img-wrapper flex items-center justify-center">
                  <Image
                    alt="img"
                    src={"/images/Banner/DinnerTable2.webp"}
                    width={450}
                    height={450}
                    className="w-full bg-center bg-cover object-cover "
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="product-section bg-main-bg-color mt-[10px] md:pt-[110px] pt-[80px] pb-5">
          <div className="container">
            <div className="product-section_wrapper">
              <div className="product_tab-wrapper">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={2.5}
                  breakpoints={{
                    440: {
                      spaceBetween: 0,
                      slidesPerView: 4,
                    },
                  }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  className="product_tab-swiper text-secondary-text-color flex lg:max-w-[600px] justify-between"
                >
                  <SwiperSlide className="product_tab cursor-pointer flex justify-center items-center ">
                    <a className="product_tab-title font-medium lg:text-3xl text-2xl tracking-[3px] text-center hover:text-main-text-color border-b-[3px] border-transparent hover:border-accent-color transition-all">
                      ALL
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="product_tab cursor-pointer flex justify-center items-center ">
                    <a className="product_tab-title font-medium lg:text-3xl text-2xl tracking-[3px] text-center hover:text-main-text-color border-b-[3px] border-transparent hover:border-accent-color transition-all active-tab">
                      POPULAR
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="product_tab cursor-pointer flex justify-center items-center ">
                    <a className="product_tab-title font-medium lg:text-3xl text-2xl tracking-[3px] text-center hover:text-main-text-color border-b-[3px] border-transparent hover:border-accent-color transition-all">
                      HOT
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="product_tab cursor-pointer flex justify-center items-center ">
                    <a className="product_tab-title font-medium lg:text-3xl text-2xl tracking-[3px] text-center hover:text-main-text-color border-b-[3px] border-transparent hover:border-accent-color transition-all">
                      NEW
                    </a>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="products_wrapper grid 3xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-10 lg:mt-14 mt-10 justify-center justify-items-center">
                <a
                  href="#"
                  className="product relative flex flex-col lg:gap-[30px] gap-7 lg:w-[380px] w-[343px] bg-white pb-12 "
                >
                  <div className="product_img bg-disable-text-color max-w-[380px] w-full lg:h-[380px] h-[343px]  border-[10px] border-white "></div>
                  <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
                    POPULAR
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
                    <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
                      TIRADO CHAIR
                    </p>
                    <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                      $280
                    </p>
                  </div>
                </a>
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
                    <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
                      CALEIDO LAMP
                    </p>
                    <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                      $355
                    </p>
                  </div>
                </a>
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
                    <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
                      EMMI SET
                    </p>
                    <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                      $240
                    </p>
                  </div>
                </a>
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
                    <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
                      ILLARIA FLOOR LAMP
                    </p>
                    <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                      $380
                    </p>
                  </div>
                </a>
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
                    <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
                      CALEIDO CHAIR
                    </p>
                    <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                      $355
                    </p>
                  </div>
                </a>
                <a
                  href="#"
                  className="product relative flex flex-col lg:gap-[30px] gap-7 lg:w-[380px] w-[343px] bg-white pb-12"
                >
                  <div className="product_img bg-disable-text-color max-w-[380px] w-full lg:h-[380px] h-[343px]  border-[10px] border-white "></div>
                  <p className="product_img-tag tracking-[1px] absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
                    POPULAR
                  </p>
                  <div className="product_img-desc flex flex-col items-center gap-3">
                    <div className="product_img-rectangle bg-disable-color w-[30px] h-[1px] mb-[10px]"></div>
                    <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
                      SCOTT ANGLE SOFA
                    </p>
                    <div className="product_img-price_wrapper flex gap-2">
                      <p className="product_img-price text-red-hot font-medium tracking-[1px]">
                        $4 900
                      </p>
                      <p className="product_img-price text-disable-color line-through decoration-[0.5px] tracking-[1px]">
                        $5 400
                      </p>
                    </div>
                  </div>
                </a>
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
                    <p className="product_img-title text-main-text-color font-medium tracking-[2px]">
                      HAINESS WIDE SIDEBOARD
                    </p>
                    <p className="product_img-price text-accent-color font-medium tracking-[1px]">
                      $1 750
                    </p>
                  </div>
                </a>
              </div>
              <a
                href="#"
                className="product-section_button flex items-center text-white justify-center gap-3 lg:max-w-[300px] max-w-[343px] mt-14 bg-disable-color py-3 m-auto h-[60px]"
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
        </section>

        <section className="popular-categories-section bg-main-bg-color md:pt-[110px] pt-[60px] pb-5 ">
          <div className="container">
            <div className="popular-categories_wrapper">
              <div className="popular-categories_top-wrapper flex items-center justify-between">
                <h2 className="popular-categories_title font-medium lg:text-3xl text-2xl tracking-[3px]">
                  POPULAR CATEGORIES
                </h2>
                <div className="popular-categories_nav-btn-wrapper flex items-center justify-center gap-5">
                  <div className="popular-categories_left-btn w-[46px] h-[46px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                    <Image
                      src={"/icons/Icon name=chevron_left.svg"}
                      alt={"left-btn"}
                      width={10}
                      height={14}
                    />
                  </div>
                  <div className="popular-categories_right-btn w-[46px] h-[46px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                    <Image
                      src={"/icons/Icon name=chevron_right.svg"}
                      alt={"right-btn"}
                      width={10}
                      height={14}
                    />
                  </div>
                </div>
              </div>
              <div className="popular-categories mt-14">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  breakpoints={{
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
                    prevEl: ".popular-categories_left-btn",
                    nextEl: ".popular-categories_right-btn",
                  }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  className="popular-categories_swiper"
                >
                  <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
                    <a
                      href="#"
                      className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                    >
                      <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                      <p className="popular-category_title tracking-[2px]">SOFAS</p>
                    </a>
                    <a
                      href="#"
                      className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                    >
                      <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                      <p className="popular-category_title tracking-[2px]">BEDS</p>
                    </a>
                    <a
                      href="#"
                      className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                    >
                      <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                      <p className="popular-category_title tracking-[2px]">LIGHTING</p>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
                    <a
                      href="#"
                      className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                    >
                      <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                      <p className="popular-category_title tracking-[2px]">CHAIRS</p>
                    </a>
                    <a
                      href="#"
                      className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                    >
                      <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                      <p className="popular-category_title tracking-[2px]">GARDEN</p>
                    </a>
                    <a
                      href="#"
                      className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                    >
                      <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                      <p className="popular-category_title tracking-[2px]">TEXTILES</p>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
                    <a
                      href="#"
                      className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                    >
                      <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                      <p className="popular-category_title tracking-[2px]">TABLE</p>
                    </a>
                    <a
                      href="#"
                      className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                    >
                      <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                      <p className="popular-category_title tracking-[2px]">PET BEDS</p>
                    </a>
                    <a
                      href="#"
                      className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                    >
                      <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                      <p className="popular-category_title tracking-[2px]">DECOR</p>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="popular-categories_col lg:w-[400px] w-[343px]">
                    <a
                      href="#"
                      className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                    >
                      <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                      <p className="popular-category_title tracking-[2px] ">STORAGE</p>
                    </a>
                    <a
                      href="#"
                      className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                    >
                      <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                      <p className="popular-category_title tracking-[2px]">DRINKWARE</p>
                    </a>
                    <a
                      href="#"
                      className="popular-category bg-white p-[10px] flex items-center gap-5 text-xl font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                    >
                      <div className="popular-category_img-wrapper w-[160px] h-[120px] bg-disable-text-color"></div>
                      <p className="popular-category_title tracking-[2px]">KITCHEN</p>
                    </a>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className="instagram-section bg-main-bg-color md:pt-[100px] pt-[60px] pb-5 flex flex-col justify-center items-center md:px-8 px-4">
          <div className="instagram-section_divider bg-accent-color h-[3px] w-10 mb-[30px]"></div>
          <h2 className="instagram-section_title lg:text-3xl text-2xl font-medium tracking-[3px]">
            INSTAGRAM INSPIRATION
          </h2>
          <div className="instagram_item-wrapper mt-14 flex md:gap-[10px] gap-[8px] items-center justify-center flex-wrap">
            <div className="instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
              <div className="instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/instagram_item:visible group-hover/instagram_item:opacity-100 transition-all duration-300">
                <a
                  href="#"
                  className="instagram_item-tag text-secondary-text-color hidden md:block"
                >
                  @decorinsta
                </a>
                <div className="instagram_item-info flex gap-4 items-center justify-center">
                  <div className="instagram_item-heart flex gap-1 items-center justify-center">
                    <Image
                      src={"/icons/Icon name=like - gold.svg"}
                      alt={"golden-heart"}
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                    <p>168</p>
                  </div>
                  <div className="instagram_item-comment flex gap-1 items-center justify-center">
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
            <div className="instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
              <div className="instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/instagram_item:visible group-hover/instagram_item:opacity-100 transition-all duration-300">
                <a
                  href="#"
                  className="instagram_item-tag text-secondary-text-color hidden md:block"
                >
                  @decorinsta
                </a>
                <div className="instagram_item-info flex gap-4 items-center justify-center">
                  <div className="instagram_item-heart flex gap-1 items-center justify-center">
                    <Image
                      src={"/icons/Icon name=like - gold.svg"}
                      alt={"golden-heart"}
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                    <p>168</p>
                  </div>
                  <div className="instagram_item-comment flex gap-1 items-center justify-center">
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
            <div className="instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
              <div className="instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/instagram_item:visible group-hover/instagram_item:opacity-100 transition-all duration-300">
                <a
                  href="#"
                  className="instagram_item-tag text-secondary-text-color hidden md:block"
                >
                  @decorinsta
                </a>
                <div className="instagram_item-info flex gap-4 items-center justify-center">
                  <div className="instagram_item-heart flex gap-1 items-center justify-center">
                    <Image
                      src={"/icons/Icon name=like - gold.svg"}
                      alt={"golden-heart"}
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                    <p>168</p>
                  </div>
                  <div className="instagram_item-comment flex gap-1 items-center justify-center">
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
            <div className="instagram_item md:max-w-[364px] max-w-[167px] flex flex-col group/instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
              <div className="instagram_item-img md:w-[364px] md:h-[364px] w-[167px] h-[167px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/instagram_item:visible group-hover/instagram_item:opacity-100 transition-all duration-300">
                <a
                  href="#"
                  className="instagram_item-tag text-secondary-text-color hidden md:block"
                >
                  @decorinsta
                </a>
                <div className="instagram_item-info flex gap-4 items-center justify-center">
                  <div className="instagram_item-heart flex gap-1 items-center justify-center">
                    <Image
                      src={"/icons/Icon name=like - gold.svg"}
                      alt={"golden-heart"}
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                    <p>168</p>
                  </div>
                  <div className="instagram_item-comment flex gap-1 items-center justify-center">
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
            <div className="instagram_item md:max-w-[364px] max-w-[343px] flex flex-col group/instagram_item transition-all duration-300 hover:shadow-main-box-shadow md:mb-0 mb-[-45px] md:static relative hover:z-10">
              <div className="instagram_item-img md:w-[364px] md:h-[364px] w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="instagram_item-content bg-white flex items-center justify-between py-3 px-6 invisible opacity-0 group-hover/instagram_item:visible group-hover/instagram_item:opacity-100 transition-all duration-300">
                <a href="#" className="instagram_item-tag text-secondary-text-color">
                  @decorinsta
                </a>
                <div className="instagram_item-info flex gap-4 items-center justify-center">
                  <div className="instagram_item-heart flex gap-1 items-center justify-center">
                    <Image
                      src={"/icons/Icon name=like - gold.svg"}
                      alt={"golden-heart"}
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                    <p>168</p>
                  </div>
                  <div className="instagram_item-comment flex gap-1 items-center justify-center">
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
        </section>

        <section className="blog-section bg-main-bg-color md:pt-[80px] pt-[60px] md:pb-[120px] pb-[56px]">
          <div className="container">
            <div className="blog_top-wrapper flex items-center justify-between gap-2 sm:gap-0">
              <h2 className="blog_title font-medium lg:text-3xl text-2xl tracking-[3px]">
                INTERESTING IN BLOG
              </h2>
              <div className="blog_nav-btn-wrapper flex items-center justify-center gap-5">
                <div className="blog_left-btn w-[46px] h-[46px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                  <Image
                    src={"/icons/Icon name=chevron_left.svg"}
                    alt={"left-btn"}
                    width={10}
                    height={14}
                  />
                </div>
                <div className="blog_right-btn w-[46px] h-[46px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                  <Image
                    src={"/icons/Icon name=chevron_right.svg"}
                    alt={"right-btn"}
                    width={10}
                    height={14}
                  />
                </div>
              </div>
            </div>
            <div className="blog_items-wrapper mt-14">
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
                  prevEl: ".blog_left-btn",
                  nextEl: ".blog_right-btn",
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="blog_items_swiper"
              >
                <SwiperSlide className="blog_item lg:w-[520px] min-w-[343px] group/blog_item transition-all duration-300 hover:shadow-main-box-shadow max-w-[520px] ">
                  <a href="#">
                    <div className="blog_item-img lg:w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
                    <div className="blog_item-content flex flex-col items-center justify-center pt-5 pb-7 md:px-[60px] lg:px-[100px] px-3 transition-all duration-300 group-hover/blog_item:bg-white lg:w-[520px]">
                      <div className="blog_divider w-[30px] h-[1px] bg-disable-color transition-all duration-300 group-hover/blog_item:opacity-0"></div>
                      <h3 className="blog_item-title font-medium tracking-[2px] text-center mt-5 mb-3 text-sub-text-color transition-all duration-300 group-hover/blog_item:text-main-text-color group-hover/blog_item:mt-4">
                        UPDATING YOUR BEDROOM? IT’S EASIER THAN YOU THINK
                      </h3>
                      <p className="blog_item-date font-medium text-disable-color group-hover/blog_item:text-accent-color transition-all duration-300">
                        May 2, 2022
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="blog_item lg:w-[520px] min-w-[343px] group/blog_item transition-all duration-300 hover:shadow-main-box-shadow max-w-[520px]">
                  <a href="#">
                    <div className="blog_item-img lg:w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
                    <div className="blog_item-content flex flex-col items-center justify-center pt-5 pb-7 md:px-[60px] lg:px-[100px] px-3 transition-all duration-300 group-hover/blog_item:bg-white lg:w-[520px]">
                      <div className="blog_divider w-[30px] h-[1px] bg-disable-color transition-all duration-300 group-hover/blog_item:opacity-0"></div>
                      <h3 className="blog_item-title font-medium tracking-[2px] text-center mt-5 mb-3 text-sub-text-color transition-all duration-300 group-hover/blog_item:text-main-text-color group-hover/blog_item:mt-4">
                        BACK ON THE MENU: HOSTING A POST-LOCKDOWN DINNER PARTY
                      </h3>
                      <p className="blog_item-date font-medium text-disable-color group-hover/blog_item:text-accent-color transition-all duration-300">
                        May 1, 2022
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="blog_item lg:w-[520px] min-w-[343px] group/blog_item transition-all duration-300 hover:shadow-main-box-shadow max-w-[520px]">
                  <a href="#">
                    <div className="blog_item-img lg:w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
                    <div className="blog_item-content flex flex-col items-center justify-center pt-5 pb-7 md:px-[60px] lg:px-[100px] px-3 transition-all duration-300 group-hover/blog_item:bg-white lg:w-[520px]">
                      <div className="blog_divider w-[30px] h-[1px] bg-disable-color transition-all duration-300 group-hover/blog_item:opacity-0"></div>
                      <h3 className="blog_item-title font-medium tracking-[2px] text-center mt-5 mb-3 text-sub-text-color transition-all duration-300 group-hover/blog_item:text-main-text-color group-hover/blog_item:mt-4">
                        HOW TO REFRESH YOUR KITCHEN IN 5 EASY STEPS
                      </h3>
                      <p className="blog_item-date font-medium text-disable-color group-hover/blog_item:text-accent-color transition-all duration-300">
                        February 27, 2022
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
            <a
              href="#"
              className="blog-section_button flex items-center text-white justify-center gap-3 lg:max-w-[300px] max-w-[343px] sm:mt-14 mt-10 bg-disable-color py-3 m-auto h-[60px]"
            >
              <p className="blog-section_button-title tracking-[2px]">READ MORE ARTICLES</p>
              <Image
                src={"icons/Icon name=next arrow - white.svg"}
                alt={"next arrow"}
                width={24}
                height={16}
                className="fill-white text-white"
              />
            </a>
          </div>
        </section>
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
