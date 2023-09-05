import { SubProcess, Stage } from 'src/models/user'
import { useState } from 'react'
import ProcessCardContainer, { StageButton, SubProcessesContainer } from './ProcessCardStyles'

type ProcessCardProps = {
  name: string
  stage: Stage
  subProcesses: SubProcess[]
}

function ProcessCard({
  name,
  stage,
  subProcesses,
}: ProcessCardProps) {

  const [showSubProcesses, setShowSubProcesses] = useState(false)

  return (
    <ProcessCardContainer>

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
          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1.82352 8H14.1765" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 1.82349V14.1764" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11.2504 2.13342C11.4165 1.93714 11.622 1.77737 11.8537 1.6643C12.0854 1.55123 12.3383 1.48733 12.5963 1.47669C12.8543 1.46604 13.1116 1.50888 13.352 1.60248C13.5924 1.69607 13.8105 1.83836 13.9924 2.02028C14.1743 2.2022 14.3161 2.41976 14.4086 2.6591C14.5012 2.89843 14.5425 3.15429 14.53 3.41036C14.5174 3.66643 14.4513 3.9171 14.3358 4.1464C14.2203 4.37569 14.058 4.57857 13.8591 4.74211L5.05479 13.5465L1.46783 14.5247L2.4461 10.9378L11.2504 2.13342Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </button>

      {(subProcesses?.length > 0 && showSubProcesses) ? (
        <SubProcessesContainer>
          <div className="sub-processes-wrapper">
            {subProcesses.map(subProcess => (
              <button
                key={subProcess.id}
                type="button"
              >
                <div>
                  <StageButton
                    stageColor={subProcess.stage?.color}
                    type="button"
                  >
                    {subProcess.stage?.name}
                  </StageButton>
                  <h3>{subProcess.name}</h3>
                </div>

                <div className="actions" />
              </button>
            ))}
          </div>

        </SubProcessesContainer>
      ) : ''}
    </ProcessCardContainer>
  )
}
export default ProcessCard
