import { CalendarIcon } from '@heroicons/react/24/outline'
import ActionButton from '@/components/ui/actionButton'
import { HeroImage } from '@/utils/images'

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-primary flex h-fit w-full items-center justify-between px-[104px] pt-16 pb-[88px]">
      <div className="flex h-fit w-[586px] flex-col gap-10">
        <div className="flex h-fit w-fit flex-col gap-6">
          <div className="flex h-auto w-auto flex-col gap-2">
            <p className="text-secondary-content text-sm leading-[120%] font-bold tracking-[0.04em] uppercase">
              Welcome to Property Motion
            </p>
            <div>
              <h1 className="text-primary-content -mt-2">Market Faster,</h1>
              <h1 className="text-primary-content -mt-2">Stay Compliant,</h1>
              <h1 className="text-highlight-content -mt-2">Simplify Everything.</h1>
            </div>
          </div>
          <p className="text-secondary-content leading-[140%] font-medium tracking-normal">
            Property Motion is your centralised platform for property marketing and compliance. From
            professional photography and EPCs to branded brochures and landlord safety checks, we
            streamline everything, so you can focus on growth.
          </p>
        </div>
        <ActionButton
          icon={<CalendarIcon className="h-4.5 w-4.5" />}
          label="Book a Demo"
          className="bg-primary-content flex h-auto w-fit items-center gap-3 rounded-md px-6 py-4"
          labelClassName="text-white font-bold text-base leading-[140%] tracking-[0.04em]"
        />
      </div>

      <div className="h-[381px] w-[624px] overflow-hidden rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
        <img src={HeroImage} alt="Dashboard" className="h-full w-full object-cover" />
      </div>
    </section>
  )
}

export default Hero
