import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
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
                    <p className="footer_shipping-desc text-sub-text-color">Mon-Sat – 9:00-19:00</p>
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
            <p className="footer_copyright text-placeholder-text-color">2022©All rights reserved</p>
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
  );
}
