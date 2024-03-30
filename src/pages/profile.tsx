import Image from "next/image";
import { useState } from "react";

export default function Profile() {
  const [navOpen, isNavOpen] = useState(false);
  const [searchBoxOpen, isSearchBoxOpen] = useState(false);
  const [cartOpen, isCartOpen] = useState(false);
  const [promocodeBasketOpen, isPromocodeBasketOpen] = useState(false);
  const [countryOpen, isCountryOpen] = useState(false);
  const [cityOpen, isCityOpen] = useState(false);

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

      <main className="main-profile lg:pt-10 pt-24 pb-[100px] bg-main-bg-color">
        <div className="container">
          <div className="profile_wrapper flex flex-col">
            <div className="profile_breadcrumbs flex items-center gap-2">
              <p className="profile_breadcrumb text-secondary-text-color font-medium text-[13px]">
                Home
              </p>
              <Image
                src={"/icons/Icon name=chevron_right.svg"}
                alt={"chevron_right"}
                width={7}
                height={10}
              />
              <p className="profile_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
                profile
              </p>
            </div>
            <div className="profile_title-wrapper flex flex-col gap-[14px] mt-[54px]">
              <h1 className="profile_title lg:text-3xl text-2xl font-medium tracking-[3px] uppercase">
                profile
              </h1>
            </div>
            <div className="profile_main-wrapper flex flex-col xl:flex-row justify-between lg:mt-14 mt-8 gap-10 items-start xs:static relative left-[-15px]">
              <div className="profile_tabs-wrapper bg-white sm:p-[60px] py-14 px-4 flex flex-col gap-8 xs:min-w-[380px] w-[375px]  ">
                <p className="profile_tab-title w-fit uppercase text-secondary-text-color tracking-[2px] border-b-2 border-transparent transition-all cursor-pointer hover:text-main-text-color hover:border-accent-color selected-tab ">
                  Personal
                </p>
                <p className="profile_tab-title w-fit uppercase text-secondary-text-color tracking-[2px] border-b-2 border-transparent transition-all cursor-pointer hover:text-main-text-color hover:border-accent-color">
                  wishlist (4)
                </p>
                <p className="profile_tab-title w-fit uppercase text-secondary-text-color tracking-[2px] border-b-2 border-transparent transition-all cursor-pointer hover:text-main-text-color hover:border-accent-color">
                  orders (2)
                </p>
                <p className="profile_tab-title w-fit uppercase text-secondary-text-color tracking-[2px] border-b-2 border-transparent transition-all cursor-pointer hover:text-main-text-color hover:border-accent-color">
                  logout
                </p>
              </div>
              <div className="orders_inner-wrapper xs:w-full sm:px-[60px] py-[60px] px-4 bg-white w-[375px]">
                <div className="orders_wrapper flex flex-col gap-[60px]">
                  <div className="order-current_wrapper flex flex-col gap-[10px]">
                    <h2 className="order-current_title uppercase tracking-[2px] font-medium border-b border-disable-color pb-[30px]">
                      Current orders (2)
                    </h2>
                    <div className="order_main-wrapper border-b border-disable-color pb-[10px]">
                      <div className="order_wrapper flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-3 pb-[10px] cursor-pointer">
                        <div className="order_left-wrapper flex items-center md:gap-10 lg:justify-normal justify-between sm:flex-nowrap flex-wrap">
                          <p className="order_number uppercase font-medium tracking-[2px]">#2245</p>
                          <p className="order_date text-placeholder-text-color">
                            12.07.2019, 14:13
                          </p>
                          <div className="order_status-wrapper flex items-center gap-2 bg-main-bg-color px-[14px] py-[6px]">
                            <Image
                              src={"/icons/Icon name=truck.svg"}
                              alt={"truck"}
                              width={18}
                              height={18}
                            />
                            <p className="order_status text-sm font-medium tracking-[1px] text-sub-text-color uppercase">
                              En route
                            </p>
                          </div>
                        </div>
                        <div className="order_right-wrapper flex items-center gap-[30px] lg:justify-normal justify-between">
                          <div className="order_total-price-wrapper">
                            <p className="order_total-price text-accent-color font-medium tracking-[1px]">
                              $1 000
                            </p>
                          </div>
                          <div className="order_show-btn h-[46px] w-[46px] rounded-full border border-disable-color flex items-center justify-center">
                            <Image
                              src={"/icons/Icon name=small ch_down.svg"}
                              alt={"arrow-down"}
                              width={14}
                              height={10}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order_main-wrapper border-b border-disable-color pb-[10px]">
                      <div className="order_wrapper flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-3  cursor-pointer">
                        <div className="order_left-wrapper flex items-center md:gap-10 lg:justify-normal justify-between sm:flex-nowrap flex-wrap">
                          <p className="order_number uppercase font-medium tracking-[2px]">#2234</p>
                          <p className="order_date text-placeholder-text-color">
                            10.07.2019, 11:40
                          </p>
                          <div className="order_status-wrapper flex items-center gap-2 bg-main-bg-color px-[14px] py-[6px]">
                            <Image
                              src={"/icons/Icon name=document.svg"}
                              alt={"document"}
                              width={18}
                              height={18}
                            />
                            <p className="order_status text-sm font-medium tracking-[1px] text-sub-text-color uppercase">
                              New order
                            </p>
                          </div>
                        </div>
                        <div className="order_right-wrapper flex items-center gap-[30px] lg:justify-normal justify-between">
                          <div className="order_total-price-wrapper flex gap-2">
                            <p className="order_total-price text-red-hot font-medium tracking-[1px]">
                              $3 500
                            </p>
                            <p className="order_total-discount text-disable-color font-medium tracking-[1px] line-through">
                              $4 000
                            </p>
                          </div>
                          <div className="order_show-btn h-[46px] w-[46px] rounded-full border border-disable-color flex items-center justify-center">
                            <Image
                              src={"/icons/Icon name=small ch_down.svg"}
                              alt={"arrow-down"}
                              width={14}
                              height={10}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="order_product-costumer_wrapper border-t mt-[10px] border-disable-color sm:py-10 py-5 flex lg:items-center lg:flex-row flex-col">
                        <div className="order_product-info_wrapper 2xl:max-w-[600px] lg:max-w-[500px] w-full lg:border-r lg:border-b-0 border-b border-disable-color lg:pr-10 lg:pb-0 sm:pb-10 pb-6">
                          <div className="order_product-info_inner-wrapper flex items-center gap-[30px]">
                            <div className="order_product_img w-[80px] h-[80px] min-w-[80px] bg-disable-text-color"></div>
                            <div className="order_product_info-wrapper flex sm:items-center justify-between w-full sm:flex-row flex-col gap-4 sm:gap-0">
                              <div className="order_product_info-left flex flex-col gap-[10px]">
                                <p className="order_product-title uppercase tracking-[2px] font-medium">
                                  black table
                                </p>
                                <div className="order_product-wrapper">
                                  <p className="order_product-info text-sm text-placeholder-text-color">
                                    black
                                  </p>
                                  <p className="order_product-info text-sm text-placeholder-text-color">
                                    50 sm х 30 sm
                                  </p>
                                </div>
                              </div>
                              <div className="order_product_info-right flex items-center gap-20">
                                <p className="order_product-number font-medium text-disable-color">
                                  x2
                                </p>
                                <p className="order_product-price font-medium tracking-[1px] text-accent-color">
                                  $2 000
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="order_product-info_divider 2xl:w-[560px] lg:w-[460px] w-full h-[1px] bg-disable-text-color my-10"></div>
                          <div className="order_product-info_inner-wrapper flex items-center gap-[30px]">
                            <div className="order_product_img w-[80px] h-[80px] min-w-[80px] bg-disable-text-color"></div>
                            <div className="order_product_info-wrapper flex sm:items-center justify-between w-full sm:flex-row flex-col gap-4 sm:gap-0">
                              <div className="order_product_info-left flex flex-col gap-[10px]">
                                <p className="order_product-title uppercase tracking-[2px] font-medium">
                                  combined table
                                </p>
                                <div className="order_product-wrapper">
                                  <p className="order_product-info text-sm text-placeholder-text-color">
                                    black
                                  </p>
                                </div>
                              </div>
                              <div className="order_product_info-right flex items-center gap-20">
                                <p className="order_product-number font-medium text-disable-color">
                                  x3
                                </p>
                                <div className="order_product-price_wrapper flex gap-3 sm:flex-col">
                                  <p className="order_product-price font-medium tracking-[1px] text-red-hot">
                                    $1 500
                                  </p>
                                  <p className="order_product-price font-medium tracking-[1px] line-through text-disable-color">
                                    $2 000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="order_costumer-info_wrapper lg:pl-10 lg:pt-0 sm:pt-10 pt-6 flex flex-col gap-6">
                          <div className="order_checkout-info tracking-[2px] uppercase font-medium flex flex-col gap-4">
                            <p className="order_checkout_delivery-info">Self pickup (free)</p>
                            <p className="order_checkout_payment-info">Visa/mastercard</p>
                          </div>
                          <div className="order_costumer-info text-sub-text-color flex flex-col gap-[10px]">
                            <p className="order_costumer-name">Alexander Silencehide</p>
                            <p className="order_costumer-email">Silencehide@mail.com</p>
                            <p className="order_costumer-phone">(480) 555-0103</p>
                            <p className="order_costumer-address">
                              4517 Washington Ave. Manchester, Kentucky 39495
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-history_wrapper flex flex-col gap-[10px]">
                    <h2 className="order-current_title uppercase tracking-[2px] font-medium border-b border-disable-color pb-[30px]">
                      order history (2)
                    </h2>
                    <div className="order_main-wrapper border-b border-disable-color pb-[10px]">
                      <div className="order_wrapper flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-3 pb-[10px] cursor-pointer">
                        <div className="order_left-wrapper flex items-center md:gap-10 lg:justify-normal justify-between sm:flex-nowrap flex-wrap">
                          <p className="order_number uppercase font-medium tracking-[2px]">#2245</p>
                          <p className="order_date text-placeholder-text-color">
                            12.07.2019, 14:13
                          </p>
                          <div className="order_status-wrapper flex items-center gap-2 bg-main-bg-color px-[14px] py-[6px]">
                            <Image
                              src={"/icons/cancel-disable.svg"}
                              alt={"cancel"}
                              width={18}
                              height={18}
                            />
                            <p className="order_status text-sm font-medium tracking-[1px] text-disable-color uppercase">
                              Cancelled
                            </p>
                          </div>
                        </div>
                        <div className="order_right-wrapper flex items-center gap-[30px] lg:justify-normal justify-between">
                          <p className="order_total-price text-accent-color font-medium tracking-[1px]">
                            $280
                          </p>
                          <div className="order_show-btn h-[46px] w-[46px] rounded-full border border-disable-color flex items-center justify-center">
                            <Image
                              src={"/icons/Icon name=small ch_down.svg"}
                              alt={"arrow-down"}
                              width={14}
                              height={10}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order_main-wrapper border-b border-disable-color pb-[10px]">
                      <div className="order_wrapper flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-3 pb-[10px] cursor-pointer">
                        <div className="order_left-wrapper flex items-center md:gap-10 lg:justify-normal justify-between sm:flex-nowrap flex-wrap">
                          <p className="order_number uppercase font-medium tracking-[2px]">#2234</p>
                          <p className="order_date text-placeholder-text-color">
                            10.07.2019, 11:40
                          </p>
                          <div className="order_status-wrapper flex items-center gap-2 bg-main-bg-color px-[14px] py-[6px]">
                            <Image
                              src={"/icons/done-success.svg"}
                              alt={"done"}
                              width={18}
                              height={18}
                            />
                            <p className="order_status text-sm font-medium tracking-[1px] text-disable-color uppercase">
                              Done
                            </p>
                          </div>
                        </div>
                        <div className="order_right-wrapper flex items-center gap-[30px] lg:justify-normal justify-between">
                          <p className="order_total-price text-accent-color font-medium tracking-[1px]">
                            $1 090
                          </p>
                          <div className="order_show-btn h-[46px] w-[46px] rounded-full border border-disable-color flex items-center justify-center">
                            <Image
                              src={"/icons/Icon name=small ch_down.svg"}
                              alt={"arrow-down"}
                              width={14}
                              height={10}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="profile_personal_inner-wrapper xs:w-full sm:p-[60px] py-14 px-4 bg-white w-[375px] flex flex-col gap-[60px]">
                <div className="profile_info flex md:flex-row flex-col gap-[60px]">
                  <div className="profile_personal flex flex-col gap-5 md:max-w-[300px] w-full">
                    <div className="profile_title-wrapper border-b border-disable-color pb-1 mb-5">
                      <p className="profile_title uppercase font-medium tracking-[2px]">Personal</p>
                    </div>
                    <div className="profile_personal-info flex items-center justify-between border-b border-disable-color pb-1">
                      <p className="profile_personal-info_title font-medium">First name</p>
                      <p className="profile_personal-info_desc text-sub-text-color">Alexander</p>
                    </div>
                    <div className="profile_personal-info flex items-center justify-between border-b border-disable-color pb-1">
                      <p className="profile_personal-info_title font-medium">Last name</p>
                      <p className="profile_personal-info_desc text-sub-text-color">Silencehide</p>
                    </div>
                    <div className="profile_personal-info flex items-center justify-between border-b border-disable-color pb-1">
                      <p className="profile_personal-info_title font-medium">Email</p>
                      <p className="profile_personal-info_desc text-sub-text-color">
                        Silencehide@gmail.com
                      </p>
                    </div>
                    <div className="profile_personal-info flex items-center justify-between border-b border-disable-color pb-1">
                      <p className="profile_personal-info_title font-medium">Phone</p>
                      <p className="profile_personal-info_desc text-sub-text-color">–</p>
                    </div>
                  </div>
                  <div className="profile_address flex flex-col gap-5 max-w-[660px] w-full">
                    <div className="profile_title-wrapper border-b border-disable-color pb-1 mb-5">
                      <p className="profile_title uppercase font-medium tracking-[2px]">Address</p>
                    </div>
                    <div className="profile_address-info_wrapper flex 2xl:flex-row xl:flex-col lg:flex-row flex-col 2xl:gap-[60px] xl:gap-5 lg:gap-[60px] gap-5">
                      <div className="profile_address-info_left flex flex-col w-full gap-5">
                        <div className="profile_address-info flex items-center justify-between border-b border-disable-color pb-1">
                          <p className="profile_address-info_title font-medium">Country</p>
                          <p className="profile_address-info_desc text-sub-text-color">–</p>
                        </div>
                        <div className="profile_address-info flex items-center justify-between border-b border-disable-color pb-1">
                          <p className="profile_address-info_title font-medium">Town/city</p>
                          <p className="profile_address-info_desc text-sub-text-color">–</p>
                        </div>
                        <div className="profile_address-info flex items-center justify-between border-b border-disable-color pb-1">
                          <p className="profile_address-info_title font-medium">Street</p>
                          <p className="profile_address-info_desc text-sub-text-color">–</p>
                        </div>
                        <div className="profile_address-info flex items-center justify-between border-b border-disable-color pb-1">
                          <p className="profile_address-info_title font-medium">Apartment</p>
                          <p className="profile_address-info_desc text-sub-text-color">–</p>
                        </div>
                      </div>
                      <div className="profile_address-info_right flex flex-col w-full gap-5">
                        <div className="profile_address-info flex items-center justify-between border-b border-disable-color pb-1">
                          <p className="profile_address-info_title font-medium">ZIP Code</p>
                          <p className="profile_address-info_desc text-sub-text-color">–</p>
                        </div>
                        <div className="profile_address-info flex items-center justify-between border-b border-disable-color pb-1">
                          <p className="profile_address-info_title font-medium">Comment</p>
                          <p className="profile_address-info_desc text-sub-text-color">–</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile_btns-wrapper flex sm:flex-row flex-col gap-6">
                  <button
                    type="button"
                    className="profile_btn_edit-info uppercase tracking-[2px] bg-disable-color text-white sm:w-[224px] h-[46px]"
                  >
                    edit information
                  </button>
                  <button
                    type="button"
                    className="profile_btn_change-pass uppercase tracking-[2px] sm:w-[224px] h-[46px] border border-disable-color text-secondary-text-color"
                  >
                    change password
                  </button>
                </div>
              </div> */}
              {/* <div className="profile_change-pass_inner-wrapper xs:w-full sm:p-[60px] py-14 px-4 bg-white w-[375px] ">
                <form action="#" className="profile_change-pass_form flex flex-col gap-[60px]">
                  <div className="profile_change-pass flex flex-col lg:gap-[60px] gap-10 max-w-[660px] w-full">
                    <div className="profile_title-wrapper border-b border-disable-color pb-1 mb-5">
                      <p className="profile_title uppercase font-medium tracking-[2px]">
                        change password
                      </p>
                    </div>
                    <div className="profile_change-pass_input-wrapper flex lg:flex-row flex-col justify-between lg:gap-0 gap-10">
                      <div className="profile_change-pass_inputs flex flex-col gap-4 max-w-[315px] ">
                        <div className="profile_change-pass_input_inner-wrapper flex flex-col gap-[10px]">
                          <label
                            htmlFor="profile_change-pass_input"
                            className="profile_change-pass_label uppercase font-semibold text-xs tracking-[1px] text-placeholder-text-color relative"
                          >
                            old password
                            <Image
                              src={"/icons/Icon name=validated.svg"}
                              alt={"validated"}
                              width={18}
                              height={18}
                              priority
                              className="header_logo absolute top-[40px] right-[15px]"
                            />
                          </label>
                          <input
                            type="password"
                            className="profile_change-pass_input outline-none border border-disable-color w-[315px] h-[46px] p-[15px] caret-secondary-text-color "
                            id="profile_change-pass_input"
                          />
                        </div>
                        <div className="profile_change-pass_input_inner-wrapper flex flex-col gap-[10px]">
                          <a
                            href="#"
                            className="profile_change-pass_forgot text-secondary-text-color"
                          >
                            Forgot password?
                          </a>
                          <p className="profile_change-pass_help text-placeholder-text-color">
                            The strong password must At least 8 characters and it contains uppercase
                            and lowercase Latin letters and numbers and special characters.
                          </p>
                        </div>
                      </div>
                      <div className="profile_change-pass_inputs flex flex-col gap-4 max-w-[315px] ">
                        <div className="profile_change-pass_input_inner-wrapper flex flex-col gap-[10px]">
                          <label
                            htmlFor="profile_change-pass_input"
                            className="profile_change-pass_label uppercase font-semibold text-xs tracking-[1px] text-placeholder-text-color relative"
                          >
                            new password
                          </label>
                          <input
                            type="password"
                            className="profile_change-pass_input outline-none border border-disable-color w-[315px] h-[46px] p-[15px] caret-secondary-text-color "
                            id="profile_change-pass_input"
                          />
                        </div>
                        <div className="profile_change-pass_input_inner-wrapper flex flex-col gap-[10px] mt-[14px]">
                          <label
                            htmlFor="profile_change-pass_input"
                            className="profile_change-pass_label uppercase font-semibold text-xs tracking-[1px] text-placeholder-text-color relative"
                          >
                            repeat password
                            <Image
                              src={"/icons/Icon name=validated.svg"}
                              alt={"validated"}
                              width={18}
                              height={18}
                              priority
                              className="header_logo absolute top-[40px] right-[15px] invisible opacity-0"
                            />
                          </label>
                          <input
                            type="password"
                            className="profile_change-pass_input outline-none border border-disable-color w-[315px] h-[46px] p-[15px] caret-secondary-text-color "
                            id="profile_change-pass_input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile_change-pass_btns-wrapper flex sm:flex-row flex-col gap-6">
                    <button
                      type="button"
                      className="profile_btn_change-pass uppercase tracking-[2px] bg-disable-color text-white sm:w-[224px] h-[46px]"
                    >
                      save changes
                    </button>
                    <button
                      type="button"
                      className="profile_btn_cancel uppercase tracking-[2px] sm:w-[122px] h-[46px] border border-disable-color text-secondary-text-color"
                    >
                      cancel
                    </button>
                  </div>
                </form>
              </div> */}
              {/* <div className="profile_edit-info_inner-wrapper xs:w-full sm:p-[60px] py-14 px-4 bg-white w-[375px]">
                <form action="#" className="profile-edit-info_form ">
                  <div className="profile_form-wrapper flex flex-col h-fit xl:max-w-[660px]">
                    <div className="profile_personal-info-wrapper flex flex-col gap-6 justify-between pb-10 pt-0 w-full">
                      <h2 className="profile_personal-info-title uppercase font-medium tracking-[3px] text-2xl pb-1 border-b border-disable-color mb-4">
                        personal
                      </h2>
                      <div className="profile_personal-info_inner-wrapper flex lg:items-center justify-between lg:flex-row flex-col gap-6 lg:gap-0 ">
                        <div className="profile_personal-info flex flex-col gap-[10px]">
                          <label
                            htmlFor="profile_personal-info_first-name"
                            className="profile_personal-info_first-name_label uppercase text-placeholder-text-color font-semibold text-xs tracking-[1px]"
                          >
                            first name *
                          </label>
                          <input
                            type="text"
                            id="profile_personal-info_first-name"
                            className="profile_personal-info_first-name_input outline-none border border-disable-color xl:w-[315px] w-[343px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                          />
                        </div>
                        <div className="profile_personal-info flex flex-col gap-[10px]">
                          <label
                            htmlFor="profile_personal-info_first-name"
                            className="profile_personal-info_first-name_label uppercase text-placeholder-text-color font-semibold text-xs tracking-[1px]"
                          >
                            last name *
                          </label>
                          <input
                            type="text"
                            id="profile_personal-info_first-name"
                            className="profile_personal-info_first-name_input outline-none border border-disable-color xl:w-[315px] w-[343px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                          />
                        </div>
                      </div>
                      <div className="profile_personal-info_inner-wrapper flex lg:items-center justify-between lg:flex-row flex-col gap-6 lg:gap-0 ">
                        <div className="profile_personal-info flex flex-col gap-[10px]">
                          <label
                            htmlFor="profile_personal-info_first-name"
                            className="profile_personal-info_first-name_label uppercase text-placeholder-text-color font-semibold text-xs tracking-[1px]"
                          >
                            phone
                          </label>
                          <input
                            type="text"
                            id="profile_personal-info_first-name"
                            className="profile_personal-info_first-name_input outline-none border border-disable-color xl:w-[315px] w-[343px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                          />
                        </div>
                        <div className="profile_personal-info flex flex-col gap-[10px]">
                          <label
                            htmlFor="profile_personal-info_first-name"
                            className="profile_personal-info_first-name_label uppercase text-placeholder-text-color font-semibold text-xs tracking-[1px]"
                          >
                            email
                          </label>
                          <input
                            type="email"
                            id="profile_personal-info_first-name"
                            className="profile_personal-info_first-name_input outline-none border border-disable-color xl:w-[315px] w-[343px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="profile_address-wrapper flex flex-col gap-6 justify-between pt-10 pb-0 w-full">
                      <h2 className="profile_address-title uppercase font-medium tracking-[3px] text-2xl mb-1 pb-1 border-b border-disable-color">
                        address
                      </h2>
                      <div className="profile_address_select-wrapper flex lg:items-center justify-between mb-5 lg:flex-row flex-col gap-[26px]">
                        <div className="profile_inner-wrapper flex flex-col gap-[10px] relative ">
                          <p
                            className={`profile_label uppercase font-semibold text-xs tracking-[1px] transition-all ${
                              countryOpen ? "visible opacity-100" : "invisible opacity-0"
                            }`}
                          >
                            Select country *
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              isCityOpen(false);
                              isCountryOpen(!countryOpen);
                            }}
                            className={`profile_select h-[46px] xl:w-[315px] w-[343px] p-[15px] border outline-none bg-white flex items-center justify-between transition-all ${
                              countryOpen ? "border-accent-color" : "border-disable-color"
                            }`}
                          >
                            <p className="profile_select_title text-placeholder-text-color">
                              Select country *
                            </p>
                            <Image
                              src={"/icons/Icon name=chevron_down.svg"}
                              alt={"chevron_down"}
                              width={14}
                              height={10}
                              className={`profile_select-icon pointer-events-none transition-all ${
                                countryOpen ? "rotate-180" : "rotate-0"
                              }`}
                            />
                          </button>
                          <ul
                            className={`profile_list absolute z-[10] left-[0px] top-[72px] xl:w-[315px] w-[343px] p-[15px] border border-accent-color bg-white flex flex-col gap-4 transition-all duration-300 h-[170px] overflow-y-scroll  ${
                              countryOpen ? "visible opacity-100" : "invisible opacity-0"
                            }`}
                          >
                            <li
                              className="profile_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium "
                              value={"UK"}
                            >
                              UK
                            </li>
                            <li
                              className="profile_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium "
                              value={"USA"}
                            >
                              USA
                            </li>
                            <li
                              className="profile_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                              value={"Ukraine"}
                            >
                              Ukraine
                            </li>
                            <li
                              className="profile_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                              value={"Uganda"}
                            >
                              Uganda
                            </li>
                          </ul>
                        </div>
                        <div className="profile_address flex flex-col gap-[10px] relative">
                          <div className="profile_inner-wrapper flex flex-col gap-[10px] relative ">
                            <p
                              className={`profile_label uppercase font-semibold text-xs tracking-[1px] transition-all ${
                                cityOpen ? "visible opacity-100" : "invisible opacity-0"
                              }`}
                            >
                              Town/city *
                            </p>
                            <button
                              type="button"
                              onClick={() => {
                                isCountryOpen(false);
                                isCityOpen(!cityOpen);
                              }}
                              className={`profile_select h-[46px] xl:w-[315px] w-[343px] p-[15px] border outline-none bg-white flex items-center justify-between transition-all ${
                                cityOpen ? "border-accent-color" : "border-disable-color"
                              }`}
                            >
                              <p className="profile_select_title text-placeholder-text-color">
                                Town/city *
                              </p>
                              <Image
                                src={"/icons/Icon name=chevron_down.svg"}
                                alt={"chevron_down"}
                                width={14}
                                height={10}
                                className={`profile_select-icon pointer-events-none transition-all ${
                                  cityOpen ? "rotate-180" : "rotate-0"
                                }`}
                              />
                            </button>
                            <ul
                              className={`profile_list absolute z-[10] left-[0px] top-[72px] xl:w-[315px] w-[343px] p-[15px] border border-accent-color bg-white flex flex-col gap-4 transition-all duration-300 h-[170px] overflow-y-scroll ${
                                cityOpen ? "visible opacity-100" : "invisible opacity-0"
                              }`}
                            >
                              <li
                                className="profile_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium "
                                value={"UK"}
                              >
                                UK
                              </li>
                              <li
                                className="profile_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium "
                                value={"USA"}
                              >
                                USA
                              </li>
                              <li
                                className="profile_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                                value={"Ukraine"}
                              >
                                Ukraine
                              </li>
                              <li
                                className="profile_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                                value={"Uganda"}
                              >
                                Uganda
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="profile_address_location-wrapper flex lg:items-center items-start justify-between mb-5 lg:flex-row flex-col lg:gap-0 gap-10">
                        <div className="profile_address flex flex-col gap-[10px]">
                          <input
                            type="text"
                            id="profile_address_first-name"
                            className="profile_address_first-name_input outline-none border border-disable-color xl:w-[315px] w-[343px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                            placeholder="Street name *"
                          />
                        </div>
                        <div className="profile_address flex items-center justify-between gap-[24px]">
                          <input
                            type="text"
                            id="profile_address_first-name"
                            className="profile_address_first-name_input outline-none border border-disable-color xl:w-[145px] w-[165px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                            placeholder="Apartment"
                          />
                          <input
                            type="text"
                            id="profile_address_first-name"
                            className="profile_address_first-name_input outline-none border border-disable-color xl:w-[145px] w-[165px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                            placeholder="ZIP Code"
                          />
                        </div>
                      </div>
                      <div className="profile_address_comment-wrapper flex items-center gap-3 ">
                        <textarea
                          name="profile_address-comment"
                          id="profile_address-comment"
                          cols={30}
                          rows={10}
                          className="profile_address-comment lg:h-[46px] h-[90px] w-full outline-none border border-disable-color resize-none px-4 py-2 text-secondary-text-color caret-secondary-text-color"
                          placeholder="Your comment"
                        ></textarea>
                      </div>
                    </div>
                    <div className="profile_btns-wrapper mt-[60px] flex items-center gap-6">
                      <button
                        type="button"
                        className="profile_info-form_save-btn w-[190px] h-[46px] uppercase tracking-[2px] text-white bg-disable-color"
                      >
                        save changes
                      </button>
                      <button
                        type="button"
                        className="profile_info-form_cancel-btn w-[122px] h-[46px] uppercase tracking-[2px] border border-disable-color text-secondary-text-color"
                      >
                        cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div> */}
              {/* <div className="wishlist_inner-wrapper xs:w-full sm:px-[60px] md:pb-[60px] md:pt-0 pb-10 pt-[10px] px-4 bg-white w-[375px]">
                <div className="wishlist_product md:py-10 py-[30px] border-b border-disable-color flex md:items-center justify-between 3xl:gap-[100px] lg:gap-10 gap-5 md:flex-row flex-col">
                  <div className="wishlist_product_left flex lg:items-center gap-[30px] max-w-[590px] w-full lg:min-w-[450px] min-w-[360px]">
                    <div className="wishlist_product-img md:min-w-[160px] md:w-[160px] md:h-[160px] min-w-[80px] w-[80px] h-[80px] bg-disable-text-color"></div>
                    <div className="wishlist_product-info flex lg:flex-row flex-col lg:items-center justify-between w-full">
                      <div className="wishlist_product-info_left flex flex-col md:gap-[10px] md:mb-0 mb-4">
                        <p className="wishlist_product-title uppercase tracking-[2px] font-medium md:mb-0 mb-[10px]">
                          donna lamp
                        </p>
                        <p className="wishlist_product-desc text-sm text-placeholder-text-color">
                          gold
                        </p>
                        <p className="wishlist_product-desc text-sm text-placeholder-text-color">
                          50 sm х 30 sm
                        </p>
                      </div>
                      <div className="wishlist_product-info_right">
                        <p className="wishlist_product-price tracking-[1px] text-accent-color font-medium">
                          $245
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="wishlist_product_right flex xl:max-w-[400px] max-w-[350px] w-full items-center justify-between">
                    <div className="wishlist_product-add-delete_wrapper flex items-center justify-between w-full">
                      <div className="wishlist_product-add flex items-center gap-[10px] cursor-pointer">
                        <div className="wishlist_product-cart-btn w-[46px] h-[46px] rounded-full flex items-center justify-center border border-disable-color">
                          <Image
                            src={"/icons/Icon name=cart.svg"}
                            alt={"cart"}
                            width={24}
                            height={24}
                            priority
                          />
                        </div>
                        <div className="wishlist_product-add-title uppercase tracking-[2px] text-secondary-text-color text-center">
                          add to cart
                        </div>
                      </div>
                      <div className="wishlist_product-delete w-[46px] h-[46px] rounded-full flex items-center justify-center border border-disable-color cursor-pointer">
                        <Image
                          src={"/icons/Icon name=trash.svg"}
                          alt={"trash"}
                          width={18}
                          height={20}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wishlist_product md:py-10 py-[30px] border-b border-disable-color flex md:items-center justify-between 3xl:gap-[100px] lg:gap-10 gap-5 md:flex-row flex-col">
                  <div className="wishlist_product_left flex lg:items-center gap-[30px] max-w-[590px] w-full lg:min-w-[450px] min-w-[360px]">
                    <div className="wishlist_product-img md:min-w-[160px] md:w-[160px] md:h-[160px] min-w-[80px] w-[80px] h-[80px] bg-disable-text-color"></div>
                    <div className="wishlist_product-info flex lg:flex-row flex-col lg:items-center justify-between w-full">
                      <div className="wishlist_product-info_left flex flex-col md:gap-[10px] md:mb-0 mb-4">
                        <p className="wishlist_product-title uppercase tracking-[2px] font-medium md:mb-0 mb-[10px]">
                          wingrove
                        </p>
                        <p className="wishlist_product-desc text-sm text-placeholder-text-color">
                          brown
                        </p>
                        <p className="wishlist_product-desc text-sm text-placeholder-text-color">
                          natural wood
                        </p>
                      </div>
                      <div className="wishlist_product-info_right flex items-center gap-2">
                        <p className="wishlist_product-price tracking-[1px] text-red-hot font-medium">
                          $825
                        </p>
                        <p className="wishlist_product-price tracking-[1px] text-disable-color line-through font-medium">
                          $900
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="wishlist_product_right flex xl:max-w-[400px] max-w-[350px] w-full items-center justify-between">
                    <div className="wishlist_product-add-delete_wrapper flex items-center justify-between w-full">
                      <div className="wishlist_product-add flex items-center gap-[10px] cursor-pointer">
                        <div className="wishlist_product-cart-btn w-[46px] h-[46px] rounded-full flex items-center justify-center border border-disable-color">
                          <Image
                            src={"/icons/Icon name=cart.svg"}
                            alt={"cart"}
                            width={24}
                            height={24}
                            priority
                          />
                        </div>
                        <div className="wishlist_product-add-title uppercase tracking-[2px] text-secondary-text-color text-center">
                          add to cart
                        </div>
                      </div>
                      <div className="wishlist_product-delete w-[46px] h-[46px] rounded-full flex items-center justify-center border border-disable-color cursor-pointer">
                        <Image
                          src={"/icons/Icon name=trash.svg"}
                          alt={"trash"}
                          width={18}
                          height={20}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wishlist_product md:py-10 py-[30px] border-b border-disable-color flex md:items-center justify-between 3xl:gap-[100px] lg:gap-10 gap-5 md:flex-row flex-col">
                  <div className="wishlist_product_left flex lg:items-center gap-[30px] max-w-[590px] w-full lg:min-w-[450px] min-w-[360px]">
                    <div className="wishlist_product-img md:min-w-[160px] md:w-[160px] md:h-[160px] min-w-[80px] w-[80px] h-[80px] bg-disable-text-color"></div>
                    <div className="wishlist_product-info flex lg:flex-row flex-col lg:items-center justify-between w-full">
                      <div className="wishlist_product-info_left flex flex-col md:gap-[10px] md:mb-0 mb-4">
                        <p className="wishlist_product-title uppercase tracking-[2px] font-medium md:mb-0 mb-[10px]">
                          lavelle bed
                        </p>
                        <p className="wishlist_product-desc text-sm text-placeholder-text-color">
                          milk
                        </p>
                        <p className="wishlist_product-desc text-sm text-placeholder-text-color">
                          180 x 200 mm
                        </p>
                      </div>
                      <div className="wishlist_product-info_right flex items-center gap-2">
                        <p className="wishlist_product-price tracking-[1px] text-accent-color font-medium">
                          $1 000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="wishlist_product_right flex xl:max-w-[400px] max-w-[350px] w-full items-center justify-between">
                    <div className="wishlist_product-add-delete_wrapper flex items-center justify-between w-full">
                      <div className="wishlist_product-add flex items-center gap-[10px] cursor-pointer">
                        <div className="wishlist_product-cart-btn w-[46px] h-[46px] rounded-full flex items-center justify-center border border-disable-color">
                          <Image
                            src={"/icons/Icon name=cart.svg"}
                            alt={"cart"}
                            width={24}
                            height={24}
                            priority
                          />
                        </div>
                        <div className="wishlist_product-add-title uppercase tracking-[2px] text-secondary-text-color text-center">
                          add to cart
                        </div>
                      </div>
                      <div className="wishlist_product-delete w-[46px] h-[46px] rounded-full flex items-center justify-center border border-disable-color cursor-pointer">
                        <Image
                          src={"/icons/Icon name=trash.svg"}
                          alt={"trash"}
                          width={18}
                          height={20}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wishlist_product md:py-10 py-[30px] border-b border-disable-color flex md:items-center justify-between 3xl:gap-[100px] lg:gap-10 gap-5 md:flex-row flex-col">
                  <div className="wishlist_product_left flex lg:items-center gap-[30px] max-w-[590px] w-full lg:min-w-[450px] min-w-[360px]">
                    <div className="wishlist_product-img md:min-w-[160px] md:w-[160px] md:h-[160px] min-w-[80px] w-[80px] h-[80px] bg-disable-text-color"></div>
                    <div className="wishlist_product-info flex lg:flex-row flex-col lg:items-center justify-between w-full">
                      <div className="wishlist_product-info_left flex flex-col md:gap-[10px] md:mb-0 mb-4">
                        <p className="wishlist_product-title uppercase tracking-[2px] font-medium md:mb-0 mb-[10px]">
                          alisma coffee table
                        </p>
                        <p className="wishlist_product-desc text-sm text-placeholder-text-color">
                          milk
                        </p>
                        <p className="wishlist_product-desc text-sm text-placeholder-text-color">
                          180 x 200 mm
                        </p>
                      </div>
                      <div className="wishlist_product-info_right flex items-center gap-2">
                        <p className="wishlist_product-price tracking-[1px] text-accent-color font-medium">
                          $300
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="wishlist_product_right flex xl:max-w-[400px] max-w-[350px] w-full items-center justify-between">
                    <div className="wishlist_product-add-delete_wrapper flex items-center justify-between w-full">
                      <div className="wishlist_product-add flex items-center gap-[10px] cursor-pointer">
                        <div className="wishlist_product-cart-btn w-[46px] h-[46px] rounded-full flex items-center justify-center border border-disable-color">
                          <Image
                            src={"/icons/Icon name=cart.svg"}
                            alt={"cart"}
                            width={24}
                            height={24}
                            priority
                          />
                        </div>
                        <div className="wishlist_product-add-title uppercase tracking-[2px] text-secondary-text-color text-center">
                          add to cart
                        </div>
                      </div>
                      <div className="wishlist_product-delete w-[46px] h-[46px] rounded-full flex items-center justify-center border border-disable-color cursor-pointer">
                        <Image
                          src={"/icons/Icon name=trash.svg"}
                          alt={"trash"}
                          width={18}
                          height={20}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wishlist_page-number flex items-center mt-10 sm:gap-7 gap-[18px] justify-center">
                  <div className="wishlist_prev-page cursor-pointer w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center border border-disable-color">
                    <Image
                      src={"/icons/Icon name=chevron_left.svg"}
                      alt={"chevron_left"}
                      width={10}
                      height={14}
                    />
                  </div>
                  <div className="wishlist_page-btns flex items-center sm:gap-4 gap-[10px]">
                    <div className="wishlist_page-btn w-[46px] h-[46px] cursor-pointer font-medium text-disable-color bg-white rounded-full flex items-center justify-center border border-disable-text-color selected-page">
                      1
                    </div>
                    <div className="wishlist_page-btn w-[46px] h-[46px] cursor-pointer font-medium text-disable-color bg-white rounded-full flex items-center justify-center border border-disable-text-color">
                      2
                    </div>
                    <div className="wishlist_page-btn w-[46px] h-[46px] cursor-pointer font-medium text-disable-color bg-white rounded-full flex items-center justify-center border border-disable-text-color">
                      3
                    </div>
                  </div>
                  <div className="wishlist_next-page cursor-pointer w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center border border-disable-color">
                    <Image
                      src={"/icons/Icon name=chevron_right.svg"}
                      alt={"chevron_right"}
                      width={10}
                      height={14}
                    />
                  </div>
                </div>
              </div> */}
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
