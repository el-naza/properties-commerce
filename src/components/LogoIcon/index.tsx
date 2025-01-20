'use client'

import clsx from 'clsx'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  isDark?: boolean
}

export default function LogoIcon(props: Props) {
  const { loading: loadingFromProps, priority: priorityFromProps, className, isDark } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
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
      src="/logos/Vastel icon.png"
    />
  )
}
