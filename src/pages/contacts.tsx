import Image from "next/image";
import { useState } from "react";

export default function Contacts() {
  return (
    <main className="main-contacts lg:pt-10 pt-24 lg:pb-[100px] pb-10 bg-main-bg-color ">
      <div className="container">
        <div className="contacts_wrapper flex flex-col">
          <div className="contacts_breadcrumbs flex items-center gap-2">
            <p className="contacts_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Home
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="contacts_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
              Contacts
            </p>
          </div>
          <div className="contacts_title-wrapper flex flex-col gap-[14px] mt-[54px]">
            <h1 className="contacts_title lg:text-3xl text-2xl font-medium tracking-[3px] uppercase">
              Contacts
            </h1>
          </div>
          <div className="contacts_main-wrapper w-full xl:p-[80px] md:p-[40px] py-10 px-4 lg:mt-[60px] mt-10 flex xl:flex-row flex-col xl:gap-20 gap-10 bg-white">
            <div className="contacts_left-wrapper flex lg:gap-0 md:gap-28 gap-10 xl:flex-col md:flex-row flex-col xl:min-w-[520px] md:min-w-[480px] xl:border-r xl:border-b-0 border-b xl:pb-0 pb-10 border-disable-color">
              <div className="contacts_wrapper flex gap-7 xl:basis-0 md:basis-[50%]">
                <div className="contacts_img-wrapper">
                  <Image
                    src={"/icons/Icon name=email gold.svg"}
                    alt={"menu-close-btn"}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="contacts_info-wrapper flex flex-col gap-3 xl:max-w-[231px] ">
                  <p className="contacts_info-title tracking-[2px] uppercase font-medium text-xl">
                    Let’s be in touch
                  </p>
                  <p className="contacts_info-name font-medium text-sub-text-color">
                    SEO – Alex Browning
                  </p>
                  <div className="contacts_info-desc_wrapper mt-1 flex flex-col gap-1">
                    <p className="contacts_info-desc text-disable-color">alexbrown@gmail.com</p>
                    <p className="contacts_info-desc text-disable-color">924-533-1103</p>
                    <p className="contacts_info-desc text-disable-color">432-783-6534</p>
                  </div>
                </div>
              </div>
              <div className="contacts_divider xl:max-w-[440px] w-full h-[1px] bg-disable-color xl:my-10 xl:block md:hidden block"></div>
              <div className="contacts_wrapper flex gap-7 xl:basis-0 md:basis-[50%]">
                <div className="contacts_img-wrapper">
                  <Image
                    src={"/icons/Icon name=calendar gold.svg"}
                    alt={"menu-close-btn"}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="contacts_info-wrapper flex flex-col gap-3 xl:max-w-[231px] ">
                  <p className="contacts_info-title tracking-[2px] uppercase font-medium text-xl">
                    Work Schedule
                  </p>
                  <p className="contacts_info-name text-sub-text-color">
                    We accept orders from 9:00 to 22:00
                  </p>
                  <div className="contacts_info-desc_wrapper mt-1 flex flex-col gap-1">
                    <p className="contacts_info-desc text-sub-text-color font-medium">
                      Order sending
                    </p>
                    <p className="contacts_info-desc text-sub-text-color">Mon-Sat – 9:00-19:00</p>
                    <p className="contacts_info-desc text-sub-text-color">Sun – day off</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contacts_right-wrapper w-full max-w-[790px]">
              <form action="#" className="contact-us_form flex flex-col gap-10">
                <p className="contact-us_form-title tracking-[2.5px] font-medium uppercase text-xl">
                  Have any questions? – Write us
                </p>
                <div className="contact-us_inputs-wrapper flex justify-between gap-7 sm:flex-row flex-col">
                  <div className="contact-us_input-wrapper w-full max-w-[380px] flex flex-col gap-[10px] ">
                    <label
                      htmlFor="contact-us_name-input"
                      className="contact-us_name-label text-xs uppercase tracking-[1px] font-semibold text-placeholder-text-color"
                    >
                      name *
                    </label>
                    <input
                      type="text"
                      name="contact-us_name-input"
                      id="contact-us_name-input"
                      className="contact-us_name-input outline-none border border-disable-color px-[15px] h-[46px]  w-full text-secondary-text-color caret-secondary-text-color"
                      placeholder="Alex Browning"
                    />
                  </div>
                  <div className="contact-us_input-wrapper w-full max-w-[380px] flex flex-col gap-[10px]">
                    <label
                      htmlFor="contact-us_email-input"
                      className="contact-us_email-label text-xs uppercase tracking-[1px] font-semibold text-placeholder-text-color"
                    >
                      email *
                    </label>
                    <input
                      type="email"
                      name="contact-us_email-input"
                      id="contact-us_email-input"
                      className="contact-us_email-input outline-none border border-disable-color px-[15px] h-[46px]  w-full text-secondary-text-color caret-secondary-text-color"
                      placeholder="alexbrown@gmail.com"
                    />
                  </div>
                </div>
                <textarea
                  name="contact-us_text"
                  id="contact-us_text"
                  cols={30}
                  rows={10}
                  className="contact-us_message resize-none max-w-[790px] h-[90px] w-full outline-none border border-disable-color p-[15px] text-secondary-text-color caret-secondary-text-color mt-2"
                  placeholder="Message"
                ></textarea>
                <button
                  type="submit"
                  className="contact-us_send-btn sm:w-[334px] h-[60px] bg-disable-color flex items-center justify-center gap-[14px]"
                >
                  <p className="contact-us_send-btn_title uppercase text-white tracking-[2px] font-semibold text-lg">
                    send message
                  </p>
                  <Image
                    src={"/icons/Icon name=next arrow - white.svg"}
                    alt={"menu-close-btn"}
                    width={24}
                    height={16}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
