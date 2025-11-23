import type { PropertyFormData } from '@/schemas/property.schema'
import PercentageBadge from '../ui/PercentageBadge'

const PropertiesTable = ({ properties }: { properties: PropertyFormData[] }) => {
  return (
    <div className="w-full">
      {/* HEADER ROW */}
      <div className="flex w-full justify-between pb-6">
        <div className="text-secondary-content w-40 text-left text-[16px] font-medium">
          Property Name
        </div>

        <div className="text-secondary-content w-40 text-center text-[16px] font-medium">
          Address
        </div>

        <div className="text-secondary-content w-20 text-center text-[16px] font-medium">
          No. beds
        </div>

        <div className="text-secondary-content w-20 text-center text-[16px] font-medium">
          No. baths
        </div>

        <div className="text-secondary-content w-24 text-center text-[16px] font-medium">
          Dimension
        </div>

        <div className="text-secondary-content w-24 text-center text-[16px] font-medium">
          Marketing
        </div>
        <div className="text-secondary-content w-24 text-center text-[16px] font-medium">
          Compliance
        </div>
      </div>

      <div className="border-secondary-content/40 mb-4 w-full border-b" />

      {/* DATA ROWS */}
      {properties.map((p, index) => (
        <div key={p._id || index} className="w-full">
          <div className="flex w-full items-center justify-between pb-4">
            <div className="text-primary-content w-40 text-left text-[16px] font-medium">
              {p.propertyName}
            </div>

            <div className="text-primary-content w-40 text-center text-[16px] font-medium">
              {p.address}
            </div>

            <div className="text-primary-content w-20 text-center text-[16px] font-medium">
              {p.bedrooms}
            </div>

            <div className="text-primary-content w-20 text-center text-[16px] font-medium">
              {p.bathrooms}
            </div>

            <div className="text-primary-content w-24 text-center text-[16px] font-medium">
              {p.dimension} m²
            </div>

            <div className="text-primary-content w-24 text-center text-[16px] font-medium">
              <PercentageBadge percentage={Math.round(Math.random() * 100)} />
            </div>
            <div className="text-primary-content w-24 text-center text-[16px] font-medium">
              <PercentageBadge percentage={Math.round(Math.random() * 100)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PropertiesTable
