import { accessTypes, propertyTypes } from '@/constants'
import {
  useCreatePropertyMutation,
  useUploadImageMutation,
} from '@/hooks/queries/usePropertiesQuery'
import { propertySchema, type PropertyFormData } from '@/schemas/property.schema'
import {
  ChevronDynamicIcon,
  FlagIcon,
  FlowerIcon,
  GarageIcon,
  ImageUploadIcon,
  ParkingIcon,
  TagIcon,
} from '@/utils/icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'

const index = () => {
  const create = useCreatePropertyMutation()
  const uploadImage = useUploadImageMutation()
  const location = useLocation()
  const from = location.state?.from || '/properties'
  const navigate = useNavigate()
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(propertySchema),
  })

  const [preview, setPreview] = useState<string | null>(null)
  const [image, setImage] = useState<File | null>(null)
  const [imageError, setImageError] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageError(null)
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setImageError('Please upload a valid image file (PNG, JPG, JPEG, etc.)')
      return
    }
    if (file.size > 2 * 1024 * 1024) {
      setImageError('File size exceeds 2MB')
      return
    }

    const imageUrl = URL.createObjectURL(file)
    setPreview(imageUrl)
    setImage(file)
  }

  const selectedStatus = watch('status')
  const current = watch('features') || {}
  const toggleFeature = (key: keyof Features) => {
    setValue('features', {
      ...current,
      [key]: !current[key],
    })
  }
  const onSubmit = async (data: PropertyFormData) => {
    try {
      if (image) {
        const uploaded = await new Promise<string>((resolve, reject) => {
          uploadImage.mutate(image, {
            onSuccess: (res) => {
              console.log(res)
              const url = res?.data?.url
              if (!url) {
                setImageError('Invalid image response')
                return reject('Invalid image response')
              }
              resolve(url)
            },
            onError: () => {
              setImageError('Image upload failed. Please try again.')
              reject('Upload failed')
            },
          })
        })
        data.image = uploaded
      }
      await new Promise<void>((resolve, reject) => {
        create.mutate(data, {
          onSuccess: (res) => {
            navigate(`/properties/${res?.data?.property._id}`, {
              replace: true,
              state: { from },
            })
            resolve()
          },
          onError: (error) => {
            reject(error)
          },
        })
      })
    } catch (err) {
      console.log('Error in submit flow:', err)
    }
  }

  return (
    <div className="flex h-full w-full flex-col gap-8 rounded-lg bg-white p-8 pb-20 shadow-[0_4px_8px_0_rgba(0,0,0,0.10)]">
      <div className="flex h-auto w-full flex-row">
        <div className="text-primary-content text-[18px] leading-[120%] font-bold">
          Add Property
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex h-auto w-full flex-col gap-6">
        <div className="flex h-auto w-full flex-row items-center gap-4">
          <label className="cursor-pointer">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="max-h-80 max-w-160 rounded-lg object-contain"
              />
            ) : (
              <img src={ImageUploadIcon} alt="Upload" className="h-31 w-32.5 opacity-70" />
            )}
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>

          <p className="text-secondary-content/60 max-w-45 text-[14px] leading-[140%] font-medium">
            Recommended resolution is 640×640 with file size less than 2MB
          </p>
        </div>

        {imageError && <p className="text-danger text-sm">{imageError}</p>}
        <div className="flex h-auto w-full max-w-[654px] flex-col gap-4">
          <p className="text-primary-content text-[16px] leading-[140%] font-semibold">
            Property Name
          </p>

          <div className="border-secondary-content/60 bg-primary/40 h-auto w-full flex-col items-center gap-2 rounded-lg border px-6 py-3">
            <input
              {...register('propertyName')}
              type="text"
              className="text-secondary-content/60 w-full bg-transparent text-[16px] leading-[140%] font-medium outline-none"
              placeholder="Property name"
            />
          </div>
          <div>
            {errors.propertyName && (
              <p className="text-danger text-sm">{errors.propertyName.message}</p>
            )}
          </div>
        </div>
        <div className="flex h-auto w-full max-w-[654px] flex-col gap-4">
          <p className="text-primary-content text-[16px] leading-[140%] font-semibold">Address</p>

          {/* Input Wrapper
          <div className="border-secondary-content/60 bg-primary/40 flex h-auto w-full items-center gap-2 rounded-lg border px-6 py-3">
            <input
              type="text"
              className="text-secondary-content/60 w-full bg-transparent text-[16px] leading-[140%] font-medium outline-none"
              placeholder="Enter property name"
            />
          </div> */}
          <div className="flex h-auto w-full flex-row gap-4">
            <div className="border-secondary-content/60 bg-primary/40 flex h-auto w-full items-center gap-2 rounded-lg border px-6 py-3">
              <input
                {...register('address')}
                type="text"
                className="text-secondary-content/60 w-full bg-transparent text-[16px] leading-[140%] font-medium outline-none"
                placeholder="Address"
              />
            </div>

            <div className="border-secondary-content/60 bg-primary/40 flex h-auto w-full items-center gap-2 rounded-lg border px-6 py-3">
              <input
                {...register('city')}
                type="text"
                className="text-secondary-content/60 w-full bg-transparent text-[16px] leading-[140%] font-medium outline-none"
                placeholder="City"
              />
            </div>
          </div>
          <div className="flex h-auto w-full flex-row gap-4">
            <div className="flex-1">
              {errors.address && <p className="text-danger text-sm">{errors.address.message}</p>}
            </div>

            <div className="flex-1">
              {errors.city && <p className="text-danger text-sm">{errors.city.message}</p>}
            </div>
          </div>

          <div className="flex h-auto w-full flex-row gap-4">
            <div className="border-secondary-content/60 bg-primary/40 flex h-auto w-full items-center gap-2 rounded-lg border px-6 py-3">
              <input
                {...register('country')}
                type="text"
                className="text-secondary-content/60 w-full bg-transparent text-[16px] leading-[140%] font-medium outline-none"
                placeholder="Country"
              />
            </div>

            <div className="border-secondary-content/60 bg-primary/40 flex h-auto w-full items-center gap-2 rounded-lg border px-6 py-3">
              <input
                {...register('postCode')}
                type="text"
                className="text-secondary-content/60 w-full bg-transparent text-[16px] leading-[140%] font-medium outline-none"
                placeholder="Post code"
              />
            </div>
          </div>
          <div className="flex h-auto w-full flex-row gap-4">
            <div className="flex-1">
              {errors.country && <p className="text-danger text-sm">{errors.country.message}</p>}
            </div>

            <div className="flex-1">
              {errors.postCode && <p className="text-danger text-sm">{errors.postCode.message}</p>}
            </div>
          </div>
        </div>
        <div className="flex h-auto w-full max-w-[654px] flex-col gap-4">
          <p className="text-primary-content text-[16px] leading-[140%] font-semibold">Details</p>

          {/* Input Wrapper
          <div className="border-secondary-content/60 bg-primary/40 flex h-auto w-full items-center gap-2 rounded-lg border px-6 py-3">
            <input
              type="text"
              className="text-secondary-content/60 w-full bg-transparent text-[16px] leading-[140%] font-medium outline-none"
              placeholder="Enter property name"
            />
          </div> */}
          <div className="flex h-auto w-full flex-row gap-4">
            <div className="border-secondary-content/60 bg-primary/40 flex h-auto w-full items-center gap-2 rounded-lg border px-6 py-3">
              <input
                {...register('reference')}
                type="text"
                className="text-secondary-content/60 w-full bg-transparent text-[16px] leading-[140%] font-medium outline-none"
                placeholder="Property reference"
              />
            </div>

            <div className="border-secondary-content/60 bg-primary/40 flex h-auto w-full items-center gap-2 rounded-lg border px-6 py-3">
              <input
                type="number"
                {...register('value')}
                className="text-secondary-content/60 w-full bg-transparent text-[16px] leading-[140%] font-medium outline-none"
                placeholder="£ Property value"
              />
            </div>
          </div>
          <div className="flex h-auto w-full flex-row gap-4">
            <div className="flex-1">
              {errors.reference && (
                <p className="text-danger text-sm">{errors.reference.message}</p>
              )}
            </div>

            <div className="flex-1">
              {errors.value && <p className="text-danger text-sm">{errors.value.message}</p>}
            </div>
          </div>
          <div className="flex h-auto w-full flex-row gap-4">
            <div className="relative w-full">
              <select
                {...register('type')}
                className="border-secondary-content/60 bg-primary/40 text-secondary-content/60 w-full appearance-none rounded-lg border px-6 py-3 text-[16px] leading-[140%] font-medium outline-none"
                defaultValue="">
                <option value="" disabled>
                  Property type
                </option>

                {propertyTypes.map((type) => (
                  <option key={type.value} value={type.value} className="text-primary-content">
                    {type.name}
                  </option>
                ))}
              </select>

              <ChevronDynamicIcon className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2" />
            </div>

            <div className="relative w-full">
              <select
                {...register('access')}
                className="border-secondary-content/60 bg-primary/40 text-secondary-content/60 w-full appearance-none rounded-lg border px-6 py-3 text-[16px] leading-[140%] font-medium outline-none"
                defaultValue="">
                <option value="" disabled>
                  Property access
                </option>

                {accessTypes.map((type) => (
                  <option key={type.value} value={type.value} className="text-primary-content">
                    {type.name}
                  </option>
                ))}
              </select>
              <ChevronDynamicIcon className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2" />
            </div>
          </div>
          <div className="flex h-auto w-full flex-row gap-4">
            <div className="flex-1">
              {errors.type && <p className="text-danger text-sm">{errors.type.message}</p>}
            </div>

            <div className="flex-1">
              {errors.access && <p className="text-danger text-sm">{errors.access.message}</p>}
            </div>
          </div>

          <div className="flex h-auto w-full max-w-[654px] gap-4">
            <div
              onClick={() => setValue('status', 'sale')}
              className={` ${selectedStatus === 'sale' ? 'bg-success' : 'bg-primary/40'} border-secondary-content/60 /* <-- center horizontally */ flex h-12 w-full max-w-[319px] cursor-pointer items-center justify-center gap-2.5 rounded-lg border px-6 py-3`}>
              <TagIcon
                strokeColor={selectedStatus === 'sale' ? '#151B38' : '#404059'}
                className="h-5 w-5"
              />

              <span
                className={` ${selectedStatus === 'sale' ? 'text-primary-content' : 'text-secondary-content/60'} text-[16px] leading-[140%] font-medium`}>
                Sell
              </span>
            </div>

            <div
              onClick={() => setValue('status', 'let')}
              className={`${selectedStatus === 'let' ? 'bg-success' : 'bg-primary/40'} border-secondary-content/60 flex h-12 w-full max-w-[319px] cursor-pointer items-center justify-center gap-2.5 rounded-lg border px-6 py-3`}>
              <FlagIcon
                fillColor={selectedStatus === 'let' ? '#151B38' : '#404059'}
                className="h-5 w-5"
              />

              <span
                className={`${selectedStatus === 'let' ? 'text-primary-content' : 'text-secondary-content/60'} text-[16px] leading-[140%] font-medium`}>
                Let
              </span>
            </div>
          </div>

          <div className="flex h-auto w-full flex-row gap-4">
            <div className="border-secondary-content/60 bg-primary/40 flex h-auto w-full items-center gap-2 rounded-lg border py-3 pl-6">
              <input
                {...register('dimension')}
                type="number"
                className="text-secondary-content/60 w-full bg-transparent text-[16px] leading-[140%] font-medium outline-none"
                placeholder="Dimension"
              />
            </div>

            <div className="border-secondary-content/60 bg-primary/40 flex h-auto w-full items-center gap-2 rounded-lg border py-3 pl-6">
              <input
                type="number"
                {...register('bedrooms')}
                className="text-secondary-content/60 w-full bg-transparent text-[16px] leading-[140%] font-medium outline-none"
                placeholder="No. bedrooms"
              />
            </div>
            <div className="border-secondary-content/60 bg-primary/40 flex h-auto w-full items-center gap-2 rounded-lg border py-3 pl-4">
              <input
                type="number"
                {...register('bathrooms')}
                className="text-secondary-content/60 w-full bg-transparent text-[16px] leading-[140%] font-medium outline-none"
                placeholder="No. bathrooms"
              />
            </div>
            <div className="border-secondary-content/60 bg-primary/40 flex h-auto w-full items-center gap-2 rounded-lg border py-3 pl-6">
              <input
                type="number"
                {...register('floors')}
                className="text-secondary-content/60 w-full bg-transparent text-[16px] leading-[140%] font-medium outline-none"
                placeholder="No. floors"
              />
            </div>
          </div>
          <div className="flex h-auto w-full flex-row gap-4">
            <div className="flex-1">
              {errors.dimension && (
                <p className="text-danger text-sm">{errors.dimension.message}</p>
              )}
            </div>
            <div className="flex-1">
              {errors.bedrooms && <p className="text-danger text-sm">{errors.bedrooms.message}</p>}
            </div>
            <div className="flex-1">
              {errors.bathrooms && (
                <p className="text-danger text-sm">{errors.bathrooms.message}</p>
              )}
            </div>
            <div className="flex-1">
              {errors.floors && <p className="text-danger text-sm">{errors.floors.message}</p>}
            </div>
          </div>
          <div className="flex h-auto w-full max-w-[654px] gap-4">
            <div
              onClick={() => toggleFeature('parking')}
              className={` ${current?.parking ? 'bg-warning/80' : 'bg-primary/40'} border-secondary-content/60 /* <-- center horizontally */ flex h-12 w-full max-w-[319px] cursor-pointer items-center justify-center gap-2.5 rounded-lg border px-6 py-3`}>
              <ParkingIcon
                fillColor={current?.parking ? '#151B38' : '#404059'}
                className="h-5 w-5"
              />

              <span
                className={` ${current?.parking ? 'text-primary-content' : 'text-secondary-content/60'} text-[16px] leading-[140%] font-medium`}>
                Parking
              </span>
            </div>

            <div
              onClick={() => toggleFeature('garden')}
              className={`${current?.garden ? 'bg-accent/80' : 'bg-primary/40'} border-secondary-content/60 flex h-12 w-full max-w-[319px] cursor-pointer items-center justify-center gap-2.5 rounded-lg border px-6 py-3`}>
              <FlowerIcon fillColor={current?.garden ? '#151B38' : '#404059'} className="h-5 w-5" />

              <span
                className={`${current?.garden ? 'text-primary-content' : 'text-secondary-content/60'} text-[16px] leading-[140%] font-medium`}>
                Garden
              </span>
            </div>
            <div
              onClick={() => toggleFeature('garage')}
              className={`${current?.garage ? 'bg-secondary-content/40' : 'bg-primary/40'} border-secondary-content/60 flex h-12 w-full max-w-[319px] cursor-pointer items-center justify-center gap-2.5 rounded-lg border px-6 py-3`}>
              <GarageIcon fillColor={current?.garage ? '#151B38' : '#404059'} className="h-5 w-5" />

              <span
                className={`${current?.garage ? 'text-primary-content' : 'text-secondary-content/60'} text-[16px] leading-[140%] font-medium`}>
                Garage
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-[653px] flex-col items-center justify-center gap-2.5">
          <button
            type="submit"
            className={`${isSubmitting ? 'bg-primary-content/40' : 'bg-primary-content'} flex w-[207px] cursor-pointer items-center justify-center gap-3 rounded-md px-6 py-4`}>
            <span className="text-[16px] leading-[140%] font-bold tracking-[0.04em] text-white">
              {isSubmitting ? 'Adding Property...' : 'Add Property'}
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default index
