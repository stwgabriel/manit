import styled from 'styled-components'

type StageButtonProps = {
  stageColor: string
}
type ProcessCardContainerProps = {
  transparent: boolean
}

const ProcessCardContainer = styled.div<ProcessCardContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > button, & .sub-process {
    background: ${({ transparent, theme }) => (transparent ? 'transparent' : theme.colors.white)};
    border: none;
    border-radius: 5px;

    display: flex;
    padding: 0.5rem 1rem;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }

  div:first-child {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 500;
  }

  .actions {
    display: flex;
    border-radius: 0.5rem;
    align-items: center;
    gap: 0.5rem;

    button {
      background: transparent;
      border: none;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 3rem;
      height: 3rem;

      overflow: hidden;
      padding: 0.5rem;

      &:hover {
        background: #0002;
      }
    }
  }
`

const StageButton = styled.button<StageButtonProps>`
  background: ${({ stageColor }) => stageColor};
  font-size: 1.5rem;
  border-radius: 0.5rem;
  border: none;
  color: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  overflow: hidden;

  width: 8rem;

  padding: 0.3rem 1rem;
`

const SubProcessesContainer = styled.div`
  background: #f2f2f2;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;

  .sub-processes-wrapper {
    background: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    border-radius: .5rem;
    overflow: hidden;
    width: 100%;
  }
`

export default ProcessCardContainer
export { StageButton, SubProcessesContainer }
