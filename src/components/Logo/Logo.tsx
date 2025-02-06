'use client'

import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  light?: boolean
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="VASTEL CREDENCE"
      width={687}
      height={261}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx(
        // 'max-w-[9.375rem] w-[full] h-[96px]',
        className,
      )}
      src="/images/logos/Vastel LS org.png"
    />
  )
}
