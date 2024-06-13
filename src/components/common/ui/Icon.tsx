import React from "react";

interface Props {
  iconName: string;
  size?: string;
  className?: string;
}

export default function Icon({ iconName, size = "text-[22px]", className = "" }: Props) {
  return <i className={`${iconName} ${size} ${className}`}></i>;
}
