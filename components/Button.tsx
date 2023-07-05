"use client"
import React from 'react'
import Image from 'next/image';
import { CustomButtonProps } from '@/types';
const Button = ({title, styles, handleClick}:CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type='button'
      className={`custom-btn ${styles}`}
      onClick={() => handleClick}
    >
      {title}
    </button>
  )
}

export default Button
