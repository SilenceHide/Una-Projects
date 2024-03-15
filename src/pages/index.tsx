import Image from "next/image";
import Link from "next/link";
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
      <header className="header shadow-main-box-shadow lg:h-[100px] h-[70px] flex items-center justify-center">
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
                    alt={"logo-default"}
                    width={22}
                    height={22}
                  />
                ) : (
                  <Image
                    src={"/icons/Icon name=burger menu.svg"}
                    alt={"logo-default"}
                    width={22}
                    height={22}
                  />
                )}
              </div>
              <Image src={"/logo/logo-default.svg"} alt={"logo-default"} width={82} height={82} />
              <nav
                className={`menu text-secondary-text-color fixed lg:static right-0 top-[85px] bottom-0 lg:p-0 lg:overflow-hidden overflow-scroll transition-all duration-300 px-4 py-10 lg:h-[105px] ${
                  navOpen ? "left-0" : "-left-full "
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
                        alt={"logo-default"}
                        width={12}
                        height={7}
                        className="group-hover/menu-item:rotate-180 transition-all duration-300"
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
                        alt={"logo-default"}
                        width={12}
                        height={7}
                        className="group-hover/menu-item:rotate-180 transition-all duration-300"
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
                        alt={"logo-default"}
                        width={12}
                        height={7}
                        className="group-hover/menu-item:rotate-180 transition-all duration-300"
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
                        alt={"logo-default"}
                        width={12}
                        height={7}
                        className="group-hover/menu-item:rotate-180 transition-all duration-300"
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
                        alt={"logo-default"}
                        width={12}
                        height={7}
                        className="group-hover/menu-item:rotate-180 transition-all duration-300"
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
                        alt={"logo-default"}
                        width={12}
                        height={7}
                        className="group-hover/menu-item:rotate-180 transition-all duration-300"
                      />
                    </div>
                    <div className="mega-menu md:absolute bg-white top-[102px] bottom-0 left-0 right-0 transition-all lg:py-[60px] lg:px-[140px] xl:px-[70px] 3xl:px-[140px] lg:shadow-main-box-shadow h-fit xl:justify-between hidden group-hover/menu-item:flex group-hover/menu-item:transition-all group-hover/menu-item:duration-300 flex-wrap xl:gap-0 px-5 gap-10 my-10 lg:my-0">
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
                        alt={"logo-default"}
                        width={12}
                        height={7}
                        className="group-hover/menu-item:rotate-180 transition-all duration-300"
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
                    alt={"logo-default"}
                    width={22}
                    height={22}
                  />
                </div>
                <div className="header_profile-wrapper p-[10px] rounded-full border-disable-text-color border-[1.5px] cursor-pointer">
                  <Image
                    src={"/icons/Icon name=user.svg"}
                    alt={"logo-default"}
                    width={22}
                    height={22}
                  />
                </div>
                <div className="header_basket-wrapper p-[10px] rounded-full border-disable-text-color border-[1.5px] cursor-pointer basket-active relative">
                  <Image
                    src={"/icons/Icon name=cart.svg"}
                    alt={"logo-default"}
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
      {/* <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}></main> */}
    </>
  );
}
