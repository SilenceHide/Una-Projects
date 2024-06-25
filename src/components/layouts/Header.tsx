import Image from "next/image";
import React, { MouseEvent, useEffect, useState } from "react";
import Logo from "../common/ui/Logo";
import SearchForm from "./SearchForm";
import Menu from "./Menu";
import Basket from "./Basket";
import { useOverlay } from "@/hooks/useOverlay";

export default function Header() {
  const [navOpen, isNavOpen] = useState(false);
  const [searchBoxOpen, isSearchBoxOpen] = useState(false);
  const [cartOpen, isCartOpen] = useState(false);

  const basketClickHandler = (e: MouseEvent) => {
    e.stopPropagation();
    isNavOpen(false);
    isSearchBoxOpen(false);
    isCartOpen(!cartOpen);
  };

  const menuClickHandler = (e: MouseEvent) => {
    e.stopPropagation();
    isCartOpen(false);
    isSearchBoxOpen(false);
    isNavOpen(!navOpen);
  };

  const navClickHandler = (e: MouseEvent) => {
    e.stopPropagation();
  };

  useOverlay({
    onClick: () => {
      isCartOpen(false);
      isNavOpen(false);
    },
    navOpen: navOpen,
    cartOpen: cartOpen,
  });

  return (
    <header className="header shadow-main-box-shadow lg:h-[100px] h-[70px] flex items-center justify-center lg:static fixed lg:z-0 z-40 w-full bg-white top-0">
      <div className="container ">
        <div className="header-wrapper flex items-center justify-between">
          <div className="header-left flex items-center lg:gap-8 gap-4">
            <div
              className="menu_button p-[10px] rounded-full border-disable-text-color border-[1.5px] cursor-pointer lg:hidden transition-all duration-300"
              onClick={menuClickHandler}
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
            <Logo className={"header_logo"} />

            <nav
              onClick={navClickHandler}
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
              <Menu navOpen={navOpen} />
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
                <SearchForm
                  searchBoxOpen={searchBoxOpen}
                  isSearchBoxOpen={isSearchBoxOpen}
                  isNavOpen={isNavOpen}
                  isCartOpen={isCartOpen}
                />
              </div>

              <div className="header_profile-wrapper w-[46px] h-[46px] flex items-center justify-center rounded-full border-disable-text-color border-[1.5px] cursor-pointer transition-all ">
                <Image src={"/icons/Icon name=user.svg"} alt={"user-icon"} width={22} height={22} />
              </div>

              <div
                className="header_basket-wrapper w-[46px] h-[46px] flex items-center justify-center rounded-full border-disable-text-color border-[1.5px] cursor-pointer basket-active relative  "
                onClick={basketClickHandler}
              >
                <Image src={"/icons/Icon name=cart.svg"} alt={"cart-icon"} width={22} height={22} />
                <p className="absolute top-[-6px] right-[-7px] text-white bg-accent-color rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  10
                </p>
                <div
                  className={`header_basket_inner-wrapper max-w-[560px] absolute lg:top-[40px] top-[25px] md:left-[-520px] left-[-290px] bg-transparent transition-all cursor-default z-10 ${
                    cartOpen ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  <Basket />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
