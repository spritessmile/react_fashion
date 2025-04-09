import {
  ChartNoAxesGantt,
  ShieldCheck,
  Scale,
  Fan,
  House,
  History,
} from 'lucide-react'
import ThreeDCard from '@/components/ThreeDCard'

const Requirements = () => {
  return (
    <div className="flex flex-wrap items-center justify-around gap-4">
      <ThreeDCard
        icon={<ChartNoAxesGantt size={64} />}
        title="管理スタイル"
        desc={'週五回程度巡回'}
      />
      <ThreeDCard
        icon={<ShieldCheck size={64} />}
        title="清掃"
        desc={'管理人週1回程度；共用部分のゴミ出しは入居者当番'}
      />
      <ThreeDCard
        icon={<Scale size={64} />}
        title="ルール"
        desc={
          '喫煙は喫煙所のみ可；友人の宿泊は要事前連絡；共用部のゴミ出しは住人当番制；3日おきのローテーション'
        }
      />
      <ThreeDCard icon={<Fan size={64} />} title="イベント" desc={'なし'} />
      <ThreeDCard
        icon={<House size={64} />}
        title="コミュニティ"
        desc={'アットホーム - みんなで仲良く'}
      />
      <ThreeDCard
        icon={<History size={64} />}
        title="入居期間"
        desc={'長期可；短期の1か月からも可'}
      />
    </div>
  )
}

export default Requirements
