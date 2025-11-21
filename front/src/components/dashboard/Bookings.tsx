import { ChevronIcon } from '@/utils/icons'
import BookingsTable from './BookingsTable'

const Bookings = () => {
  return (
    <div className="flex h-auto w-full flex-col gap-10 rounded-lg bg-white p-8 shadow-[0_4px_8px_0_rgba(0,0,0,0.1)]">
      <div className="flex h-[42px] w-full flex-col gap-5">
        <div className="flex h-[22px] w-full flex-row justify-between">
          <span className="text-primary-content text-[16px] leading-[120%] font-bold md:text-[18px]">
            Bookings
          </span>
          <div className="relative flex w-auto items-center">
            <select className="bg-primary cursor-pointer appearance-none rounded-md px-2 py-1 pr-7 text-[14px] leading-[140%] font-medium outline-none">
              <option
                value="january2026"
                className="text-secondary-content spacing-[0px] text-[14px] leading-[140%] font-medium">
                January 2026
              </option>
              <option
                value="february2026"
                className="text-secondary-content spacing-[0px] text-[14px] leading-[140%] font-medium">
                February 2026
              </option>
              <option
                value="march2026"
                className="text-secondary-content spacing-[0px] text-[14px] leading-[140%] font-medium">
                March 2026
              </option>
            </select>
            <img
              src={ChevronIcon}
              alt="Chevron"
              className="pointer-events-none absolute top-1/2 right-3.5 h-3 w-3 -translate-y-1/2"
            />
          </div>

          <div className="flex h-auto w-[51px] flex-col gap-0.5">
            <svg
              width="51"
              height="16"
              viewBox="0 0 51 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="49" cy="2" r="2" fill="#404059" />
              <circle cx="49" cy="8" r="2" fill="#404059" />
              <circle cx="49" cy="14" r="2" fill="#404059" />
            </svg>
          </div>
        </div>
        <div className="border-secondary-content/40 border-b-2"></div>
      </div>
      <BookingsTable />
    </div>
  )
}

export default Bookings
