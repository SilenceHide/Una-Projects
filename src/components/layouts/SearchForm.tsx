import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import Icon from "../common/ui/Icon";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { getFilteredProductsApiCall } from "@/api/Product";
import { EntityType, ProductType } from "@/types";

interface Props {
  searchBoxOpen: boolean;
  isSearchBoxOpen: Dispatch<SetStateAction<boolean>>;
  isCartOpen: Dispatch<SetStateAction<boolean>>;
  isNavOpen: Dispatch<SetStateAction<boolean>>;
}

interface FormData {
  header_search_input: string;
}

interface FilterData {
  title: {
    $containsi: string;
  };
}

export default function SearchForm({
  searchBoxOpen,
  isSearchBoxOpen,
  isCartOpen,
  isNavOpen,
}: Props) {
  const [resultData, setResultData] = useState<Array<EntityType<ProductType>>>([]);

  const { register, handleSubmit } = useForm<FormData>();

  const mutation = useMutation({
    mutationFn: (data: FilterData) => getFilteredProductsApiCall({ filters: data }),
  });

  const onSubmit = (data: FormData) => {
    if (data.header_search_input.length > 2) {
      mutation.mutate(
        {
          title: {
            $containsi: data.header_search_input,
          },
        },
        {
          onSuccess: (response) => {
            setResultData(response.data);
          },
        },
      );
    }
  };

  return (
    <>
      <form action={"#"} method="post" onSubmit={handleSubmit(onSubmit)} className="flex">
        {searchBoxOpen ? (
          <button
            type="submit"
            className={`header_search-inner-wrapper w-[46px] h-[46px] flex items-center justify-center rounded-full border-[1.5px] transition-all duration-300 ${
              searchBoxOpen ? "border-accent-color" : "border-disable-text-color"
            }`}
          >
            <Image src={"/icons/Icon name=search.svg"} alt={"search-icon"} width={22} height={22} />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              isSearchBoxOpen(true);
              isCartOpen(false);
              isNavOpen(false);
            }}
            className={`header_search-inner-wrapper w-[46px] h-[46px] flex items-center justify-center rounded-full border-[1.5px] transition-all duration-300 ${
              searchBoxOpen ? "border-accent-color" : "border-disable-text-color"
            }`}
          >
            <Image src={"/icons/Icon name=search.svg"} alt={"search-icon"} width={22} height={22} />
          </button>
        )}

        <div
          className={`"header_search-input_form flex items-center justify-between sm:ml-[14px] transition-all sm:duration-500 duration-300 sm:static fixed top-[70px] right-0 left-0 sm:p-0 px-5 xs:px-[80px] py-2  ${
            searchBoxOpen
              ? "shadow-main-box-shadow sm:shadow-none visible xl:w-[330px] sm:w-[240px] sm:mr-0 bg-white z-50"
              : "shadow-none invisible sm:mr-[-14px] bg-transparent z-0 sm:w-0"
          }`}
        >
          <input
            type="text"
            className={`header_search-input outline-none text-secondary-text-color transition-all duration-300 placeholder:text-placeholder-text-color ${
              searchBoxOpen
                ? "visible opacity-100 xl:w-[200px] sm:w-[180px]"
                : "w-0 invisible opacity-0"
            }`}
            placeholder="Search Request..."
            {...register("header_search_input")}
          />
          <div
            onClick={() => isSearchBoxOpen(false)}
            className={`header_search-close-btn w-[46px] h-[46px] flex items-center justify-center rounded-full border-disable-text-color border-[1.5px] transition-all duration-300 ${
              searchBoxOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <Icon iconName="i-close-icon" size="text-[20px]" />
          </div>
        </div>
      </form>
      {resultData && searchBoxOpen && (
        <div className="w-full h-fit max-h-[200px] overflow-y-auto absolute top-[70px] left-0 bg-white z-20 rounded-b-lg py-2 px-2">
          {resultData.map((item: EntityType<ProductType>, index) => {
            return (
              <p key={index} className="py-1">
                {item.attributes.title}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
}
