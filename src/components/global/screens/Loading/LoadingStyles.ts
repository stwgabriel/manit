import { DM_Sans } from 'next/font/google'

import styled from 'styled-components'

const DMSans = DM_Sans({ subsets: ['latin'], weight: ['500'] })

const LoadingContainer = styled.div`

  background: ${({ theme }) => theme.colors.primary.main};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  position:fixed;
  inset: 0;

  width: 100%;
  height: 100vh;

  span {
    font-family: ${DMSans.style.fontFamily};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.3rem;
  }
`

export default LoadingContainer
