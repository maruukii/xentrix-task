import HomeNav from '@/components/navbar/HomeNav'

export default function Public({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <HomeNav />
      {children}
    </div>
  )
}
