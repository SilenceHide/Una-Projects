import Image from "next/image";
import { useState } from "react";

export default function Profile() {
  const [countryOpen, isCountryOpen] = useState(false);
  const [cityOpen, isCityOpen] = useState(false);

  const [currentOrderOpen, isCurrentOrderOpen] = useState(false);
  const [historyOrderOpen, isHistoryOrderOpen] = useState(false);

  const [personalInfoShow, isPersonalInfoShow] = useState(true);
  const [editInfoShow, isEditInfoShow] = useState(false);
  const [changePassShow, isChangePassShow] = useState(false);
  const [wishlistShow, isWishlistShow] = useState(false);
  const [ordersShow, isOrdersShow] = useState(false);

  return (
    <main className="main-profile lg:pt-10 pt-24 pb-[100px] bg-main-bg-color">
      <div className="container">
        <div className="profile_wrapper flex flex-col">
          <div className="profile_breadcrumbs flex items-center gap-2">
            <p className="profile_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Home
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="profile_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
              profile
            </p>
          </div>
          <div className="profile_title-wrapper flex flex-col gap-[14px] mt-[54px]">
            <h1 className="profile_title lg:text-3xl text-2xl font-medium tracking-[3px] uppercase">
              profile
            </h1>
          </div>
          <div className="profile_main-wrapper xs:overflow-hidden flex flex-col xl:flex-row lg:mt-14 mt-8 items-start xs:static relative left-[-15px]">
            <div className="profile_tabs-wrapper bg-white sm:p-[60px] py-14 px-4 flex flex-col gap-8 xs:min-w-[380px] w-[375px] xl:mr-10 xl:mb-0 mb-10 ">
              <p
                onClick={() => {
                  isEditInfoShow(false);
                  isChangePassShow(false);
                  isWishlistShow(false);
                  isOrdersShow(false);
                  isPersonalInfoShow(true);
                }}
                className={`profile_tab-title w-fit uppercase tracking-[2px] border-b-2 transition-all cursor-pointer hover:text-main-text-color hover:border-accent-color  ${
                  personalInfoShow
                    ? "text-main-text-color border-accent-color"
                    : "text-secondary-text-color border-transparent"
                }`}
              >
                Personal
              </p>
              <p
                onClick={() => {
                  isEditInfoShow(false);
                  isChangePassShow(false);
                  isOrdersShow(false);
                  isPersonalInfoShow(false);
                  isWishlistShow(true);
                }}
                className={`profile_tab-title w-fit uppercase tracking-[2px] border-b-2 transition-all cursor-pointer hover:text-main-text-color hover:border-accent-color  ${
                  wishlistShow
                    ? "text-main-text-color border-accent-color"
                    : "text-secondary-text-color border-transparent"
                }`}
              >
                wishlist (4)
              </p>
              <p
                onClick={() => {
                  isEditInfoShow(false);
                  isChangePassShow(false);
                  isPersonalInfoShow(false);
                  isWishlistShow(false);
                  isOrdersShow(true);
                }}
                className={`profile_tab-title w-fit uppercase tracking-[2px] border-b-2 transition-all cursor-pointer hover:text-main-text-color hover:border-accent-color  ${
                  ordersShow
                    ? "text-main-text-color border-accent-color"
                    : "text-secondary-text-color border-transparent"
                }`}
              >
                orders (2)
              </p>
              <p className="profile_tab-title w-fit uppercase text-secondary-text-color tracking-[2px] border-b-2 border-transparent transition-all cursor-pointer hover:text-main-text-color hover:border-accent-color">
                logout
              </p>
            </div>

            {/* profile section */}
            <div
              className={`profile_personal_inner-wrapper bg-white flex flex-col gap-[60px] transition-all ${
                personalInfoShow
                  ? "visible opacity-100 delay-150 left-0 z-[2] xs:w-full w-[375px] sm:p-[60px] py-14 px-4 "
                  : "invisible opacity-0 -left-full -z-10 w-0 p-0 h-0"
              }`}
            >
              <div className="profile_info flex md:flex-row flex-col gap-[60px]">
                <div className="profile_personal flex flex-col gap-5 md:max-w-[300px] w-full">
                  <div className="profile_title-wrapper border-b border-disable-color pb-1 mb-5">
                    <p className="profile_title uppercase font-medium tracking-[2px]">Personal</p>
                  </div>
                  <div className="profile_personal-info flex items-center justify-between border-b border-disable-color pb-1">
                    <p className="profile_personal-info_title font-medium">First name</p>
                    <p className="profile_personal-info_desc text-sub-text-color">Alexander</p>
                  </div>
                  <div className="profile_personal-info flex items-center justify-between border-b border-disable-color pb-1">
                    <p className="profile_personal-info_title font-medium">Last name</p>
                    <p className="profile_personal-info_desc text-sub-text-color">Silencehide</p>
                  </div>
                  <div className="profile_personal-info flex items-center justify-between border-b border-disable-color pb-1">
                    <p className="profile_personal-info_title font-medium">Email</p>
                    <p className="profile_personal-info_desc text-sub-text-color">
                      Silencehide@gmail.com
                    </p>
                  </div>
                  <div className="profile_personal-info flex items-center justify-between border-b border-disable-color pb-1">
                    <p className="profile_personal-info_title font-medium">Phone</p>
                    <p className="profile_personal-info_desc text-sub-text-color">–</p>
                  </div>
                </div>
                <div className="profile_address flex flex-col gap-5 max-w-[660px] w-full">
                  <div className="profile_title-wrapper border-b border-disable-color pb-1 mb-5">
                    <p className="profile_title uppercase font-medium tracking-[2px]">Address</p>
                  </div>
                  <div className="profile_address-info_wrapper flex 2xl:flex-row xl:flex-col lg:flex-row flex-col 2xl:gap-[60px] xl:gap-5 lg:gap-[60px] gap-5">
                    <div className="profile_address-info_left flex flex-col w-full gap-5">
                      <div className="profile_address-info flex items-center justify-between border-b border-disable-color pb-1">
                        <p className="profile_address-info_title font-medium">Country</p>
                        <p className="profile_address-info_desc text-sub-text-color">–</p>
                      </div>
                      <div className="profile_address-info flex items-center justify-between border-b border-disable-color pb-1">
                        <p className="profile_address-info_title font-medium">Town/city</p>
                        <p className="profile_address-info_desc text-sub-text-color">–</p>
                      </div>
                      <div className="profile_address-info flex items-center justify-between border-b border-disable-color pb-1">
                        <p className="profile_address-info_title font-medium">Street</p>
                        <p className="profile_address-info_desc text-sub-text-color">–</p>
                      </div>
                      <div className="profile_address-info flex items-center justify-between border-b border-disable-color pb-1">
                        <p className="profile_address-info_title font-medium">Apartment</p>
                        <p className="profile_address-info_desc text-sub-text-color">–</p>
                      </div>
                    </div>
                    <div className="profile_address-info_right flex flex-col w-full gap-5">
                      <div className="profile_address-info flex items-center justify-between border-b border-disable-color pb-1">
                        <p className="profile_address-info_title font-medium">ZIP Code</p>
                        <p className="profile_address-info_desc text-sub-text-color">–</p>
                      </div>
                      <div className="profile_address-info flex items-center justify-between border-b border-disable-color pb-1">
                        <p className="profile_address-info_title font-medium">Comment</p>
                        <p className="profile_address-info_desc text-sub-text-color">–</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile_btns-wrapper flex sm:flex-row flex-col gap-6">
                <button
                  onClick={() => {
                    isPersonalInfoShow(false);
                    isEditInfoShow(true);
                  }}
                  type="button"
                  className="profile_btn_edit-info uppercase tracking-[2px] bg-disable-color text-white sm:w-[224px] h-[46px]"
                >
                  edit information
                </button>
                <button
                  onClick={() => {
                    isPersonalInfoShow(false);
                    isChangePassShow(true);
                  }}
                  type="button"
                  className="profile_btn_change-pass uppercase tracking-[2px] sm:w-[224px] h-[46px] border border-disable-color text-secondary-text-color"
                >
                  change password
                </button>
              </div>
            </div>

            {/* edit profile section */}
            <div
              className={`profile_edit-info_inner-wrapper bg-white transition-all ${
                editInfoShow
                  ? "visible opacity-100 delay-150 left-0 z-[2] xs:w-full w-[375px] sm:p-[60px] py-14 px-4"
                  : "invisible opacity-0 -left-full -z-10 w-0 p-0 h-0"
              }`}
            >
              <form action="#" className="profile-edit-info_form ">
                <div className="profile_form-wrapper flex flex-col h-fit xl:max-w-[660px]">
                  <div className="profile_personal-info-wrapper flex flex-col gap-6 justify-between pb-10 pt-0 w-full">
                    <h2 className="profile_personal-info-title uppercase font-medium tracking-[3px] text-2xl pb-1 border-b border-disable-color mb-4">
                      personal
                    </h2>
                    <div className="profile_personal-info_inner-wrapper flex lg:items-center justify-between lg:flex-row flex-col gap-6 lg:gap-0 ">
                      <div className="profile_personal-info flex flex-col gap-[10px]">
                        <label
                          htmlFor="profile_personal-info_first-name"
                          className="profile_personal-info_first-name_label uppercase text-placeholder-text-color font-semibold text-xs tracking-[1px]"
                        >
                          first name *
                        </label>
                        <input
                          type="text"
                          id="profile_personal-info_first-name"
                          className="profile_personal-info_first-name_input outline-none border border-disable-color xl:w-[315px] w-[343px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                        />
                      </div>
                      <div className="profile_personal-info flex flex-col gap-[10px]">
                        <label
                          htmlFor="profile_personal-info_first-name"
                          className="profile_personal-info_first-name_label uppercase text-placeholder-text-color font-semibold text-xs tracking-[1px]"
                        >
                          last name *
                        </label>
                        <input
                          type="text"
                          id="profile_personal-info_first-name"
                          className="profile_personal-info_first-name_input outline-none border border-disable-color xl:w-[315px] w-[343px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                        />
                      </div>
                    </div>
                    <div className="profile_personal-info_inner-wrapper flex lg:items-center justify-between lg:flex-row flex-col gap-6 lg:gap-0 ">
                      <div className="profile_personal-info flex flex-col gap-[10px]">
                        <label
                          htmlFor="profile_personal-info_first-name"
                          className="profile_personal-info_first-name_label uppercase text-placeholder-text-color font-semibold text-xs tracking-[1px]"
                        >
                          phone
                        </label>
                        <input
                          type="text"
                          id="profile_personal-info_first-name"
                          className="profile_personal-info_first-name_input outline-none border border-disable-color xl:w-[315px] w-[343px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                        />
                      </div>
                      <div className="profile_personal-info flex flex-col gap-[10px]">
                        <label
                          htmlFor="profile_personal-info_first-name"
                          className="profile_personal-info_first-name_label uppercase text-placeholder-text-color font-semibold text-xs tracking-[1px]"
                        >
                          email
                        </label>
                        <input
                          type="email"
                          id="profile_personal-info_first-name"
                          className="profile_personal-info_first-name_input outline-none border border-disable-color xl:w-[315px] w-[343px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="profile_address-wrapper flex flex-col gap-6 justify-between pt-10 pb-0 w-full">
                    <h2 className="profile_address-title uppercase font-medium tracking-[3px] text-2xl mb-1 pb-1 border-b border-disable-color">
                      address
                    </h2>
                    <div className="profile_address_select-wrapper flex lg:items-center justify-between mb-5 lg:flex-row flex-col gap-[26px]">
                      <div className="profile_inner-wrapper flex flex-col gap-[10px] relative ">
                        <p
                          className={`profile_label uppercase font-semibold text-xs tracking-[1px] transition-all ${
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
                          className={`profile_select h-[46px] xl:w-[315px] w-[343px] p-[15px] border outline-none bg-white flex items-center justify-between transition-all ${
                            countryOpen ? "border-accent-color" : "border-disable-color"
                          }`}
                        >
                          <p className="profile_select_title text-placeholder-text-color">
                            Select country *
                          </p>
                          <Image
                            src={"/icons/Icon name=chevron_down.svg"}
                            alt={"chevron_down"}
                            width={14}
                            height={10}
                            className={`profile_select-icon pointer-events-none transition-all ${
                              countryOpen ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </button>
                        <ul
                          className={`profile_list absolute z-[10] left-[0px] top-[72px] xl:w-[315px] w-[343px] p-[15px] border border-accent-color bg-white flex flex-col gap-4 transition-all duration-300 h-[170px] overflow-y-scroll  ${
                            countryOpen ? "visible opacity-100" : "invisible opacity-0"
                          }`}
                        >
                          <li
                            className="profile_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium "
                            value={"UK"}
                          >
                            UK
                          </li>
                          <li
                            className="profile_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium "
                            value={"USA"}
                          >
                            USA
                          </li>
                          <li
                            className="profile_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                            value={"Ukraine"}
                          >
                            Ukraine
                          </li>
                          <li
                            className="profile_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                            value={"Uganda"}
                          >
                            Uganda
                          </li>
                        </ul>
                      </div>
                      <div className="profile_address flex flex-col gap-[10px] relative">
                        <div className="profile_inner-wrapper flex flex-col gap-[10px] relative ">
                          <p
                            className={`profile_label uppercase font-semibold text-xs tracking-[1px] transition-all ${
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
                            className={`profile_select h-[46px] xl:w-[315px] w-[343px] p-[15px] border outline-none bg-white flex items-center justify-between transition-all ${
                              cityOpen ? "border-accent-color" : "border-disable-color"
                            }`}
                          >
                            <p className="profile_select_title text-placeholder-text-color">
                              Town/city *
                            </p>
                            <Image
                              src={"/icons/Icon name=chevron_down.svg"}
                              alt={"chevron_down"}
                              width={14}
                              height={10}
                              className={`profile_select-icon pointer-events-none transition-all ${
                                cityOpen ? "rotate-180" : "rotate-0"
                              }`}
                            />
                          </button>
                          <ul
                            className={`profile_list absolute z-[10] left-[0px] top-[72px] xl:w-[315px] w-[343px] p-[15px] border border-accent-color bg-white flex flex-col gap-4 transition-all duration-300 h-[170px] overflow-y-scroll ${
                              cityOpen ? "visible opacity-100" : "invisible opacity-0"
                            }`}
                          >
                            <li
                              className="profile_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium "
                              value={"UK"}
                            >
                              UK
                            </li>
                            <li
                              className="profile_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium "
                              value={"USA"}
                            >
                              USA
                            </li>
                            <li
                              className="profile_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                              value={"Ukraine"}
                            >
                              Ukraine
                            </li>
                            <li
                              className="profile_item cursor-pointer transition-all hover:text-main-text-color text-secondary-text-color font-medium"
                              value={"Uganda"}
                            >
                              Uganda
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="profile_address_location-wrapper flex lg:items-center items-start justify-between mb-5 lg:flex-row flex-col lg:gap-0 gap-10">
                      <div className="profile_address flex flex-col gap-[10px]">
                        <input
                          type="text"
                          id="profile_address_first-name"
                          className="profile_address_first-name_input outline-none border border-disable-color xl:w-[315px] w-[343px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                          placeholder="Street name *"
                        />
                      </div>
                      <div className="profile_address flex items-center justify-between gap-[24px]">
                        <input
                          type="text"
                          id="profile_address_first-name"
                          className="profile_address_first-name_input outline-none border border-disable-color xl:w-[145px] w-[165px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                          placeholder="Apartment"
                        />
                        <input
                          type="text"
                          id="profile_address_first-name"
                          className="profile_address_first-name_input outline-none border border-disable-color xl:w-[145px] w-[165px] h-[46px] px-4 caret-secondary-text-color text-secondary-text-color"
                          placeholder="ZIP Code"
                        />
                      </div>
                    </div>
                    <div className="profile_address_comment-wrapper flex items-center gap-3 ">
                      <textarea
                        name="profile_address-comment"
                        id="profile_address-comment"
                        cols={30}
                        rows={10}
                        className="profile_address-comment lg:h-[46px] h-[90px] w-full outline-none border border-disable-color resize-none px-4 py-2 text-secondary-text-color caret-secondary-text-color"
                        placeholder="Your comment"
                      ></textarea>
                    </div>
                  </div>
                  <div className="profile_btns-wrapper mt-[60px] flex items-center gap-6">
                    <button
                      type="button"
                      className="profile_info-form_save-btn w-[190px] h-[46px] uppercase tracking-[2px] text-white bg-disable-color"
                    >
                      save changes
                    </button>
                    <button
                      onClick={() => {
                        isPersonalInfoShow(true);
                        isEditInfoShow(false);
                      }}
                      type="button"
                      className="profile_info-form_cancel-btn w-[122px] h-[46px] uppercase tracking-[2px] border border-disable-color text-secondary-text-color"
                    >
                      cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* change password section */}
            <div
              className={`profile_change-pass_inner-wrapper bg-white transition-all ${
                changePassShow
                  ? "visible opacity-100 delay-150 left-0 z-[2] xs:w-full w-[375px] sm:p-[60px] py-14 px-4 "
                  : "invisible opacity-0 -left-full -z-10 w-0 p-0 h-0"
              }`}
            >
              <form action="#" className="profile_change-pass_form flex flex-col gap-[60px]">
                <div className="profile_change-pass flex flex-col lg:gap-[60px] gap-10 max-w-[660px] w-full">
                  <div className="profile_title-wrapper border-b border-disable-color pb-1 mb-5">
                    <p className="profile_title uppercase font-medium tracking-[2px]">
                      change password
                    </p>
                  </div>
                  <div className="profile_change-pass_input-wrapper flex lg:flex-row flex-col justify-between lg:gap-0 gap-10">
                    <div className="profile_change-pass_inputs flex flex-col gap-4 max-w-[315px] ">
                      <div className="profile_change-pass_input_inner-wrapper flex flex-col gap-[10px]">
                        <label
                          htmlFor="profile_change-pass_input"
                          className="profile_change-pass_label uppercase font-semibold text-xs tracking-[1px] text-placeholder-text-color relative"
                        >
                          old password
                          <Image
                            src={"/icons/Icon name=validated.svg"}
                            alt={"validated"}
                            width={18}
                            height={18}
                            priority
                            className="header_logo absolute top-[40px] right-[15px]"
                          />
                        </label>
                        <input
                          type="password"
                          className="profile_change-pass_input outline-none border border-disable-color w-[315px] h-[46px] p-[15px] caret-secondary-text-color "
                          id="profile_change-pass_input"
                        />
                      </div>
                      <div className="profile_change-pass_input_inner-wrapper flex flex-col gap-[10px]">
                        <a
                          href="#"
                          className="profile_change-pass_forgot text-secondary-text-color"
                        >
                          Forgot password?
                        </a>
                        <p className="profile_change-pass_help text-placeholder-text-color">
                          The strong password must At least 8 characters and it contains uppercase
                          and lowercase Latin letters and numbers and special characters.
                        </p>
                      </div>
                    </div>
                    <div className="profile_change-pass_inputs flex flex-col gap-4 max-w-[315px] ">
                      <div className="profile_change-pass_input_inner-wrapper flex flex-col gap-[10px]">
                        <label
                          htmlFor="profile_change-pass_input"
                          className="profile_change-pass_label uppercase font-semibold text-xs tracking-[1px] text-placeholder-text-color relative"
                        >
                          new password
                        </label>
                        <input
                          type="password"
                          className="profile_change-pass_input outline-none border border-disable-color w-[315px] h-[46px] p-[15px] caret-secondary-text-color "
                          id="profile_change-pass_input"
                        />
                      </div>
                      <div className="profile_change-pass_input_inner-wrapper flex flex-col gap-[10px] mt-[14px]">
                        <label
                          htmlFor="profile_change-pass_input"
                          className="profile_change-pass_label uppercase font-semibold text-xs tracking-[1px] text-placeholder-text-color relative"
                        >
                          repeat password
                          <Image
                            src={"/icons/Icon name=validated.svg"}
                            alt={"validated"}
                            width={18}
                            height={18}
                            priority
                            className="header_logo absolute top-[40px] right-[15px] invisible opacity-0"
                          />
                        </label>
                        <input
                          type="password"
                          className="profile_change-pass_input outline-none border border-disable-color w-[315px] h-[46px] p-[15px] caret-secondary-text-color "
                          id="profile_change-pass_input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile_change-pass_btns-wrapper flex sm:flex-row flex-col gap-6">
                  <button
                    type="button"
                    className="profile_btn_change-pass uppercase tracking-[2px] bg-disable-color text-white sm:w-[224px] h-[46px]"
                  >
                    save changes
                  </button>
                  <button
                    onClick={() => {
                      isPersonalInfoShow(true);
                      isChangePassShow(false);
                    }}
                    type="button"
                    className="profile_btn_cancel uppercase tracking-[2px] sm:w-[122px] h-[46px] border border-disable-color text-secondary-text-color"
                  >
                    cancel
                  </button>
                </div>
              </form>
            </div>

            {/* wishlist section */}
            <div
              className={`wishlist_inner-wrapper bg-white transition-all ${
                wishlistShow
                  ? "visible opacity-100 delay-150 left-0 z-10 xs:w-full w-[375px] sm:px-[60px] md:pb-[60px] md:pt-0 pb-10 pt-[10px] px-4 "
                  : "invisible opacity-0 -left-full -z-10 w-0 p-0 h-0"
              }`}
            >
              <div className="wishlist_product md:py-10 py-[30px] border-b border-disable-color flex md:items-center justify-between 3xl:gap-[100px] lg:gap-10 gap-5 md:flex-row flex-col">
                <div className="wishlist_product_left flex lg:items-center gap-[30px] max-w-[590px] w-full lg:min-w-[450px] min-w-[360px]">
                  <div className="wishlist_product-img md:min-w-[160px] md:w-[160px] md:h-[160px] min-w-[80px] w-[80px] h-[80px] bg-disable-text-color"></div>
                  <div className="wishlist_product-info flex lg:flex-row flex-col lg:items-center justify-between w-full">
                    <div className="wishlist_product-info_left flex flex-col md:gap-[10px] md:mb-0 mb-4">
                      <p className="wishlist_product-title uppercase tracking-[2px] font-medium md:mb-0 mb-[10px]">
                        donna lamp
                      </p>
                      <p className="wishlist_product-desc text-sm text-placeholder-text-color">
                        gold
                      </p>
                      <p className="wishlist_product-desc text-sm text-placeholder-text-color">
                        50 sm х 30 sm
                      </p>
                    </div>
                    <div className="wishlist_product-info_right">
                      <p className="wishlist_product-price tracking-[1px] text-accent-color font-medium">
                        $245
                      </p>
                    </div>
                  </div>
                </div>
                <div className="wishlist_product_right flex xl:max-w-[400px] max-w-[350px] w-full items-center justify-between">
                  <div className="wishlist_product-add-delete_wrapper flex items-center justify-between w-full">
                    <div className="wishlist_product-add flex items-center gap-[10px] cursor-pointer">
                      <div className="wishlist_product-cart-btn w-[46px] h-[46px] rounded-full flex items-center justify-center border border-disable-color">
                        <Image
                          src={"/icons/Icon name=cart.svg"}
                          alt={"cart"}
                          width={24}
                          height={24}
                          priority
                        />
                      </div>
                      <div className="wishlist_product-add-title uppercase tracking-[2px] text-secondary-text-color text-center">
                        add to cart
                      </div>
                    </div>
                    <div className="wishlist_product-delete w-[46px] h-[46px] rounded-full flex items-center justify-center border border-disable-color cursor-pointer">
                      <Image
                        src={"/icons/Icon name=trash.svg"}
                        alt={"trash"}
                        width={18}
                        height={20}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wishlist_product md:py-10 py-[30px] border-b border-disable-color flex md:items-center justify-between 3xl:gap-[100px] lg:gap-10 gap-5 md:flex-row flex-col">
                <div className="wishlist_product_left flex lg:items-center gap-[30px] max-w-[590px] w-full lg:min-w-[450px] min-w-[360px]">
                  <div className="wishlist_product-img md:min-w-[160px] md:w-[160px] md:h-[160px] min-w-[80px] w-[80px] h-[80px] bg-disable-text-color"></div>
                  <div className="wishlist_product-info flex lg:flex-row flex-col lg:items-center justify-between w-full">
                    <div className="wishlist_product-info_left flex flex-col md:gap-[10px] md:mb-0 mb-4">
                      <p className="wishlist_product-title uppercase tracking-[2px] font-medium md:mb-0 mb-[10px]">
                        wingrove
                      </p>
                      <p className="wishlist_product-desc text-sm text-placeholder-text-color">
                        brown
                      </p>
                      <p className="wishlist_product-desc text-sm text-placeholder-text-color">
                        natural wood
                      </p>
                    </div>
                    <div className="wishlist_product-info_right flex items-center gap-2">
                      <p className="wishlist_product-price tracking-[1px] text-red-hot font-medium">
                        $825
                      </p>
                      <p className="wishlist_product-price tracking-[1px] text-disable-color line-through font-medium">
                        $900
                      </p>
                    </div>
                  </div>
                </div>
                <div className="wishlist_product_right flex xl:max-w-[400px] max-w-[350px] w-full items-center justify-between">
                  <div className="wishlist_product-add-delete_wrapper flex items-center justify-between w-full">
                    <div className="wishlist_product-add flex items-center gap-[10px] cursor-pointer">
                      <div className="wishlist_product-cart-btn w-[46px] h-[46px] rounded-full flex items-center justify-center border border-disable-color">
                        <Image
                          src={"/icons/Icon name=cart.svg"}
                          alt={"cart"}
                          width={24}
                          height={24}
                          priority
                        />
                      </div>
                      <div className="wishlist_product-add-title uppercase tracking-[2px] text-secondary-text-color text-center">
                        add to cart
                      </div>
                    </div>
                    <div className="wishlist_product-delete w-[46px] h-[46px] rounded-full flex items-center justify-center border border-disable-color cursor-pointer">
                      <Image
                        src={"/icons/Icon name=trash.svg"}
                        alt={"trash"}
                        width={18}
                        height={20}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wishlist_product md:py-10 py-[30px] border-b border-disable-color flex md:items-center justify-between 3xl:gap-[100px] lg:gap-10 gap-5 md:flex-row flex-col">
                <div className="wishlist_product_left flex lg:items-center gap-[30px] max-w-[590px] w-full lg:min-w-[450px] min-w-[360px]">
                  <div className="wishlist_product-img md:min-w-[160px] md:w-[160px] md:h-[160px] min-w-[80px] w-[80px] h-[80px] bg-disable-text-color"></div>
                  <div className="wishlist_product-info flex lg:flex-row flex-col lg:items-center justify-between w-full">
                    <div className="wishlist_product-info_left flex flex-col md:gap-[10px] md:mb-0 mb-4">
                      <p className="wishlist_product-title uppercase tracking-[2px] font-medium md:mb-0 mb-[10px]">
                        lavelle bed
                      </p>
                      <p className="wishlist_product-desc text-sm text-placeholder-text-color">
                        milk
                      </p>
                      <p className="wishlist_product-desc text-sm text-placeholder-text-color">
                        180 x 200 mm
                      </p>
                    </div>
                    <div className="wishlist_product-info_right flex items-center gap-2">
                      <p className="wishlist_product-price tracking-[1px] text-accent-color font-medium">
                        $1 000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="wishlist_product_right flex xl:max-w-[400px] max-w-[350px] w-full items-center justify-between">
                  <div className="wishlist_product-add-delete_wrapper flex items-center justify-between w-full">
                    <div className="wishlist_product-add flex items-center gap-[10px] cursor-pointer">
                      <div className="wishlist_product-cart-btn w-[46px] h-[46px] rounded-full flex items-center justify-center border border-disable-color">
                        <Image
                          src={"/icons/Icon name=cart.svg"}
                          alt={"cart"}
                          width={24}
                          height={24}
                          priority
                        />
                      </div>
                      <div className="wishlist_product-add-title uppercase tracking-[2px] text-secondary-text-color text-center">
                        add to cart
                      </div>
                    </div>
                    <div className="wishlist_product-delete w-[46px] h-[46px] rounded-full flex items-center justify-center border border-disable-color cursor-pointer">
                      <Image
                        src={"/icons/Icon name=trash.svg"}
                        alt={"trash"}
                        width={18}
                        height={20}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wishlist_product md:py-10 py-[30px] border-b border-disable-color flex md:items-center justify-between 3xl:gap-[100px] lg:gap-10 gap-5 md:flex-row flex-col">
                <div className="wishlist_product_left flex lg:items-center gap-[30px] max-w-[590px] w-full lg:min-w-[450px] min-w-[360px]">
                  <div className="wishlist_product-img md:min-w-[160px] md:w-[160px] md:h-[160px] min-w-[80px] w-[80px] h-[80px] bg-disable-text-color"></div>
                  <div className="wishlist_product-info flex lg:flex-row flex-col lg:items-center justify-between w-full">
                    <div className="wishlist_product-info_left flex flex-col md:gap-[10px] md:mb-0 mb-4">
                      <p className="wishlist_product-title uppercase tracking-[2px] font-medium md:mb-0 mb-[10px]">
                        alisma coffee table
                      </p>
                      <p className="wishlist_product-desc text-sm text-placeholder-text-color">
                        milk
                      </p>
                      <p className="wishlist_product-desc text-sm text-placeholder-text-color">
                        180 x 200 mm
                      </p>
                    </div>
                    <div className="wishlist_product-info_right flex items-center gap-2">
                      <p className="wishlist_product-price tracking-[1px] text-accent-color font-medium">
                        $300
                      </p>
                    </div>
                  </div>
                </div>
                <div className="wishlist_product_right flex xl:max-w-[400px] max-w-[350px] w-full items-center justify-between">
                  <div className="wishlist_product-add-delete_wrapper flex items-center justify-between w-full">
                    <div className="wishlist_product-add flex items-center gap-[10px] cursor-pointer">
                      <div className="wishlist_product-cart-btn w-[46px] h-[46px] rounded-full flex items-center justify-center border border-disable-color">
                        <Image
                          src={"/icons/Icon name=cart.svg"}
                          alt={"cart"}
                          width={24}
                          height={24}
                          priority
                        />
                      </div>
                      <div className="wishlist_product-add-title uppercase tracking-[2px] text-secondary-text-color text-center">
                        add to cart
                      </div>
                    </div>
                    <div className="wishlist_product-delete w-[46px] h-[46px] rounded-full flex items-center justify-center border border-disable-color cursor-pointer">
                      <Image
                        src={"/icons/Icon name=trash.svg"}
                        alt={"trash"}
                        width={18}
                        height={20}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="wishlist_page-number flex items-center mt-10 sm:gap-7 gap-[18px] justify-center">
                <div className="wishlist_prev-page cursor-pointer w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center border border-disable-color">
                  <Image
                    src={"/icons/Icon name=chevron_left.svg"}
                    alt={"chevron_left"}
                    width={10}
                    height={14}
                  />
                </div>
                <div className="wishlist_page-btns flex items-center sm:gap-4 gap-[10px]">
                  <div className="wishlist_page-btn w-[46px] h-[46px] cursor-pointer font-medium text-disable-color bg-white rounded-full flex items-center justify-center border border-disable-text-color selected-page">
                    1
                  </div>
                  <div className="wishlist_page-btn w-[46px] h-[46px] cursor-pointer font-medium text-disable-color bg-white rounded-full flex items-center justify-center border border-disable-text-color">
                    2
                  </div>
                  <div className="wishlist_page-btn w-[46px] h-[46px] cursor-pointer font-medium text-disable-color bg-white rounded-full flex items-center justify-center border border-disable-text-color">
                    3
                  </div>
                </div>
                <div className="wishlist_next-page cursor-pointer w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center border border-disable-color">
                  <Image
                    src={"/icons/Icon name=chevron_right.svg"}
                    alt={"chevron_right"}
                    width={10}
                    height={14}
                  />
                </div>
              </div>
            </div>

            {/* orders section */}
            <div
              className={` orders_inner-wrapper bg-white transition-all ${
                ordersShow
                  ? "visible opacity-100 delay-150 left-0 z-10 xs:w-full sm:px-[60px] py-[60px] px-4 w-[375px]"
                  : "invisible opacity-0 -left-full -z-10 w-0 p-0 h-0"
              }`}
            >
              <div className="orders_wrapper flex flex-col gap-[60px]">
                <div className="order-current_wrapper flex flex-col gap-[10px]">
                  <h2 className="order-current_title uppercase tracking-[2px] font-medium border-b border-disable-color pb-[30px]">
                    Current orders (2)
                  </h2>
                  <div className="order_main-wrapper border-b border-disable-color pb-[10px]">
                    <div className="order_current_inner-wrapper flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-3 cursor-pointer">
                      <div className="order_left-wrapper flex items-center md:gap-10 lg:justify-normal justify-between sm:flex-nowrap flex-wrap">
                        <p className="order_number uppercase font-medium tracking-[2px]">#2245</p>
                        <p className="order_date text-placeholder-text-color">12.07.2019, 14:13</p>
                        <div className="order_status-wrapper flex items-center gap-2 bg-main-bg-color px-[14px] py-[6px]">
                          <Image
                            src={"/icons/Icon name=truck.svg"}
                            alt={"truck"}
                            width={18}
                            height={18}
                          />
                          <p className="order_status text-sm font-medium tracking-[1px] text-sub-text-color uppercase">
                            En route
                          </p>
                        </div>
                      </div>
                      <div className="order_right-wrapper flex items-center gap-[30px] lg:justify-normal justify-between">
                        <div className="order_total-price-wrapper">
                          <p className="order_total-price text-accent-color font-medium tracking-[1px]">
                            $1 000
                          </p>
                        </div>
                        <div className="order_show-btn h-[46px] w-[46px] rounded-full border border-disable-color flex items-center justify-center">
                          <Image
                            src={"/icons/Icon name=small ch_down.svg"}
                            alt={"arrow-down"}
                            width={14}
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order_main-wrapper border-b border-disable-color pb-[10px]">
                    <div
                      onClick={() => {
                        isCurrentOrderOpen(!currentOrderOpen);
                      }}
                      className="order_current_inner-wrapper flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-3 cursor-pointer"
                    >
                      <div className="order_left-wrapper flex items-center md:gap-10 lg:justify-normal justify-between sm:flex-nowrap flex-wrap">
                        <p className="order_number uppercase font-medium tracking-[2px]">#2234</p>
                        <p className="order_date text-placeholder-text-color">10.07.2019, 11:40</p>
                        <div className="order_status-wrapper flex items-center gap-2 bg-main-bg-color px-[14px] py-[6px]">
                          <Image
                            src={"/icons/Icon name=document.svg"}
                            alt={"document"}
                            width={18}
                            height={18}
                          />
                          <p className="order_status text-sm font-medium tracking-[1px] text-sub-text-color uppercase">
                            New order
                          </p>
                        </div>
                      </div>
                      <div className="order_right-wrapper flex items-center gap-[30px] lg:justify-normal justify-between">
                        <div className="order_total-price-wrapper flex gap-2">
                          <p className="order_total-price text-red-hot font-medium tracking-[1px]">
                            $3 500
                          </p>
                          <p className="order_total-discount text-disable-color font-medium tracking-[1px] line-through">
                            $4 000
                          </p>
                        </div>
                        <div className="order_show-btn h-[46px] w-[46px] rounded-full border border-disable-color flex items-center justify-center">
                          <Image
                            src={"/icons/Icon name=small ch_down.svg"}
                            alt={"arrow-down"}
                            width={14}
                            height={10}
                            className={`${
                              currentOrderOpen ? "rotate-180" : "rotate-0"
                            } transition-all`}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`order_product-costumer_wrapper border-t mt-[10px] border-disable-color overflow-hidden flex lg:items-center lg:flex-row flex-col transition-all duration-300
                      ${
                        currentOrderOpen
                          ? "lg:h-[322px] h-[617px] visible opacity-100 sm:py-10 py-5 mt-[10px]"
                          : "h-0 invisible opacity-0 p-0 mt-0"
                      }`}
                    >
                      <div className="order_product-info_wrapper 2xl:max-w-[600px] lg:max-w-[500px] w-full lg:border-r lg:border-b-0 border-b border-disable-color lg:pr-10 lg:pb-0 sm:pb-10 pb-6">
                        <div className="order_product-info_inner-wrapper flex items-center gap-[30px]">
                          <div className="order_product_img w-[80px] h-[80px] min-w-[80px] bg-disable-text-color"></div>
                          <div className="order_product_info-wrapper flex sm:items-center justify-between w-full sm:flex-row flex-col gap-4 sm:gap-0">
                            <div className="order_product_info-left flex flex-col gap-[10px]">
                              <p className="order_product-title uppercase tracking-[2px] font-medium">
                                black table
                              </p>
                              <div className="order_product-wrapper">
                                <p className="order_product-info text-sm text-placeholder-text-color">
                                  black
                                </p>
                                <p className="order_product-info text-sm text-placeholder-text-color">
                                  50 sm х 30 sm
                                </p>
                              </div>
                            </div>
                            <div className="order_product_info-right flex items-center gap-20">
                              <p className="order_product-number font-medium text-disable-color">
                                x2
                              </p>
                              <p className="order_product-price font-medium tracking-[1px] text-accent-color">
                                $2 000
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="order_product-info_divider 2xl:w-[560px] lg:w-[460px] w-full h-[1px] bg-disable-text-color my-10"></div>
                        <div className="order_product-info_inner-wrapper flex items-center gap-[30px]">
                          <div className="order_product_img w-[80px] h-[80px] min-w-[80px] bg-disable-text-color"></div>
                          <div className="order_product_info-wrapper flex sm:items-center justify-between w-full sm:flex-row flex-col gap-4 sm:gap-0">
                            <div className="order_product_info-left flex flex-col gap-[10px]">
                              <p className="order_product-title uppercase tracking-[2px] font-medium">
                                combined table
                              </p>
                              <div className="order_product-wrapper">
                                <p className="order_product-info text-sm text-placeholder-text-color">
                                  black
                                </p>
                              </div>
                            </div>
                            <div className="order_product_info-right flex items-center gap-20">
                              <p className="order_product-number font-medium text-disable-color">
                                x3
                              </p>
                              <div className="order_product-price_wrapper flex gap-3 sm:flex-col">
                                <p className="order_product-price font-medium tracking-[1px] text-red-hot">
                                  $1 500
                                </p>
                                <p className="order_product-price font-medium tracking-[1px] line-through text-disable-color">
                                  $2 000
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="order_costumer-info_wrapper lg:pl-10 lg:pt-0 sm:pt-10 pt-6 flex flex-col gap-6">
                        <div className="order_checkout-info tracking-[2px] uppercase font-medium flex flex-col gap-4">
                          <p className="order_checkout_delivery-info">Self pickup (free)</p>
                          <p className="order_checkout_payment-info">Visa/mastercard</p>
                        </div>
                        <div className="order_costumer-info text-sub-text-color flex flex-col gap-[10px]">
                          <p className="order_costumer-name">Alexander Silencehide</p>
                          <p className="order_costumer-email">Silencehide@mail.com</p>
                          <p className="order_costumer-phone">(480) 555-0103</p>
                          <p className="order_costumer-address">
                            4517 Washington Ave. Manchester, Kentucky 39495
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-history_wrapper flex flex-col gap-[10px]">
                  <h2 className="order-history_title uppercase tracking-[2px] font-medium border-b border-disable-color pb-[30px]">
                    order history (2)
                  </h2>
                  <div className="order_main-wrapper border-b border-disable-color pb-[10px]">
                    <div className="order_history_inner-wrapper flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-3 cursor-pointer">
                      <div className="order_left-wrapper flex items-center md:gap-10 lg:justify-normal justify-between sm:flex-nowrap flex-wrap">
                        <p className="order_number uppercase font-medium tracking-[2px]">#2245</p>
                        <p className="order_date text-placeholder-text-color">12.07.2019, 14:13</p>
                        <div className="order_status-wrapper flex items-center gap-2 bg-main-bg-color px-[14px] py-[6px]">
                          <Image
                            src={"/icons/cancel-disable.svg"}
                            alt={"cancel"}
                            width={18}
                            height={18}
                          />
                          <p className="order_status text-sm font-medium tracking-[1px] text-disable-color uppercase">
                            Cancelled
                          </p>
                        </div>
                      </div>
                      <div className="order_right-wrapper flex items-center gap-[30px] lg:justify-normal justify-between">
                        <p className="order_total-price text-accent-color font-medium tracking-[1px]">
                          $280
                        </p>
                        <div className="order_show-btn h-[46px] w-[46px] rounded-full border border-disable-color flex items-center justify-center">
                          <Image
                            src={"/icons/Icon name=small ch_down.svg"}
                            alt={"arrow-down"}
                            width={14}
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order_main-wrapper border-b border-disable-color pb-[10px]">
                    <div
                      onClick={() => {
                        isHistoryOrderOpen(!historyOrderOpen);
                      }}
                      className="order_history_inner-wrapper flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-3 cursor-pointer"
                    >
                      <div className="order_left-wrapper flex items-center md:gap-10 lg:justify-normal justify-between sm:flex-nowrap flex-wrap">
                        <p className="order_number uppercase font-medium tracking-[2px]">#2234</p>
                        <p className="order_date text-placeholder-text-color">10.07.2019, 11:40</p>
                        <div className="order_status-wrapper flex items-center gap-2 bg-main-bg-color px-[14px] py-[6px]">
                          <Image
                            src={"/icons/done-success.svg"}
                            alt={"done"}
                            width={18}
                            height={18}
                          />
                          <p className="order_status text-sm font-medium tracking-[1px] text-disable-color uppercase">
                            Done
                          </p>
                        </div>
                      </div>
                      <div className="order_right-wrapper flex items-center gap-[30px] lg:justify-normal justify-between">
                        <p className="order_total-price text-accent-color font-medium tracking-[1px]">
                          $1 090
                        </p>
                        <div className="order_show-btn h-[46px] w-[46px] rounded-full border border-disable-color flex items-center justify-center">
                          <Image
                            src={"/icons/Icon name=small ch_down.svg"}
                            alt={"arrow-down"}
                            width={14}
                            height={10}
                            className={`${
                              historyOrderOpen ? "rotate-180" : "rotate-0"
                            } transition-all`}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`order_product-costumer_wrapper border-t mt-[10px] border-disable-color overflow-hidden flex lg:items-center lg:flex-row flex-col transition-all duration-300
                      ${
                        historyOrderOpen
                          ? "lg:h-[322px] h-[617px] visible opacity-100 sm:py-10 py-5 mt-[10px]"
                          : "h-0 invisible opacity-0 p-0 mt-0"
                      }`}
                    >
                      <div className="order_product-info_wrapper 2xl:max-w-[600px] lg:max-w-[500px] w-full lg:border-r lg:border-b-0 border-b border-disable-color lg:pr-10 lg:pb-0 sm:pb-10 pb-6">
                        <div className="order_product-info_inner-wrapper flex items-center gap-[30px]">
                          <div className="order_product_img w-[80px] h-[80px] min-w-[80px] bg-disable-text-color"></div>
                          <div className="order_product_info-wrapper flex sm:items-center justify-between w-full sm:flex-row flex-col gap-4 sm:gap-0">
                            <div className="order_product_info-left flex flex-col gap-[10px]">
                              <p className="order_product-title uppercase tracking-[2px] font-medium">
                                black table
                              </p>
                              <div className="order_product-wrapper">
                                <p className="order_product-info text-sm text-placeholder-text-color">
                                  black
                                </p>
                                <p className="order_product-info text-sm text-placeholder-text-color">
                                  50 sm х 30 sm
                                </p>
                              </div>
                            </div>
                            <div className="order_product_info-right flex items-center gap-20">
                              <p className="order_product-number font-medium text-disable-color">
                                x2
                              </p>
                              <p className="order_product-price font-medium tracking-[1px] text-accent-color">
                                $2 000
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="order_product-info_divider 2xl:w-[560px] lg:w-[460px] w-full h-[1px] bg-disable-text-color my-10"></div>
                        <div className="order_product-info_inner-wrapper flex items-center gap-[30px]">
                          <div className="order_product_img w-[80px] h-[80px] min-w-[80px] bg-disable-text-color"></div>
                          <div className="order_product_info-wrapper flex sm:items-center justify-between w-full sm:flex-row flex-col gap-4 sm:gap-0">
                            <div className="order_product_info-left flex flex-col gap-[10px]">
                              <p className="order_product-title uppercase tracking-[2px] font-medium">
                                combined table
                              </p>
                              <div className="order_product-wrapper">
                                <p className="order_product-info text-sm text-placeholder-text-color">
                                  black
                                </p>
                              </div>
                            </div>
                            <div className="order_product_info-right flex items-center gap-20">
                              <p className="order_product-number font-medium text-disable-color">
                                x3
                              </p>
                              <div className="order_product-price_wrapper flex gap-3 sm:flex-col">
                                <p className="order_product-price font-medium tracking-[1px] text-red-hot">
                                  $1 500
                                </p>
                                <p className="order_product-price font-medium tracking-[1px] line-through text-disable-color">
                                  $2 000
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="order_costumer-info_wrapper lg:pl-10 lg:pt-0 sm:pt-10 pt-6 flex flex-col gap-6">
                        <div className="order_checkout-info tracking-[2px] uppercase font-medium flex flex-col gap-4">
                          <p className="order_checkout_delivery-info">Self pickup (free)</p>
                          <p className="order_checkout_payment-info">Visa/mastercard</p>
                        </div>
                        <div className="order_costumer-info text-sub-text-color flex flex-col gap-[10px]">
                          <p className="order_costumer-name">Alexander Silencehide</p>
                          <p className="order_costumer-email">Silencehide@mail.com</p>
                          <p className="order_costumer-phone">(480) 555-0103</p>
                          <p className="order_costumer-address">
                            4517 Washington Ave. Manchester, Kentucky 39495
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
