import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Pagination, Navigation, Grid } from "swiper/modules";

export default function Subcategories() {
  const [navOpen, isNavOpen] = useState(false);
  const [searchBoxOpen, isSearchBoxOpen] = useState(false);
  const [cartOpen, isCartOpen] = useState(false);
  const [promocodeBasketOpen, isPromocodeBasketOpen] = useState(false);
  const [filterOpen, isFilterOpen] = useState(false);
  const [sortOpen, isSortOpen] = useState(false);

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
                className={`menu text-secondary-text-color right-0 top-[70px] lg:p-0 lg:overflow-hidden md:overflow-visible overflow-scroll transition-all duration-300 px-4 py-10 lg:h-[100px] md:h-fit h-[90vh] md:shadow-main-box-shadow lg:shadow-none ${
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
                    <div className="mega-menu md:absolute bg-white lg:border-t border-disable-text-color top-[100px] bottom-0 left-0 right-0 transition-all lg:py-[60px] lg:px-[140px] xl:px-[70px] 3xl:px-[140px] md:shadow-main-box-shadow xl:justify-between flex invisible opacity-0 group-hover/menu-item:visible group-hover/menu-item:opacity-100 lg:h-fit md:h-[70vh] h-0 lg:group-hover/menu-item:h-fit group-hover/menu-item:h-[70vh] flex-wrap xl:gap-0 xs:px-5 gap-10 my-0 md:group-hover/menu-item:my-0 group-hover/menu-item:my-10 md:my-0 z-50 cursor-default lg:overflow-visible overflow-scroll md:pb-7">
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
                                    width={22}
                                    height={22}
                                  />
                                </div>
                                <p className="header_basket_product-number_count">2</p>
                                <div className="header_basket_product-number_plus-icon w-[46px] h-[46px] border border-disable-color rounded-full flex items-center justify-center cursor-pointer">
                                  <Image
                                    src={"/icons/Icon name=plus.svg"}
                                    alt={"cart-icon"}
                                    width={22}
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
                                    width={22}
                                    height={22}
                                  />
                                </div>
                                <p className="header_basket_product-number_count">1</p>
                                <div className="header_basket_product-number_plus-icon w-[46px] h-[46px] border border-disable-color rounded-full flex items-center justify-center cursor-pointer">
                                  <Image
                                    src={"/icons/Icon name=plus.svg"}
                                    alt={"cart-icon"}
                                    width={22}
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

      <main className="main-subcategories lg:pt-10 pt-24 pb-[100px] bg-main-bg-color">
        <div className="container">
          <div className="subcategories_wrapper flex flex-col">
            <div className="subcategories_breadcrumbs flex items-center gap-2">
              <p className="subcategories_breadcrumb text-secondary-text-color font-medium text-[13px]">
                Home
              </p>
              <Image
                src={"/icons/Icon name=chevron_right.svg"}
                alt={"chevron_right"}
                width={7}
                height={10}
              />
              <p className="subcategories_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
                New In
              </p>
            </div>
            <div className="subcategories lg:mt-10 mt-[30px] flex max-h-[220px]">
              <Swiper
                slidesPerView={1}
                grid={{
                  rows: 1,
                }}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                modules={[Grid, Pagination]}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                    grid: { rows: 2 },
                  },
                  1280: {
                    slidesPerView: 4,
                    grid: { rows: 2 },
                  },
                  1640: {
                    slidesPerView: 5,
                    grid: { rows: 2 },
                  },
                }}
                className="subcategories_slider flex items-center justify-center "
              >
                <SwiperSlide className="subcategories_slide min-w-[312px] h-[100px]">
                  <a
                    href="#"
                    className="subcategory bg-white p-[10px] flex items-center gap-3 font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="subcategory_img-wrapper min-w-[110px] h-[80px] bg-disable-text-color"></div>
                    <p className="subcategory_title tracking-[2px] uppercase">mirrors</p>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="subcategories_slide min-w-[312px] h-[100px]">
                  <a
                    href="#"
                    className="subcategory bg-white p-[10px] flex items-center gap-3 font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="subcategory_img-wrapper min-w-[110px] h-[80px] bg-disable-text-color"></div>
                    <p className="subcategory_title tracking-[2px] uppercase">wall art</p>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="subcategories_slide min-w-[312px] h-[100px]">
                  <a
                    href="#"
                    className="subcategory bg-white p-[10px] flex items-center gap-3 font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="subcategory_img-wrapper min-w-[110px] h-[80px] bg-disable-text-color"></div>
                    <p className="subcategory_title tracking-[2px] uppercase">clocks</p>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="subcategories_slide min-w-[312px] h-[100px]">
                  <a
                    href="#"
                    className="subcategory bg-white p-[10px] flex items-center gap-3 font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="subcategory_img-wrapper min-w-[110px] h-[80px] bg-disable-text-color"></div>
                    <p className="subcategory_title tracking-[2px] uppercase">vases</p>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="subcategories_slide min-w-[312px] h-[100px]">
                  <a
                    href="#"
                    className="subcategory bg-white p-[10px] flex items-center gap-3 font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="subcategory_img-wrapper min-w-[110px] h-[80px] bg-disable-text-color"></div>
                    <p className="subcategory_title tracking-[2px] uppercase">storage</p>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="subcategories_slide min-w-[312px] h-[100px]">
                  <a
                    href="#"
                    className="subcategory bg-white p-[10px] flex items-center gap-3 font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="subcategory_img-wrapper min-w-[110px] h-[80px] bg-disable-text-color"></div>
                    <p className="subcategory_title tracking-[2px] uppercase">candles</p>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="subcategories_slide min-w-[312px] h-[100px]">
                  <a
                    href="#"
                    className="subcategory bg-white p-[10px] flex items-center gap-3 font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="subcategory_img-wrapper min-w-[110px] h-[80px] bg-disable-text-color"></div>
                    <p className="subcategory_title tracking-[2px] uppercase">Shelves</p>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="subcategories_slide min-w-[312px] h-[100px]">
                  <a
                    href="#"
                    className="subcategory bg-white p-[10px] flex items-center gap-3 font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="subcategory_img-wrapper min-w-[110px] h-[80px] bg-disable-text-color"></div>
                    <p className="subcategory_title tracking-[2px] uppercase">Plant Pots</p>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="subcategories_slide min-w-[312px] h-[100px]">
                  <a
                    href="#"
                    className="subcategory bg-white p-[10px] flex items-center gap-3 font-medium border-t-[3px] border-transparent hover:border-t-accent-color hover:shadow-main-box-shadow transition-all mb-3"
                  >
                    <div className="subcategory_img-wrapper min-w-[110px] h-[80px] bg-disable-text-color"></div>
                    <p className="subcategory_title tracking-[2px] uppercase">
                      Bathroom Accessories
                    </p>
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="subcategories_divider w-full h-[1px] bg-disable-color lg:mt-10 mt-[30px] lg:mb-[30px] mb-5 "></div>
            <div className="subcategories_title-wrapper flex items-end justify-between">
              <h1 className="subcategories_title lg:text-3xl text-2xl font-medium tracking-[3px] uppercase">
                home decor
              </h1>
              <div className="subcategories_filter-sort_wrapper hidden items-end gap-6 xl:flex">
                <div className="subcategories_filter-sort_inner-wrapper flex flex-col gap-[10px] relative ">
                  <p
                    className={`subcategories_filter-sort_label uppercase font-semibold text-xs tracking-[1px] transition-all ${
                      sortOpen ? "visible opacity-100" : "invisible opacity-0"
                    }`}
                  >
                    Sort by
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      isFilterOpen(false);
                      isSortOpen(!sortOpen);
                    }}
                    className={`subcategories_filter-sort_select h-[46px] w-[280px] p-[15px] border bg-white flex items-center justify-between transition-all ${
                      sortOpen ? "border-accent-color" : "border-disable-color"
                    }`}
                  >
                    <p className="subcategories_filter-sort_select_title font-medium text-placeholder-text-color">
                      Sort by
                    </p>
                    <Image
                      src={"/icons/Icon name=chevron_down.svg"}
                      alt={"chevron_down"}
                      width={14}
                      height={10}
                      className={`subcategories_filter-sort_select-icon pointer-events-none transition-all ${
                        sortOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  <ul
                    className={`subcategories_filter-sort_list absolute z-[10] left-[0px] top-[72px] w-[280px] p-[15px] border border-accent-color bg-white flex flex-col gap-4 transition-all  ${
                      sortOpen ? "visible opacity-100" : "invisible opacity-0"
                    }`}
                  >
                    <li
                      className="subcategories_filter-sort_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium "
                      value={"low to high"}
                    >
                      Price: low to high
                    </li>
                    <li
                      className="subcategories_filter-sort_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                      value={"high to low"}
                    >
                      Price: high to low
                    </li>
                    <li
                      className="subcategories_filter-sort_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                      value={"popular"}
                    >
                      Popular
                    </li>
                    <li
                      className="subcategories_filter-sort_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                      value={"new"}
                    >
                      New
                    </li>
                  </ul>
                </div>
                <button
                  onClick={() => {
                    isSortOpen(false);
                    isFilterOpen(!filterOpen);
                  }}
                  className="subcategories_filter-btn h-[46px] w-[118px] uppercase tracking-[2px] bg-disable-color text-white"
                >
                  Filters
                </button>
              </div>
            </div>
            <div className="subcategories_filter-sort-btns mt-6 flex items-center gap-4 xl:hidden relative">
              <button
                onClick={() => {
                  isSortOpen(false);
                  isFilterOpen(!filterOpen);
                }}
                className="subcategories_filter-btn flex items-center justify-center bg-disable-color w-[162px] h-[46px] gap-[10px]"
              >
                <p className="subcategories_filter-title tracking-[2px] text-white uppercase">
                  Filters
                </p>
                <p className="subcategories_filter-number tracking-[2px] text-white">4</p>
                <Image
                  src={"/icons/Icon name=close - white.svg"}
                  alt={"close"}
                  width={20}
                  height={20}
                />
              </button>
              <button
                onClick={() => {
                  isFilterOpen(false);
                  isSortOpen(!sortOpen);
                }}
                className="subcategories_sort-btn flex items-center justify-center bg-white w-[162px] h-[46px] gap-[10px] border border-disable-color"
              >
                <p className="subcategories_filter-title tracking-[2px] text-secondary-text-color uppercase">
                  Sort
                </p>
                <p className="subcategories_filter-number tracking-[2px] text-secondary-text-color">
                  1
                </p>
                <Image src={"/icons/Icon name=close.svg"} alt={"close"} width={20} height={20} />
              </button>
              <ul
                className={`subcategories_filter-sort_list absolute z-[10] left-0 right-0  top-[72px] xs:w-[280px] w-full p-[15px] bg-white flex flex-col gap-4 transition-all shadow-main-box-shadow  ${
                  sortOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                <li
                  className="subcategories_filter-sort_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium "
                  value={"low to high"}
                >
                  Price: low to high
                </li>
                <li
                  className="subcategories_filter-sort_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                  value={"high to low"}
                >
                  Price: high to low
                </li>
                <li
                  className="subcategories_filter-sort_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                  value={"popular"}
                >
                  Popular
                </li>
                <li
                  className="subcategories_filter-sort_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                  value={"new"}
                >
                  New
                </li>
              </ul>
            </div>
            {/* <div className="subcategories_filter-sort-tags mt-[30px] flex flex-row items-center gap-[10px] flex-wrap">
              <div className="subcategories_sort-tag_wrapper flex items-center justify-center gap-[6px] bg-white w-fit py-1 px-[14px] border border-disable-text-color cursor-pointer">
                <p className="subcategories_sort-tag-title font-medium text-disable-color">
                  Price:{" "}
                </p>
                <p className="subcategories_sort-tag-desc uppercase font-medium text-sm leading-6 tracking-[1px] align-middle">
                  low to high
                </p>
              </div>
              <div className="subcategories_sort-tag_wrapper flex items-center justify-center gap-[6px] bg-white w-fit py-1 px-[14px] border border-disable-text-color cursor-pointer">
                <p className="subcategories_sort-tag-title font-medium text-disable-color">
                  Price:{" "}
                </p>
                <p className="subcategories_sort-tag-desc uppercase font-medium text-sm leading-6 tracking-[1px] align-middle">
                  high to low
                </p>
              </div>
              <div className="subcategories_sort-tag_wrapper flex items-center justify-center gap-[6px] bg-white w-fit py-1 px-[14px] border border-disable-text-color cursor-pointer text-secondary-text-color selected-sort">
                <p className="subcategories_sort-tag-desc uppercase font-medium text-sm leading-6 tracking-[1px] align-middle">
                  Bestselling
                </p>
              </div>
              <div className="subcategories_sort-tag_wrapper flex items-center justify-center gap-[6px] bg-white w-fit py-1 px-[14px] border border-disable-text-color cursor-pointer text-secondary-text-color">
                <p className="subcategories_sort-tag-desc uppercase font-medium text-sm leading-6 tracking-[1px] align-middle">
                  Relevance
                </p>
              </div>
              <div className="subcategories_filter-sort-tags_divider w-[2px] h-[32px] bg-disable-color max-w-[2px]"></div>
              <div className="subcategories_filter-tag_wrapper flex items-center justify-center gap-[6px] bg-white w-fit py-1 px-[14px] border border-disable-text-color cursor-pointer">
                <p className="subcategories_filter-tag-title font-medium text-disable-color">
                  Color:{" "}
                </p>
                <p className="subcategories_filter-tag-desc uppercase font-medium text-sm leading-6 tracking-[1px] align-middle">
                  Black
                </p>
                <Image src={"/icons/Icon name=close.svg"} alt={"close"} width={16} height={16} />
              </div>
              <div className="subcategories_filter-tag_wrapper flex items-center justify-center gap-[6px] bg-white w-fit py-1 px-[14px] border border-disable-text-color cursor-pointer">
                <p className="subcategories_filter-tag-title font-medium text-disable-color">
                  Material:
                </p>
                <p className="subcategories_filter-tag-desc uppercase font-medium text-sm leading-6 tracking-[1px] align-middle">
                  Leather
                </p>
                <Image src={"/icons/Icon name=close.svg"} alt={"close"} width={16} height={16} />
              </div>
              <div className="subcategories_filter-tag_wrapper flex items-center justify-center gap-[6px] bg-white w-fit py-1 px-[14px] border border-disable-text-color cursor-pointer">
                <p className="subcategories_filter-tag-title font-medium text-disable-color">
                  Collection:
                </p>
                <p className="subcategories_filter-tag-desc uppercase font-medium text-sm leading-6 tracking-[1px] align-middle">
                  Minimalism
                </p>
                <Image src={"/icons/Icon name=close.svg"} alt={"close"} width={16} height={16} />
              </div>
              <button className="subcategories_filter-tags_clear-btn flex items-center justify-center w-fit py-1 px-[14px] uppercase border border-accent-color bg-accent-color text-white font-medium tracking-[1px] text-sm leading-6">
                clear all
              </button>
            </div> */}
            <div className="subcategories_main-wrapper mt-10 flex gap-8 relative">
              <div className="subcategories_products-wrapper flex flex-col items-center">
                <div className="subcategories_products-inner-wrapper flex items-center gap-6 flex-wrap justify-center">
                  <div className="subcategories_product bg-white overflow-hidden group/subcategories_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                    <div className="subcategories_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] min-h-[343px]: border-[10px] border-white relative">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          prevEl: ".subcategories_product-swiper_left-btn",
                          nextEl: ".subcategories_product-swiper_right-btn",
                        }}
                        modules={[Pagination, Navigation]}
                        className="subcategories_product-swiper h-full"
                      >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                      </Swiper>
                      <Image
                        src={"/icons/prev-btn.svg"}
                        alt={"prev-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all"
                      />
                      <Image
                        src={"/icons/next-btn.svg"}
                        alt={"next-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all cursor-pointer"
                      />
                    </div>
                    <div className="subcategories_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/subcategories_product:pt-[15px] duration-200">
                      <div className="subcategories_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/subcategories_product:hidden transition-all duration-200"></div>
                      <p className="subcategories_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/subcategories_product:mt-0 duration-200 ">
                        Tirado chair
                      </p>
                      <p className="subcategories_product-price text-accent-color font-medium tracking-[1px] transition-all group-hover/subcategories_product:pb-[15px] duration-200 ">
                        $280
                      </p>
                      <button className="subcategories_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all group-hover/subcategories_product:mb-[20px] duration-100">
                        add to cart
                      </button>
                    </div>
                  </div>
                  <div className="subcategories_product bg-white overflow-hidden group/subcategories_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                    <div className="subcategories_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          prevEl: ".subcategories_product-swiper_left-btn",
                          nextEl: ".subcategories_product-swiper_right-btn",
                        }}
                        modules={[Pagination, Navigation]}
                        className="subcategories_product-swiper h-full"
                      >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                      </Swiper>
                      <Image
                        src={"/icons/prev-btn.svg"}
                        alt={"prev-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all"
                      />
                      <Image
                        src={"/icons/next-btn.svg"}
                        alt={"next-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all cursor-pointer"
                      />
                      <p className="subcategories_product-swiper-tag absolute text-white text-sm bg-red-hot py-1 px-4 top-2 left-2 tracking-[1px]">
                        HOT
                      </p>
                    </div>
                    <div className="subcategories_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/subcategories_product:pt-[15px] duration-200">
                      <div className="subcategories_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/subcategories_product:hidden transition-all duration-200"></div>
                      <p className="subcategories_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/subcategories_product:mt-0 duration-200 ">
                        Kaleido
                      </p>
                      <div className="subcategories_product-price_wrapper flex gap-2 transition-all group-hover/subcategories_product:pb-[15px]">
                        <p className="subcategories_product-price text-red-hot font-medium tracking-[1px]">
                          $199
                        </p>
                        <p className="subcategories_product-price text-disable-color line-through decoration-[0.5px] tracking-[1px]">
                          $240
                        </p>
                      </div>
                      <button className="subcategories_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all group-hover/subcategories_product:mb-[20px] duration-100">
                        add to cart
                      </button>
                    </div>
                  </div>
                  <div className="subcategories_product bg-white overflow-hidden group/subcategories_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                    <div className="subcategories_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          prevEl: ".subcategories_product-swiper_left-btn",
                          nextEl: ".subcategories_product-swiper_right-btn",
                        }}
                        modules={[Pagination, Navigation]}
                        className="subcategories_product-swiper h-full"
                      >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                      </Swiper>
                      <Image
                        src={"/icons/prev-btn.svg"}
                        alt={"prev-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all"
                      />
                      <Image
                        src={"/icons/next-btn.svg"}
                        alt={"next-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all cursor-pointer"
                      />
                    </div>
                    <div className="subcategories_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/subcategories_product:pt-[15px] duration-200">
                      <div className="subcategories_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/subcategories_product:hidden transition-all duration-200"></div>
                      <p className="subcategories_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/subcategories_product:mt-0 duration-200 ">
                        damien
                      </p>
                      <p className="subcategories_product-price text-accent-color font-medium tracking-[1px] transition-all group-hover/subcategories_product:pb-[15px] duration-200 ">
                        $310
                      </p>
                      <button className="subcategories_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all group-hover/subcategories_product:mb-[20px] duration-100">
                        add to cart
                      </button>
                    </div>
                  </div>
                  <div className="subcategories_product bg-white overflow-hidden group/subcategories_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                    <div className="subcategories_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          prevEl: ".subcategories_product-swiper_left-btn",
                          nextEl: ".subcategories_product-swiper_right-btn",
                        }}
                        modules={[Pagination, Navigation]}
                        className="subcategories_product-swiper h-full"
                      >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                      </Swiper>
                      <Image
                        src={"/icons/prev-btn.svg"}
                        alt={"prev-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all"
                      />
                      <Image
                        src={"/icons/next-btn.svg"}
                        alt={"next-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all cursor-pointer"
                      />
                      <p className="subcategories_product-swiper-tag absolute text-white text-sm bg-orange-popular py-1 px-4 top-2 left-2 tracking-[1px] uppercase">
                        popular
                      </p>
                    </div>
                    <div className="subcategories_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/subcategories_product:pt-[15px] duration-200">
                      <div className="subcategories_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/subcategories_product:hidden transition-all duration-200"></div>
                      <p className="subcategories_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/subcategories_product:mt-0 duration-200 ">
                        emmi set
                      </p>
                      <div className="subcategories_product-price_wrapper flex gap-2 transition-all group-hover/subcategories_product:pb-[15px]">
                        <p className="subcategories_product-price text-accent-color font-medium tracking-[1px]">
                          $240
                        </p>
                      </div>
                      <button className="subcategories_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all group-hover/subcategories_product:mb-[20px] duration-100">
                        add to cart
                      </button>
                    </div>
                  </div>
                  <div className="subcategories_product bg-white overflow-hidden group/subcategories_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                    <div className="subcategories_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          prevEl: ".subcategories_product-swiper_left-btn",
                          nextEl: ".subcategories_product-swiper_right-btn",
                        }}
                        modules={[Pagination, Navigation]}
                        className="subcategories_product-swiper h-full"
                      >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                      </Swiper>
                      <Image
                        src={"/icons/prev-btn.svg"}
                        alt={"prev-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all"
                      />
                      <Image
                        src={"/icons/next-btn.svg"}
                        alt={"next-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all cursor-pointer"
                      />
                    </div>
                    <div className="subcategories_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/subcategories_product:pt-[15px] duration-200">
                      <div className="subcategories_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/subcategories_product:hidden transition-all duration-200"></div>
                      <p className="subcategories_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/subcategories_product:mt-0 duration-200 ">
                        caleido lamp
                      </p>
                      <p className="subcategories_product-price text-accent-color font-medium tracking-[1px] transition-all group-hover/subcategories_product:pb-[15px] duration-200 ">
                        $355
                      </p>
                      <button className="subcategories_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all group-hover/subcategories_product:mb-[20px] duration-100">
                        add to cart
                      </button>
                    </div>
                  </div>
                  <div className="subcategories_product bg-white overflow-hidden group/subcategories_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                    <div className="subcategories_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          prevEl: ".subcategories_product-swiper_left-btn",
                          nextEl: ".subcategories_product-swiper_right-btn",
                        }}
                        modules={[Pagination, Navigation]}
                        className="subcategories_product-swiper h-full"
                      >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                      </Swiper>
                      <Image
                        src={"/icons/prev-btn.svg"}
                        alt={"prev-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all"
                      />
                      <Image
                        src={"/icons/next-btn.svg"}
                        alt={"next-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all cursor-pointer"
                      />
                      <p className="subcategories_product-swiper-tag absolute text-white text-sm bg-green-new py-1 px-4 top-2 left-2 tracking-[1px] uppercase">
                        new
                      </p>
                    </div>
                    <div className="subcategories_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/subcategories_product:pt-[15px] duration-200">
                      <div className="subcategories_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/subcategories_product:hidden transition-all duration-200"></div>
                      <p className="subcategories_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/subcategories_product:mt-0 duration-200 ">
                        haru sofa bef
                      </p>
                      <div className="subcategories_product-price_wrapper flex gap-2 transition-all group-hover/subcategories_product:pb-[15px]">
                        <p className="subcategories_product-price text-accent-color font-medium tracking-[1px]">
                          $460
                        </p>
                      </div>
                      <button className="subcategories_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all group-hover/subcategories_product:mb-[20px] duration-100">
                        add to cart
                      </button>
                    </div>
                  </div>
                  <div className="subcategories_product bg-white overflow-hidden group/subcategories_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                    <div className="subcategories_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          prevEl: ".subcategories_product-swiper_left-btn",
                          nextEl: ".subcategories_product-swiper_right-btn",
                        }}
                        modules={[Pagination, Navigation]}
                        className="subcategories_product-swiper h-full"
                      >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                      </Swiper>
                      <Image
                        src={"/icons/prev-btn.svg"}
                        alt={"prev-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all"
                      />
                      <Image
                        src={"/icons/next-btn.svg"}
                        alt={"next-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all cursor-pointer"
                      />
                      <p className="subcategories_product-swiper-tag absolute text-white text-sm bg-red-hot py-1 px-4 top-2 left-2 tracking-[1px]">
                        HOT
                      </p>
                    </div>
                    <div className="subcategories_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/subcategories_product:pt-[15px] duration-200">
                      <div className="subcategories_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/subcategories_product:hidden transition-all duration-200"></div>
                      <p className="subcategories_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/subcategories_product:mt-0 duration-200 ">
                        Scott angle sofa
                      </p>
                      <div className="subcategories_product-price_wrapper flex gap-2 transition-all group-hover/subcategories_product:pb-[15px]">
                        <p className="subcategories_product-price text-red-hot font-medium tracking-[1px]">
                          $4 900
                        </p>
                        <p className="subcategories_product-price text-disable-color line-through decoration-[0.5px] tracking-[1px]">
                          $5 400
                        </p>
                      </div>
                      <button className="subcategories_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all group-hover/subcategories_product:mb-[20px] duration-100">
                        add to cart
                      </button>
                    </div>
                  </div>
                  <div className="subcategories_product bg-white overflow-hidden group/subcategories_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                    <div className="subcategories_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          prevEl: ".subcategories_product-swiper_left-btn",
                          nextEl: ".subcategories_product-swiper_right-btn",
                        }}
                        modules={[Pagination, Navigation]}
                        className="subcategories_product-swiper h-full"
                      >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                      </Swiper>
                      <Image
                        src={"/icons/prev-btn.svg"}
                        alt={"prev-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all"
                      />
                      <Image
                        src={"/icons/next-btn.svg"}
                        alt={"next-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all cursor-pointer"
                      />
                    </div>
                    <div className="subcategories_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/subcategories_product:pt-[15px] duration-200">
                      <div className="subcategories_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/subcategories_product:hidden transition-all duration-200"></div>
                      <p className="subcategories_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/subcategories_product:mt-0 duration-200 ">
                        hainess wide sideboard
                      </p>
                      <p className="subcategories_product-price text-accent-color font-medium tracking-[1px] transition-all group-hover/subcategories_product:pb-[15px] duration-200 ">
                        $1 750
                      </p>
                      <button className="subcategories_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all group-hover/subcategories_product:mb-[20px] duration-100">
                        add to cart
                      </button>
                    </div>
                  </div>
                  <div className="subcategories_product bg-white overflow-hidden group/subcategories_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                    <div className="subcategories_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          prevEl: ".subcategories_product-swiper_left-btn",
                          nextEl: ".subcategories_product-swiper_right-btn",
                        }}
                        modules={[Pagination, Navigation]}
                        className="subcategories_product-swiper h-full"
                      >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                      </Swiper>
                      <Image
                        src={"/icons/prev-btn.svg"}
                        alt={"prev-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all"
                      />
                      <Image
                        src={"/icons/next-btn.svg"}
                        alt={"next-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all cursor-pointer"
                      />
                      <p className="subcategories_product-swiper-tag absolute text-white text-sm bg-green-new py-1 px-4 top-2 left-2 tracking-[1px] uppercase">
                        new
                      </p>
                    </div>
                    <div className="subcategories_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/subcategories_product:pt-[15px] duration-200">
                      <div className="subcategories_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/subcategories_product:hidden transition-all duration-200"></div>
                      <p className="subcategories_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/subcategories_product:mt-0 duration-200 ">
                        illaria floor lamp
                      </p>
                      <div className="subcategories_product-price_wrapper flex gap-2 transition-all group-hover/subcategories_product:pb-[15px]">
                        <p className="subcategories_product-price text-accent-color font-medium tracking-[1px]">
                          $380
                        </p>
                      </div>
                      <button className="subcategories_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all group-hover/subcategories_product:mb-[20px] duration-100">
                        add to cart
                      </button>
                    </div>
                  </div>
                  <div className="subcategories_product bg-white overflow-hidden group/subcategories_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                    <div className="subcategories_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          prevEl: ".subcategories_product-swiper_left-btn",
                          nextEl: ".subcategories_product-swiper_right-btn",
                        }}
                        modules={[Pagination, Navigation]}
                        className="subcategories_product-swiper h-full"
                      >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                      </Swiper>
                      <Image
                        src={"/icons/prev-btn.svg"}
                        alt={"prev-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all"
                      />
                      <Image
                        src={"/icons/next-btn.svg"}
                        alt={"next-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all cursor-pointer"
                      />
                    </div>
                    <div className="subcategories_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/subcategories_product:pt-[15px] duration-200">
                      <div className="subcategories_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/subcategories_product:hidden transition-all duration-200"></div>
                      <p className="subcategories_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/subcategories_product:mt-0 duration-200 ">
                        ebro bedside table
                      </p>
                      <p className="subcategories_product-price text-accent-color font-medium tracking-[1px] transition-all group-hover/subcategories_product:pb-[15px] duration-200 ">
                        $300
                      </p>
                      <button className="subcategories_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all group-hover/subcategories_product:mb-[20px] duration-100">
                        add to cart
                      </button>
                    </div>
                  </div>
                  <div className="subcategories_product bg-white overflow-hidden group/subcategories_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                    <div className="subcategories_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          prevEl: ".subcategories_product-swiper_left-btn",
                          nextEl: ".subcategories_product-swiper_right-btn",
                        }}
                        modules={[Pagination, Navigation]}
                        className="subcategories_product-swiper h-full"
                      >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                      </Swiper>
                      <Image
                        src={"/icons/prev-btn.svg"}
                        alt={"prev-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all"
                      />
                      <Image
                        src={"/icons/next-btn.svg"}
                        alt={"next-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all cursor-pointer"
                      />
                      <p className="subcategories_product-swiper-tag absolute text-white text-sm bg-red-hot py-1 px-4 top-2 left-2 tracking-[1px]">
                        HOT
                      </p>
                    </div>
                    <div className="subcategories_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/subcategories_product:pt-[15px] duration-200">
                      <div className="subcategories_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/subcategories_product:hidden transition-all duration-200"></div>
                      <p className="subcategories_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/subcategories_product:mt-0 duration-200 ">
                        aula coffee table
                      </p>
                      <div className="subcategories_product-price_wrapper flex gap-2 transition-all group-hover/subcategories_product:pb-[15px]">
                        <p className="subcategories_product-price text-red-hot font-medium tracking-[1px]">
                          $299
                        </p>
                        <p className="subcategories_product-price text-disable-color line-through decoration-[0.5px] tracking-[1px]">
                          $380
                        </p>
                      </div>
                      <button className="subcategories_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all group-hover/subcategories_product:mb-[20px] duration-100">
                        add to cart
                      </button>
                    </div>
                  </div>
                  <div className="subcategories_product bg-white overflow-hidden group/subcategories_product transition-all hover:shadow-main-box-shadow lg:max-w-[380px] max-w-[343px] h-[530px] flex flex-col items-center ">
                    <div className="subcategories_product_swiper-wrapper bg-disable-text-color lg:w-[380px] w-[343px] lg:h-[380px] h-[343px] lg:max-h-[380px] max-h-[343px] lg:min-h-[380px] border-[10px] border-white relative">
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={{
                          prevEl: ".subcategories_product-swiper_left-btn",
                          nextEl: ".subcategories_product-swiper_right-btn",
                        }}
                        modules={[Pagination, Navigation]}
                        className="subcategories_product-swiper h-full"
                      >
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                      </Swiper>
                      <Image
                        src={"/icons/prev-btn.svg"}
                        alt={"prev-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_left-btn cursor-pointer absolute top-[160px] left-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all"
                      />
                      <Image
                        src={"/icons/next-btn.svg"}
                        alt={"next-btn"}
                        width={40}
                        height={40}
                        className="subcategories_product-swiper_right-btn absolute top-[160px] right-0 z-20 invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all cursor-pointer"
                      />
                    </div>
                    <div className="subcategories_product_info-wrapper bg-white pt-[30px] px-5 w-[380px] flex flex-col items-center transition-all group-hover/subcategories_product:pt-[15px] duration-200">
                      <div className="subcategories_product-rectangle w-[30px] h-[1px] bg-disable-color group-hover/subcategories_product:hidden transition-all duration-200"></div>
                      <p className="subcategories_product-title uppercase font-medium tracking-[2px] mt-[20px] mb-[10px] transition-all group-hover/subcategories_product:mt-0 duration-200 ">
                        haru small sofa bed
                      </p>
                      <p className="subcategories_product-price text-accent-color font-medium tracking-[1px] transition-all group-hover/subcategories_product:pb-[15px] duration-200 ">
                        $2 500
                      </p>
                      <button className="subcategories_product-add-cart-btn w-[190px] h-[50px] bg-disable-color tracking-[2px] uppercase text-white invisible opacity-0 group-hover/subcategories_product:visible group-hover/subcategories_product:opacity-100 transition-all group-hover/subcategories_product:mb-[20px] duration-100">
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="subcategories_product_page-number flex items-center mt-10 sm:gap-7 gap-[18px]">
                  <div className="subcategories_product_prev-page cursor-pointer w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center border border-disable-color">
                    <Image
                      src={"/icons/Icon name=chevron_left.svg"}
                      alt={"chevron_left"}
                      width={10}
                      height={14}
                    />
                  </div>
                  <div className="subcategories_product_page-btns flex items-center sm:gap-4 gap-[10px]">
                    <div className="subcategories_product_page-btn w-[46px] h-[46px] cursor-pointer font-medium text-disable-color bg-white rounded-full flex items-center justify-center border border-disable-text-color selected-page">
                      1
                    </div>
                    <div className="subcategories_product_page-btn w-[46px] h-[46px] cursor-pointer font-medium text-disable-color bg-white rounded-full flex items-center justify-center border border-disable-text-color">
                      2
                    </div>
                    <div className="subcategories_product_page-btn w-[46px] h-[46px] cursor-pointer font-medium text-disable-color bg-white rounded-full flex items-center justify-center border border-disable-text-color">
                      3
                    </div>
                    <div className="subcategories_product_page-btn w-[46px] h-[46px] cursor-pointer font-medium text-disable-color bg-white rounded-full flex items-center justify-center border border-disable-text-color">
                      4
                    </div>
                    <div className="subcategories_product_page-btn w-[46px] h-[46px] cursor-pointer font-medium text-disable-color bg-white rounded-full items-center justify-center border border-disable-text-color sm:flex hidden">
                      5
                    </div>
                  </div>
                  <div className="subcategories_product_next-page cursor-pointer w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center border border-disable-color">
                    <Image
                      src={"/icons/Icon name=chevron_right.svg"}
                      alt={"chevron_right"}
                      width={10}
                      height={14}
                    />
                  </div>
                </div>
                <div className="subcategories_product-divider w-full h-[1px] bg-disable-color my-10"></div>
                <button className="subcategories_product_show-btn w-[214px] h-[60px] flex items-center justify-center bg-disable-color gap-[14px]">
                  <p className="subcategories_product_show-btn_title uppercase text-white tracking-[2px]">
                    show more
                  </p>
                  <Image
                    src={"/icons/Icon name=down arrow - white.svg"}
                    alt={"down arrow"}
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <div
                className={`subcategories_filters-wrapper bg-white sm:min-w-[380px] min-w-[375px] max-h-[1800px] md:px-[60px] sm:py-[50px] py-[40px] px-[30px] flex xl:justify-between  sm:flex-row flex-col xl:gap-[60px] sm:gap-x-24 gap-[40px] absolute top-0 sm:left-0 left-[-20px] right-0 z-10 flex-wrap transition-all duration-300 shadow-main-box-shadow ${
                  filterOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                <div className="subcategories_filter_price-wrapper">
                  <h2 className="subcategories_filter_price-title uppercase font-medium text-xl tracking-[2.5px]">
                    price
                  </h2>
                  <div className="subcategories_filter_divider w-[30px] h-[1px] bg-disable-color mt-[15px] mb-[30px]"></div>
                  <div className="subcategories_filter_price-range_wrapper mb-[14px] relative min-h-[20px]">
                    <input
                      id="fromSlider"
                      type="range"
                      className="subcategories_filter_price-range"
                      value={0}
                      min={0}
                      max={50}
                    />
                    <input
                      id="toSlider"
                      type="range"
                      className="subcategories_filter_price-range"
                      value={100}
                      min={51}
                      max={100}
                    />
                  </div>
                  <div className="subcategories_filter_price-input_wrapper flex items-center gap-[10px]">
                    <input
                      type="number"
                      className="subcategories_filter_price-input border border-disable-color max-w-[90px] h-[46px] p-4 outline-none caret-secondary-text-color text-secondary-text-color placeholder:text-placeholder-text-color"
                      placeholder="$50"
                      min={1}
                    />
                    <p className="subcategories_filter_price-input-divider uppercase font-medium tracking-[1px] text-sub-text-color">
                      —
                    </p>
                    <input
                      type="number"
                      className="subcategories_filter_price-input border border-disable-color max-w-[90px] h-[46px] p-4 outline-none caret-secondary-text-color text-secondary-text-color placeholder:text-placeholder-text-color"
                      placeholder="$1200"
                      min={1}
                    />
                    <button
                      type="button"
                      className="subcategories_filter_price-btn h-[46px] w-[74px] text-white bg-disable-color"
                    >
                      OK
                    </button>
                  </div>
                </div>
                <div className="subcategories_filter_material-wrapper">
                  <h2 className="subcategories_filter_material-title uppercase font-medium text-xl tracking-[2.5px]">
                    Material
                  </h2>
                  <div className="subcategories_filter_divider w-[30px] h-[1px] bg-disable-color mt-[15px] mb-[30px]"></div>
                  <div className="subcategories_filter_material-checkbox-wrapper flex flex-col gap-5">
                    <div className="subcategories_filter_material-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_material-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-metal"
                        value={"metal"}
                      />
                      <label
                        htmlFor="material-checkbox-metal"
                        className="subcategories_filter_material-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        metal
                      </label>
                    </div>
                    <div className="subcategories_filter_material-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_material-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-plastic"
                        value={"plastic"}
                      />
                      <label
                        htmlFor="material-checkbox-plastic"
                        className="subcategories_filter_material-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        plastic
                      </label>
                    </div>
                    <div className="subcategories_filter_material-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_material-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-leather"
                        value={"leather"}
                      />
                      <label
                        htmlFor="material-checkbox-leather"
                        className="subcategories_filter_material-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        leather
                      </label>
                    </div>
                    <div className="subcategories_filter_material-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_material-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-marble"
                        value={"marble"}
                      />
                      <label
                        htmlFor="material-checkbox-marble"
                        className="subcategories_filter_material-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        marble
                      </label>
                    </div>
                    <div className="subcategories_filter_material-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_material-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-glass"
                        value={"glass"}
                      />
                      <label
                        htmlFor="material-checkbox-glass"
                        className="subcategories_filter_material-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        glass
                      </label>
                    </div>
                    <div className="subcategories_filter_material-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_material-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-rattan"
                        value={"rattan"}
                      />
                      <label
                        htmlFor="material-checkbox-rattan"
                        className="subcategories_filter_material-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        rattan
                      </label>
                    </div>
                  </div>
                </div>
                <div className="subcategories_filter_color-wrapper">
                  <h2 className="subcategories_filter_color-title uppercase font-medium text-xl tracking-[2.5px]">
                    color
                  </h2>
                  <div className="subcategories_filter_divider w-[30px] h-[1px] bg-disable-color mt-[15px] mb-[30px]"></div>
                  <div className="subcategories_filter_color-checkbox-wrapper flex flex-col gap-5">
                    <div className="subcategories_filter_color-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_color-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-white"
                        value={"#FFFFFF"}
                      />
                      <label
                        htmlFor="material-checkbox-white"
                        className="subcategories_filter_color-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        white
                      </label>
                    </div>
                    <div className="subcategories_filter_color-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_color-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-black"
                        value={"#000000"}
                      />
                      <label
                        htmlFor="material-checkbox-black"
                        className="subcategories_filter_color-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        black
                      </label>
                    </div>
                    <div className="subcategories_filter_color-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_color-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-gold"
                        value={"#DBA514"}
                      />
                      <label
                        htmlFor="material-checkbox-gold"
                        className="subcategories_filter_color-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        gold
                      </label>
                    </div>
                    <div className="subcategories_filter_color-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_color-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-orange"
                        value={"#E59D49"}
                      />
                      <label
                        htmlFor="material-checkbox-orange"
                        className="subcategories_filter_color-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        orange
                      </label>
                    </div>
                    <div className="subcategories_filter_color-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_color-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-light-beige"
                        value={"#EDE4E0"}
                      />
                      <label
                        htmlFor="material-checkbox-light-beige"
                        className="subcategories_filter_color-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        light beige
                      </label>
                    </div>
                    <div className="subcategories_filter_color-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_color-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-dark-gray"
                        value={"#666666"}
                      />
                      <label
                        htmlFor="material-checkbox-dark-gray"
                        className="subcategories_filter_color-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        dark gray
                      </label>
                    </div>
                    <div className="subcategories_filter_collection-more-btn_wrapper">
                      <button className="subcategories_filter_collection-more-btn border-b border-accent-color">
                        Show 8 more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="subcategories_filter_collection-wrapper">
                  <h2 className="subcategories_filter_collection-title uppercase font-medium text-xl tracking-[2.5px]">
                    collection
                  </h2>
                  <div className="subcategories_filter_divider w-[30px] h-[1px] bg-disable-color mt-[15px] mb-[30px]"></div>
                  <div className="subcategories_filter_collection-checkbox-wrapper flex flex-col gap-5">
                    <div className="subcategories_filter_collection-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_collection-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-minimalism"
                        value={"minimalism"}
                      />
                      <label
                        htmlFor="material-checkbox-minimalism"
                        className="subcategories_filter_collection-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        minimalism
                      </label>
                    </div>
                    <div className="subcategories_filter_collection-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_collection-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-eco-style"
                        value={"eco style"}
                      />
                      <label
                        htmlFor="material-checkbox-eco-style"
                        className="subcategories_filter_collection-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        eco style
                      </label>
                    </div>
                    <div className="subcategories_filter_collection-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_collection-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-glam"
                        value={"glam"}
                      />
                      <label
                        htmlFor="material-checkbox-glam"
                        className="subcategories_filter_collection-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        glam
                      </label>
                    </div>
                    <div className="subcategories_filter_collection-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_collection-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-royal"
                        value={"royal"}
                      />
                      <label
                        htmlFor="material-checkbox-royal"
                        className="subcategories_filter_collection-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        royal
                      </label>
                    </div>
                    <div className="subcategories_filter_collection-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_collection-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-pink-rose"
                        value={"pink rose"}
                      />
                      <label
                        htmlFor="material-checkbox-pink-rose"
                        className="subcategories_filter_collection-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        pink rose
                      </label>
                    </div>
                    <div className="subcategories_filter_collection-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_collection-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-hi-tech"
                        value={"hi tech"}
                      />
                      <label
                        htmlFor="material-checkbox-hi-tech"
                        className="subcategories_filter_collection-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        hi tech
                      </label>
                    </div>
                    <div className="subcategories_filter_collection-more-btn_wrapper">
                      <button className="subcategories_filter_collection-more-btn border-b border-accent-color">
                        Show 8 more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="subcategories_filter_additional-wrapper">
                  <h2 className="subcategories_filter_additional-title uppercase font-medium text-xl tracking-[2.5px]">
                    additional
                  </h2>
                  <div className="subcategories_filter_divider w-[30px] h-[1px] bg-disable-color mt-[15px] mb-[30px]"></div>
                  <div className="subcategories_filter_additional-checkbox-wrapper flex flex-col gap-5">
                    <div className="subcategories_filter_additional-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_additional-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-set"
                        value={"set"}
                      />
                      <label
                        htmlFor="material-checkbox-set"
                        className="subcategories_filter_additional-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        set
                      </label>
                    </div>
                    <div className="subcategories_filter_additional-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_additional-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-combined"
                        value={"combined"}
                      />
                      <label
                        htmlFor="material-checkbox-combined"
                        className="subcategories_filter_additional-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        combined
                      </label>
                    </div>
                    <div className="subcategories_filter_additional-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_additional-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-transformer"
                        value={"transformer"}
                      />
                      <label
                        htmlFor="material-checkbox-transformer"
                        className="subcategories_filter_additional-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        transformer
                      </label>
                    </div>
                    <div className="subcategories_filter_additional-checkbox-inner-wrapper flex items-center gap-[10px] ">
                      <input
                        type="checkbox"
                        className="subcategories_filter_additional-checkbox w-[18px] h-[18px] outline-none border-secondary-text-color"
                        id="material-checkbox-frameless"
                        value={"frameless"}
                      />
                      <label
                        htmlFor="material-checkbox-frameless"
                        className="subcategories_filter_additional-checkbox_label uppercase font-medium tracking-[2px] text-secondary-text-color"
                      >
                        frameless
                      </label>
                    </div>
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
