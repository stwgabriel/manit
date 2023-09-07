import { LogoStyles } from 'src/components/global/layout'

// Styles
import LoadingContainer from './LoadingStyles'

function Loading() {

  return (
    <LoadingContainer>
      <LogoStyles>
        man
        <span>it</span>
      </LogoStyles>
      <span>Loading ..</span>
    </LoadingContainer>
  )
}
export default Loading
