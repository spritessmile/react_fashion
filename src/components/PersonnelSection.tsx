'use client'
import React, { useState, useRef, useEffect } from 'react'
import { LayoutGrid } from '@/components/ui/layout-grid'
import Image from 'next/image'
import insideImg1 from '@/assets/images/insideOfHouse/img-1.jpg'
import insideImg2 from '@/assets/images/insideOfHouse/img-2.jpg'
import insideImg3 from '@/assets/images/insideOfHouse/img-3.jpg'
import insideImg4 from '@/assets/images/insideOfHouse/img-4.jpg'

export function PersonnelSection() {
  return (
    <div className="p-x-24 mx-auto mb-[980px] h-screen max-w-5xl md:mb-48">
      <h1 className="mb-8 text-center text-3xl font-semibold">
        ハウス室内の写真
      </h1>

      <div className="m-5 grid grid-cols-1 gap-5 gap-x-2 md:grid-cols-12">
        <Image
          src={insideImg1}
          alt="ハウス室内の写真"
          className="h-96 rounded-xl md:col-span-8"
        />
        <Image
          src={insideImg2}
          alt="ハウス室内の写真"
          className="h-96 rounded-xl md:col-span-4"
        />
      </div>

      <div className="m-5 grid grid-cols-1 gap-5 gap-x-2 md:grid-cols-12">
        <Image
          src={insideImg3}
          alt="ハウス室内の写真"
          className="h-96 rounded-xl md:col-span-4"
        />
        <Image
          src={insideImg4}
          alt="ハウス室内の写真"
          className="h-96 rounded-xl md:col-span-8"
        />
      </div>
    </div>
  )
}

export default PersonnelSection
