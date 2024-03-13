import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [navOpen, isNavOpen] = useState(false);

  useEffect(() => {
    const menu: HTMLElement | null = document.querySelector(".menu")!;
    if (window.innerWidth >= 1024) {
      isNavOpen(true);
      menu.classList.remove("shadow-[inset_0px_60px_30px_-40px_rgba(0,0,0,0.1)]");
      menu.classList.add("shadow-none");
    }
  }, [navOpen]);

  return (
    <>
      <header className="header md:py-3 ">
        <div className="container ">
          <div className="header-wrapper flex items-center justify-between ">
            <div className="left-header flex items-center lg:gap-8 gap-4">
              <div
                className="menu_button p-[10px] rounded-full border-disable-text-color border-[1.5px] cursor-pointer lg:hidden "
                onClick={() => isNavOpen(!navOpen)}
              >
                <Image
                  src={"/icons/Icon name=burger menu.svg"}
                  alt={"logo-default"}
                  width={22}
                  height={22}
                />
              </div>
              <Image src={"/logo/logo-default.svg"} alt={"logo-default"} width={82} height={82} />
              <nav
                className={`menu text-secondary-text-color fixed lg:static left-0 right-0 top-[85px] bottom-0 lg:p-0 overflow-hidden transition-all ${
                  navOpen
                    ? "h-fit px-4 py-10 shadow-[inset_0px_60px_30px_-40px_rgba(0,0,0,0.1)]"
                    : "h-0 p-0 shadow-none"
                }`}
              >
                <ul className="menu-list flex lg:gap-5 gap-8 flex-col lg:flex-row ">
                  <li className="menu-item group/menu-item  flex items-center gap-1 cursor-pointer hover:border-b-accent-color">
                    <p className="menu-item_title border-b-2 border-transparent group-hover/menu-item:border-b-accent-color group-hover/menu-item:text-main-text-color transition-all">
                      NEW IN
                    </p>
                    <Image
                      src={"/icons/Icon name=chevron_down.svg"}
                      alt={"logo-default"}
                      width={12}
                      height={7}
                      className="group-hover/menu-item:rotate-180 transition-all"
                    />
                  </li>
                  <li className="menu-item group/menu-item  flex items-center gap-1 cursor-pointer hover:border-b-accent-color">
                    <p className="menu-item_title border-b-2 border-transparent group-hover/menu-item:border-b-accent-color group-hover/menu-item:text-main-text-color transition-all">
                      SOFAS
                    </p>
                    <Image
                      src={"/icons/Icon name=chevron_down.svg"}
                      alt={"logo-default"}
                      width={12}
                      height={7}
                      className="group-hover/menu-item:rotate-180 transition-all"
                    />
                  </li>
                  <li className="menu-item group/menu-item  flex items-center gap-1 cursor-pointer hover:border-b-accent-color">
                    <p className="menu-item_title border-b-2 border-transparent group-hover/menu-item:border-b-accent-color group-hover/menu-item:text-main-text-color transition-all">
                      TABLES
                    </p>
                    <Image
                      src={"/icons/Icon name=chevron_down.svg"}
                      alt={"logo-default"}
                      width={12}
                      height={7}
                      className="group-hover/menu-item:rotate-180 transition-all"
                    />
                  </li>
                  <li className="menu-item group/menu-item  flex items-center gap-1 cursor-pointer hover:border-b-accent-color">
                    <p className="menu-item_title border-b-2 border-transparent group-hover/menu-item:border-b-accent-color group-hover/menu-item:text-main-text-color transition-all">
                      BEDS
                    </p>
                    <Image
                      src={"/icons/Icon name=chevron_down.svg"}
                      alt={"logo-default"}
                      width={12}
                      height={7}
                      className="group-hover/menu-item:rotate-180 transition-all"
                    />
                  </li>
                  <li className="menu-item group/menu-item  flex items-center gap-1 cursor-pointer hover:border-b-accent-color">
                    <p className="menu-item_title border-b-2 border-transparent group-hover/menu-item:border-b-accent-color group-hover/menu-item:text-main-text-color transition-all">
                      LIGHTING
                    </p>
                    <Image
                      src={"/icons/Icon name=chevron_down.svg"}
                      alt={"logo-default"}
                      width={12}
                      height={7}
                      className="group-hover/menu-item:rotate-180 transition-all"
                    />
                  </li>
                  <li className="menu-item group/menu-item  flex items-center gap-1 cursor-pointer hover:border-b-accent-color">
                    <p className="menu-item_title border-b-2 border-transparent group-hover/menu-item:border-b-accent-color group-hover/menu-item:text-main-text-color transition-all">
                      KITCHEN
                    </p>
                    <Image
                      src={"/icons/Icon name=chevron_down.svg"}
                      alt={"logo-default"}
                      width={12}
                      height={7}
                      className="group-hover/menu-item:rotate-180 transition-all"
                    />
                  </li>
                  <li className="menu-item group/menu-item  flex items-center gap-1 cursor-pointer hover:border-b-accent-color">
                    <p className="menu-item_title border-b-2 border-transparent group-hover/menu-item:border-b-accent-color group-hover/menu-item:text-main-text-color transition-all">
                      STORAGE
                    </p>
                    <Image
                      src={"/icons/Icon name=chevron_down.svg"}
                      alt={"logo-default"}
                      width={12}
                      height={7}
                      className="group-hover/menu-item:rotate-180 transition-all"
                    />
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
