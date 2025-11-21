import ActionButton from '@/components/ui/actionButton'
import { ApartmentIcon } from '@/utils/icons'

const Hero = () => {
  return (
    <div className="bg-primary-content flex h-[270px] w-full flex-row items-center justify-between rounded-lg py-6 pr-[120px] pl-16 shadow-[0_4px_8px_rgba(0,0,0,0.10)]">
      <div className="flex h-fit w-[420px] flex-col gap-8">
        <h2 className="text-[40px] leading-[120%] font-bold tracking-[0px] text-white">
          Capture the <span className="text-highlight-content">Essence,</span>
          <br />
          Sell the <span className="text-highlight-content">Dream.</span>
        </h2>
        <ActionButton
          label="Book Now"
          className="bg-highlight-content flex h-[54px] w-fit flex-row items-center justify-center gap-3 rounded-md px-6 py-4"
          labelClassName="font-bold text-[16px] leading-[140%] tracking-[0.04em]"
        />
      </div>
      <img src={ApartmentIcon} alt="Apartment" className="h-[222px] w-[317px]" />
    </div>
  )
}

export default Hero
