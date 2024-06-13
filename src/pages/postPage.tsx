import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function PostPage() {
  return (
    <main className="main-post-page lg:pt-10 pt-24 pb-[100px] bg-main-bg-color">
      <div className="container">
        <div className="post-page_wrapper flex flex-col">
          <div className="post-page_breadcrumbs flex items-center gap-2">
            <p className="post-page_breadcrumb text-secondary-text-color font-medium text-[13px]">
              Home
            </p>
            <Image
              src={"/icons/Icon name=chevron_right.svg"}
              alt={"chevron_right"}
              width={7}
              height={10}
            />
            <p className="post-page_breadcrumb text-secondary-text-color font-medium text-[13px] selected-breadcrumb">
              Conservationists oppose plans to modernize a wind
            </p>
          </div>
          <div className="post-page_main-wrapper bg-white w-full pb-[100px] mt-[60px] flex flex-col items-center">
            <div className="post-page_header-img_wrapper max-w-[1640px] w-full md:h-[600px] h-[280px] bg-disable-text-color border-[10px] border-white"></div>
            <div className="post-page_header-title_wrapper mt-[40px] flex flex-col items-center 2xl:px-[280px] lg:px-[140px] sm:px-[30px] px-4">
              <div className="post-page_header-divider w-10 h-[2px] bg-accent-color"></div>
              <h1 className="post-page_header-title mt-8 mb-4 md:text-3xl text-xl font-medium tracking-[3px] uppercase max-w-[660px] text-center">
                Conservationists oppose plans to modernise a wind
              </h1>
              <p className="post-page_header-date text-disable-color">August 24, 2013</p>
              <p className="post-page_header-blog mt-[60px] text-justify text-lg text-sub-text-color">
                There is something else promised as well. The blessing was not only for Abraham. It
                says that “all peoples on earth will be blessed through you” (through Abraham). We
                should pay attention because you and I are part of ‘all peoples on earth’ – no
                matter what our religion, color, background, nationality, social status, or what
                language we speak. This promise for a blessing includes everybody alive today! How?
                When? What kind of blessing? This is not clearly stated here but since we know that
                the first parts of this promise have come true, we can have confidence that this
                last part will also come true. We find the key to unlock this mystery by continuing
                to follow the journey of Abraham in our next article.
              </p>
              <h2 className="post-page_small-heading-title font-medium text-xl uppercase tracking-[2px] mt-[40px] text-center">
                The Journey that still shakes the World
              </h2>
              <p className="post-page_header-blog mt-[20px] text-justify text-lg text-sub-text-color">
                The Jews who descended from Abraham were never really the nation we associate with
                greatness. They did not conquer and build a great empire like the Romans did or
                build large monuments like the Egyptians did with the pyramids. Their fame comes
                from the Law and Book which they wrote; from some remarkable individuals that were
                Jewish; and that they have survived as a somewhat different people group for
                thousands of years. Their greatness is not because of anything they did, but rather
                what was done to and through them. The promise says repeatedly “I will …” – that
                would be the power behind the promise. Their unique greatness happened because God
                made it happen rather than some ability, conquest or power of their own.
              </p>
              <p className="post-page_header-blog mt-[20px] text-justify text-lg text-sub-text-color">
                The Jews who descended from Abraham were never really the nation we associate with
                greatness. They did not conquer and build a great empire like the Romans did or
                build large monuments like the Egyptians did with the pyramids. Their fame comes
                from the Law and Book which they wrote; from some remarkable individuals that were
                Jewish; and that they have survived as a somewhat different people group for
                thousands of years. Their greatness is not because of anything they did, but rather
                what was done to and through them. The promise says repeatedly “I will …” – that
                would be the power behind the promise. Their unique greatness happened because God
                made it happen rather than some ability, conquest or power of their own.
              </p>
            </div>
            <div className="blog_swiper-wrapper mt-20 w-full">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 1.8,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 2.3,
                    spaceBetween: 40,
                  },
                  1450: {
                    slidesPerView: 2.6,
                    spaceBetween: 20,
                  },
                  1640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".blog_left-btn",
                  nextEl: ".blog_right-btn",
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                className="blog_items_swiper"
              >
                <SwiperSlide className="blog_item lg:w-[520px] min-w-[343px] group/blog_item transition-all duration-300 max-w-[520px]">
                  <a href="#">
                    <div className="blog_item-img lg:w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color"></div>
                    <div className="blog_item-content flex flex-col lg:w-[520px] mt-7">
                      <p className="blog_item-date text-transparent group-hover/blog_item:text-placeholder-text-color text-center transition-all duration-300">
                        Abraham were never really the nation we associate with greatness
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="blog_item lg:w-[520px] min-w-[343px] group/blog_item transition-all duration-300 max-w-[520px]">
                  <a href="#">
                    <div className="blog_item-img lg:w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color"></div>
                    <div className="blog_item-content flex flex-col lg:w-[520px] mt-7">
                      <p className="blog_item-date text-transparent group-hover/blog_item:text-placeholder-text-color text-center transition-all duration-300">
                        Abraham were never really the nation we associate with greatness
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide className="blog_item lg:w-[520px] min-w-[343px] group/blog_item transition-all duration-300 max-w-[520px]">
                  <a href="#">
                    <div className="blog_item-img lg:w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color"></div>
                    <div className="blog_item-content flex flex-col lg:w-[520px] mt-7">
                      <p className="blog_item-date text-transparent group-hover/blog_item:text-placeholder-text-color text-center transition-all duration-300">
                        Abraham were never really the nation we associate with greatness
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
              <div className="blog_nav-btn-wrapper flex items-center justify-center gap-5 2xl:mt-10 mt-[20px]">
                <div className="blog_left-btn w-[60px] h-[60px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                  <Image
                    src={"/icons/Icon name=prev arrow.svg"}
                    alt={"left-btn"}
                    width={24}
                    height={24}
                  />
                </div>
                <div className="blog_right-btn w-[60px] h-[60px] bg-white border border-disable-color rounded-full flex justify-center items-center cursor-pointer">
                  <Image
                    src={"/icons/Icon name=next arrow.svg"}
                    alt={"right-btn"}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
            <div className="post-page_footer-title_wrapper mt-[40px] flex flex-col items-center 2xl:px-[280px] lg:px-[140px] sm:px-[30px] px-4">
              <h2 className="post-page_footer-title font-medium text-xl uppercase tracking-[2px] 2xl:mt-[40px] lg:mt-[20px] mt-0 text-center">
                The Sign of the Branch: The Dead
              </h2>
              <p className="post-page_footer-blog mt-[20px] text-justify text-lg text-sub-text-color">
                The Jews who descended from Abraham were never really the nation we associate with
                greatness. They did not conquer and build a great empire like the Romans did or
                build large monuments like the Egyptians did with the pyramids. Their fame comes
                from the Law and Book which they wrote; from some remarkable individuals that were
                Jewish; and that they have survived as a somewhat different people group for
                thousands of years. Their greatness is not because of anything they did, but rather
                what was done to and through them. The promise says repeatedly “I will …” – that
                would be the power behind the promise. Their unique greatness happened because God
                made it happen rather than some ability, conquest or power of their own.
              </p>
              <div className="post-page_footer-desc_wrapper border-t border-disable-color w-full lg:mt-14 mt-10 sm:pt-7 pt-4 flex sm:items-center justify-between sm:flex-row flex-col sm:gap-0 gap-4">
                <div className="post-page_footer-media_wrapper flex items-center gap-5">
                  <p className="post-page_footer_media-title uppercase font-medium tracking-[2px] text-sub-text-color">
                    Share post
                  </p>
                  <div className="post-page_footer_media_icons flex items-center gap-2">
                    <a href="#">
                      <Image
                        src={"/icons/Icon name=Facebook.svg"}
                        alt={"left-btn"}
                        width={24}
                        height={24}
                      />
                    </a>
                    <a href="#">
                      <Image
                        src={"/icons/Icon name=telegram.svg"}
                        alt={"left-btn"}
                        width={24}
                        height={24}
                      />
                    </a>
                    <a href="#">
                      <Image
                        src={"/icons/Icon name=twitter.svg"}
                        alt={"left-btn"}
                        width={24}
                        height={24}
                      />
                    </a>
                  </div>
                </div>
                <div className="post-page_footer-author_wrapper flex items-center gap-2">
                  <p className="post-page_footer-author_title uppercase font-medium tracking-[2px] text-sub-text-color">
                    Author:{" "}
                  </p>
                  <p className="post-page_footer-author_name uppercase tracking-[2px] text-accent-color">
                    Jane foster
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="post-page_also-like_title-wrapper flex flex-col gap-[14px] mt-[100px] items-center">
            <h2 className="post-page_also-like_title text-2xl font-medium tracking-[3px] uppercase">
              You may also like
            </h2>
          </div>
          <div className="post-page_also-like_wrapper flex flex-col lg:flex-row lg::justify-between justify-center lg:mt-14 mt-8 xl:items-start items-center flex-wrap 3xl:gap-10 gap-10">
            <a
              href="#"
              className="blog_item lg:min-w-[415px] min-w-[343px] group/blog_item transition-all duration-300 hover:shadow-main-box-shadow max-w-[520px] flex flex-col 3xl:basis-[30%] basis-1/4"
            >
              <div className="blog_item-img lg:max-w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="blog_item-content flex flex-col items-center justify-center pt-5 pb-7 xl:px-[60px] 2xl:px-[80px] sm:px-[40px] px-4 transition-all duration-300 group-hover/blog_item:bg-white">
                <div className="blog_divider w-[30px] h-[1px] bg-disable-color transition-all duration-300 group-hover/blog_item:opacity-0"></div>
                <h3 className="blog_item-title font-medium tracking-[2px] text-center mt-5 mb-3 text-sub-text-color transition-all duration-300 group-hover/blog_item:text-main-text-color group-hover/blog_item:mt-4">
                  UPDATING YOUR BEDROOM? IT’S EASIER THAN YOU THINK
                </h3>
                <p className="blog_item-date font-medium text-disable-color group-hover/blog_item:text-accent-color transition-all duration-300">
                  May 2, 2022
                </p>
              </div>
            </a>
            <a
              href="#"
              className="blog_item lg:min-w-[415px] min-w-[343px] group/blog_item transition-all duration-300 hover:shadow-main-box-shadow max-w-[520px] flex flex-col 3xl:basis-[30%] basis-1/4"
            >
              <div className="blog_item-img lg:max-w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="blog_item-content flex flex-col items-center justify-center pt-5 pb-7 xl:px-[60px] 2xl:px-[80px] sm:px-[40px] px-4 transition-all duration-300 group-hover/blog_item:bg-white">
                <div className="blog_divider w-[30px] h-[1px] bg-disable-color transition-all duration-300 group-hover/blog_item:opacity-0"></div>
                <h3 className="blog_item-title font-medium tracking-[2px] text-center mt-5 mb-3 text-sub-text-color transition-all duration-300 group-hover/blog_item:text-main-text-color group-hover/blog_item:mt-4">
                  BACK ON THE MENU: HOSTING A POST-LOCKDOWN DINNER PARTY
                </h3>
                <p className="blog_item-date font-medium text-disable-color group-hover/blog_item:text-accent-color transition-all duration-300">
                  May 1, 2022
                </p>
              </div>
            </a>
            <a
              href="#"
              className="blog_item lg:min-w-[415px] min-w-[343px] group/blog_item transition-all duration-300 hover:shadow-main-box-shadow max-w-[520px] flex flex-col 3xl:basis-[30%] basis-1/4"
            >
              <div className="blog_item-img lg:max-w-[520px] lg:h-[380px] min-w-[343px] h-[343px] bg-disable-text-color border-[10px] border-white"></div>
              <div className="blog_item-content flex flex-col items-center justify-center pt-5 pb-7 xl:px-[60px] 2xl:px-[80px] sm:px-[40px] px-4 transition-all duration-300 group-hover/blog_item:bg-white">
                <div className="blog_divider w-[30px] h-[1px] bg-disable-color transition-all duration-300 group-hover/blog_item:opacity-0"></div>
                <h3 className="blog_item-title font-medium tracking-[2px] text-center mt-5 mb-3 text-sub-text-color transition-all duration-300 group-hover/blog_item:text-main-text-color group-hover/blog_item:mt-4">
                  HOW TO REFRESH YOUR KITCHEN IN 5 EASY STEPS
                </h3>
                <p className="blog_item-date font-medium text-disable-color group-hover/blog_item:text-accent-color transition-all duration-300">
                  February 27, 2022
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
