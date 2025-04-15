'use client'
import React from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from '@/components/ui/animated-modal'
import Image from 'next/image'
import sugimotoImg from '@/assets/images/sugimoto.jpg'
import { Phone, Mail } from 'lucide-react'

const ContactInfo = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <Modal>
        <ModalTrigger className="group/modal-btn flex justify-center bg-black text-white dark:bg-white dark:text-black">
          <span>担当者さんの連絡先</span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <div>
              <Image
                src={sugimotoImg}
                alt="まちづくりプロジェクト株式会社 杉本さん 写真"
                className="rounded-xl border"
              />
              <div>
                <h4 className="m-3 text-center text-lg font-semibold">
                  まちづくりプロジェクト株式会社 杉本さん
                </h4>
                <p className="m-3 text-sm text-neutral-500">
                  私たち、まちづくりプロジェクト株式会社は、北九州市にお住まいの方、企業様、団体様とチームを組み、様々な人を巻き込んで世界を驚かすものを作っていく会社です。また、世界のSDGs（持続可能な開発目標）実現に貢献し、社会課題の解決に取り組むことで、日本の未来を、より一層豊かなものにしたいと考えています。今回、第一弾として、『星野民家』を作りました（2022年）。自然と海と古民家が好きな人、お待ちしております。
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <div className="flex items-center justify-start space-x-2">
                <Phone />
                <span>090-0000-0000</span>
              </div>

              <div className="flex items-center justify-start space-x-2">
                <Mail />
                <span>machizukuri.project@gmail.com</span>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default ContactInfo
