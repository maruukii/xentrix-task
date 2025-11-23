import HomeNav from '@/components/navbar/Home'

const Public = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col overflow-auto">
      <HomeNav />
      {children}
    </div>
  )
}

export default Public
