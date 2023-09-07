import { useState } from 'react'

// Models
import { SubProcess, Stage, Process } from 'src/models/user'

// Conponents
import ProcessModal from 'src/components/global/custom/modals/ProcessModal'

// Styles
import ProcessCardContainer, { StageButton, SubProcessesContainer } from './ProcessCardStyles'

type ProcessCardProps = {
  id?: string
  name: string
  stage: Stage
  teamId: string
  subProcesses: SubProcess[]
  transparent?: boolean
}

function ProcessCard({
  id,
  name,
  stage,
  teamId,
  subProcesses,
  transparent,
}: ProcessCardProps) {

  const [showSubProcesses, setShowSubProcesses] = useState(false)
  const [renderNewProcessModal, setRenderNewProcessModal] = useState(false)
  const [renderEditProcessModal, setRenderEditProcessModal] = useState(false)
  const [renderEditSubProcessModal, setRenderEditSubProcessModal] = useState(false)

  // Handlers
  function onRenderNewProcessModal() {
    setRenderNewProcessModal(preRenderNewProcessModal => !preRenderNewProcessModal)
  }
  function onRenderEditProcessModal() {
    setRenderEditProcessModal(preRenderEditProcessModal => !preRenderEditProcessModal)
  }
  function onRenderEditSubProcessModal() {
    setRenderEditSubProcessModal(preRenderEditProcessModal => !preRenderEditProcessModal)
  }

  return (
    <ProcessCardContainer transparent={transparent}>
      {renderNewProcessModal ? (
        <ProcessModal
          title="Adicionar sub processo"
          processId={id}
          teamId={teamId}
          onCloseModal={() => onRenderNewProcessModal()}
        />
      ) : null}
      {renderEditProcessModal ? (
        <ProcessModal
          title="Adicionar sub processo"
          teamId={teamId}
          userProcess={{
            id,
            name,
            stage,
            teamId,
          } as Process}
          onCloseModal={() => onRenderEditProcessModal()}
        />
      ) : null}

      <button
        type="button"
        onClick={event => {
          event.preventDefault()

          setShowSubProcesses(prevShowSubProcesses => !prevShowSubProcesses)
        }}
      >
        <div>
          <StageButton
            stageColor={stage?.color}
            type="button"
          >
            {stage?.name}
          </StageButton>
          <h3>{name}</h3>
        </div>

        <div className="actions">
          <button
            type="button"
            onClick={() => onRenderNewProcessModal()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1.82352 8H14.1765" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 1.82349V14.1764" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => onRenderEditProcessModal()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11.2504 2.13342C11.4165 1.93714 11.622 1.77737 11.8537 1.6643C12.0854 1.55123 12.3383 1.48733 12.5963 1.47669C12.8543 1.46604 13.1116 1.50888 13.352 1.60248C13.5924 1.69607 13.8105 1.83836 13.9924 2.02028C14.1743 2.2022 14.3161 2.41976 14.4086 2.6591C14.5012 2.89843 14.5425 3.15429 14.53 3.41036C14.5174 3.66643 14.4513 3.9171 14.3358 4.1464C14.2203 4.37569 14.058 4.57857 13.8591 4.74211L5.05479 13.5465L1.46783 14.5247L2.4461 10.9378L11.2504 2.13342Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </button>

      {(subProcesses?.length > 0 && showSubProcesses) ? (
        <SubProcessesContainer>
          <div className="sub-processes-wrapper">
            {subProcesses.map(({
              id: subProcessId,
              name: subProcessesName,
              stage: subProcessesStage,
            }) => (
              <div
                key={subProcessId}
                className="sub-process"
              >
                {renderEditSubProcessModal ? (
                  <ProcessModal
                    title="Editar sub processo"
                    teamId={teamId}
                    processId={id}
                    userProcess={{
                      id: subProcessId,
                      name: subProcessesName,
                      stage: subProcessesStage,
                    } as Process}
                    onCloseModal={() => onRenderEditSubProcessModal()}
                  />
                ) : null}
                <div>
                  <StageButton
                    stageColor={stage?.color}
                    type="button"
                  >
                    {subProcessesStage?.name}
                  </StageButton>
                  <h3>{subProcessesName}</h3>
                </div>

                <div className="actions">
                  <button
                    type="button"
                    onClick={() => onRenderEditSubProcessModal()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M11.2504 2.13342C11.4165 1.93714 11.622 1.77737 11.8537 1.6643C12.0854 1.55123 12.3383 1.48733 12.5963 1.47669C12.8543 1.46604 13.1116 1.50888 13.352 1.60248C13.5924 1.69607 13.8105 1.83836 13.9924 2.02028C14.1743 2.2022 14.3161 2.41976 14.4086 2.6591C14.5012 2.89843 14.5425 3.15429 14.53 3.41036C14.5174 3.66643 14.4513 3.9171 14.3358 4.1464C14.2203 4.37569 14.058 4.57857 13.8591 4.74211L5.05479 13.5465L1.46783 14.5247L2.4461 10.9378L11.2504 2.13342Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </SubProcessesContainer>
      ) : ''}
    </ProcessCardContainer>
  )
}
export default ProcessCard
