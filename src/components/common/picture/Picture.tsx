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
  return (
    <Image
      src={src}
      alt={alt}
      width={Number(width)}
      height={Number(height)}
      className={className}
      priority={priority}
    />
  );
}
