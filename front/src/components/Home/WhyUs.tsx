import { StarIcon } from '@heroicons/react/24/solid'

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="bg-secondary border-secondary-content flex h-auto w-full justify-between border-b-[1.5px] px-[104px] py-14">
      <h3 className="text-primary-content max-w-[455px] text-3xl leading-[120%] font-bold tracking-normal">
        Trusted by more than 500 property{' '}
        <span className="text-highlight-content">professionals.</span>
      </h3>
      <div className="flex h-auto w-[721px] justify-center gap-20">
        {/* ELEMENT 1 */}
        <div className="flex h-auto w-fit flex-col items-center gap-2">
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

        {/* ELEMENT 2 */}
        <div className="flex h-auto w-fit flex-col">
          <h4 className="font-work text-center text-2xl leading-[120%] font-bold tracking-normal">
            48hr
          </h4>
          <p className="font-work text-center text-2xl leading-[120%] font-medium tracking-normal">
            delivery
          </p>
        </div>

        {/* ELEMENT 3 */}
        <div className="flex h-auto w-fit flex-col">
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
