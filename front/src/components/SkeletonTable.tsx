type SkeletonEffectProps = {
  rows?: number
  columns?: number
  showHeader?: boolean
  rowHeight?: number
}

const SkeletonEffect = ({
  rows = 5,
  columns = 4,
  showHeader = true,
  rowHeight = 24,
}: SkeletonEffectProps) => {
  return (
    <div className="w-full animate-pulse">
      {/* Optional Header */}
      {/* 💡 Dynamic Header */}
      {showHeader && (
        <div
          className="mb-6"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: '1rem',
            alignItems: 'center',
          }}>
          {Array.from({ length: columns }).map((_, idx) => (
            <div
              key={idx}
              className="rounded bg-gray-300 dark:bg-gray-600"
              style={{
                height: `32px`,
              }}
            />
          ))}
        </div>
      )}

      <div>
        {/* Optional Table Header
        {showHeader && (
          <div
            className="dark:border-dark-border-default dark:bg-dark-elevated border-b border-gray-200 bg-gray-50 px-6 py-3"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gap: '1rem',
            }}>
            {Array.from({ length: columns }).map((_, idx) => (
              <div key={idx} className="h-4 rounded bg-gray-300 dark:bg-gray-600" />
            ))}
          </div>
        )} */}
        <div className="border-secondary-content/40 mb-4 w-full border-b" />

        {/* Table Body */}
        <div>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="py-3"
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: '1rem',
                alignItems: 'center',
              }}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <div
                  key={colIndex}
                  className="rounded bg-gray-300 dark:bg-gray-600"
                  style={{
                    height: `${rowHeight}px`,
                    width: '100%',
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkeletonEffect
