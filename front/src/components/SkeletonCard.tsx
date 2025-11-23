const PropertyCardSkeleton = () => {
  return (
    <div className="flex h-auto max-h-[485px] w-full basis-[365px] animate-pulse flex-col rounded-lg shadow-[0_4px_8px_0_rgba(0,0,0,0.12)]">
      {/* Image */}
      <div className="flex h-[243px] w-full items-center rounded-t-lg bg-gray-300 dark:bg-gray-600" />

      <div className="border-primary flex h-auto w-full flex-col gap-4 rounded-b-lg border-t-0 border-r border-b border-l bg-white px-4 pt-6 pb-6">
        {/* Title + Address */}
        <div className="flex h-auto w-auto flex-col gap-3">
          <div className="h-7 w-3/4 rounded bg-gray-300 dark:bg-gray-600" />
          <div className="h-5 w-full rounded bg-gray-300 dark:bg-gray-600" />
        </div>

        {/* Beds / Baths / Space */}
        <div className="flex h-auto w-full flex-row justify-between gap-6">
          <div className="h-5 w-full rounded bg-gray-300 dark:bg-gray-600" />

          <div className="h-5 w-full rounded bg-gray-300 dark:bg-gray-600" />

          <div className="h-5 w-full rounded bg-gray-300 dark:bg-gray-600" />
        </div>

        {/* Divider */}
        <div className="border-secondary-content/30 border-[1.5px]" />

        {/* Marketing + Compliance */}
        <div className="flex h-auto w-full flex-row gap-6">
          {/* Marketing */}
          <div className="flex w-full flex-col gap-[11px]">
            <div className="h-4 w-20 rounded bg-gray-300 dark:bg-gray-600" />

            <div className="h-5 w-full rounded bg-gray-300 dark:bg-gray-600" />
          </div>

          {/* Compliance */}
          <div className="flex w-full flex-col gap-[11px]">
            <div className="h-4 w-24 rounded bg-gray-300 dark:bg-gray-600" />

            <div className="h-5 w-full rounded bg-gray-300 dark:bg-gray-600" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCardSkeleton
