import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="left-header flex items-center gap-8">
            <Image src={"/logo/logo-default.svg"} alt={"logo-default"} width={82} height={82} />
            <nav className="menu text-secondary-text-color">
              <ul className="menu-list flex gap-5">
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
          <div className="right-header"></div>
        </div>
      </header>
      {/* <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}></main> */}
    </>
  );
}
