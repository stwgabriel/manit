import {
  ReactNode, useEffect, useRef, useState,
} from 'react'
import { createPortal } from 'react-dom'

// Styles
import ModalContainer, { ModalOverlay } from './ModalStyles'

type ModalProps = {
  title: string
  onCloseModal: () => void
  children: ReactNode
}

function Modal({
  title,
  onCloseModal,
  children,
}: ModalProps) {

  const rootElement = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  // Effects
  useEffect(() => {
    if (typeof document === 'object') {
      rootElement.current = document.getElementById('modal-root')

      setMounted(true)
    }
  }, [])

  return (mounted && rootElement.current) ? createPortal(
    <ModalOverlay opacity={30}>
      <ModalContainer>
        <header>
          <h4>{title}</h4>

          <button
            type="button"
            onClick={() => onCloseModal()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
              <g clipPath="url(#clip0_7_532)">
                <path d="M11.1429 1.78564L0.857147 12.0714" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.857147 1.78564L11.1429 12.0714" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_7_532">
                  <rect width="12" height="12.8571" fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </header>
        <main>
          {children}
        </main>
      </ModalContainer>
    </ModalOverlay>,
    rootElement.current,
  ) : null
}
export default Modal
