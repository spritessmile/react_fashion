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
    <div className="mb-20">
      <h2 className="mb-10 text-center text-3xl font-semibold">
        マネージメント ルール
      </h2>
      <div className="grid grid-cols-1 gap-10 px-20 md:grid-cols-2 lg:grid-cols-3">
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
        <ThreeDCard icon={<Fan size={64} />} title="イベント" desc={'あり'} />
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
    </div>
  )
}

export default Requirements
