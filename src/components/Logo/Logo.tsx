import clsx from 'clsx'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  light?: boolean
  href?: string
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className, light, href } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  if (href) {
    return (
      <a href={href}>
        <img
          alt="Payload Logo"
          width={193}
          height={34}
          loading={loading}
          fetchPriority={priority}
          decoding="async"
          className={clsx('h-12 md:h-14 w-auto object-contain', className, {
            'brightness-0 invert': light,
          })}
          src="https://crossbridgeint.lovable.app/assets/logo-BlBMAqw_.png"
        />
      </a>
    )
  }

  return (
    /* eslint-disable @next/next/no-img-element */

    <img
      alt="Payload Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('h-12 md:h-14 w-auto object-contain', className, {
        'brightness-0 invert': light,
      })}
      src="https://crossbridgeint.lovable.app/assets/logo-BlBMAqw_.png"
    />
  )
}
