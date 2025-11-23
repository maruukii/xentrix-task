import AmendmentNormalIcon from '@/assets/icons/amendment.normal.svg'
import BookingNormalIcon from '@/assets/icons/bookings.normal.svg'
import DashboardNormalIcon from '@/assets/icons/dashboard.normal.svg'
import NewBookingNormalIcon from '@/assets/icons/booking.normal.svg'
import PaymentNormalIcon from '@/assets/icons/payment.normal.svg'
import PropertyNormalIcon from '@/assets/icons/property.normal.svg'
import AmendmentBoldIcon from '@/assets/icons/amendment.bold.svg'
import BookingBoldIcon from '@/assets/icons/bookings.bold.svg'
import DashboardBoldIcon from '@/assets/icons/dashboard.bold.svg'
import NewBookingBoldIcon from '@/assets/icons/booking.bold.svg'
import PaymentBoldIcon from '@/assets/icons/payment.bold.svg'
import PropertyBoldIcon from '@/assets/icons/property.bold.svg'
import ChevronIcon from '@/assets/icons/chevron.svg'
import BellIcon from '@/assets/icons/bell.svg'
import GearIcon from '@/assets/icons/gear.svg'
import LoopIcon from '@/assets/icons/loop.svg'
import PhoneIcon from '@/assets/icons/phone.svg'
import TabletIcon from '@/assets/icons/tablet.svg'
import LogoIcon from '@/assets/icons/logo.svg'
import ApartmentIcon from '@/assets/icons/apartment.svg'
import HelpNormalIcon from '@/assets/icons/help.normal.svg'
import HelpBoldIcon from '@/assets/icons/help.bold.svg'
import LogoutIcon from '@/assets/icons/logout.svg'
import ChartIcon from '@/assets/icons/chart.svg'
import AddIcon from '@/assets/icons/add.svg'
import LinkIcon from '@/assets/icons/link.svg'
import SpaceIcon from '@/assets/icons/space.svg'
import BedIcon from '@/assets/icons/bed.svg'
import BathIcon from '@/assets/icons/bath.svg'
import CardIcon from '@/assets/icons/card.svg'
import ListIcon from '@/assets/icons/list.svg'

import type { FC, SVGProps } from 'react'
interface GridIconProps extends SVGProps<SVGSVGElement> {
  fillColor?: string
}
interface MenuIconProps extends SVGProps<SVGSVGElement> {
  strokeColor?: string
}

export const GridIcon: FC<GridIconProps> = ({ fillColor = 'currentColor', ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M7.5 3H4.33333C3.86662 3 3.63327 3 3.45501 3.09083C3.29821 3.17072 3.17072 3.29821 3.09083 3.45501C3 3.63327 3 3.86662 3 4.33333V7.5C3 7.96671 3 8.20007 3.09083 8.37833C3.17072 8.53513 3.29821 8.66261 3.45501 8.74251C3.63327 8.83333 3.86662 8.83333 4.33333 8.83333H7.5C7.96671 8.83333 8.20007 8.83333 8.37833 8.74251C8.53513 8.66261 8.66261 8.53513 8.74251 8.37833C8.83333 8.20007 8.83333 7.96671 8.83333 7.5V4.33333C8.83333 3.86662 8.83333 3.63327 8.74251 3.45501C8.66261 3.29821 8.53513 3.17072 8.37833 3.09083C8.20007 3 7.96671 3 7.5 3Z"
        fill={fillColor}
      />
      <path
        d="M15.6667 3H12.5C12.0333 3 11.7999 3 11.6217 3.09083C11.4649 3.17072 11.3374 3.29821 11.2575 3.45501C11.1667 3.63327 11.1667 3.86662 11.1667 4.33333V7.5C11.1667 7.96671 11.1667 8.20007 11.2575 8.37833C11.3374 8.53513 11.4649 8.66261 11.6217 8.74251C11.7999 8.83333 12.0333 8.83333 12.5 8.83333H15.6667C16.1334 8.83333 16.3667 8.83333 16.545 8.74251C16.7018 8.66261 16.8293 8.53513 16.9092 8.37833C17 8.20007 17 7.96671 17 7.5V4.33333C17 3.86662 17 3.63327 16.9092 3.45501C16.8293 3.29821 16.7018 3.17072 16.545 3.09083C16.3667 3 16.1334 3 15.6667 3Z"
        fill={fillColor}
      />
      <path
        d="M15.6667 11.1667H12.5C12.0333 11.1667 11.7999 11.1667 11.6217 11.2575C11.4649 11.3374 11.3374 11.4649 11.2575 11.6217C11.1667 11.7999 11.1667 12.0333 11.1667 12.5V15.6667C11.1667 16.1334 11.1667 16.3667 11.2575 16.545C11.3374 16.7018 11.4649 16.8293 11.6217 16.9092C11.7999 17 12.0333 17 12.5 17H15.6667C16.1334 17 16.3667 17 16.545 16.9092C16.7018 16.8293 16.8293 16.7018 16.9092 16.545C17 16.3667 17 16.1334 17 15.6667V12.5C17 12.0333 17 11.7999 16.9092 11.6217C16.8293 11.4649 16.7018 11.3374 16.545 11.2575C16.3667 11.1667 16.1334 11.1667 15.6667 11.1667Z"
        fill={fillColor}
      />
      <path
        d="M7.5 11.1667H4.33333C3.86662 11.1667 3.63327 11.1667 3.45501 11.2575C3.29821 11.3374 3.17072 11.4649 3.09083 11.6217C3 11.7999 3 12.0333 3 12.5V15.6667C3 16.1334 3 16.3667 3.09083 16.545C3.17072 16.7018 3.29821 16.8293 3.45501 16.9092C3.63327 17 3.86662 17 4.33333 17H7.5C7.96671 17 8.20007 17 8.37833 16.9092C8.53513 16.8293 8.66261 16.7018 8.74251 16.545C8.83333 16.3667 8.83333 16.1334 8.83333 15.6667V12.5C8.83333 12.0333 8.83333 11.7999 8.74251 11.6217C8.66261 11.4649 8.53513 11.3374 8.37833 11.2575C8.20007 11.1667 7.96671 11.1667 7.5 11.1667Z"
        fill={fillColor}
      />

      {/* Stroke outlines */}
      <path
        d="M7.5 3H4.33333C3.86662 3 3.63327 3 3.45501 3.09083C3.29821 3.17072 3.17072 3.29821 3.09083 3.45501C3 3.63327 3 3.86662 3 4.33333V7.5C3 7.96671 3 8.20007 3.09083 8.37833C3.17072 8.53513 3.29821 8.66261 3.45501 8.74251C3.63327 8.83333 3.86662 8.83333 4.33333 8.83333H7.5C7.96671 8.83333 8.20007 8.83333 8.37833 8.74251C8.53513 8.66261 8.66261 8.53513 8.74251 8.37833C8.83333 8.20007 8.83333 7.96671 8.83333 7.5V4.33333C8.83333 3.86662 8.83333 3.63327 8.74251 3.45501C8.66261 3.29821 8.53513 3.17072 8.37833 3.09083C8.20007 3 7.96671 3 7.5 3Z"
        stroke={fillColor}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6667 3H12.5C12.0333 3 11.7999 3 11.6217 3.09083C11.4649 3.17072 11.3374 3.29821 11.2575 3.45501C11.1667 3.63327 11.1667 3.86662 11.1667 4.33333V7.5C11.1667 7.96671 11.1667 8.20007 11.2575 8.37833C11.3374 8.53513 11.4649 8.66261 11.6217 8.74251C11.7999 8.83333 12.0333 8.83333 12.5 8.83333H15.6667C16.1334 8.83333 16.3667 8.83333 16.545 8.74251C16.7018 8.66261 16.8293 8.53513 16.9092 8.37833C17 8.20007 17 7.96671 17 7.5V4.33333C17 3.86662 17 3.63327 16.9092 3.45501C16.8293 3.29821 16.7018 3.17072 16.545 3.09083C16.3667 3 16.1334 3 15.6667 3Z"
        stroke={fillColor}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6667 11.1667H12.5C12.0333 11.1667 11.7999 11.1667 11.6217 11.2575C11.4649 11.3374 11.3374 11.4649 11.2575 11.6217C11.1667 11.7999 11.1667 12.0333 11.1667 12.5V15.6667C11.1667 16.1334 11.1667 16.3667 11.2575 16.545C11.3374 16.7018 11.4649 16.8293 11.6217 16.9092C11.7999 17 12.0333 17 12.5 17H15.6667C16.1334 17 16.3667 17 16.545 16.9092C16.7018 16.8293 16.8293 16.7018 16.9092 16.545C17 16.3667 17 16.1334 17 15.6667V12.5C17 12.0333 17 11.7999 16.9092 11.6217C16.8293 11.4649 16.7018 11.3374 16.545 11.2575C16.3667 11.1667 16.1334 11.1667 15.6667 11.1667Z"
        stroke={fillColor}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 11.1667H4.33333C3.86662 11.1667 3.63327 11.1667 3.45501 11.2575C3.29821 11.3374 3.17072 11.4649 3.09083 11.6217C3 11.7999 3 12.0333 3 12.5V15.6667C3 16.1334 3 16.3667 3.09083 16.545C3.17072 16.7018 3.29821 16.8293 3.45501 16.9092C3.63327 17 3.86662 17 4.33333 17H7.5C7.96671 17 8.20007 17 8.37833 16.9092C8.53513 16.8293 8.66261 16.7018 8.74251 16.545C8.83333 16.3667 8.83333 16.1334 8.83333 15.6667V12.5C8.83333 12.0333 8.83333 11.7999 8.74251 11.6217C8.66261 11.4649 8.53513 11.3374 8.37833 11.2575C8.20007 11.1667 7.96671 11.1667 7.5 11.1667Z"
        stroke={fillColor}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const MenuIcon: FC<MenuIconProps> = ({ strokeColor = 'currentColor', ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export {
  DashboardNormalIcon,
  BookingNormalIcon,
  NewBookingNormalIcon,
  AmendmentNormalIcon,
  PropertyNormalIcon,
  PaymentNormalIcon,
  DashboardBoldIcon,
  BookingBoldIcon,
  NewBookingBoldIcon,
  AmendmentBoldIcon,
  PropertyBoldIcon,
  PaymentBoldIcon,
  ChevronIcon,
  BellIcon,
  GearIcon,
  LoopIcon,
  PhoneIcon,
  TabletIcon,
  LogoIcon,
  ApartmentIcon,
  HelpNormalIcon,
  HelpBoldIcon,
  LogoutIcon,
  ChartIcon,
  AddIcon,
  LinkIcon,
  SpaceIcon,
  BedIcon,
  BathIcon,
  CardIcon,
  ListIcon,
}
