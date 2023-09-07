import styled from 'styled-components'

type ModalOverlayProps = {
  opacity: number
}

const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  justify-content: space-between;

  min-height: 20rem;
  width: 90vw;
  max-width: 45rem;

  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    h4 {
      font-size: 2.2rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    button {
      background: #0002;
      border: none;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 1rem;
    }
  }

  main {
    width: 100%;
    flex: 1;
  }
`

const ModalOverlay = styled.div<ModalOverlayProps>`
  background: rgba(0, 0, 0, calc(${({ opacity }) => opacity} / 100));
  pointer-events: all;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: max-content;
  min-height: 100%;

  overflow: auto;

  padding: 2rem;
`

export default ModalContainer
export { ModalOverlay }
