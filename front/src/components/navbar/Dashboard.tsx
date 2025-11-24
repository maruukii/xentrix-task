import { useAuth } from '@/hooks/useAuth'
import SkeletonEffect from '../SkeletonTable'
import { LoopIcon, BellIcon, GearIcon, ChevronIcon } from '@/utils/icons'
import { UserImage } from '@/utils/images'

const DashboardNav = () => {
  const { user, loading } = useAuth()
  return (
    <nav className="bg-primary border-secondary-content/40 flex h-auto min-h-[90px] w-full items-center justify-between border-b p-6">
      {loading ? (
        <SkeletonEffect rows={1} columns={1} showHeader={false} />
      ) : (
        <p className="text-primary-content text-left text-[24px] leading-[120%] font-medium tracking-[0px]">
          Hello, {user ? user?.businessName : 'User'}!
        </p>
      )}
      <div className="flex h-fit w-fit gap-[47px]">
        <div className="border-secondary-content/60 jus flex h-auto min-h-[38px] w-[322px] flex-row items-center gap-2 rounded-sm border bg-white p-2">
          <div className="flex h-5.5 w-5.5 items-center justify-center">
            <img src={LoopIcon} alt="search" className="h-4.25 w-4.25" />
          </div>
          <input
            type="text"
            className="text-secondary-content/60 text-[14px] leading-[140%] font-medium tracking-[0px] placeholder:text-[#404059]/60 focus:border-none focus:ring-0 focus:outline-none"
            placeholder="Search..."
          />
        </div>
        <div className="flex h-auto w-auto items-center justify-center gap-4">
          <div className="flex h-6 w-6">
            <img src={BellIcon} alt="notifications" className="h-6 w-6" />
          </div>
          <div className="flex h-6 w-6">
            <img src={GearIcon} alt="settings" className="h-6 w-6" />
          </div>
        </div>
        <div className="flex h-auto w-auto items-center justify-center gap-4">
          <img src={UserImage} alt="user avatar" className="h-10.5 w-10.5 rounded-full" />
          <div className="flex h-fit w-fit items-center gap-2">
            <span className="text-primary-content text-[16px] leading-[140%] font-medium tracking-[0px]">
              {loading ? (
                <SkeletonEffect rows={1} columns={1} showHeader={false} />
              ) : user ? (
                user.businessName
              ) : (
                'User'
              )}
            </span>
            <div className="flex h-5.5 w-5.5 items-center justify-center">
              <img src={ChevronIcon} alt="chevron down" className="h-1.5 w-2.5" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default DashboardNav
