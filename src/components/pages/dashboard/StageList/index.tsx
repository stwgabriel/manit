// Models
import { Process } from 'src/models/user'

// Components
import { ProcessesList, ProcessCard } from 'src/components/global/custom'

// Styles
import StageListContainer from './StageListStyles'

type StageListProps = {
  name: string
  color: string
  processes: Process[]
}

function StageList({
  name,
  color,
  processes,
}: StageListProps) {

  return (
    <StageListContainer color={color}>
      <h2>{name}</h2>

      <ProcessesList>
        {processes.map(({
          id, name: processName, stage, subProcesses, teamId,
        }) => (
          <ProcessCard
            key={id}
            id={id}
            name={processName}
            stage={stage}
            teamId={teamId}
            subProcesses={subProcesses}
            transparent
          />
        ))}
      </ProcessesList>
    </StageListContainer>
  )
}

export default StageList
