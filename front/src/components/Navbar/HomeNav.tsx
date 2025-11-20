import { Link } from 'react-router-dom'
import ActionButton from '../ui/actionButton'
import useLogout from '@/hooks/useLogout'
import { useDispatch } from 'react-redux'
import useAuth from '@/hooks/useAuth'
import SkeletonEffect from '../SkeletonComponent'

const HomeNav = () => {
  const dispatch = useDispatch()
  const logout = useLogout(dispatch)
  const { isAuthenticated, loading } = useAuth()
  return (
    <nav className="bg-primary flex w-full items-center justify-between px-[104px] py-6">
      <Link to="/">
        <img src="/logo.png" alt="Logo Property Motion" className="h-7 w-[238px]" />
      </Link>
      <ul className="flex gap-8 text-lg">
        <li>
          <a href="#" className="text-primary-content leading-[140%] font-semibold tracking-normal">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-primary-content leading-[140%] font-medium tracking-normal">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-primary-content leading-[140%] font-medium tracking-normal">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="text-primary-content leading-[140%] font-medium tracking-normal">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-primary-content leading-[140%] font-medium tracking-normal">
            Contact
          </a>
        </li>
      </ul>

      <div className="flex gap-4">
        {loading ? (
          <SkeletonEffect />
        ) : (
          <>
            {!isAuthenticated ? (
              <>
                <Link to="/auth?tab=signin">
                  <ActionButton
                    label="Sign in"
                    className="border-primary-content h-fit cursor-pointer gap-3 rounded-md border-[1.5px] px-6 py-4"
                    labelClassName="text-primary-content"
                  />
                </Link>

                <ActionButton
                  label="Get Started"
                  className="bg-primary-content h-fit cursor-not-allowed gap-3 rounded-md px-6 py-4"
                  labelClassName="text-white"
                />
              </>
            ) : (
              <>
                <Link to="/dashboard">
                  <ActionButton
                    label="Dashboard"
                    className="border-primary-content h-fit cursor-pointer gap-3 rounded-md border-[1.5px] px-6 py-4"
                    labelClassName="text-primary-content"
                  />
                </Link>

                <ActionButton
                  onClick={logout}
                  label="Log out"
                  className="bg-primary-content h-fit cursor-pointer gap-3 rounded-md px-6 py-4"
                  labelClassName="text-white"
                />
              </>
            )}
          </>
        )}
      </div>
    </nav>
  )
}

export default HomeNav
