import Breadcrumb from '@/components/Breadcrumb'
import DashboardNav from '@/components/navbar/Dashboard'
import Sidebar from '@/components/sidebar'
import { useEffect } from 'react'

const Protected = ({
  children,
  breadcrumb,
  description,
}: {
  children: React.ReactNode
  breadcrumb?: string
  description?: string
}) => {
  useEffect(() => {
    const handler = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload()
      }
    }

    window.addEventListener('pageshow', handler)
    return () => window.removeEventListener('pageshow', handler)
  }, [])

  return (
    <div className="flex min-h-screen flex-row overflow-auto">
      <Sidebar />
      <div className="ml-64.5 flex flex-1 flex-col">
        <DashboardNav />
        <main className="bg-primary flex w-full flex-1 flex-col gap-6 p-6">
          <Breadcrumb title={breadcrumb || ''} description={description || ''} />
          {children}
        </main>
      </div>
    </div>
  )
}

export default Protected
