import { signupSchema, type SignupFormData } from '@/schemas/signup.schema'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { axiosInstance } from '@/config/axiosInstance'
import { setUserData } from '@/store/user/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = async (data: SignupFormData) => {
    try {
      const res = await axiosInstance.post('/auth/signup', data)
      dispatch(setUserData(res.data.data.user))
      navigate('/')
    } catch (err: any) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex h-auto w-[362px] flex-col gap-8">
      <div className="flex h-auto w-full max-w-[362px] flex-col gap-8">
        <div className="flex h-auto w-full max-w-[362px] flex-col gap-5">
          <div className="flex h-auto w-full max-w-[362px] flex-col gap-4">
            <label className="text-primary-content text-[18px] leading-[140%] font-medium">
              Business Name
            </label>
            <input
              {...register('businessName')}
              name="businessName"
              className="border-secondary-content text-secondary-content h-auto w-full rounded-lg border px-6 py-3 text-[16px] leading-[140%] font-medium"
              placeholder="Enter Business Name"
            />
            {errors.businessName && (
              <p className="text-sm text-red-500">{errors.businessName.message}</p>
            )}
          </div>

          <div className="flex h-auto w-full max-w-[362px] flex-col gap-4">
            <label className="text-primary-content text-[18px] leading-[140%] font-medium">
              Office Address
            </label>
            <input
              {...register('officeAddress')}
              name="officeAddress"
              className="border-secondary-content text-secondary-content h-auto w-full rounded-lg border px-6 py-3 text-[16px] leading-[140%] font-medium"
              placeholder="Enter Office Address"
            />
            {errors.officeAddress && (
              <p className="text-sm text-red-500">{errors.officeAddress.message}</p>
            )}
          </div>

          <div className="flex h-auto w-full max-w-[362px] flex-col gap-4">
            <label className="text-primary-content text-[18px] leading-[140%] font-medium">
              Post Code
            </label>
            <input
              {...register('postCode')}
              name="postCode"
              className="border-secondary-content text-secondary-content h-auto w-full rounded-lg border px-6 py-3 text-[16px] leading-[140%] font-medium"
              placeholder="Enter Post Code"
            />
            {errors.postCode && <p className="text-sm text-red-500">{errors.postCode.message}</p>}
          </div>

          <div className="flex h-auto w-full max-w-[362px] flex-col gap-4">
            <label className="text-primary-content text-[18px] leading-[140%] font-medium">
              Email
            </label>
            <input
              type="email"
              {...register('email')}
              name="email"
              className="border-secondary-content text-secondary-content h-auto w-full rounded-lg border px-6 py-3 text-[16px] leading-[140%] font-medium"
              placeholder="Enter Email"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div className="flex h-auto w-full max-w-[362px] flex-col gap-4">
            <label className="text-primary-content text-[18px] leading-[140%] font-medium">
              Password
            </label>

            <div className="relative w-full max-w-[362px]">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                name="password"
                className="border-secondary-content text-secondary-content h-auto w-full rounded-lg border px-6 py-3 text-[16px] leading-[140%] font-medium"
                placeholder="Enter Password"
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
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>

          <div className="flex h-auto w-full max-w-[362px] flex-col gap-4">
            <label className="text-primary-content text-[18px] leading-[140%] font-medium">
              Confirm Password
            </label>

            <div className="relative w-full max-w-[362px]">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                className="border-secondary-content text-secondary-content h-auto w-full rounded-lg border px-6 py-3 text-[16px] leading-[140%] font-medium"
                placeholder="Confirm Password"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2">
                {!showConfirmPassword ? (
                  <EyeSlashIcon className="text-secondary-content h-5 w-5" />
                ) : (
                  <EyeIcon className="text-secondary-content h-5 w-5" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          //   disabled={Object.keys(errors).length > 0}
          className={`${Object.keys(errors).length > 0 || isSubmitting ? 'cursor-not-allowed opacity-50' : ''} bg-primary-content flex h-[54px] w-full cursor-pointer items-center justify-center gap-3 rounded-md px-6 py-4`}>
          <span className="text-[16px] leading-[140%] font-bold tracking-[0.04em] text-white">
            {isSubmitting ? 'Signing up…' : 'Sign up'}
          </span>
        </button>

        <p className="text-secondary-content text-center text-[14px] leading-[140%] font-medium">
          By signing up to create an account I accept Company's{' '}
          <a href="#" className="underline">
            Terms of use
          </a>{' '}
          &{' '}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  )
}

export default Signup
