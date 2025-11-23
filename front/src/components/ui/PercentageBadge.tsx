const PercentageBadge = ({ percentage }: { percentage: number }) => {
  return (
    <div className="bg-highlight-content/15 flex h-auto w-full flex-row justify-center gap-1 rounded-md px-4 py-1">
      <span className="text-secondary-content text-[14px] leading-[140%] font-medium tracking-[0px]">
        {percentage}%
      </span>
    </div>
  )
}

export default PercentageBadge
