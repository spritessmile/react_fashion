'use client'
import React from 'react'
import Image from 'next/image'
import insideImg1 from '@/assets/images/insideOfHouse/room-101.jpg'
import insideImg2 from '@/assets/images/insideOfHouse/room-102.jpg'
import insideImg3 from '@/assets/images/insideOfHouse/room-103.jpg'
import insideImg4 from '@/assets/images/insideOfHouse/room-201.jpg'
import insideImg5 from '@/assets/images/insideOfHouse/room-202.jpg'

export function PersonnelSection() {
  return (
    <div className="mx-auto mb-[1200px] h-screen max-w-5xl md:mb-[420px]">
      <h2 className="mb-8 text-center text-3xl font-semibold">
        ハウス室内の写真
      </h2>

      <div className="relative m-5 grid grid-cols-1 gap-5 gap-x-2 md:grid-cols-12">
        <Image
          src={insideImg1}
          alt="ハウス室内の写真"
          className="h-80 rounded-xl md:col-span-8"
        />
        {/* <h3 className="absolute top-1/2 left-1/2">Room 101</h3> */}

        <Image
          src={insideImg2}
          alt="ハウス室内の写真"
          className="h-80 rounded-xl md:col-span-4"
        />
        {/* <h3>Room 102</h3> */}
      </div>

      <div className="m-5 grid grid-cols-1 gap-5 gap-x-2 md:grid-cols-12">
        <Image
          src={insideImg3}
          alt="ハウス室内の写真"
          className="h-80 rounded-xl md:col-span-4"
        />
        {/* <h3>Room 103</h3> */}

        <Image
          src={insideImg4}
          alt="ハウス室内の写真"
          className="h-80 rounded-xl md:col-span-8"
        />
        {/* <h3>Room 201</h3> */}
      </div>

      <div className="px-5">
        <Image
          src={insideImg5}
          alt="ハウス室内の写真"
          className="h-80 rounded-xl md:col-span-12"
        />
      </div>
    </div>
  )
}

export default PersonnelSection
