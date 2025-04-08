'use client'
import Image from 'next/image'
import CostsChart from '@/components/CostsChart'
// import { GlareCard } from '@/components/ui/glare-card'
import React, { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useOutsideClick } from '@/hooks/use-outside-click'

const RoomList = () => {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null,
  )
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false)
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-full w-full max-w-3xl flex-col overflow-hidden bg-white p-5 sm:rounded-3xl md:h-fit dark:bg-neutral-900"
            >
              <div>
                <div className="flex items-start justify-between p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="flex items-center justify-start font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title} ·{' '}
                      {active.status ? (
                        <div className="ml-2 w-fit rounded-xl border bg-red-600 p-2 shadow dark:border-2">
                          現在満室
                        </div>
                      ) : (
                        <div className="ml-2 w-fit rounded-xl border bg-green-600 p-2 shadow dark:border-2">
                          現在空室
                        </div>
                      )}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="mt-2 text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-start overflow-auto text-xs text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] md:h-fit md:text-sm lg:text-base dark:text-neutral-400"
                  >
                    {typeof active.content === 'function'
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <h1 className="mb-8 text-center text-3xl font-semibold">ルームの情報</h1>
      <ul className="mx-auto w-full max-w-2xl gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="flex cursor-pointer flex-col items-center justify-between rounded-xl p-4 hover:bg-neutral-50 md:flex-row dark:hover:bg-neutral-800"
          >
            <div className="flex flex-col gap-4 md:flex-row">
              {/* <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 rounded-lg object-cover object-top md:h-14 md:w-14"
                />
              </motion.div> */}
              {card.status ? (
                <div className="size-8 rounded-lg bg-red-600"></div>
              ) : (
                <div className="size-8 rounded-lg bg-green-400"></div>
              )}
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-center font-medium text-neutral-800 md:text-left dark:text-neutral-200"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-center text-neutral-600 md:text-left dark:text-neutral-400"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="mt-4 rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-black hover:bg-green-500 hover:text-white md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  )
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  )
}

// we set the cards here, the status is for the room condition, which means that the room is full when status is true, and the room is empty when status is false
// the status variable is more prefer to rename to `isFull` or `canApplyThisRoom`
const cards = [
  {
    status: true,
    description: '広さ 14.6 ㎡ 9 畳；賃料 ￥30,000',
    title: '101室',
    ctaText: '詳細',
    content: () => {
      return (
        // <CostsChart />

        <div className="text-start text-lg md:text-sm">
          <ul className="mb-8 flex flex-col space-y-2">
            <li>
              <strong>共益費・管理費※固定分</strong> ￥5,000
            </li>
            <li>
              <strong>共益費・管理費※変動分</strong> 2名入居時の共益費は￥9000
            </li>
            <li>
              <strong>設備等</strong>
              床材は洋室（合板フローリング）。窓の向きは東、南。押入れ（0.5畳）付き。無線LANあり。備品：エアコン、机、椅子。
            </li>
            <li>
              <strong>入居条件</strong> 男性、女性、外国人対応OK
            </li>

            <li>
              <strong>敷金・保証金</strong> ￥0
            </li>

            <li>
              <strong>仲介手数料・ 鍵交換費用</strong> ￥0
            </li>
            <li>
              <strong>礼金</strong> ￥35,000
            </li>
            <li>
              <strong>保険</strong>{' '}
              三井住友海上火災保険への加入任意（￥1300／月）
            </li>
          </ul>

          <div className="w-full rounded-xl border p-5 shadow dark:border-2">
            <strong>賃貸借契約の種類</strong> 建物賃貸借契約
            <br />
            <strong>賃貸借契約の期間</strong> 3ヵ月から
            <br />
            <strong>家賃保証会社</strong>{' '}
            その方の状況次第。家賃保証会社加入の場合（賃料共益費込みの50%）
            <br />
            <strong>最大入居人数</strong> 2名
          </div>
        </div>
      )
    },
  },
  {
    status: true,
    description: '広さ 10.9 ㎡ 6.7 畳；賃料 ￥30,000',
    title: '102室',
    ctaText: '詳細',
    content: () => {
      return (
        <div className="text-start text-lg md:text-sm">
          <ul className="mb-8 flex flex-col space-y-2">
            <li>
              <strong>広さ</strong> 10.9 ㎡ 6.7 畳
            </li>
            <li>
              <strong>賃料</strong> ￥30,000
            </li>
            <li>
              <strong>共益費・管理費※固定分</strong> ￥5,000
            </li>
            <li>
              <strong>共益費・管理費※変動分</strong> 2名入居時の共益費は￥9000
            </li>
            <li>
              <strong>設備等</strong>
              1F。床材は洋室（合板フローリング）。陽当たりA。窓の向きは北。押入れ（1.5畳）、地袋（1畳）付き。無線LANあり。備品：エアコン、机、椅子。
            </li>
            <li>
              <strong>入居条件</strong> 男性、女性、外国人対応OK
            </li>
            <li>
              <strong>敷金・保証金</strong> ￥0
            </li>
            <li>
              <strong>礼金</strong> ￥35,000
            </li>
            <li>
              <strong>仲介手数料・鍵交換費用</strong> ￥0
            </li>
            <li>
              <strong>保険</strong>
              三井住友海上火災保険への加入任意（￥1300／月）。
            </li>
          </ul>

          <div className="w-full rounded-xl border p-5 shadow dark:border-2">
            <strong>賃貸借契約の種類</strong> 建物賃貸借契約
            <br />
            <strong>賃貸借契約の期間</strong> 3ヵ月～
            <br />
            <strong>家賃保証会社</strong>
            その方の状況次第。家賃保証会社加入の場合（賃料共益費込みの50%）。
            <br />
            <strong>最終更新日</strong> 2025-04-03
            <br />
            <strong>最大入居人数</strong> 2名
          </div>
        </div>
      )
    },
  },

  {
    status: true,
    description: '広さ 18.2 ㎡ 11.2 畳；賃料 ￥30,000',
    title: '103室',
    ctaText: '詳細',
    content: () => {
      return (
        <div className="text-start text-lg md:text-sm">
          <ul className="mb-8 flex flex-col space-y-2">
            <li>
              <strong>広さ</strong> 18.2 ㎡ 11.2 畳
            </li>
            <li>
              <strong>賃料</strong> ￥30,000
            </li>
            <li>
              <strong>共益費・管理費※固定分</strong> ￥5,000
            </li>
            <li>
              <strong>共益費・管理費※変動分</strong> 2名入居時の共益費は￥9000
            </li>
            <li>
              <strong>設備等</strong>
              1F。床材は洋室（合板フローリング）。陽当たりA。窓の向きは北、西。押入れ（1.25畳）、地袋（0.3畳）付き。無線LANあり。備品：エアコン、机、椅子。
            </li>
            <li>
              <strong>入居条件</strong> 男性、女性、外国人対応OK
            </li>
            <li>
              <strong>敷金・保証金</strong> ￥0
            </li>
            <li>
              <strong>礼金</strong> ￥35,000
            </li>
            <li>
              <strong>仲介手数料・鍵交換費用</strong> ￥0
            </li>
            <li>
              <strong>保険</strong>
              三井住友海上火災保険への加入任意（￥1300／月）。
            </li>
          </ul>

          <div className="w-full rounded-xl border p-5 shadow dark:border-2">
            <strong>賃貸借契約の種類</strong> 建物賃貸借契約
            <br />
            <strong>賃貸借契約の期間</strong> 3ヵ月～
            <br />
            <strong>家賃保証会社</strong>
            その方の状況次第。家賃保証会社加入の場合（賃料共益費込みの50%）。
            <br />
            <strong>最終更新日</strong> 2025-04-03
            <br />
            <strong>最大入居人数</strong> 2名
          </div>
        </div>
      )
    },
  },
  {
    status: true,
    description: '広さ 10.9 ㎡ 6.7 畳；賃料 ￥32,000',
    title: '201室',
    ctaText: '詳細',
    content: () => {
      return (
        <div className="text-start text-lg md:text-sm">
          <ul className="mb-8 flex flex-col space-y-2">
            <li>
              <strong>広さ</strong> 10.9 ㎡ 6.7 畳
            </li>
            <li>
              <strong>賃料</strong> ￥32,000
            </li>
            <li>
              <strong>共益費・管理費※固定分</strong> ￥5,000
            </li>
            <li>
              <strong>共益費・管理費※変動分</strong> 2名入居時の共益費は￥9000
            </li>
            <li>
              <strong>設備等</strong>
              2F。床材は洋室（CFフローリング）。陽当たりA。窓の向きは北、東。2階者限定のルーフテラスあり。無線LANあり。備品：エアコン、机、椅子。
            </li>
            <li>
              <strong>入居条件</strong> 男性、女性、外国人対応OK
            </li>
            <li>
              <strong>敷金・保証金</strong> ￥0
            </li>
            <li>
              <strong>礼金</strong> ￥37,000
            </li>
            <li>
              <strong>仲介手数料・鍵交換費用</strong> ￥0
            </li>
            <li>
              <strong>保険</strong>
              三井住友海上火災保険への加入任意（￥1300／月）。
            </li>
          </ul>

          <div className="w-full rounded-xl border p-5 shadow dark:border-2">
            <strong>賃貸借契約の種類</strong> 建物賃貸借契約
            <br />
            <strong>賃貸借契約の期間</strong> 3ヵ月～
            <br />
            <strong>家賃保証会社</strong>
            その方の状況次第。家賃保証会社加入の場合（賃料共益費込みの50%）。
            <br />
            <strong>最終更新日</strong> 2025-04-03
            <br />
            <strong>最大入居人数</strong> 2名
          </div>
        </div>
      )
    },
  },
  {
    status: false,
    description: '広さ 14.6 ㎡ 9 畳；賃料 ￥32,000',
    title: '202室',
    ctaText: '詳細',
    content: () => {
      return (
        <div className="text-start text-lg md:text-sm">
          <ul className="mb-8 flex flex-col space-y-2">
            <li>
              <strong>広さ</strong> 14.6 ㎡ 9 畳
            </li>
            <li>
              <strong>賃料</strong> ￥32,000
            </li>
            <li>
              <strong>共益費・管理費※固定分</strong> ￥5,000
            </li>
            <li>
              <strong>共益費・管理費※変動分</strong> 2名入居時の共益費は￥9000
            </li>
            <li>
              <strong>設備等</strong>
              2F。床材は洋室（合板フローリング）。陽当たりA。窓の向きは北、西。2階者限定のルーフテラスあり。無線LANあり。備品：エアコン、机、椅子。
            </li>
            <li>
              <strong>入居条件</strong> 男性、女性、外国人対応OK
            </li>
            <li>
              <strong>敷金・保証金</strong> ￥0
            </li>
            <li>
              <strong>礼金</strong> ￥37,000
            </li>
            <li>
              <strong>仲介手数料・鍵交換費用</strong> ￥0
            </li>
            <li>
              <strong>保険</strong>
              三井住友海上火災保険への加入任意（￥1300／月）。
            </li>
          </ul>

          <div className="w-full rounded-xl border p-5 shadow dark:border-2">
            <strong>賃貸借契約の種類</strong> 建物賃貸借契約
            <br />
            <strong>賃貸借契約の期間</strong> 3ヵ月～
            <br />
            <strong>家賃保証会社</strong>
            その方の状況次第。家賃保証会社加入の場合（賃料共益費込みの50%）。
            <br />
            <strong>最終更新日</strong> 2025-04-03
            <br />
            <strong>最大入居人数</strong> 2名
          </div>
        </div>
      )
    },
  },
]

export default RoomList
