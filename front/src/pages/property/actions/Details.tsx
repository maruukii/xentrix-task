import CircleChart from '@/components/dashboard/CircleChart'
import { useGetPropertyQuery } from '@/hooks/queries/usePropertiesQuery'
import type { PropertyFormData } from '@/schemas/property.schema'
import { useParams } from 'react-router-dom'

const details = [
  { label: 'Property type', value: 'type' },
  { label: 'Property value', value: 'value' },
  { label: 'Property on', value: 'status' },
  { label: 'No. of bedrooms', value: 'bedrooms' },
  { label: 'No. of bathrooms', value: 'bathrooms' },
  { label: 'No. of floors', value: 'floors' },
  { label: 'Dimension', value: 'dimension' },
  { label: 'Rest of', value: 'features' },
  { label: 'Access through', value: 'access' },
]

const Details = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetPropertyQuery(id!)

  if (isLoading) {
    return (
      <div className="flex h-full w-full flex-col gap-10 rounded-lg bg-white p-8 shadow-[0_4px_8px_0_rgba(0,0,0,0.10)]">
        <div className="flex animate-pulse flex-col gap-8">
          <div className="h-[188px] w-[327px] rounded-lg bg-gray-200" />
          <div className="h-6 w-1/3 rounded bg-gray-200" />
          <div className="h-5 w-2/3 rounded bg-gray-200" />
          <div className="mt-6 flex flex-wrap gap-4">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-6 w-[352px] rounded bg-gray-200" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!data?.data?.property) {
    return <div className="text-danger py-20 text-center">Property not found.</div>
  }

  const property = data.data.property
  const formatFeatures = (features: any) =>
    Object.entries(features)
      .filter(([_, v]) => v === true)
      .map(([k]) => k.charAt(0).toUpperCase() + k.slice(1))
      .join(', ') || 'None'

  const getValue = (key: string) => {
    if (key === 'features') return formatFeatures(property.features)
    if (!property[key as keyof PropertyFormData] && property[key as keyof PropertyFormData] !== 0)
      return '-'
    if (typeof property[key as keyof PropertyFormData] === 'string') {
      return (
        property[key as keyof PropertyFormData].charAt(0).toUpperCase() +
          property[key as keyof PropertyFormData].slice(1) || '-'
      )
    }
    return property[key as keyof PropertyFormData]
  }
  return (
    <div className="flex h-full w-full flex-col gap-10 rounded-lg bg-white p-8 pb-20 shadow-[0_4px_8px_0_rgba(0,0,0,0.10)]">
      <div className="flex h-auto w-full flex-col gap-6 md:gap-8">
        <div className="flex h-auto w-full flex-col gap-8 md:flex-row">
          <div className="flex max-h-[188.33px] max-w-[327px] items-center justify-center overflow-hidden rounded-lg">
            <img src={property?.image || '/logo.png'} className="h-full w-full object-contain" />
          </div>

          <div className="flex h-auto w-full flex-col gap-4">
            <h4 className="text-primary-content text-[24px] leading-[120%] font-bold">
              {property.propertyName}
            </h4>

            <div className="flex w-full max-w-[713px] flex-col gap-2">
              <p className="text-secondary-content text-[18px] leading-[140%] font-medium">
                {property.address} {property.city} <br />
                {property.country} {property.postCode}
              </p>

              <p className="text-secondary-content text-[18px] leading-[140%] font-medium">
                Ref: {property.reference}
              </p>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="flex h-full w-full flex-col gap-4">
          <span className="text-primary-content text-[18px] leading-[120%] font-bold">
            Property Details
          </span>

          <div className="flex h-full w-full flex-wrap gap-4">
            {details.map((item) => (
              <div key={item.value} className="flex flex-[1_1_320px] items-center gap-1">
                <span className="text-primary-content text-[16px] leading-[140%] font-semibold">
                  {item.label}:
                </span>

                <span className="text-secondary-content text-left text-[16px] leading-[140%] font-medium">
                  {item.value === 'value' ? '£' : ''} {String(getValue(item.value))}{' '}
                  {item.value === 'dimension' ? 'm²' : ''}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-secondary-content/40 mb-4 w-full border-b-[1.5px]" />

      <div className="flex h-auto w-full justify-between">
        <CircleChart title="Marketing" percentage={75} isProperty={true} />
        <CircleChart title="Compliance" percentage={50} isProperty={true} />
      </div>
    </div>
  )
}

export default Details
