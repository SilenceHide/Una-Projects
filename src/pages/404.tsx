import Image from "next/image";

export default function NotFound404() {
  return (
    <>
      <main className="main-404 bg-main-bg-color w-full h-full py-10">
        <div className="container">
          <div className="404-logo m-auto w-fit">
            <Image
              src={"/logo/logo-small.svg"}
              alt={"logo-default"}
              width={82}
              height={80}
              priority
              className="header_logo"
            />
          </div>
          <div className="404_main-wrapper m-auto lg:py-[100px] py-[80px] lg:px-[210px] md:px-[100px] sm:px-10 px-4 bg-white shadow-main-box-shadow w-fit md:mt-[90px] mt-[70px] md:mb-[110px] mb-[90px] flex flex-col items-center">
            <p className="404_error tracking-[2px] uppercase border-b border-accent-color">
              404 error
            </p>
            <h1 className="404_title mt-10 uppercase text-3xl font-medium tracking-[3px] text-center">
              page not found
            </h1>
            <p className="404_desc mt-4 text-lg text-sub-text-color max-w-[500px] text-center">
              Sorry, something went wrong and page not found. Check the link or try later
            </p>
            <a
              href="#"
              className="product-section_button flex items-center text-white justify-center gap-3 sm:w-[334px] w-[300px] h-[60px] mt-10 bg-disable-color py-3 sm:mx-auto"
            >
              <p className="product-section_button-title tracking-[2px] uppercase font-semibold text-lg">
                go to main page
              </p>
              <Image
                src={"icons/Icon name=next arrow - white.svg"}
                alt={"next arrow"}
                width={24}
                height={16}
                className="fill-white text-white"
              />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
