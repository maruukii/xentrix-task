import { useLocation, useNavigate, useParams } from 'react-router-dom'

export function useRouter() {
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()

  const pathname = location.pathname
  const searchParams = new URLSearchParams(location.search)

  return {
    location,
    pathname,
    searchParams,
    params,
    navigate,

    // helpers:
    push: (to: string) => navigate(to),
    replace: (to: string) => navigate(to, { replace: true }),

    // full URL for debugging
    fullUrl: pathname + location.search + location.hash,
  }
}
