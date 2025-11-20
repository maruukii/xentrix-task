export default function SkeletonComponent() {
  return (
    <div className="animate-pulse">
      <div className="dark:bg-dark-elevated dark:border-dark-border-default h-5 w-50 rounded-lg border border-gray-200 bg-gray-50 p-4">
        <div className="mb-2 h-4 w-1/3 rounded bg-gray-300 dark:bg-gray-600" />
        <div className="h-4 w-1/2 rounded bg-gray-300 dark:bg-gray-600" />
      </div>
    </div>
  )
}
