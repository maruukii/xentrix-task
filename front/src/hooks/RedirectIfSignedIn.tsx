import { Navigate, useLocation, useSearchParams } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useAuth } from './useAuth'
import Preloader from '@/components/preloader'

interface RedirectIfSignedInProps {
  children: ReactNode
}

const RedirectIfSignedIn: React.FC<RedirectIfSignedInProps> = ({ children }) => {
  const location = useLocation()
  const { loading, isAuthenticated } = useAuth()
  const [params] = useSearchParams()

  const redirectTo = decodeURIComponent(params.get('redirect') || '/dashboard')

  if (loading) {
    return <Preloader />
  }

  return isAuthenticated ? (
    <Navigate
      to={location.state?.from?.pathname + location.state?.from?.search || redirectTo}
      replace
    />
  ) : (
    children
  )
}

export default RedirectIfSignedIn
