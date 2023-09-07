import styled, { css } from 'styled-components'

type ButtonStylesProps = {
  variant: string
}

const ButtonStyles = styled.div<ButtonStylesProps>`
  button,
  a {
    background: ${({ theme }) => theme.colors.primary.light};
    border-radius: 1rem;
    border: none;
    color: ${({ theme }) => theme.colors.black};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    padding: 1rem 2rem;

    ${({ variant, theme }) => (
    variant === 'dangerous'
      ? css`
          background: ${theme.colors.danger};
        `
      : null
  )};

  }
`

export default ButtonStyles
