import List from './List'

const Cards = ({ title, entries }: { title: string; entries: number }) => {
  return (
    <div className="flex h-auto w-full flex-col items-center gap-6 rounded-lg bg-white p-4 text-white shadow-[0_4px_8px_0_rgba(0,0,0,0.1)] md:h-full md:gap-10 md:p-8">
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
      <div className="flex w-full flex-col gap-4">
        <List entries={entries} />
      </div>
    </div>
  )
}

export default Cards
