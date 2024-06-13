import Image from "next/image";
import { useState } from "react";

export default function Registration() {
  return (
    <main className="main-login lg:pt-10 pt-24 lg:pb-[100px] pb-10 bg-main-bg-color ">
      <div className="container">
        <div className="login_wrapper flex flex-col">
          <div className="login_breadcrumbs flex items-center gap-2">
            <p className="login_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Home
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="login_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
              Registration
            </p>
          </div>
          <div className="login_main-wrapper max-w-[600px] w-full m-auto lg:mt-[60px] mt-10 flex flex-col gap-[30px]">
            <form
              action="#"
              className="login_form bg-white w-full sm:px-[80px] sm:py-[60px] px-4 py-10 flex flex-col items-center gap-[30px]"
            >
              <h1 className="login_form-title text-3xl font-medium tracking-[3px] uppercase">
                Registration
              </h1>
              <div className="login_form-input_wrapper flex flex-col gap-[10px] w-full mt-[10px]">
                <label
                  htmlFor="login_form_name-input"
                  className="login_form_name-label text-xs uppercase font-semibold text-placeholder-text-color tracking-[1px]"
                >
                  name
                </label>
                <input
                  type="text"
                  name="login_form_name-input"
                  id="login_form_name-input"
                  className="login_form_name-input caret-secondary-text-color text-secondary-text-color outline-none border border-disable-color max-w-[440px] w-full px-[15px] h-[46px]"
                />
              </div>
              <div className="login_form-input_wrapper flex flex-col gap-[10px] w-full mt-[10px]">
                <label
                  htmlFor="login_form_email-input"
                  className="login_form_email-label text-xs uppercase font-semibold text-placeholder-text-color tracking-[1px]"
                >
                  email
                </label>
                <input
                  type="email"
                  name="login_form_email-input"
                  id="login_form_email-input"
                  className="login_form_email-input caret-secondary-text-color text-secondary-text-color outline-none border border-disable-color max-w-[440px] w-full px-[15px] h-[46px]"
                />
              </div>
              <div className="login_form-input_wrapper flex flex-col gap-[10px] w-full">
                <label
                  htmlFor="login_form_password-input"
                  className="login_form_password-label text-xs uppercase font-semibold text-placeholder-text-color tracking-[1px]"
                >
                  password
                </label>
                <input
                  type="password"
                  name="login_form_password-input"
                  id="login_form_password-input"
                  className="login_form_password-input caret-secondary-text-color text-secondary-text-color outline-none border border-disable-color max-w-[440px] w-full px-[15px] h-[46px]"
                />
              </div>
              <div className="login_form-input_wrapper flex flex-col gap-[10px] w-full relative">
                <label
                  htmlFor="login_form_repeat-password-input"
                  className="login_form_repeat-password-label text-xs uppercase font-semibold text-placeholder-text-color tracking-[1px]"
                >
                  Repeat password
                </label>
                <input
                  type="password"
                  name="login_form_repeat-password-input"
                  id="login_form_repeat-password-input"
                  className="login_form_repeat-password-input caret-secondary-text-color text-secondary-text-color outline-none border border-disable-color max-w-[440px] w-full px-[15px] h-[46px]"
                />
                <Image
                  src={"/icons/Icon name=validated.svg"}
                  alt={"chevron_right"}
                  width={18}
                  height={18}
                  className="absolute top-[40px] right-[15px]"
                />
              </div>
              <button
                type="submit"
                className="login_btn w-full h-[60px] bg-disable-color flex items-center justify-center gap-[14px] mt-[10px]"
              >
                <p className="login_btn-title uppercase text-white tracking-[2px] font-semibold text-xl">
                  register
                </p>
                <Image
                  src={"/icons/Icon name=next arrow - white.svg"}
                  alt={"menu-close-btn"}
                  width={24}
                  height={24}
                />
              </button>
              <div className="login_account-desc flex flex-col items-center gap-5 mt-[10px]">
                <p className="login_create-account text-sub-text-color text-center">
                  Have an account already? –{" "}
                  <a href="#" className="text-secondary-text-color">
                    Login
                  </a>
                </p>
              </div>
            </form>
            <div className="login_social-media bg-white w-full sm:px-[60px] sm:py-[30px] px-4 py-6 flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-4">
              <p className="login_social-media-title tracking-[2px] font-medium uppercase text-sub-text-color">
                sign in by social profiles
              </p>
              <div className="login_social-media_wrapper flex gap-4">
                <Image src={"/icons/Icon name=google.svg"} alt={"google"} width={24} height={24} />{" "}
                <Image
                  src={"/icons/Icon name=Facebook.svg"}
                  alt={"Facebook"}
                  width={24}
                  height={24}
                />{" "}
                <Image
                  src={"/icons/Icon name=twitter.svg"}
                  alt={"twitter"}
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
