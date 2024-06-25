import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
  className?: string;
  priority?: boolean;
}

export default function Picture({ src, alt, width, height, className = "", priority }: Props) {
  const imageSrc = src
    ? src.startsWith("/uploads")
      ? "http://localhost:1337" + src
      : src
    : "/images/logo/logo-default.svg";

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={Number(width)}
      height={Number(height)}
      className={className}
      priority={priority}
    />
  );
}
