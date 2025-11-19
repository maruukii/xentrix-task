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
  //   path: "/login",
  //   element: (
  //     <RedirectIfLoggedIn>
  //       <Login />
  //     </RedirectIfLoggedIn>
  //   ),
  //   type: "public",
  // },
  // {
  //   path: '/signup',
  //   element: (
  //     <RedirectIfLoggedIn>
  //       <Signup />
  //     </RedirectIfLoggedIn>
  //   ),
  //   type: 'public',
  // },
  // Protected Routes
  // { path: "/property/new", element: <CreateProperty />, type: "protected" },
  // { path: "/property/:id", element: <EditProperty />, type: "protected" },
  // { path: "/properties", element: <Properties />, type: "protected" },
  // {
  //   path: "/*",
  //   element: <Home />,
  //   type: "public",
  // },
]

export default routes
