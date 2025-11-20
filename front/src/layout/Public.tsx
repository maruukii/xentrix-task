import HomeNav from '@/components/Navbar/HomeNav'

export default function Public({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <HomeNav />
      {children}
    </div>
  )
}
