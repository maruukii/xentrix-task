import { ChartIcon } from '@/utils/icons'

interface CircleChartProps {
  title: string
  percentage: number
}

const CircleChart = ({ title, percentage }: CircleChartProps) => {
  return (
    <div className="flex h-auto w-full flex-col items-center gap-6 rounded-lg bg-white p-4 text-white shadow-[0_4px_8px_0_rgba(0,0,0,0.1)] md:h-[358px] md:gap-10 md:p-8">
      <div className="flex h-[42px] w-full flex-col gap-5">
        <div className="flex h-[22px] w-full flex-row justify-between">
          <span className="text-primary-content text-[16px] leading-[120%] font-bold md:text-[18px]">
            {title}
          </span>

          <span className="text-highlight-content text-[14px] leading-[140%] font-semibold underline md:text-[16px]">
            View More
          </span>
        </div>
        <div className="border-secondary-content/40 border-b-2"></div>
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
