import PropertiesTable from '@/components/property/PropertiesTable'
import PropertyCard from '@/components/property/PropertyCard'
import PropertyCardSkeleton from '@/components/SkeletonCard'
import SkeletonEffect from '@/components/SkeletonTable'
import { usePropertiesQuery } from '@/hooks/queries/usePropertiesQuery'
import type { PropertyFormData } from '@/schemas/property.schema'
import { GridIcon, MenuIcon } from '@/utils/icons'
import { useState } from 'react'

const index = () => {
  const { data, isLoading } = usePropertiesQuery()
  const params = new URLSearchParams(window.location.search)
  const [selectedView, setSelectedView] = useState<'list' | 'cards'>(
    params.get('view') === 'list' ? 'list' : 'cards',
  )
  const handleTabChange = (view: 'cards' | 'list') => {
    setSelectedView(view)
    const params = new URLSearchParams(window.location.search)
    params.set('view', view)
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
  }
  return (
    <div className="flex h-full w-full flex-col gap-10 rounded-lg bg-white p-8 pb-20 shadow-[0_4px_8px_0_rgba(0,0,0,0.10)]">
      <div className="flex h-auto w-full flex-row justify-between">
        <div className="text-primary-content text-[18px] leading-[120%] font-bold">
          Properties listing
        </div>
        <div className="flex h-auto w-[592.5px] flex-row-reverse gap-2">
          <div
            onClick={() => handleTabChange('list')}
            className={`${selectedView === 'list' ? 'bg-primary-content' : 'bg-primary'} flex h-9 w-20 cursor-pointer flex-row items-center justify-center gap-1 rounded-md p-2`}>
            <MenuIcon
              strokeColor={selectedView === 'list' ? '#FFFFFF' : '#151B38'}
              className="h-5 w-5"
            />
            <span
              className={`text-[14px] leading-[140%] font-medium ${selectedView === 'list' ? 'text-white' : 'text-secondary-content'}`}>
              List
            </span>
          </div>
          <div
            onClick={() => handleTabChange('cards')}
            className={`${selectedView === 'cards' ? 'bg-primary-content' : 'bg-primary'} flex h-9 w-20 cursor-pointer flex-row items-center justify-center gap-1 rounded-md p-2`}>
            <GridIcon
              fillColor={selectedView === 'cards' ? '#FFFFFF' : '#151B38'}
              className="h-5 w-5"
            />
            <span
              className={`text-[14px] leading-[140%] font-medium ${selectedView === 'cards' ? 'text-white' : 'text-secondary-content'}`}>
              Cards
            </span>
          </div>
        </div>
      </div>
      {selectedView === 'cards' ? (
        <>
          {isLoading ? (
            <div className="flex w-full flex-wrap gap-8">
              <div key={1} className="min-w-[320px] flex-1 basis-0">
                <PropertyCardSkeleton />
              </div>
              <div key={2} className="min-w-[320px] flex-1 basis-0">
                <PropertyCardSkeleton />
              </div>
              <div key={3} className="min-w-[320px] flex-1 basis-0">
                <PropertyCardSkeleton />
              </div>
            </div>
          ) : (
            <div className="flex w-full flex-wrap gap-8">
              {data?.map((property: PropertyFormData) => (
                <div key={property._id} className="min-w-[320px] flex-1 basis-0">
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <>{isLoading ? <SkeletonEffect /> : <PropertiesTable properties={data ?? []} />}</>
      )}
    </div>
  )
}

export default index
