import Image from "next/image";
import { useState } from "react";

export default function Checkout() {
  const [countryOpen, isCountryOpen] = useState(false);
  const [cityOpen, isCityOpen] = useState(false);
  const [promocodeOpen, isPromocodeOpen] = useState(false);

  return (
    <main className="main-checkout lg:pt-10 pt-24 pb-[100px] bg-main-bg-color">
      <div className="container">
        <div className="checkout_wrapper flex flex-col">
          <div className="checkout_breadcrumbs flex items-center gap-2">
            <p className="checkout_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Home
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="checkout_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
              checkout
            </p>
          </div>
          <div className="checkout_title-wrapper flex flex-col gap-[14px] mt-[54px]">
            <h1 className="checkout_title lg:text-3xl text-2xl font-medium tracking-[3px] uppercase">
              checkout
            </h1>
          </div>
          <form action="#" className="checkout-form">
            <div className="checkout_main-wrapper flex flex-col xl:flex-row justify-between lg:mt-14 mt-8 gap-10 xl:items-start items-center">
              <div className="checkout_left-wrapper flex flex-col bg-white 3xl:px-[100px] md:px-[80px] xs:px-5 px-2 py-10 h-fit lg:max-w-[1000px] lg:w-[1000px] sm:max-w-full ">
                <div className="checkout_personal-info-wrapper flex flex-col gap-6 justify-between border-b border-disable-color lg:py-10 pb-10 pt-0 w-full">
                  <h2 className="checkout_personal-info-title uppercase font-medium tracking-[3px] text-2xl mb-1">
                    personal info
                  </h2>
                  <div className="checkout_personal-info_inner-wrapper flex lg:items-center justify-between lg:flex-row flex-col gap-6 lg:gap-0 ">
                    <div className="checkout_personal-info flex flex-col gap-[10px]">
                      <label
                        htmlFor="checkout_personal-info_first-name"
                        className="checkout_personal-info_first-name_label uppercase text-placeholder-text-color font-semibold text-xs tracking-[1px]"
                      >
                        first name *
                      </label>
                      <input
                        type="text"
                        id="checkout_personal-info_first-name"
                        className="checkout_personal-info_first-name_input outline-none border border-disable-color 3xl:w-[380px] 2xl:w-[343px] xl:w-[300px] w-[343px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                      />
                    </div>
                    <div className="checkout_personal-info flex flex-col gap-[10px]">
                      <label
                        htmlFor="checkout_personal-info_first-name"
                        className="checkout_personal-info_first-name_label uppercase text-placeholder-text-color font-semibold text-xs tracking-[1px]"
                      >
                        last name *
                      </label>
                      <input
                        type="text"
                        id="checkout_personal-info_first-name"
                        className="checkout_personal-info_first-name_input outline-none border border-disable-color 3xl:w-[380px] 2xl:w-[343px] xl:w-[300px] w-[343px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                      />
                    </div>
                  </div>
                  <div className="checkout_personal-info_inner-wrapper flex lg:items-center justify-between lg:flex-row flex-col gap-6 lg:gap-0 ">
                    <div className="checkout_personal-info flex flex-col gap-[10px]">
                      <label
                        htmlFor="checkout_personal-info_first-name"
                        className="checkout_personal-info_first-name_label uppercase text-placeholder-text-color font-semibold text-xs tracking-[1px]"
                      >
                        phone
                      </label>
                      <input
                        type="text"
                        id="checkout_personal-info_first-name"
                        className="checkout_personal-info_first-name_input outline-none border border-disable-color 3xl:w-[380px] 2xl:w-[343px] xl:w-[300px] w-[343px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                      />
                    </div>
                    <div className="checkout_personal-info flex flex-col gap-[10px]">
                      <label
                        htmlFor="checkout_personal-info_first-name"
                        className="checkout_personal-info_first-name_label uppercase text-placeholder-text-color font-semibold text-xs tracking-[1px]"
                      >
                        email
                      </label>
                      <input
                        type="email"
                        id="checkout_personal-info_first-name"
                        className="checkout_personal-info_first-name_input outline-none border border-disable-color 3xl:w-[380px] 2xl:w-[343px] xl:w-[300px] w-[343px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                      />
                    </div>
                  </div>
                  <div className="checkout_personal-info_checkbox-wrapper flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="checkout_personal-info_checkbox"
                      className="checkout_personal-info_checkbox-input"
                    />
                    <label
                      htmlFor="checkout_personal-info_checkbox"
                      className="checkout_personal-info_checkbox-label uppercase font-medium tracking-[2px] mt-[6px]"
                    >
                      don’t call me
                    </label>
                  </div>
                </div>
                <div className="checkout_delivery-wrapper flex flex-col gap-6 justify-between lg:py-10 pt-10 pb-0 w-full">
                  <h2 className="checkout_delivery-title uppercase font-medium tracking-[3px] text-2xl mb-1">
                    delivery
                  </h2>
                  <div className="checkout_delivery_select-wrapper flex lg:items-center justify-between mb-5 lg:flex-row flex-col gap-[26px]">
                    <div className="checkout_inner-wrapper flex flex-col gap-[10px] relative ">
                      <p
                        className={`checkout_label uppercase font-semibold text-xs tracking-[1px] transition-all ${
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
                        className={`checkout_select h-[46px] 3xl:w-[380px] 2xl:w-[343px] xl:w-[300px] w-[343px] p-[15px] border outline-none bg-white flex items-center justify-between transition-all ${
                          countryOpen ? "border-accent-color" : "border-disable-color"
                        }`}
                      >
                        <p className="checkout_select_title text-placeholder-text-color">
                          Select country *
                        </p>
                        <Image
                          src={"/icons/Icon name=chevron_down.svg"}
                          alt={"chevron_down"}
                          width={14}
                          height={10}
                          className={`checkout_select-icon pointer-events-none transition-all ${
                            countryOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                      <ul
                        className={`checkout_list absolute z-[10] left-[0px] top-[72px] 3xl:w-[380px] 2xl:w-[343px] xl:w-[300px] w-[343px] p-[15px] border border-accent-color bg-white flex flex-col gap-4 transition-all duration-300 h-[170px] overflow-y-scroll  ${
                          countryOpen ? "visible opacity-100" : "invisible opacity-0"
                        }`}
                      >
                        <li
                          className="checkout_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium "
                          value={"UK"}
                        >
                          UK
                        </li>
                        <li
                          className="checkout_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium "
                          value={"USA"}
                        >
                          USA
                        </li>
                        <li
                          className="checkout_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                          value={"Ukraine"}
                        >
                          Ukraine
                        </li>
                        <li
                          className="checkout_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                          value={"Uganda"}
                        >
                          Uganda
                        </li>
                      </ul>
                    </div>
                    <div className="checkout_delivery flex flex-col gap-[10px] relative">
                      <div className="checkout_inner-wrapper flex flex-col gap-[10px] relative ">
                        <p
                          className={`checkout_label uppercase font-semibold text-xs tracking-[1px] transition-all ${
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
                          className={`checkout_select h-[46px] 3xl:w-[380px] 2xl:w-[343px] xl:w-[300px] w-[343px] p-[15px] border outline-none bg-white flex items-center justify-between transition-all ${
                            cityOpen ? "border-accent-color" : "border-disable-color"
                          }`}
                        >
                          <p className="checkout_select_title text-placeholder-text-color">
                            Town/city *
                          </p>
                          <Image
                            src={"/icons/Icon name=chevron_down.svg"}
                            alt={"chevron_down"}
                            width={14}
                            height={10}
                            className={`checkout_select-icon pointer-events-none transition-all ${
                              cityOpen ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </button>
                        <ul
                          className={`checkout_list absolute z-[10] left-[0px] top-[72px] 3xl:w-[380px] 2xl:w-[343px] xl:w-[300px] w-[343px] p-[15px] border border-accent-color bg-white flex flex-col gap-4 transition-all duration-300 h-[170px] overflow-y-scroll ${
                            cityOpen ? "visible opacity-100" : "invisible opacity-0"
                          }`}
                        >
                          <li
                            className="checkout_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium "
                            value={"UK"}
                          >
                            UK
                          </li>
                          <li
                            className="checkout_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium "
                            value={"USA"}
                          >
                            USA
                          </li>
                          <li
                            className="checkout_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                            value={"Ukraine"}
                          >
                            Ukraine
                          </li>
                          <li
                            className="checkout_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                            value={"Uganda"}
                          >
                            Uganda
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="checkout_delivery_location-wrapper flex items-center justify-between mb-5 lg:flex-row flex-col lg:gap-0 gap-10">
                    <div className="checkout_delivery flex flex-col gap-[10px]">
                      <input
                        type="text"
                        id="checkout_delivery_first-name"
                        className="checkout_delivery_first-name_input outline-none border border-disable-color 3xl:w-[380px] 2xl:w-[343px] xl:w-[300px] w-[343px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                        placeholder="Street name *"
                      />
                    </div>
                    <div className="checkout_delivery flex items-center justify-between 3xl:gap-[30px] gap-[10px]">
                      <input
                        type="text"
                        id="checkout_delivery_first-name"
                        className="checkout_delivery_first-name_input outline-none border border-disable-color 3xl:w-[175px] 2xl:w-[165px] xl:w-[145px] w-[165px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                        placeholder="Apartment"
                      />
                      <input
                        type="text"
                        id="checkout_delivery_first-name"
                        className="checkout_delivery_first-name_input outline-none border border-disable-color 3xl:w-[175px] 2xl:w-[165px] xl:w-[145px] w-[165px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                        placeholder="ZIP Code"
                      />
                    </div>
                  </div>
                  <div className="checkout_delivery_comment-wrapper flex items-center gap-3 ">
                    <textarea
                      name="checkout_delivery-comment"
                      id="checkout_delivery-comment"
                      cols={30}
                      rows={10}
                      className="checkout_delivery-comment lg:h-[46px] h-[90px] w-full outline-none border border-disable-color resize-none px-4 py-2 text-secondary-text-color caret-secondary-text-color"
                      placeholder="Your comment"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="checkout_right-wrapper xl:w-[560px] sm:w-full w-[343px] bg-white border-t-[3px] border-accent-color 2xl:py-10 py-9  shadow-main-box-shadow flex xl:flex-col md:flex-row flex-col justify-around">
                <div className="checkout_info-summery tracking-[3px] font-medium md:text-2xl text-xl flex items-center xl:justify-between justify-center xl:gap-0 gap-10 border-b border-disable-color lg:px-10 md:px-3 px-6 2xl:pb-10 lg:pb-9 pb-5 xl:border-b md:border-b-0 text-center xl:text-start xl:flex-row flex-col">
                  <p className="checkout-total-checkout uppercase">your order</p>
                  <p className="checkout-total-price">$11 500</p>
                </div>
                <div className="checkout_products_wrapper flex flex-col md:py-9 lg:px-10 md:px-8 px-6  py-8 border-b border-disable-color xl:border-b md:border-b-0 xl:border-x-0 md:border-x">
                  <div className="checkout_product_wrapper flex 2xl:gap-[30px] xl:gap-4 gap-[30px] xl:items-center">
                    <div className="checkout_product-img min-w-[80px] w-[80px] h-[80px] bg-disable-text-color"></div>
                    <div className="checkout_product-info_wrapper flex justify-between w-full 2xl:gap-0 xl:gap-1 gap-5 xl:flex-row flex-col">
                      <div className="checkout_product-info_left">
                        <p className="checkout_product-title uppercase tracking-[2px] font-medium">
                          coffee table
                        </p>
                        <p className="checkout_product-desc text-sm font-medium text-placeholder-text-color">
                          gold
                        </p>
                        <p className="checkout_product-desc text-sm font-medium text-placeholder-text-color">
                          50 sm х 30 sm
                        </p>
                      </div>
                      <div className="checkout_product-info_right flex 2xl:flex-row flex-col xl:gap-10 gap-4">
                        <p className="checkout_product-number font-medium tracking-[1px] text-disable-color">
                          x2
                        </p>
                        <p className="checkout_product-price font-medium tracking-[1px] text-accent-color">
                          $7 000
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="checkout_products-divider w-full h-[1px] bg-disable-color md:my-10 my-8"></div>
                  <div className="checkout_product_wrapper flex 2xl:gap-[30px] xl:gap-4 gap-[30px] xl:items-center">
                    <div className="checkout_product-img min-w-[80px] w-[80px] h-[80px] bg-disable-text-color"></div>
                    <div className="checkout_product-info_wrapper flex justify-between w-full 2xl:gap-0 xl:gap-1 gap-5 xl:flex-row flex-col">
                      <div className="checkout_product-info_left">
                        <p className="checkout_product-title uppercase tracking-[2px] font-medium">
                          combined table
                        </p>
                        <p className="checkout_product-desc text-sm font-medium text-placeholder-text-color">
                          black
                        </p>
                      </div>
                      <div className="checkout_product-info_right flex 2xl:flex-row flex-col xl:gap-10 gap-4">
                        <p className="checkout_product-number font-medium tracking-[1px] text-disable-color">
                          x9
                        </p>
                        <p className="checkout_product-price font-medium tracking-[1px] text-accent-color">
                          $4 500
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkout_product-bottom-wrapper flex flex-col justify-between">
                  <div
                    className={`checkout_promo-code_wrapper lg:px-10 md:px-3 px-6 py-4 shrink border-b border-disable-color flex flex-col justify-between transition-all duration-300 ${
                      promocodeOpen ? "gap-5" : "gap-0"
                    }`}
                  >
                    <div
                      onClick={() => isPromocodeOpen(!promocodeOpen)}
                      className="checkout_promo-code_top-wrapper cursor-pointer flex justify-between items-center"
                    >
                      <p className="checkout_promo-code_title text-sub-text-color tracking-[2px] font-medium">
                        APPLY PROMOCODE
                      </p>
                      <Image
                        src={"/icons/Icon name=chevron_down.svg"}
                        alt={"checkout-icon"}
                        width={16}
                        height={8}
                        className={`cursor-pointer transition-all duration-300 ${
                          promocodeOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                    <div
                      className={`checkout_promo-code_bottom-wrapper flex items-center justify-between transition-all duration-300 overflow-hidden lg:gap-0 gap-1 ${
                        promocodeOpen ? "visible opacity-100 h-[46px]" : "invisible opacity-0 h-0"
                      }`}
                    >
                      <input
                        type="text"
                        className="checkout_promo-code_input outline-none sm:w-[210px] w-[160px] h-full px-4 caret-secondary-text-color text-secondary-text-color border border-disable-color"
                        placeholder="Z34kKOY"
                      />
                      <p className="checkout_promo-code_discount font-medium text-accent-color tracking-[1px] text-center">
                        $13 discount
                      </p>
                    </div>
                  </div>
                  <div className="checkout_total-info-wrapper lg:px-10 md:px-3 px-6 2xl:pt-10 md:pt-9 pt-6 flex flex-col gap-4 justify-between">
                    <div className="checkout_delivery-price_wrapper flex flex-col gap-4">
                      <div className="checkout_delivery-price_inner-wrapper tracking-[2px] font-medium uppercase flex items-center justify-between ">
                        <p className="checkout_delivery-price_title">Delivery (Self Pickup)</p>
                        <p className="checkout_delivery-price">$0</p>
                      </div>
                      <div className="checkout_subtotal-price_inner-wrapper tracking-[2px] font-medium uppercase flex items-center justify-between ">
                        <p className="checkout_subtotal-price_title">subtotal</p>
                        <p className="checkout_subtotal-price">$11 500</p>
                      </div>
                      <div className="checkout_total-price_inner-wrapper tracking-[2px] font-medium uppercase text-xl flex items-center justify-between">
                        <p className="checkout_total-price_title">total</p>
                        <p className="checkout_total-price">$11 500</p>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="checkout_checkout-btn text-white bg-disable-color flex justify-center items-center gap-[14px] w-full h-[60px] mt-4 px-3 xl:mb-0 md:mb-6 mb-0"
                    >
                      <p className="checkout_checkout-btn_title font-semibold text-lg tracking-[2px] uppercase ">
                        place order
                      </p>
                      <Image
                        src={"/icons/Icon name=next arrow - white.svg"}
                        alt={"checkout-icon"}
                        width={24}
                        height={16}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
