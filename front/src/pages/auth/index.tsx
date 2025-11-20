import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

import PhoneSignIn from '../../assets/phone.svg'
import PhoneSignUp from '../../assets/tablet.svg'
import Signin from '@/components/auth/Signin'
import Signup from '@/components/auth/Signup'

const Index = () => {
  const params = new URLSearchParams(window.location.search)
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>(
    params.get('tab') === 'signup' ? 'signup' : 'signin',
  )
  const handleTabChange = (tab: 'signin' | 'signup') => {
    setActiveTab(tab)
    const params = new URLSearchParams(window.location.search)
    params.set('tab', tab)
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
  }
  return (
    <main className="flex h-full w-full flex-row gap-6 overflow-auto">
      <div className="bg-primary flex h-full min-h-[1024px] w-full flex-col gap-[104px] rounded-tr-[120px] px-16 pt-16 transition-all">
        <Link to="/" className="flex justify-center">
          <img src="/logo.png" alt="Logo Property Motion" className="h-9.5 w-[323px]" />
        </Link>
        <AnimatePresence mode="wait">
          {activeTab === 'signin' ? (
            <motion.div
              key="signin"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4 }}
              className="flex h-fit w-full flex-col items-center justify-center gap-16">
              <div className="flex h-full w-full flex-col gap-2">
                <h1 className="text-primary-content text-center text-[50px] leading-[120%] font-bold">
                  Welcome Back!
                </h1>
                <p className="text-primary-content text-center text-[18px] leading-[140%] font-medium">
                  Login to continue to your account.
                </p>
              </div>

              <img src={PhoneSignIn} alt="Phone" />

              <p className="w-[418px] text-center text-2xl leading-[120%] font-medium">
                Capture every detail with premium photos, videos, and 3D visuals.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4 }}
              className="flex h-fit w-full flex-col items-center justify-center gap-24">
              <div className="flex h-full w-full flex-col gap-2">
                <h1 className="text-primary-content text-center text-[50px] leading-[120%] font-bold">
                  Get Started!
                </h1>
                <p className="text-primary-content text-center text-[18px] leading-[140%] font-medium">
                  Create an account to continue.
                </p>
              </div>

              <img src={PhoneSignUp} alt="Phone" />

              <p className="w-[418px] text-center text-2xl leading-[120%] font-medium">
                Capture every detail with premium photos, videos, and 3D visuals.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className={`bg-secondary flex h-auto min-w-[764px] flex-col items-center ${activeTab === 'signin' ? 'gap-[226px]' : 'gap-10'} pt-[79px]`}>
        <div className="border-primary relative flex h-auto w-[366px] rounded-lg border p-1">
          <motion.div
            className="bg-highlight-content absolute top-1 bottom-1 rounded-lg"
            layout
            transition={{ type: 'spring', stiffness: 250, damping: 24 }}
            style={{
              width: '50%',
              left: activeTab === 'signup' ? 0 : '50%',
            }}
          />

          <button
            onClick={() => handleTabChange('signup')}
            className="z-10 flex h-auto w-full justify-center rounded-[100px] px-4 py-2 transition-colors">
            <p
              className={`leading-[140%] ${
                activeTab === 'signup'
                  ? 'text-secondary font-bold'
                  : 'text-secondary-content font-medium'
              }`}>
              Sign up
            </p>
          </button>

          <button
            onClick={() => handleTabChange('signin')}
            className="z-10 flex h-auto w-full justify-center rounded-[100px] px-4 py-2 transition-colors">
            <p
              className={`leading-[140%] tracking-[0.04em] ${
                activeTab === 'signin'
                  ? 'text-secondary font-bold'
                  : 'text-secondary-content font-medium'
              }`}>
              Sign in
            </p>
          </button>
        </div>
        {activeTab === 'signin' ? <Signin /> : <Signup />}
      </div>
    </main>
  )
}

export default Index
