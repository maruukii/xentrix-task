import { LinkIcon } from '@/utils/icons'

const List = ({ entries }: { entries: number }) => {
  const items = []
  let count = entries >= 4 ? 3 : entries
  for (let i = 0; i < count; i++) {
    items.push(
      <div key={i}>
        <div className="flex h-10 w-[304px] items-center justify-between">
          <div className="flex h-10 w-[143px] items-center gap-2">
            <div className="bg-primary-content/20 h-10 w-10 rounded-full" />
            <div className="flex h-10 w-[95px] flex-col justify-between">
              <span className="text-primary-content text-[14px] leading-[140%] font-medium">
                Test
              </span>
              <span className="text-secondary-content text-[14px] leading-[140%] font-medium">
                Service name
              </span>
            </div>
          </div>

          <img src={LinkIcon} alt="Link to" />
        </div>

        {i < 2 && <div className="border-secondary-content/40 mt-4 border-b"></div>}
      </div>,
    )
  }

  return <div className="flex w-full flex-col gap-4">{items}</div>
}

export default List
