import { mirage } from 'ldrs'
mirage.register()

const Preloader = () => {
  return (
    <div className="preloader bg-primary fixed inset-0 z-100 flex items-center justify-center">
      <l-mirage size="60" speed="2.5" color="bg-primary-content"></l-mirage>
    </div>
  )
}

export default Preloader
