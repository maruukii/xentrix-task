import { lazy } from 'react'
import RedirectIfSignedIn from '@/hooks/RedirectIfSignedIn'
import AddElementHeader from '@/components/AddElementHeader'
const Home = lazy(() => import('@/pages/home'))
const NotFoundPage = lazy(() => import('@/pages/not-found'))
const Property = lazy(() => import('@/pages/property'))
const Auth = lazy(() => import('@/pages/auth'))
const Dashboard = lazy(() => import('@/pages/dashboard'))

export const routes: RouteMetaData[] = [
  // Public Routes
  {
    path: '/',
    element: <Home />,
    type: 'public',
  },
  // Auth Routes
  {
    path: '/auth',
    element: (
      <RedirectIfSignedIn>
        <Auth />
      </RedirectIfSignedIn>
    ),
    type: 'auth',
  },
  {
    path: '/*',
    element: <NotFoundPage />,
    type: 'auth',
  },
  // Protected Routes
  { path: '/dashboard', element: <Dashboard />, type: 'protected', breadcrumb: 'Dashboard' },
  {
    path: '/bookings',
    element: (
      <>
        <AddElementHeader breadcrumb="Booking" />
      </>
    ),
    type: 'protected',
    breadcrumb: 'Bookings',
  },
  {
    path: '/amendments',
    element: (
      <>
        <AddElementHeader breadcrumb="Amendment" />
      </>
    ),
    type: 'protected',
    breadcrumb: 'Amendments',
  },
  {
    path: '/payments',
    element: (
      <>
        <AddElementHeader breadcrumb="Payment" />
      </>
    ),
    type: 'protected',
    breadcrumb: 'Payments',
  },
  {
    path: '/new-booking',
    element: (
      <>
        <AddElementHeader breadcrumb="Booking" />
      </>
    ),
    type: 'protected',
    breadcrumb: 'New Booking',
  },
  {
    path: '/properties',
    element: (
      <>
        <AddElementHeader breadcrumb="Property" />
        <Property />
      </>
    ),
    type: 'protected',
    breadcrumb: 'Properties',
    description: 'Easily manage and track all your properties in one place.',
  },
  { path: '/help', element: <></>, type: 'protected', breadcrumb: 'Help Center' },

  // { path: "/properties/new", element: <CreateProperty />, type: "protected" },
  // { path: "/properties/:id", element: <PropertyDetails />, type: "protected" },
  // { path: "/properties/listing", element: <Properties />, type: "protected" },
]
