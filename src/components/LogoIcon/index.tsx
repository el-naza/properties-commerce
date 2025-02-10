'use client'

import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  isDark?: boolean
}

export default function LogoIcon(props: Props) {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <Image
      alt="VASTEL CREDENCE"
      width={890}
      height={1365}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx(
        'w-full h-full object-contain', // filter grayscale invert contrast-200 brightness-150',
        className,
      )}
      src="/images/logos/Vastel icon.png"
    />
  )
}
