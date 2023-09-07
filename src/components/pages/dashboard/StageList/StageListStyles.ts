import styled from 'styled-components'

type StageListContainerProps = {
  color: string
}

const StageListContainer = styled.div<StageListContainerProps>`

  background: ${({ color }) => color}40;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;

  width: 100%;

  padding: 2rem;

  h2 {
    font-size: 2.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`

export default StageListContainer
