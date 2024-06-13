import Image from "next/image";
import { useState } from "react";

export default function Cart() {
  return (
    <main className="main-cart lg:pt-10 pt-24 pb-[100px] bg-main-bg-color">
      <div className="container">
        <div className="cart_wrapper flex flex-col">
          <div className="cart_breadcrumbs flex items-center gap-2">
            <p className="cart_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Home
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="cart_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
              Cart
            </p>
          </div>
          <div className="cart_title-wrapper flex flex-col gap-[14px] mt-[54px]">
            <h1 className="cart_title lg:text-3xl text-2xl font-medium tracking-[3px] uppercase">
              Cart
            </h1>
          </div>
          <div className="cart_main-wrapper flex flex-col xl:flex-row justify-between lg:mt-14 mt-8 gap-10 xl:items-start items-center">
            <div className="cart_left-wrapper flex flex-col bg-white px-10 h-fit lg:max-w-[1000px] lg:w-[1000px] sm:max-w-full max-w-[343px]">
              <div className="cart_product-wrapper flex md:flex-row flex-col md:gap-0 gap-5  md:items-center justify-between border-b border-disable-color py-10 w-full">
                <div className="cart_product_info-wrapper flex gap-[30px]">
                  <div className="cart_product_info-img w-[80px] h-[80px] min-w-[80px] bg-disable-text-color"></div>
                  <div className="cart_product_info-inner-wrapper">
                    <p className="cart_product-info-title uppercase tracking-[2px] font-medium mb-[10px]">
                      coffee table
                    </p>
                    <p className="cart_product-info-desc text-sm text-placeholder-text-color">
                      gold
                    </p>
                    <p className="cart_product-info-desc text-sm text-placeholder-text-color">
                      50 sm х 30 sm
                    </p>
                  </div>
                </div>
                <div className="cart_product_price-wrapper flex 3xl:gap-20 gap-10 items-center justify-end">
                  <div className="cart_product_price-wrapper_left 2xl:w-[280px] w-[230px] 2xl:max-w-[280px] flex md:flex-row flex-col md:gap-0 gap-5 md:items-center justify-between">
                    <p className="cart_product_main-price font-medium tracking-[1px] text-accent-color">
                      $3 500
                    </p>
                    <div className="cart_product_count-wrapper flex items-center gap-4 md:justify-between">
                      <div className="cart_product_count-minus-btn w-[46px] h-[46px] border border-disable-color rounded-full flex items-center justify-center cursor-pointer">
                        <Image
                          src={"/icons/Icon name=minus.svg"}
                          alt={"minus"}
                          width={14}
                          height={2}
                        />
                      </div>
                      <p className="cart_product_count font-medium tracking-[2px]">2</p>
                      <div className="cart_product_count-plus-btn w-[46px] h-[46px] border border-disable-color rounded-full flex items-center justify-center cursor-pointer">
                        <Image
                          src={"/icons/Icon name=plus.svg"}
                          alt={"plus"}
                          width={16}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="cart_product_price-wrapper_right 2xl:w-[200px] w-[160px] 2xl:max-w-[200px] max-w-[160px] flex md:flex-row flex-col md:gap-0 gap-5 items-center justify-between">
                    <p className="cart_product_total-price font-medium tracking-[1px] text-accent-color">
                      $7 000
                    </p>
                    <div className="cart_product_count-delete-btn w-[46px] h-[46px] border border-disable-color rounded-full flex items-center justify-center cursor-pointer">
                      <Image
                        src={"/icons/Icon name=trash.svg"}
                        alt={"trash"}
                        width={18}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart_product-wrapper flex md:flex-row flex-col md:gap-0 gap-5  md:items-center justify-between border-b border-disable-color py-10 w-full">
                <div className="cart_product_info-wrapper flex gap-[30px]">
                  <div className="cart_product_info-img w-[80px] h-[80px] min-w-[80px] bg-disable-text-color"></div>
                  <div className="cart_product_info-inner-wrapper">
                    <p className="cart_product-info-title uppercase tracking-[2px] font-medium mb-[10px]">
                      combined table
                    </p>
                    <p className="cart_product-info-desc text-sm text-placeholder-text-color">
                      black
                    </p>
                  </div>
                </div>
                <div className="cart_product_price-wrapper flex 3xl:gap-20 gap-10 items-center justify-end">
                  <div className="cart_product_price-wrapper_left 2xl:w-[280px] w-[230px] 2xl:max-w-[280px] flex md:flex-row flex-col md:gap-0 gap-5 md:items-center justify-between">
                    <p className="cart_product_main-price font-medium tracking-[1px] text-accent-color">
                      $500
                    </p>
                    <div className="cart_product_count-wrapper flex items-center gap-4 md:justify-between">
                      <div className="cart_product_count-minus-btn w-[46px] h-[46px] border border-disable-color rounded-full flex items-center justify-center cursor-pointer">
                        <Image
                          src={"/icons/Icon name=minus.svg"}
                          alt={"minus"}
                          width={14}
                          height={2}
                        />
                      </div>
                      <p className="cart_product_count font-medium tracking-[2px]">9</p>
                      <div className="cart_product_count-plus-btn w-[46px] h-[46px] border border-disable-color rounded-full flex items-center justify-center cursor-pointer">
                        <Image
                          src={"/icons/Icon name=plus.svg"}
                          alt={"plus"}
                          width={16}
                          height={16}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="cart_product_price-wrapper_right 2xl:w-[200px] w-[160px] 2xl:max-w-[200px] max-w-[160px] flex md:flex-row flex-col md:gap-0 gap-5 items-center justify-between">
                    <p className="cart_product_total-price font-medium tracking-[1px] text-accent-color">
                      $4 500
                    </p>
                    <div className="cart_product_count-delete-btn w-[46px] h-[46px] border border-disable-color rounded-full flex items-center justify-center cursor-pointer">
                      <Image
                        src={"/icons/Icon name=trash.svg"}
                        alt={"trash"}
                        width={18}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart_product-bottom py-10 flex md:flex-row flex-col justify-between items-center md:gap-0 gap-6 ">
                <div className="cart_product_promocode flex max-w-[343px] sm:max-w-fit">
                  <input
                    type="text"
                    name="cart_product_promocode"
                    id="cart_product_promocode-input"
                    className="cart_product_promocode-input h-[46px] outline-none border border-disable-color px-4 caret-secondary-text-color text-secondary-text-color"
                    placeholder="Coupon"
                  />
                  <button
                    type="button"
                    className="cart_product_promocode-btn uppercase w-[107px] h-[46px] bg-disable-color text-white tracking-[2px]"
                  >
                    Apply
                  </button>
                </div>
                <button
                  type="button"
                  className="cart_product_promocode-btn uppercase md:w-[175px] w-[343px] h-[46px] bg-disable-color text-white tracking-[2px] disable-btn"
                >
                  update cart
                </button>
              </div>
            </div>
            <div className="cart_right-wrapper xl:w-[560px] sm:w-full w-[343px] bg-white border-t-[3px] border-accent-color py-10 shadow-main-box-shadow flex xl:flex-col md:flex-row flex-col justify-around">
              <div className="cart_info-summery tracking-[3px] font-medium md:text-2xl text-xl flex items-center justify-between border-b border-disable-color lg:px-10 md:px-3 px-10 lg:pb-10 pb-5 xl:border-b md:border-b-0 text-center xl:text-start">
                <p className="cart-total-cart uppercase">Cart totals</p>
              </div>
              <div className="cart_shipping-payment_wrapper flex flex-col md:py-10 lg:px-10 md:px-8 px-10  py-8 border-b border-disable-color xl:border-b md:border-b-0 xl:border-x-0 md:border-x">
                <div className="cart_shipping-methods_wrapper flex gap-6 flex-col">
                  <p className="cart_shipping-method_title uppercase font-medium tracking-[2px]">
                    Shipping method
                  </p>
                  <div className="cart_shipping-methods flex flex-col gap-3">
                    <div className="cart_shipping-method flex items-center gap-[10px]">
                      <input
                        type="radio"
                        id="cart_shipping-method_fedex"
                        className="cart_shipping-method_input cursor-pointer"
                        name="cart_shipping-method_input"
                      />
                      <label
                        htmlFor="cart_shipping-method_fedex"
                        className="cart_shipping-method_label uppercase tracking-[2px] text-secondary-text-color cursor-pointer"
                      >
                        Fedex ($15)
                      </label>
                    </div>
                    <div className="cart_shipping-method flex items-center gap-[10px]">
                      <input
                        type="radio"
                        id="cart_shipping-method_self-pickup"
                        className="cart_shipping-method_input cursor-pointer"
                        name="cart_shipping-method_input"
                      />
                      <label
                        htmlFor="cart_shipping-method_self-pickup"
                        className="cart_shipping-method_label uppercase tracking-[2px] text-secondary-text-color cursor-pointer"
                      >
                        Self pickup (free)
                      </label>
                    </div>
                  </div>
                </div>
                <div className="cart_products-divider w-full h-[1px] bg-disable-color md:my-10 my-8"></div>
                <div className="cart_payment-methods_wrapper flex gap-6 flex-col">
                  <p className="cart_payment-method_title uppercase font-medium tracking-[2px]">
                    payment method
                  </p>
                  <div className="cart_payment-methods flex flex-col gap-3">
                    <div className="cart_payment-method flex items-center gap-[10px]">
                      <input
                        type="radio"
                        id="cart_payment-method_fedex"
                        className="cart_payment-method_input cursor-pointer"
                        name="cart_payment-method_input"
                      />
                      <label
                        htmlFor="cart_payment-method_fedex"
                        className="cart_payment-method_label uppercase tracking-[2px] text-secondary-text-color cursor-pointer"
                      >
                        cash on delivery
                      </label>
                    </div>
                    <div className="cart_payment-method flex items-center gap-[10px]">
                      <input
                        type="radio"
                        id="cart_payment-method_self-pickup"
                        className="cart_payment-method_input cursor-pointer"
                        name="cart_payment-method_input"
                      />
                      <label
                        htmlFor="cart_payment-method_self-pickup"
                        className="cart_payment-method_label uppercase tracking-[2px] text-secondary-text-color cursor-pointer"
                      >
                        Visa/mastercard
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart_checkout-wrapper lg:px-10 md:px-3 px-10 md:pt-10 pt-6 flex flex-col gap-4 justify-between">
                <div className="cart_delivery-price_wrapper flex flex-col gap-4">
                  <div className="cart_delivery-price_inner-wrapper tracking-[2px] font-medium uppercase flex items-center justify-between ">
                    <p className="cart_delivery-price_title">Delivery</p>
                    <p className="cart_delivery-price">$0</p>
                  </div>
                  <div className="cart_subtotal-price_inner-wrapper tracking-[2px] font-medium uppercase flex items-center justify-between ">
                    <p className="cart_subtotal-price_title">subtotal</p>
                    <p className="cart_subtotal-price">$11 500</p>
                  </div>
                  <div className="cart_total-price_inner-wrapper tracking-[2px] font-medium uppercase text-xl flex items-center justify-between">
                    <p className="cart_total-price_title">total</p>
                    <p className="cart_total-price">$11 500</p>
                  </div>
                </div>
                <button className="cart_checkout-btn text-white bg-disable-color flex justify-center items-center gap-[14px] w-full h-[60px] mt-4 px-3 xl:mb-0 md:mb-6 mb-0">
                  <p className="cart_checkout-btn_title font-semibold text-lg tracking-[2px] ">
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
    </main>
  );
}
