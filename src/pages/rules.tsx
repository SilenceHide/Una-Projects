import Image from "next/image";
import { useState } from "react";

export default function Rules() {
  const [mainRulesShow, isMainRulesShow] = useState(true);
  const [disclaimerShow, isDisclaimerShow] = useState(false);
  const [contactInfoShow, isContactInfoShow] = useState(false);

  return (
    <main className="main-service-rules lg:pt-10 pt-24 pb-[100px] bg-main-bg-color">
      <div className="container">
        <div className="service-rules_wrapper flex flex-col">
          <div className="service-rules_breadcrumbs flex items-center gap-2">
            <p className="service-rules_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Home
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="service-rules_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Textile
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="service-rules_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
              Rules
            </p>
          </div>
          <div className="service-rules_title-wrapper flex flex-col gap-[14px] mt-[54px]">
            <h1 className="service-rules_title lg:text-3xl text-2xl font-medium tracking-[3px] uppercase">
              Service rules
            </h1>
          </div>
          <div className="service-rules_main-wrapper xs:overflow-hidden flex flex-col xl:flex-row lg:mt-14 mt-8 items-start xs:static relative left-[-15px]">
            <div className="service-rules_tabs-wrapper bg-white sm:p-[60px] py-14 px-4 flex flex-col gap-8 xs:min-w-[380px] w-[375px] xl:mr-10 xl:mb-0 mb-10 ">
              <p
                onClick={() => {
                  isDisclaimerShow(false);
                  isContactInfoShow(false);
                  isMainRulesShow(true);
                }}
                className={`service-rules_tab-title w-fit uppercase tracking-[2px] border-b-2 transition-all cursor-pointer hover:text-main-text-color hover:border-accent-color  ${
                  mainRulesShow
                    ? "text-main-text-color border-accent-color"
                    : "text-secondary-text-color border-transparent"
                }`}
              >
                Main rules
              </p>
              <p
                onClick={() => {
                  isContactInfoShow(false);
                  isMainRulesShow(false);
                  isDisclaimerShow(true);
                }}
                className={`service-rules_tab-title w-fit uppercase tracking-[2px] border-b-2 transition-all cursor-pointer hover:text-main-text-color hover:border-accent-color  ${
                  disclaimerShow
                    ? "text-main-text-color border-accent-color"
                    : "text-secondary-text-color border-transparent"
                }`}
              >
                declaimer
              </p>
              <p
                onClick={() => {
                  isMainRulesShow(false);
                  isDisclaimerShow(false);
                  isContactInfoShow(true);
                }}
                className={`service-rules_tab-title w-fit uppercase tracking-[2px] border-b-2 transition-all cursor-pointer hover:text-main-text-color hover:border-accent-color  ${
                  contactInfoShow
                    ? "text-main-text-color border-accent-color"
                    : "text-secondary-text-color border-transparent"
                }`}
              >
                Contact information
              </p>
            </div>

            {/* main rules section */}
            <div
              className={`service-rules_main-rules_wrapper bg-white flex flex-col gap-[60px] transition-all ${
                mainRulesShow
                  ? "visible opacity-100 delay-150 left-0 z-[2] xs:w-full w-[375px] sm:p-[60px] py-14 px-4 "
                  : "invisible opacity-0 -left-full -z-10 w-0 p-0 h-0"
              }`}
            >
              <div className="service-rules_main-rules_inner-wrapper flex flex-col gap-5">
                <h2 className="service-rules_main-rules_title uppercase text-xl tracking-[2.5px] font-medium">
                  Main Rules
                </h2>
                <p className="service-rules_main-rules_desc text-justify">
                  Most of us wonder if there is a God and if He really is the God of the Bible. In
                  the Bible God says ‘I will make your name great’ and today the name of
                  Abraham/Abram is known worldwide. This promise has come true. The earliest copy of
                  Genesis found in the Dead Sea Scrolls is dated 200-100 B.C. which means the
                  promise has been in writing since at least that time. At that time the name of
                  Abraham was not well-known so the promise came true only after it was written
                  down, not before.
                </p>
                <p className="service-rules_main-rules_desc text-justify">
                  The Jews who descended from Abraham were never really the nation we associate with
                  greatness. They did not conquer and build a great empire like the Romans did or
                  build large monuments like the Egyptians did with the pyramids. Their fame comes
                  from the Law and Book which they wrote; from some remarkable individuals that were
                  Jewish; and that they have survived as a somewhat different people group for
                  thousands of years. Their greatness is not because of anything they did, but
                  rather what was done to and through them. The promise says repeatedly “I will …” –
                  that would be the power behind the promise. Their unique greatness happened
                  because God made it happen rather than some ability, conquest or power of their
                  own.
                </p>
              </div>
            </div>

            {/* declaimer section */}
            <div
              className={`service-rules_declaimer_wrapper bg-white flex flex-col gap-[60px] transition-all ${
                disclaimerShow
                  ? "visible opacity-100 delay-150 left-0 z-[2] xs:w-full w-[375px] sm:p-[60px] py-14 px-4 "
                  : "invisible opacity-0 -left-full -z-10 w-0 p-0 h-0"
              }`}
            >
              <div className="service-rules_declaimer_inner-wrapper flex flex-col gap-5">
                <h2 className="service-rules_declaimer_title uppercase text-xl tracking-[2.5px] font-medium">
                  disclaimer
                </h2>
                <p className="service-rules_declaimer_desc text-justify">
                  Most of us wonder if there is a God and if He really is the God of the Bible. In
                  the Bible God says ‘I will make your name great’ and today the name of
                  Abraham/Abram is known worldwide. This promise has come true. The earliest copy of
                  Genesis found in the Dead Sea Scrolls is dated 200-100 B.C. which means the
                  promise has been in writing since at least that time. At that time the name of
                  Abraham was not well-known so the promise came true only after it was written
                  down, not before.
                </p>
              </div>
            </div>

            {/* contact info section */}
            <div
              className={`service-rules_contact-info_wrapper bg-white flex flex-col gap-[60px] transition-all ${
                contactInfoShow
                  ? "visible opacity-100 delay-150 left-0 z-[2] xs:w-full w-[375px] sm:p-[60px] py-14 px-4"
                  : "invisible opacity-0 -left-full -z-10 w-0 p-0 h-0"
              }`}
            >
              <div className="service-rules_contact-info_inner-wrapper flex flex-col gap-5">
                <h2 className="service-rules_contact-info_title uppercase text-xl tracking-[2.5px] font-medium">
                  Contact information
                </h2>
                <p className="service-rules_contact-info_desc text-justify">
                  Even though Israel is a small country it is always in the news. The news continues
                  to report on Jews moving to Israel, on the technology invented there, but also on
                  conflict, wars and tensions with surrounding people. Why? A look at Israel’s
                  history in the book of Genesis in the Bible reveals that 4000 years ago a man, who
                  is now very well known, went on a camping trip in that part of the world. The
                  Bible says that his story affects our future. This ancient man is Abraham (also
                  known as Abram). We can take his story seriously because the places and cities he
                  visited are mentioned in other old writings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
