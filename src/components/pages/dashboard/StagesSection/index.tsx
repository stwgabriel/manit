// Store
import { useAppSelector } from 'src/store/reducers'

// Components
import StageList from 'src/components/pages/dashboard/StageList'
import StagesSectionContainer from './StagesSectionStyles'

function StagesSection() {

  const user = useAppSelector(state => state.user)

  return (
    <StagesSectionContainer>
      {user.stages?.length > 0 ? user.stages.map(({
        id, name, color, processes,
      }) => (
        <StageList
          key={id}
          name={name}
          color={color}
          processes={processes}
        />
      )) : ''}
    </StagesSectionContainer>
  )
}

export default StagesSection
