type BreadcrumbProps = {
  title: string
  description?: string
}

const Breadcrumb = ({ title, description }: BreadcrumbProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h4 className="text-primary-content text-[24px] leading-[120%] font-bold tracking-[0px]">
        {title}
      </h4>

      {description && (
        <p className="text-secondary-content text-[16px] leading-[140%] font-medium tracking-[0px]">
          {description}
        </p>
      )}
    </div>
  )
}

export default Breadcrumb
