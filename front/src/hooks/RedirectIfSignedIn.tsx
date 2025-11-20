import { Navigate, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import SkeletonEffect from '@/components/SkeletonComponent'
import useAuth from './useAuth'

interface RedirectIfSignedInProps {
  children: ReactNode
}

const RedirectIfSignedIn: React.FC<RedirectIfSignedInProps> = ({ children }) => {
  const location = useLocation()
  const { loading, isAuthenticated } = useAuth()

  if (loading) {
    return <SkeletonEffect />
  }

  return isAuthenticated ? (
    <Navigate to={location.state?.from?.pathname || '/dashboard'} replace />
  ) : (
    children
  )
}

export default RedirectIfSignedIn
