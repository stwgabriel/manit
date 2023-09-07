import styled from 'styled-components'

const ProcessSectionContainer = styled.section`

  display: flex;
  flex-direction: column;
  gap: 2rem;
   width: 100%;

  &>div {
    color: ${({ theme }) => theme.colors.black};
     display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100%;
  }

`

export default ProcessSectionContainer
