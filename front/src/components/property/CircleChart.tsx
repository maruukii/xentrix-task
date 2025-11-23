import { ChartIcon } from '@/utils/icons'

interface CircleChartProps {
  title: string
  percentage: number
}

const CircleChart = ({ title, percentage }: CircleChartProps) => {
  return (
    <div className="flex h-auto w-auto flex-col gap-10 bg-white">
      <div className="flex items-center justify-center">
        <h5 className="font-work-sans text-center text-[18px] leading-[120%] font-bold tracking-[0]">
          {title}
        </h5>
      </div>

      <div className="flex justify-center">
        <img src={ChartIcon} alt="Chart Icon" className="h-37.5 w-37.5" />
      </div>
      <div className="flex h-fit w-fit gap-20">
        <div className="flex h-fit w-fit items-center gap-[7px]">
          <span className="bg-primary-content h-3 w-3 rounded-full" />
          <span className="text-primary-content text-[16px] leading-[140%] font-medium tracking-[0px]">
            {100 - percentage}% Completed
          </span>
        </div>
        <div className="flex h-fit w-fit items-center gap-1">
          <span className="bg-highlight-content h-3 w-3 rounded-full" />
          <span className="text-primary-content text-[16px] leading-[140%] font-medium tracking-[0px]">
            {percentage}% Remaining
          </span>
        </div>
      </div>
    </div>
  )
}
export default CircleChart
