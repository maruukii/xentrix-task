import type { FC } from 'react'

const ActionButton: FC<{
  icon?: React.ReactNode
  label?: string
  className?: string
  labelClassName?: string
  onClick?: () => void
  disabled?: boolean
}> = ({ icon, label, className, labelClassName, onClick, disabled }) => {
  return (
    <button className={className} title={label} onClick={onClick} disabled={disabled}>
      {icon}
      <span className={labelClassName}>{label}</span>
    </button>
  )
}
export default ActionButton
