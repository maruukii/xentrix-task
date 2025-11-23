import {
  MagnifyingGlassIcon,
  HomeIcon,
  ArrowLeftIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'
import Button from '@/components/ui/ActionButton'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="relative mb-8 flex items-center justify-center">
          <div className="text-primary-content/10 mr-4 text-[120px] leading-none font-bold">4</div>

          <div className="relative">
            <div
              className="from-primary-content/20 to-primary-content/5 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br"
              aria-hidden="true">
              <MagnifyingGlassIcon className="text-primary-content h-12 w-12" strokeWidth={1.5} />
            </div>
            <div
              className="bg-primary-content absolute -top-1 -right-1 h-6 w-6 animate-pulse rounded-full"
              aria-hidden="true"
            />
          </div>

          <div className="text-primary-content/10 ml-4 text-[120px] leading-none font-bold">4</div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h1 className="text-highlight-content text-3xl font-bold tracking-tight">
            404 - Not Found
          </h1>
          <p className="text-secondary-content text-muted-foreground">
            The page you are looking for does not exist.
          </p>
        </div>

        {/* Navigation Options */}
        <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
          <Button
            label="Go Back"
            className="border-border hover:bg-muted bg-primary-content/60 flex items-center gap-2 rounded-lg p-2"
            onClick={() => window.history.back()}
            icon={<ArrowLeftIcon className="h-4 w-4" />}
          />
          <Link to="/">
            <Button
              className="bg-primary-content flex items-center gap-2 rounded-lg p-2"
              icon={<HomeIcon className="h-4 w-4" />}
              label="Go to Home"
            />
          </Link>
          <Link to="#">
            <Button
              className="border-border hover:bg-muted bg-secondary-content flex items-center gap-2 rounded-lg p-2"
              label="Contact Support"
              icon={<QuestionMarkCircleIcon className="h-4 w-4" />}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default NotFoundPage
