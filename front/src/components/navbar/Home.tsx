import { useState } from 'react'
import { Link } from 'react-router-dom'
import ActionButton from '../ui/ActionButton'
import { useLogout } from '@/hooks/useLogout'
import { useDispatch } from 'react-redux'
import { useAuth } from '@/hooks/useAuth'
import SkeletonEffect from '../SkeletonTable'
import { MenuIcon } from '@/utils/icons'

const HomeNav = () => {
  const dispatch = useDispatch()
  const logout = useLogout(dispatch)
  const { isAuthenticated, loading } = useAuth()

  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-primary w-full px-6 py-4 lg:px-[104px] lg:py-6">
      <div className="flex w-full items-center justify-between">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-7 w-[180px] md:w-[238px]" />
        </Link>

        <ul className="hidden gap-8 text-lg lg:flex">
          <li>
            <a className="text-primary-content leading-[140%] font-semibold" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-primary-content leading-[140%] font-medium" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="text-primary-content leading-[140%] font-medium" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="text-primary-content leading-[140%] font-medium" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-primary-content leading-[140%] font-medium" href="#">
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden gap-4 lg:flex">
          {loading ? (
            <SkeletonEffect rows={1} columns={1} showHeader={false} />
          ) : (
            <>
              {!isAuthenticated ? (
                <>
                  <Link to="/auth?tab=signin">
                    <ActionButton
                      label="Sign in"
                      className="border-primary-content cursor-pointer rounded-md border-[1.5px] px-6 py-4"
                      labelClassName="text-primary-content"
                    />
                  </Link>
                  <Link to="/auth?tab=signup">
                    <ActionButton
                      label="Get Started"
                      className="bg-primary-content cursor-pointer rounded-md px-6 py-4"
                      labelClassName="text-white"
                    />
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard">
                    <ActionButton
                      label="Dashboard"
                      className="border-primary-content cursor-pointer rounded-md border-[1.5px] px-6 py-4"
                      labelClassName="text-primary-content"
                    />
                  </Link>
                  <ActionButton
                    onClick={logout}
                    label="Log out"
                    className="bg-primary-content cursor-pointer rounded-md px-6 py-4"
                    labelClassName="text-white"
                  />
                </>
              )}
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(!open)} className="text-primary-content text-3xl lg:hidden">
          <MenuIcon className="h-7 w-7" strokeColor="#151b38" />
        </button>
      </div>

      {open && (
        <div className="mt-4 flex flex-col gap-6 lg:hidden">
          {/* Links */}
          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <a className="text-primary-content font-semibold" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-primary-content font-medium" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="text-primary-content font-medium" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="text-primary-content font-medium" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-primary-content font-medium" href="#">
                Contact
              </a>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex flex-col gap-4">
            {loading ? (
              <SkeletonEffect rows={1} columns={1} showHeader={false} />
            ) : (
              <>
                {!isAuthenticated ? (
                  <>
                    <Link to="/auth?tab=signin">
                      <ActionButton
                        label="Sign in"
                        className="border-primary-content w-full rounded-md border-[1.5px] px-6 py-4"
                        labelClassName="text-primary-content"
                      />
                    </Link>
                    <ActionButton
                      label="Get Started"
                      className="bg-primary-content w-full cursor-not-allowed rounded-md px-6 py-4"
                      labelClassName="text-white"
                    />
                  </>
                ) : (
                  <>
                    <Link to="/dashboard">
                      <ActionButton
                        label="Dashboard"
                        className="border-primary-content w-full rounded-md border-[1.5px] px-6 py-4"
                        labelClassName="text-primary-content"
                      />
                    </Link>
                    <ActionButton
                      onClick={logout}
                      label="Log out"
                      className="bg-primary-content w-full rounded-md px-6 py-4"
                      labelClassName="text-white"
                    />
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default HomeNav
