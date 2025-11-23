import { axiosInstance } from '@/config/axiosInstance'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '@/store/user/userSlice'
import { useNavigate } from 'react-router'

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<boolean>(false)
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError(false)
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)
    e.preventDefault()
    try {
      const res = await axiosInstance.post('/auth/signin', form)
      dispatch(setUserData(res.data.data.user))
      navigate('/dashboard')
    } catch (err: any) {
      setError(true)
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="flex h-auto w-[362px] flex-col gap-8" onSubmit={handleSubmit}>
      <div className="flex h-auto w-full max-w-[362px] flex-col gap-5">
        <div className="flex justify-center">
          {error && <p className="text-sm text-red-500">Invalid email or password</p>}
        </div>

        <div className="flex h-auto w-full max-w-[362px] flex-col gap-4">
          <label className="text-primary-content text-[18px] leading-[140%] font-medium tracking-normal">
            Email
          </label>

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === ' ') e.preventDefault()
            }}
            autoComplete="email"
            className="border-secondary-content text-secondary-content h-auto w-full max-w-[362px] rounded-lg border px-6 py-3 text-[16px] leading-[140%] font-medium"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="flex h-auto w-full max-w-[362px] flex-col gap-4">
          <label className="text-primary-content text-[18px] leading-[140%] font-medium tracking-normal">
            Password
          </label>

          <div className="relative w-full max-w-[362px]">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              className="border-secondary-content text-secondary-content h-auto w-full rounded-lg border px-6 py-3 text-[16px] leading-[140%] font-medium"
              placeholder="Enter Your Password"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-4 -translate-y-1/2">
              {!showPassword ? (
                <EyeSlashIcon className="text-secondary-content h-5 w-5" />
              ) : (
                <EyeIcon className="text-secondary-content h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        <div className="flex h-auto w-full max-w-[362px] justify-between">
          <div />
          <a
            href="#"
            className="text-secondary-content text-right text-[14px] leading-[140%] font-normal underline decoration-1 underline-offset-0">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className={`${isSubmitting ? 'cursor-not-allowed opacity-50' : ''} bg-primary-content flex h-[54px] w-full cursor-pointer items-center justify-center gap-3 rounded-md px-6 py-4`}>
          <span className="text-[16px] leading-[140%] font-bold tracking-[0.04em] text-white">
            {isSubmitting ? 'Signing in…' : 'Sign in'}
          </span>
        </button>
      </div>
    </form>
  )
}

export default Signin
