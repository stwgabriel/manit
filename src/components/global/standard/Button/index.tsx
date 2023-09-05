import { ReactNode } from 'react'

// Styles
import Link from 'next/link'
import ButtonStyles from './ButtonStyles'

type ButtonProps = {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  href?: string
  onClick?: () => void
}

function Button({
  children,
  type,
  href,
  onClick,
  ...props
}: ButtonProps) {

  return !href ? (
    <ButtonStyles>
      <button
        onClick={onClick}
        // eslint-disable-next-line react/button-has-type
        type={type || 'button'}
        {...props}
      >
        {children}
      </button>
    </ButtonStyles>
  ) : (
    <ButtonStyles>
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
