import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import nextArrowSvg from "../../public/icons/Icon name=next arrow - white.svg";

export default function Home() {
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
                src={"/logo/logo-default.svg"}
                alt={"logo-default"}
                width={82}
                height={81}
                priority
                className="header_logo"
              />
              <nav
                className={`menu text-secondary-text-color fixed lg:static right-0 top-[70px] bottom-0 lg:p-0 lg:overflow-hidden overflow-scroll transition-all duration-300 px-4 py-10 lg:h-[100px] ${
                  navOpen
                    ? "left-0 bg-white border-t border-disable-text-color z-50 w-auto"
                    : "-left-full z-0 w-0"
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
                    <div className="mega-menu md:absolute bg-white lg:border-t border-disable-text-color  top-[100px] bottom-0 left-0 right-0 transition-all lg:py-[60px] lg:px-[140px] xl:px-[70px] 3xl:px-[140px] lg:shadow-main-box-shadow h-fit xl:justify-between hidden group-hover/menu-item:flex group-hover/menu-item:transition-all group-hover/menu-item:duration-300 flex-wrap xl:gap-0 xs:px-5 gap-10 my-10 md:my-0 z-50">
                      <ul className="mega-menu_left flex 2xl:gap-[40px] xl:gap-7 lg:gap-10 md:gap-5 sm:gap-0 gap-10 group-hover/menu-item:transition-all flex-wrap justify-center md:justify-between flex-grow xl:flex-grow-0">
                        <li className="mega-item flex flex-col gap-4 lg:pt-0 md:basis-[20%] sm:basis-[25%] basis-[40%] shrink lg:shrink-0 lg:basis-auto">
                          <h4 className="mega-title text-main-text-color font-medium xl:tracking-[0px] 2xl:tracking-[2px]">
                            TABLEWARE
                          </h4>
                          <div className="mega-subtitle-wrapper flex flex-col gap-3 tracking-[0px]">
                            <a className="mega-subtitle">Dinnerware</a>
                            <a className="mega-subtitle">Serveware</a>
                            <a className="mega-subtitle">Cutlery</a>
                            <a className="mega-subtitle">Glassware</a>
                            <a className="mega-subtitle">Table Linen</a>
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
                            <a className="mega-subtitle">Glassware</a>
                            <a className="mega-subtitle">Barware</a>
                            <a className="mega-subtitle">Mugs</a>
                            <a className="mega-subtitle">Wine Racks</a>
                            <a className="mega-subtitle">Water Bottles</a>
                            <a className="mega-subtitle">Travel Cups</a>
                            <a className="mega-subtitle">Teapots</a>
                            <a className="mega-subtitle">Jugs & Carafes</a>
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
                            <a className="mega-subtitle">Pots & Pans</a>
                            <a className="mega-subtitle">Frying Pans</a>
                            <a className="mega-subtitle">Baking Dishes</a>
                            <a className="mega-subtitle">Silicone forms</a>
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
                            <a className="mega-subtitle">Utensils</a>
                            <a className="mega-subtitle">Food Storage</a>
                            <a className="mega-subtitle">Racks & Shelves</a>
                            <a className="mega-subtitle">Wine Racks</a>
                            <a className="mega-subtitle">Bins</a>
                          </div>
                          <div className="mega-link-wrapper tracking-[0px]">
                            <a href="#" className="mega-link  border-b-2 active-tab">
                              Go to all
                            </a>
                          </div>
                        </li>
                      </ul>
                      <div className="mega-menu_right flex 2xl:gap-10 xl:gap-0 lg:gap-10 gap-14 flex-wrap justify-center lg:justify-between xl:justify-center flex-grow xl:flex-grow-0">
                        <div className="mega-menu_left-img relative flex flex-col lg:gap-3 gap-7">
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
                        </div>
                        <div className="mega-menu_right-img relative flex flex-col lg:gap-3 gap-7">
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
                        </div>
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
              <div className="header_icon-wrapper flex items-center gap-3">
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
                <div className="header_basket-wrapper p-[10px] rounded-full border-disable-text-color border-[1.5px] cursor-pointer basket-active relative">
                  <Image
                    src={"/icons/Icon name=cart.svg"}
                    alt={"cart-icon"}
                    width={22}
                    height={22}
                  />
                  <p className="absolute top-[-6px] right-[-7px] text-white bg-accent-color rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    10
                  </p>
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
            <div className="banner_inner-img-wrapper bg-disable-text-color shadow-white-box-shadow min-h-[260px] w-full md:hidden"></div>
            <div className="banner_product-info bg-main-bg-color xl:px-[140px] lg:px-[70px] lg:py-[130px] px-4 pt-[110px] pb-[60px]">
              <div className="banner_product-info_wrapper flex flex-col">
                <p className="banner_product-tag text-white text-sm bg-red-hot py-1 px-4 w-[65px]">
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
            </div>
          </div>
          <div className="banner_img-wrapper bg-disable-text-color min-h-full w-full md:block hidden"></div>
          <div className="banner_detail-img-wrapper bg-white absolute xl:w-[460px] lg:w-[400px] md:w-[280px] w-[200px] xl:h-[460px] lg:h-[400px] md:h-[280px] h-[200px] rounded-full xl:left-[425px] lg:left-[255px] md:left-[190px] xl:top-[265px] lg:top-[330px] md:top-[225px] top-[535px] sm:top-[500px]"></div>
        </section>

        <section className="product-section bg-main-bg-color mt-[10px] pt-[110px] pb-5">
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
                  <p className="product_img-tag absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
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
                  <p className="product_img-tag absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
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
                  <p className="product_img-tag absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
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
                  <p className="product_img-tag absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
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
                  <p className="product_img-tag absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
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
                  <p className="product_img-tag absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
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
                  <p className="product_img-tag absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
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
                  <p className="product_img-tag absolute text-white text-sm bg-orange-popular py-1 px-4 top-5 left-5">
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
                {/* lg:w-[240px] lg:h-[240px] */}
              </div>
              <div className="product-section_button-wrapper lg:max-w-[300px] max-w-[343px] mt-14 bg-disable-color py-3 m-auto">
                <a
                  href="#"
                  className="product-section_button flex items-center text-white justify-center gap-3"
                >
                  <p className="product-section_button-title">SEE MORE PRODUCTS</p>
                  <Image
                    src={nextArrowSvg}
                    alt={"next arrow"}
                    width={24}
                    height={16}
                    className="fill-white text-white"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="popular-categories-section bg-main-bg-color pt-[110px] pb-5 ">
          <div className="container">
            <div className="popular-categories_wrapper">
              <div className="popular-categories_top-wrapper flex items-center justify-between">
                <h2 className="popular-categories_title font-medium lg:text-3xl text-2xl">
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
                  spaceBetween={15}
                  slidesPerView={1}
                  breakpoints={{
                    // 640: {
                    //   slidesPerView: 2,
                    //   spaceBetween: 20,
                    // },
                    // 768: {
                    //   slidesPerView: 4,
                    //   spaceBetween: 40,
                    // },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 12,
                    },
                  }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  className="popular-categories_swiper"
                >
                  <SwiperSlide className="popular-categories_col max-w-[400px]">
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
                  <SwiperSlide className="popular-categories_col max-w-[400px]">
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
                  <SwiperSlide className="popular-categories_col max-w-[400px]">
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
                  <SwiperSlide className="popular-categories_col max-w-[400px]">
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
      </main>
    </>
  );
}
