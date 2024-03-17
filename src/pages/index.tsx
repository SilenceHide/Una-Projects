import Image from "next/image";
import { useEffect, useState } from "react";

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
                    ? "left-0 bg-white border-t border-disable-text-color z-50"
                    : "-left-full z-0"
                }`}
              >
                <ul
                  className={`menu-list flex lg:gap-5 gap-8 flex-col md:flex-row lg:h-full ${
                    navOpen ? "justify-between" : "justify-start"
                  }`}
                >
                  <li className="menu-item group/menu-item flex lg:items-center gap-1 cursor-pointer hover:border-b-accent-color">
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
                  <li className="menu-item group/menu-item flex lg:items-center gap-1 cursor-pointer hover:border-b-accent-color">
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
                  <li className="menu-item group/menu-item flex lg:items-center gap-1 cursor-pointer hover:border-b-accent-color">
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
                  <li className="menu-item group/menu-item flex lg:items-center gap-1 cursor-pointer hover:border-b-accent-color">
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
                  <li className="menu-item group/menu-item flex lg:items-center gap-1 cursor-pointer hover:border-b-accent-color">
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
                  <li className="menu-item group/menu-item flex lg:items-center cursor-pointer hover:border-b-accent-color flex-col lg:flex-row ">
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
                    <div className="mega-menu md:absolute bg-white lg:border-t border-disable-text-color  top-[100px] bottom-0 left-0 right-0 transition-all lg:py-[60px] lg:px-[140px] xl:px-[70px] 3xl:px-[140px] lg:shadow-main-box-shadow h-fit xl:justify-between hidden group-hover/menu-item:flex group-hover/menu-item:transition-all group-hover/menu-item:duration-300 flex-wrap xl:gap-0 xs:px-5 gap-10 my-10 lg:my-0 z-50">
                      <ul className="mega-menu_left flex 2xl:gap-[80px] xl:gap-7 lg:gap-10 md:gap-5 sm:gap-0 gap-10 group-hover/menu-item:transition-all flex-wrap justify-center md:justify-between flex-grow xl:flex-grow-0">
                        <li className="mega-item flex flex-col gap-4 lg:pt-0 md:basis-[20%] sm:basis-[25%] basis-[40%] shrink lg:shrink-0 lg:basis-auto">
                          <h4 className="mega-title text-main-text-color font-medium">TABLEWARE</h4>
                          <div className="mega-subtitle-wrapper flex flex-col gap-3">
                            <a className="mega-subtitle">Dinnerware</a>
                            <a className="mega-subtitle">Serveware</a>
                            <a className="mega-subtitle">Cutlery</a>
                            <a className="mega-subtitle">Glassware</a>
                            <a className="mega-subtitle">Table Linen</a>
                          </div>
                          <div className="mega-link-wrapper">
                            <a href="#" className="mega-link border-b-2 active-tab">
                              Go to all
                            </a>
                          </div>
                        </li>
                        <li className="mega-item flex flex-col gap-4 lg:pt-0 md:basis-[20%] sm:basis-[25%] basis-[40%] shrink lg:shrink-0 lg:basis-auto">
                          <h4 className="mega-title text-main-text-color font-medium">DRINKWARE</h4>
                          <div className="mega-subtitle-wrapper flex flex-col gap-3">
                            <a className="mega-subtitle">Glassware</a>
                            <a className="mega-subtitle">Barware</a>
                            <a className="mega-subtitle">Mugs</a>
                            <a className="mega-subtitle">Wine Racks</a>
                            <a className="mega-subtitle">Water Bottles</a>
                            <a className="mega-subtitle">Travel Cups</a>
                            <a className="mega-subtitle">Teapots</a>
                            <a className="mega-subtitle">Jugs & Carafes</a>
                          </div>
                          <div className="mega-link-wrapper">
                            <a href="#" className="mega-link  border-b-2 active-tab">
                              Go to all
                            </a>
                          </div>
                        </li>
                        <li className="mega-item flex flex-col gap-4 lg:pt-0 md:basis-[20%] sm:basis-[25%] basis-[40%] shrink lg:shrink-0 lg:basis-auto">
                          <h4 className="mega-title text-main-text-color font-medium">
                            COOK&BAKE WARE
                          </h4>
                          <div className="mega-subtitle-wrapper flex flex-col gap-3">
                            <a className="mega-subtitle">Pots & Pans</a>
                            <a className="mega-subtitle">Frying Pans</a>
                            <a className="mega-subtitle">Baking Dishes</a>
                            <a className="mega-subtitle">Silicone forms</a>
                          </div>
                          <div className="mega-link-wrapper">
                            <a href="#" className="mega-link  border-b-2 active-tab">
                              Go to all
                            </a>
                          </div>
                        </li>
                        <li className="mega-item flex flex-col gap-4 lg:pt-0 md:basis-[20%] sm:basis-[25%] basis-[40%] shrink lg:shrink-0 lg:basis-auto">
                          <h4 className="mega-title text-main-text-color font-medium">
                            KITCHEN ACCESSORIES
                          </h4>
                          <div className="mega-subtitle-wrapper flex flex-col gap-3">
                            <a className="mega-subtitle">Utensils</a>
                            <a className="mega-subtitle">Food Storage</a>
                            <a className="mega-subtitle">Racks & Shelves</a>
                            <a className="mega-subtitle">Wine Racks</a>
                            <a className="mega-subtitle">Bins</a>
                          </div>
                          <div className="mega-link-wrapper">
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
                  <li className="menu-item group/menu-item  flex items-center gap-1 cursor-pointer hover:border-b-accent-color">
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
          <div className="banner_heading-wrapper lg:min-w-[660px] flex flex-col gap-3 shadow-white-box-shadow-plus">
            <div className="banner_heading bg-main-bg-color lg:px-[140px] px-4 lg:py-[130px] py-[60px] order">
              <div className="banner_divider w-10 h-[2px] bg-accent-color mb-[30px]"></div>
              <h1 className="banner_title font-medium text-3xl w-[290px] sm:w-[450px]">
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
            <div className="banner_product-info bg-main-bg-color lg:px-[140px] lg:py-[130px] px-4 pt-[110px] pb-[60px]">
              <div className="banner_product-info_wrapper flex flex-col">
                <p className="banner_product-tag text-white text-sm bg-red-hot py-1 px-4 w-[65px]">
                  HOT
                </p>
                <h2 className="banner_product-title font-medium text-2xl max-w-[340px] mt-[30px] mb-4">
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
          <div className="banner_detail-img-wrapper bg-white absolute lg:w-[460px] md:w-[300px] w-[200px] lg:h-[460px] md:h-[300px] h-[200px] rounded-full lg:left-[425px] md:left-[335px] lg:top-[265px] md:top-[175px] top-[535px] sm:top-[500px]"></div>
        </section>
      </main>
    </>
  );
}
