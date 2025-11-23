import { useLocation, Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Preloader from '@/components/preloader'
import { mockDelay } from '@/utils'

interface RequireAuthProps {
  children: ReactNode
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation()
  const { isLoggedIn } = useSelector((state: any) => state.user)

  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const runCheck = async () => {
      await mockDelay(100)
      setChecking(false)
    }
    runCheck()
  }, [])

  // Show loader during delay
  if (checking) {
    return <Preloader />
  }

  // After delay → check login state
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/auth?tab=signin" state={{ from: location }} replace />
  )
}

export default RequireAuth
