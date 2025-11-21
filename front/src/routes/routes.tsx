import { lazy } from 'react'
import RedirectIfSignedIn from '@/hooks/RedirectIfSignedIn'
import Home from '@/pages/home'
const NotFoundPage = lazy(() => import('@/pages/not-found'))
const Auth = lazy(() => import('@/pages/auth'))
const Dashboard = lazy(() => import('@/pages/dashboard'))

const routes: RouteMetaData[] = [
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
  { path: '/bookings', element: <></>, type: 'protected', breadcrumb: 'Bookings' },
  { path: '/amendments', element: <></>, type: 'protected', breadcrumb: 'Amendments' },
  { path: '/payments', element: <></>, type: 'protected', breadcrumb: 'Payments' },
  { path: '/new-booking', element: <></>, type: 'protected', breadcrumb: 'New Booking' },
  { path: '/properties', element: <></>, type: 'protected', breadcrumb: 'Properties' },
  { path: '/help', element: <></>, type: 'protected', breadcrumb: 'Help Center' },

  // { path: "/properties/new", element: <CreateProperty />, type: "protected" },
  // { path: "/properties/:id", element: <PropertyDetails />, type: "protected" },
  // { path: "/properties/listing", element: <Properties />, type: "protected" },
]

export default routes
