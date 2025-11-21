import { bookings } from '@/constants'
import { AddIcon } from '@/utils/icons'

const BookingsTable = () => {
  return (
    <div className="w-full">
      <div className="flex w-full justify-between pb-6">
        <div className="text-secondary-content w-32.25 text-left text-[16px] font-medium">
          Service
        </div>
        <div className="text-secondary-content w-9.75 text-center text-[16px] font-medium">
          Total
        </div>
        <div className="text-secondary-content w-16 text-center text-[16px] font-medium">
          Details
        </div>
        <div className="text-secondary-content w-22 text-center text-[16px] font-medium">
          Status
        </div>
        <div className="text-secondary-content w-21.5 text-center text-[16px] font-medium">Add</div>
      </div>

      {bookings.map((item, index) => (
        <div
          key={index}
          className={`flex w-full items-center justify-between ${index !== bookings.length - 1 ? 'pb-4' : ''}`}>
          <div className="text-primary-content w-32.25 text-left text-[16px] font-medium">
            {item.service}
          </div>

          <div className="text-primary-content w-9.75 text-center text-[16px] font-medium">
            {item.total}
          </div>

          <div className="text-primary-content w-16 cursor-pointer text-center text-[16px] font-semibold underline">
            View All
          </div>

          <div
            className={`w-22 text-center text-[16px] font-medium ${
              item.status === 'Completed'
                ? 'text-success'
                : item.status === 'In progress'
                  ? 'text-warning'
                  : 'text-danger'
            }`}>
            {item.status}
          </div>

          <div className="flex w-21.5 cursor-pointer justify-center">
            <img src={AddIcon} alt="Add" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookingsTable
