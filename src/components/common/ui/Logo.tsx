import React from "react";
import Picture from "../picture/Picture";
import Link from "next/link";

interface Props {
  width?: number;
  height?: number;
  className: string;
}

export default function Logo({ width = 72, height = 60, className = "" }: Props) {
  return (
    <Link href={"/"}>
      <Picture
        src={"/logo/logo-small.svg"}
        alt={"logo-default"}
        width={width}
        height={height}
        className={className}
        priority
      />
    </Link>
  );
}
