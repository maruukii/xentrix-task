import { useLocation, Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import SkeletonEffect from '@/components/SkeletonEffect'
// import useAuth from './useAuth'

interface RequireAuthProps {
  children: ReactNode
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation()
  const { userName, loading } = { userName: 'mockUser', loading: false } // Replace with useAuth()

  if (loading) {
    return <SkeletonEffect />
  }

  return userName ? children : <Navigate to="/" state={{ from: location }} replace />
}

export default RequireAuth
