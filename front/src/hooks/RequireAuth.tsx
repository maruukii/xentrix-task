import { useLocation, Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import Preloader from '@/components/preloader'
import { useAuth } from './useAuth'

interface RequireAuthProps {
  children: ReactNode
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation()
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return <Preloader />
  }
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/auth?tab=signin" state={{ from: location }} replace />
  )
}

export default RequireAuth
