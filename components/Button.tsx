"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const Button = ({ isDisabled, type, styles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={type || "button"}
    className={`custom-btn ${styles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
);

export default Button;