import { MouseEvent, ReactNode } from 'react'

// Styles
import Link from 'next/link'
import ButtonStyles from './ButtonStyles'

type ButtonProps = {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  href?: string
  variant?: string
  onClick?: (event: MouseEvent<unknown>) => Promise<void>
}

function Button({
  children,
  type,
  href,
  variant,
  onClick,
  ...props
}: ButtonProps) {

  return !href ? (
    <ButtonStyles variant={variant}>
      <button
        onClick={(event) => (onClick ? onClick(event) : '')}
        // eslint-disable-next-line react/button-has-type
        type={type || 'button'}
        {...props}
      >
        {children}
      </button>
    </ButtonStyles>
  ) : (
    <ButtonStyles variant={variant}>
      <Link
        href={href}
        {...props}
      >
        {children}
      </Link>
    </ButtonStyles>
  )
}

export default Button
