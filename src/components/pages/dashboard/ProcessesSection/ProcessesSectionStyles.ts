import styled from 'styled-components'

const ProcessSectionContainer = styled.section`

  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    color: ${({ theme }) => theme.colors.black};
     display: flex;
    flex-direction: column;
    gap: 2rem;
  }

`

export default ProcessSectionContainer
