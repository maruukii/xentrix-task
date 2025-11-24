import { StarIcon } from '@heroicons/react/24/solid'

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="bg-secondary border-secondary-content flex h-auto w-full flex-wrap justify-between border-b-[1.5px] px-6 py-14 md:px-[104px]">
      <h3 className="text-primary-content mb-10 max-w-[455px] text-3xl leading-[120%] font-bold tracking-normal md:mb-0">
        Trusted by more than 500 property
        <span className="text-highlight-content"> professionals.</span>
      </h3>

      <div className="flex w-full flex-wrap justify-center gap-10 md:w-[721px] md:gap-20">
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-1">
            <StarIcon className="h-5 w-5" style={{ fill: '#FBC120' }} />
            <StarIcon className="h-5 w-5" style={{ fill: '#FBC120' }} />
            <StarIcon className="h-5 w-5" style={{ fill: '#FBC120' }} />
            <StarIcon className="h-5 w-5" style={{ fill: '#FBC120' }} />
            <StarIcon className="h-5 w-5" style={{ fill: '#FBC120' }} />
          </div>

          <p className="text-primary-content text-center text-2xl leading-[120%] font-medium tracking-normal">
            4.9/5 rating
          </p>
        </div>

        <div className="flex flex-col">
          <h4 className="font-work text-center text-2xl leading-[120%] font-bold tracking-normal">
            48hr
          </h4>
          <p className="font-work text-center text-2xl leading-[120%] font-medium tracking-normal">
            delivery
          </p>
        </div>

        <div className="flex flex-col">
          <h4 className="font-work text-center text-2xl leading-[120%] font-bold tracking-normal">
            UK-wide
          </h4>
          <p className="font-work text-center text-2xl leading-[120%] font-medium tracking-normal">
            coverage
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
