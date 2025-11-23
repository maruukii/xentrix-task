import { useLogout } from '@/hooks/useLogout'
import {
  LogoIcon,
  DashboardNormalIcon,
  DashboardBoldIcon,
  PaymentBoldIcon,
  PaymentNormalIcon,
  AmendmentBoldIcon,
  AmendmentNormalIcon,
  BookingBoldIcon,
  BookingNormalIcon,
  NewBookingBoldIcon,
  NewBookingNormalIcon,
  PropertyBoldIcon,
  PropertyNormalIcon,
  HelpBoldIcon,
  HelpNormalIcon,
  LogoutIcon,
} from '@/utils/icons'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

const index = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const logout = useLogout(dispatch)
  const path = location.pathname
  return (
    <div className="bg-primary-content fixed z-50 flex h-screen w-fit flex-col justify-between p-6">
      <div className="flex h-fit w-52 flex-col gap-[72px]">
        <a href="/">
          <img src={LogoIcon} alt="Logo" />
        </a>
        <div className="flex h-fit w-52 flex-col gap-4">
          <Link to="/dashboard">
            <div
              className={`flex h-[41px] w-52 flex-row items-center gap-2 border-l-2 ${path.includes('/dashboard') ? 'border-white bg-white/3' : 'border-transparent'} p-2`}>
              <img
                src={path.includes('/dashboard') ? DashboardBoldIcon : DashboardNormalIcon}
                alt="Dashboard"
                className="h-5.5 w-5.5"
              />
              <span
                className={`text-[18px] leading-[140%] ${path.includes('/dashboard') ? 'font-semibold text-white' : 'font-medium text-white/75'} tracking-[0px]`}>
                Dashboard
              </span>
            </div>
          </Link>

          <Link to="/bookings">
            <div
              className={`flex h-[41px] w-52 flex-row items-center gap-2 border-l-2 ${path.includes('/bookings') ? 'border-white bg-white/3' : 'border-transparent'} p-2`}>
              <img
                src={path.includes('/bookings') ? BookingBoldIcon : BookingNormalIcon}
                alt="New Booking"
                className="h-5.5 w-5.5"
              />
              <span
                className={`text-[18px] leading-[140%] ${path.includes('/bookings') ? 'font-semibold text-white' : 'font-medium text-white/75'} tracking-[0px]`}>
                Bookings
              </span>
            </div>
          </Link>
          <Link to="/new-booking">
            <div
              className={`flex h-[41px] w-52 flex-row items-center gap-2 border-l-2 ${path.includes('/new-booking') ? 'border-white bg-white/3' : 'border-transparent'} p-2`}>
              <img
                src={path.includes('/new-booking') ? NewBookingBoldIcon : NewBookingNormalIcon}
                alt="New Booking"
                className="h-5.5 w-5.5"
              />

              <span
                className={`text-[18px] leading-[140%] ${path.includes('/new-booking') ? 'font-semibold text-white' : 'font-medium text-white/75'} tracking-[0px]`}>
                New Booking
              </span>
            </div>
          </Link>

          <Link to="/amendments">
            <div
              className={`flex h-[41px] w-52 flex-row items-center gap-2 border-l-2 ${path.includes('/amendments') ? 'border-white bg-white/3' : 'border-transparent'} p-2`}>
              <img
                src={path.includes('/amendments') ? AmendmentBoldIcon : AmendmentNormalIcon}
                alt="Amendments"
                className="h-5.5 w-5.5"
              />

              <span
                className={`text-[18px] leading-[140%] ${path.includes('/amendments') ? 'font-semibold text-white' : 'font-medium text-white/75'} tracking-[0px]`}>
                Amendments
              </span>
            </div>
          </Link>

          <Link to="/properties">
            <div
              className={`flex h-[41px] w-52 flex-row items-center gap-2 border-l-2 ${path.includes('/properties') ? 'border-white bg-white/3' : 'border-transparent'} p-2`}>
              <img
                src={path.includes('/properties') ? PropertyBoldIcon : PropertyNormalIcon}
                alt="My Properties"
                className="h-5.5 w-5.5"
              />

              <span
                className={`text-[18px] leading-[140%] ${path.includes('/properties') ? 'font-semibold text-white' : 'font-medium text-white/75'} tracking-[0px]`}>
                My Properties
              </span>
            </div>
          </Link>
          <Link to="/payments">
            <div
              className={`flex h-[41px] w-52 flex-row items-center gap-2 border-l-2 ${path.includes('/payments') ? 'border-white bg-white/3' : 'border-transparent'} p-2`}>
              <img
                src={path.includes('/payments') ? PaymentBoldIcon : PaymentNormalIcon}
                alt="Payments"
                className="h-5.5 w-5.5"
              />

              <span
                className={`text-[18px] leading-[140%] ${path.includes('/payments') ? 'font-semibold text-white' : 'font-medium text-white/75'} tracking-[0px]`}>
                Payments
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex h-auto w-full flex-col gap-4">
        <Link to="/help">
          <div
            className={`flex h-[41px] w-52 flex-row items-center gap-2 border-l-2 ${path.includes('/help') ? 'border-white bg-white/3' : 'border-transparent'} p-2`}>
            <img
              src={path.includes('/help') ? HelpBoldIcon : HelpNormalIcon}
              alt="Help"
              className="h-5.5 w-5.5"
            />
            <span
              className={`text-[18px] leading-[140%] ${path.includes('/help') ? 'font-semibold text-white' : 'font-medium text-white/75'} tracking-[0px]`}>
              Help Center
            </span>
          </div>
        </Link>
        <div
          className={`flex h-[41px] w-52 cursor-pointer flex-row items-center gap-2 p-2`}
          onClick={logout}>
          <img src={LogoutIcon} alt="Logout" className="h-5.5 w-5.5" />
          <span className={`text-[18px] leading-[140%] font-medium tracking-[0px] text-white/75`}>
            Log out
          </span>
        </div>
      </div>
    </div>
  )
}

export default index
