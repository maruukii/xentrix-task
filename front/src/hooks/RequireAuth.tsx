import { useLocation, Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useSelector } from 'react-redux'
interface RequireAuthProps {
  children: ReactNode
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation()
  const { isLoggedIn } = useSelector((state: any) => state.user)

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/auth?tab=signin" state={{ from: location }} replace />
  )
}

export default RequireAuth
