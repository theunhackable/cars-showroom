"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

const Navbar = () => {
  const handleClick = () => {
    console.log('hello this is navgar signin button')
  }
  return (
    <header className="w-full absolute z-10">
        <nav className="mx-auto max-w-[1440px] flex justify-between">
            <Link href="/" className='flex jutify-center items-center'>
                <Image 
                    src='/logo.svg'
                    alt="car hub logo"
                    width={118}
                    height={18}
                    className='object-contain'
                />
            </Link>
        </nav>
    </header>
  )
}

export default Navbar
