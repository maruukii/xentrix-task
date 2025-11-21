import { AddIcon } from '@/utils/icons'

const AddElementHeader = ({ breadcrumb }: { breadcrumb: string }) => {
  return (
    <div className="flex w-full items-center justify-between rounded-lg bg-white px-8 py-6 shadow-[0_4px_8px_0_rgba(0,0,0,0.1)]">
      <div className="flex h-auto w-[533px] flex-col gap-3">
        <h5 className="text-primary-content text-[18px] leading-[120%] font-bold">
          New {breadcrumb}
        </h5>
        <p className="text-secondary-content text-[14px] leading-[140%] font-medium">
          You can add your {breadcrumb.toLowerCase()} listings
        </p>
      </div>
      <button className="border-primary-content flex h-[54px] w-fit items-center gap-3 rounded-md border-2 px-6 py-4">
        <img src={AddIcon} alt="Add icon" className="h-4.5 w-4.5" />
        <p className="text-primary-content text-[16px] leading-[140%] font-bold tracking-[4%]">
          Add New {breadcrumb}
        </p>
      </button>
    </div>
  )
}

export default AddElementHeader
