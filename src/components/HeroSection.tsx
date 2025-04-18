'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import HeroImg from '@/assets/images/hero.jpg'

const HeroSection = () => (
  <div className="relative mx-auto mb-10 flex max-w-7xl flex-col items-center justify-center">
    <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
      <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
    </div>
    <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
      <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
    </div>
    <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
      <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </div>
    <div className="mt-10 px-4 py-10 md:py-20">
      <h1 className="relative z-10 mx-auto max-w-5xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
        {'アウトドア・自然を楽しむ古民的な星野民家シェアハウス'
          .split(' ')
          .map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: 'blur(4px)', y: 10 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: 'easeInOut',
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
      </h1>
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 0.8,
        }}
        className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
      >
        北九州最大級のアウトドア・自然を楽しむ古民的なスタイルのシェアハウス、自分たちだけで1年半かけてDIYでリノベーションし、落ち着いた雰囲気の隠れ家的なスタイルがあり、
        周辺は環境が整ってるため、とても生活がしやすいです！！
      </motion.p>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 1,
        }}
        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
          今すぐ応募する
        </button>
        <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
          詳しく知りたい
        </button>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          delay: 1.2,
        }}
        className="relative z-10 mt-20"
      >
        <div className="w-full overflow-hidden rounded-xl">
          <Image
            src={HeroImg}
            alt="Hero section image"
            className="aspect-[16/9] h-auto w-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  </div>
)

export default HeroSection
