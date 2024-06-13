import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  searchBoxOpen: boolean;
  isSearchBoxOpen: Dispatch<SetStateAction<boolean>>;
  isCartOpen: Dispatch<SetStateAction<boolean>>;
  isNavOpen: Dispatch<SetStateAction<boolean>>;
}

export default function SearchForm({
  searchBoxOpen,
  isSearchBoxOpen,
  isCartOpen,
  isNavOpen,
}: Props) {
  return (
    <>
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
        <Image src={"/icons/Icon name=search.svg"} alt={"search-icon"} width={22} height={22} />
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
          <Image src={"/icons/Icon name=close.svg"} alt={"search-icon"} width={20} height={20} />
        </div>
      </div>
    </>
  );
}
