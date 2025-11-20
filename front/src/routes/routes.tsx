// import { lazy } from 'react'
import Home from '@/pages/Home'

const routes: RouteMetaData[] = [
  // Public Routes
  {
    path: '/',
    element: <Home />,
    type: 'public',
  },
  // {
  //   path: "/signin",
  //   element: (
  //     <RedirectIfSignedIn>
  //       <SignIn />
  //     </RedirectIfSignedIn>
  //   ),
  //   type: "public",
  // },
  // {
  //   path: '/signup',
  //   element: (
  //     <RedirectIfSignedIn>
  //       <Signup />
  //     </RedirectIfSignedIn>
  //   ),
  //   type: 'public',
  // },
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
