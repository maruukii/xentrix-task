export default function SkeletonEffect() {
  return (
    <div className="animate-pulse">
      {/* Header skeleton: simulating the page title and New Issue button */}
      <div className="mb-8 flex items-center justify-between">
        <div className="h-8 w-32 rounded bg-gray-300 dark:bg-gray-600" />
        <div className="h-10 w-36 rounded bg-gray-300 dark:bg-gray-600" />
      </div>
      {/* Skeleton for issues list */}
      <div className="dark:border-dark-border-default dark:bg-dark-high overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        {/* Header row skeleton */}
        <div className="dark:bg-dark-elevated dark:border-dark-border-default grid grid-cols-12 gap-4 border-b border-gray-200 bg-gray-50 px-6 py-3">
          <div className="col-span-5 h-4 rounded bg-gray-300 dark:bg-gray-600" />
          <div className="col-span-2 h-4 rounded bg-gray-300 dark:bg-gray-600" />
          <div className="col-span-2 h-4 rounded bg-gray-300 dark:bg-gray-600" />
          <div className="col-span-3 h-4 rounded bg-gray-300 dark:bg-gray-600" />
        </div>
        {/* Issue row skeletons */}
        <div className="dark:divide-dark-border-default divide-y divide-gray-200">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="grid grid-cols-12 items-center gap-4 px-6 py-4">
              <div className="col-span-5 h-4 rounded bg-gray-300 dark:bg-gray-600" />
              <div className="col-span-2 h-4 rounded bg-gray-300 dark:bg-gray-600" />
              <div className="col-span-2 h-4 rounded bg-gray-300 dark:bg-gray-600" />
              <div className="col-span-3 h-4 rounded bg-gray-300 dark:bg-gray-600" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
