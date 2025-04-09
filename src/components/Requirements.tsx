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
      <ThreeDCard icon={<ChartNoAxesGantt size={64} />} desc={'af'} />

      <ChartNoAxesGantt size={64} />
      <ShieldCheck size={64} />
      <Scale size={64} />
      <Fan size={64} />
      <House size={64} />
      <History size={64} />
    </div>
  )
}

export default Requirements
