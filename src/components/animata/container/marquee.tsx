import { cn } from '@/lib/utils/classNames' // Updated to import from the /lib/utils folder

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  vertical?: boolean
  repeat?: number
  reverse?: boolean
  pauseOnHover?: boolean
  applyMask?: boolean
  duration?: number
}

export default function Marquee({
  children,
  vertical = false,
  repeat = 5,
  pauseOnHover = false,
  reverse = false,
  className,
  applyMask = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`group relative flex items-center h-full w-full [--duration:70s] [--gap:12px] [gap:var(--gap)] ${
        vertical ? 'flex-col' : 'flex-row'
      } ${className}`}
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={`item-${index}`}
          className={`flex items-center shrink-0 [gap:var(--gap)] ${
            pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
          } ${reverse ? '[animation-direction:reverse]' : ''} ${
            vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee-horizontal flex-row'
          }`}
        >
          {children}
        </div>
      ))}
      {applyMask && (
        <div
          className={`pointer-events-none absolute inset-0 z-10 h-full w-full from-white/50 from-5% via-transparent via-50% to-white/50 to-95% dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50 ${
            vertical ? 'bg-gradient-to-b' : 'bg-gradient-to-r'
          }`}
        />
      )}
    </div>
  )
}
