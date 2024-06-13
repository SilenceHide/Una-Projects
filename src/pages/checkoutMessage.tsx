import Image from "next/image";
import { useState } from "react";

export default function CheckoutMessage() {
  return (
    <main className="main-checkout-message lg:pt-10 pt-24 lg:pb-[100px] pb-10 bg-main-bg-color ">
      <div className="container">
        <div className="checkout-message_wrapper flex flex-col">
          <div className="checkout-message_breadcrumbs flex items-center gap-2">
            <p className="checkout-message_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Home
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="checkout-message_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Checkout
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="checkout-message_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
              Message
            </p>
          </div>
          <div className="checkout-message_main-wrapper xs:max-w-[1080px] xs:w-full w-[373px] m-auto lg:mt-[60px] mt-10 lg:px-[210px] lg:py-[100px] sm:px-[100px] py-[60px] px-4 flex flex-col gap-[40px] bg-white items-center shadow-main-box-shadow xs:static relative left-[-15px]">
            <p className="checkout-message_id uppercase tracking-[2px] border-b border-accent-color w-fit">
              id 4567
            </p>
            <div className="checkout-message_inner-wrapper flex flex-col items-center gap-4">
              <h2 className="checkout-message_thanks sm:text-3xl text-2xl font-medium tracking-[3px] uppercase text-center">
                Thank you! Your order has placed succesfully
              </h2>
              <h3 className="checkout-message_desc text-sub-text-color text-lg text-center">
                An order confirmation email has been sent to your e-mail address{" "}
                <span className="checkout-message_desc-email font-semibold">
                  alexinfo@gmail.com.
                </span>{" "}
                Expect further messages
              </h3>
            </div>
            <a
              href="#"
              type="submit"
              className="checkout-message_btn w-full h-[60px] max-w-[334px] bg-disable-color flex items-center justify-center gap-[14px]"
            >
              <p className="checkout-message_btn-title uppercase text-white tracking-[2px] font-semibold text-xl">
                check mailbox
              </p>
              <Image
                src={"/icons/Icon name=next arrow - white.svg"}
                alt={"menu-close-btn"}
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
