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
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (errorMessage) setErrorMessage(null)

    setForm((prev) => ({
      ...prev,
      [name]:
        name === 'email'
          ? value.replace(/\s+/g, '') // remove all spaces
          : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await axiosInstance.post('/auth/signin', form)
      dispatch(setUserData(res.data.data.user))
      navigate('/dashboard')
    } catch (err: any) {
      const status = err.response?.status

      if (!status) {
        setErrorMessage('Network error. Please try again.')
      } else if (status === 404) {
        setErrorMessage('Incorrect email or password.')
      } else if (status === 500) {
        setErrorMessage('Server error. Please try again later.')
      } else {
        setErrorMessage('Something went wrong. Please try again.')
      }

      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="flex h-auto w-[362px] flex-col gap-8" onSubmit={handleSubmit}>
      <div className="flex h-auto w-full max-w-[362px] flex-col gap-5">
        <div className="flex justify-center">
          {errorMessage && <p className="text-danger text-sm">{errorMessage}</p>}
        </div>

        <div className="flex h-auto w-full max-w-[362px] flex-col gap-4">
          <label className="text-primary-content text-[18px] font-medium">Email</label>

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onKeyDown={(e) => e.key === ' ' && e.preventDefault()}
            autoComplete="email"
            className="border-secondary-content text-secondary-content h-auto w-full rounded-lg border px-6 py-3 text-[16px] font-medium"
            placeholder="Enter Your Email"
          />
        </div>

        <div className="flex h-auto w-full max-w-[362px] flex-col gap-4">
          <label className="text-primary-content text-[18px] font-medium">Password</label>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              className="border-secondary-content text-secondary-content h-auto w-full rounded-lg border px-6 py-3 text-[16px] font-medium"
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

        <button
          type="submit"
          className={`${isSubmitting ? 'cursor-not-allowed opacity-50' : ''} bg-primary-content flex h-[54px] w-full cursor-pointer items-center justify-center rounded-md`}>
          <span className="text-[16px] font-bold text-white">
            {isSubmitting ? 'Signing in…' : 'Sign in'}
          </span>
        </button>
      </div>
    </form>
  )
}

export default Signin
