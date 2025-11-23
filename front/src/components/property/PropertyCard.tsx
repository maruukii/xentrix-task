import { BathIcon, BedIcon, SpaceIcon } from '@/utils/icons'
import PercentageBadge from '../ui/PercentageBadge'
import type { PropertyFormData } from '@/schemas/property.schema'

const PropertyCard = ({ property }: { property: PropertyFormData }) => {
  return (
    <div className="flex h-auto max-h-[485px] w-full basis-[365px] flex-col rounded-lg shadow-[0_4px_8px_0_rgba(0,0,0,0.12)]">
      <div className="flex h-[243px] w-full items-center">
        <img
          src={property?.image || '/logo.png'}
          alt="property image"
          className="h-auto max-h-[243px] w-full object-contain"
        />
      </div>

      <div className="border-primary flex h-auto w-full flex-col gap-4 rounded-b-lg border-t-0 border-r border-b border-l bg-white px-4 pt-6 pb-6">
        <div className="flex h-auto w-auto flex-col gap-3">
          <h2 className="text-primary-content text-[24px] leading-[120%] font-medium tracking-[0px]">
            {property.propertyName}
          </h2>
          <p className="text-secondary-content text-[16px] leading-[140%] font-medium tracking-[0px]">
            {property.address} {property.city} {property.country} {property.postCode}
          </p>
        </div>
        <div className="flex h-auto w-full flex-row justify-between">
          <div className="flex h-auto w-auto flex-row items-center gap-2">
            <img src={BedIcon} alt="bed" className="h-5 w-5" />
            <span className="text-secondary-content text-[16px] leading-[140%] font-medium tracking-[0px]">
              {property.bedrooms} Beds
            </span>
          </div>
          <div className="flex h-auto w-auto flex-row items-center gap-2">
            <img src={BathIcon} alt="bath" className="h-5 w-5" />
            <span className="text-secondary-content text-[16px] leading-[140%] font-medium tracking-[0px]">
              {property.bathrooms} Bathrooms
            </span>
          </div>
          <div className="flex h-auto w-auto flex-row items-center gap-2">
            <img src={SpaceIcon} alt="space" className="h-5 w-5" />
            <span className="text-secondary-content text-[16px] leading-[140%] font-medium tracking-[0px]">
              {property.dimension} m²
            </span>
          </div>
        </div>
        <div className="border-secondary-content/30 border-[1.5px]"></div>
        <div className="flex h-auto w-full flex-row gap-6">
          <div className="flex h-auto w-full flex-col gap-[11px]">
            <p className="text-primary-content text-[16px] leading-[140%] font-semibold tracking-[0px]">
              Marketing
            </p>
            <PercentageBadge percentage={Math.round(Math.random() * 100)} />
          </div>

          <div className="flex h-auto w-full flex-col gap-[11px]">
            <p className="text-primary-content text-[16px] leading-[140%] font-semibold tracking-[0px]">
              Compliance
            </p>
            <PercentageBadge percentage={Math.round(Math.random() * 100)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
