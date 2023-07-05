"use client"
import React from 'react'
import Button from './Button'

const Hero = () => {
  const handleScroll = () => {

  }
  return (
      <div className="hero">
        <div className="felx-1 pt-36 paddingx">
          <h1 className="hero__title">
            Find, book, or rent a car - quickly and easily!
          </h1>
          <p className="hero__subtitle">
            streamline your car rental experience with our effortless booking process
          </p>
          <Button title='Explore Cars' styles='bg-primary-blue text-white rounded-full mt-10' handleClick={handleScroll}/>
        </div>
      </div>
    )
}

export default Hero


