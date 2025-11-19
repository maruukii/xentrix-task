import { Navigate, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import SkeletonEffect from '@/components/SkeletonEffect'

interface RedirectIfLoggedInProps {
  children: ReactNode
}

const RedirectIfLoggedIn: React.FC<RedirectIfLoggedInProps> = ({ children }) => {
  const location = useLocation()
  const { userName, loading } = { userName: 'mockUser', loading: false } // Replace with useAuth()

  if (loading) {
    return <SkeletonEffect />
  }

  return userName ? <Navigate to={location.state?.from?.pathname || '/'} replace /> : children
}

export default RedirectIfLoggedIn
