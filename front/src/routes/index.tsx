import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
// import PersistLogin from "../components/PersistLogin/PersistLogin.jsx";
// import RequireAuth from "../hooks/RequireAuth.tsx";
import routes from './routes.tsx'
import Protected from '../layout/Protected'
import Public from '../layout/Public'
import SkeletonEffect from '@/components/SkeletonEffect.tsx'
import RequireAuth from '@/hooks/RequireAuth.tsx'

const Index = () => {
  return (
    <Suspense fallback={<SkeletonEffect />}>
      <Routes>
        {routes.map((route, idx) => {
          const RouteElement =
            route.type === 'public' ? (
              <Public>{route.element}</Public>
            ) : (
              <RequireAuth>
                <Protected>{route.element}</Protected>
              </RequireAuth>
            )

          return <Route key={idx} path={route.path} element={RouteElement} />
        })}
      </Routes>
    </Suspense>
  )
}

export default Index
