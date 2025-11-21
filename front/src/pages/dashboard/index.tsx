import Bookings from '@/components/dashboard/Bookings'
import Cards from '@/components/dashboard/Cards'
import CircleChart from '@/components/dashboard/CircleChart'
import Hero from '@/components/dashboard/Hero'

const index = () => {
  return (
    <section className="flex h-fit w-full flex-col gap-4">
      <Hero />
      <div className="flex h-auto w-full flex-row gap-4">
        <CircleChart title="Marketing" percentage={80} />
        <CircleChart title="Compliance" percentage={80} />
      </div>
      <Bookings />
      <div className="flex h-auto w-full items-start gap-4">
        <Cards title="Upcoming" entries={3} />
        <Cards title="In progress" entries={1} />
        <Cards title="Completed" entries={2} />
      </div>
    </section>
  )
}

export default index
