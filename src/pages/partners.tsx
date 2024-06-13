import Image from "next/image";
import { useState } from "react";

export default function Partners() {
  return (
    <main className="main-partners lg:pt-10 pt-24 lg:pb-[100px] pb-10 bg-main-bg-color ">
      <div className="container">
        <div className="partners_wrapper flex flex-col">
          <div className="partners_breadcrumbs flex items-center gap-2">
            <p className="partners_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Home
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="partners_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
              For partners
            </p>
          </div>
          <div className="partners_title-wrapper flex flex-col gap-[14px] mt-[54px]">
            <h1 className="partners_title lg:text-3xl text-2xl font-medium tracking-[3px] uppercase">
              For partners
            </h1>
          </div>
          <div className="partners_main-wrapper w-full xl:p-[80px] md:p-[40px] py-10 px-4 lg:mt-[60px] mt-10 flex xl:flex-row flex-col xl:gap-20 gap-10 bg-white">
            <div className="partners_left-wrapper flex lg:gap-0 md:gap-28 gap-10 xl:flex-col md:flex-row flex-col max-w-[960px] w-full xl:border-r xl:border-b-0 border-b xl:pb-0 pb-10 border-disable-color xl:pr-20">
              <div className="partners_desc-wrapper flex flex-col gap-5">
                <h2 className="partners_desc-title uppercase tracking-[2px] font-medium text-xl">
                  Information for the partners
                </h2>
                <div className="partners_desc_inner-wrapper flex flex-col gap-4">
                  <p className="partners_desc text-lg text-justify text-sub-text-color">
                    So insisted received is occasion advanced honoured. Among ready to which up.
                    Attacks smiling and may out assured moments man nothing outward. Thrown any
                    behind afford either the set depend one temper. Instrument melancholy in
                    acceptance collecting frequently be if. Zealously now pronounce existence add
                    you instantly say offending. Merry their far had widen was. Concerns no in
                    expenses raillery formerly.
                  </p>
                  <p className="partners_desc text-lg text-justify text-sub-text-color">
                    Inhabit hearing perhaps on ye do no. It maids decay as there he. Smallest on
                    suitable disposed do although blessing he juvenile in. Society or if excited
                    forbade. Here name off yet she long sold easy whom. Differed oh cheerful
                    procured pleasure securing suitable in. Hold rich on an he oh fine. Chapter
                    ability shyness article welcome be do on service.
                  </p>
                  <p className="partners_desc text-lg text-justify text-sub-text-color">
                    Attended no do thoughts me on dissuade scarcely. Own are pretty spring suffer
                    old denote his. By proposal speedily mr striking am. But attention sex questions
                    applauded how happiness.
                  </p>
                </div>
              </div>
            </div>
            <div className="partners_right-wrapper w-full max-w-[440px]">
              <form action="#" className="partners-contact_form flex flex-col gap-10">
                <p className="partners-contact_form-title tracking-[2.5px] font-medium uppercase text-xl">
                  Request a partnership
                </p>
                <div className="partners-contact_inputs-wrapper flex  gap-7 flex-col w-full">
                  <div className="partners-contact_input-wrapper w-full flex flex-col gap-[10px] ">
                    <label
                      htmlFor="partners-contact_name-input"
                      className="partners-contact_name-label text-xs uppercase tracking-[1px] font-semibold text-placeholder-text-color"
                    >
                      name *
                    </label>
                    <input
                      type="text"
                      name="partners-contact_name-input"
                      id="partners-contact_name-input"
                      className="partners-contact_name-input outline-none border border-disable-color px-[15px] h-[46px] w-full text-secondary-text-color caret-secondary-text-color"
                      placeholder="Alex Browning"
                    />
                  </div>
                  <div className="partners-contact_input-wrapper w-full flex flex-col gap-[10px]">
                    <label
                      htmlFor="partners-contact_email-input"
                      className="partners-contact_email-label text-xs uppercase tracking-[1px] font-semibold text-placeholder-text-color"
                    >
                      email *
                    </label>
                    <input
                      type="email"
                      name="partners-contact_email-input"
                      id="partners-contact_email-input"
                      className="partners-contact_email-input outline-none border border-disable-color px-[15px] h-[46px]  w-full text-secondary-text-color caret-secondary-text-color"
                      placeholder="alexbrown@gmail.com"
                    />
                  </div>
                </div>
                <textarea
                  name="partners-contact_text"
                  id="partners-contact_text"
                  cols={30}
                  rows={10}
                  className="partners-contact_message resize-none max-w-[790px] h-[90px] w-full outline-none border border-disable-color p-[15px] text-secondary-text-color caret-secondary-text-color mt-2"
                  placeholder="Message"
                ></textarea>
                <button
                  type="submit"
                  className="partners-contact_send-btn h-[60px] bg-disable-color flex items-center justify-center gap-[14px]"
                >
                  <p className="partners-contact_send-btn_title uppercase text-white tracking-[2px] font-semibold text-lg">
                    send request
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
