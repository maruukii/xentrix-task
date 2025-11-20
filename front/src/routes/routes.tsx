import { lazy } from 'react'
import RedirectIfSignedIn from '@/hooks/RedirectIfSignedIn'
import Home from '@/pages/home'
const Auth = lazy(() => import('@/pages/auth'))
const Dashboard = lazy(() => import('@/pages/dashboard'))

const routes: RouteMetaData[] = [
  // Public Routes
  {
    path: '/',
    element: <Home />,
    type: 'public',
  },
  {
    path: '/auth',
    element: (
      <RedirectIfSignedIn>
        <Auth />
      </RedirectIfSignedIn>
    ),
    type: 'auth',
  },
  { path: '/dashboard', element: <Dashboard />, type: 'protected' },

  // Protected Routes
  // { path: "/properties/new", element: <CreateProperty />, type: "protected" },
  // { path: "/properties/:id", element: <PropertyDetails />, type: "protected" },
  // { path: "/properties/listing", element: <Properties />, type: "protected" },
  // {
  //   path: "/*",
  //   element: <Home />,
  //   type: "public",
  // },
]

export default routes
