import { useState } from 'react'

// Store
import { useAppSelector } from 'src/store/reducers'

// Components
import Header from 'src/components/global/layout/Header'
import SliderFilter from 'src/components/global/custom/SliderFilter'
import TeamsSection from 'src/components/pages/dashboard/TeamsSection'
import StagesSection from 'src/components/pages/dashboard/StagesSection'
import ContentContainer from 'src/components/global/layout/ContentContainer'
import ProcessesSection from 'src/components/pages/dashboard/ProcessesSection'

// Styles
import DashboardContainer, {
  GrettingsContainer,
  SectionContainer,
  SectionWrapper,
} from 'src/styles/pages/dashboard'

function Dashboard() {

  // Store
  const user = useAppSelector((state) => state.user)

  // States
  const [activePagediv, setActivePagediv] = useState(0)

  const divs = [
    { name: 'Times', component: <TeamsSection /> },
    { name: 'Processos', component: <ProcessesSection /> },
    { name: 'Etapas', component: <StagesSection /> },
  ]

  return (
    <DashboardContainer>
      <Header />

      <ContentContainer>

        <GrettingsContainer>
          <h2>{`Olá ${user?.name} 👋`}</h2>
          <span>Muito bom ter você aqui denovo!</span>
        </GrettingsContainer>

        <SectionWrapper>
          <SliderFilter
            items={divs}
            defaultActivePage={activePagediv}
            onUpdate={activeIndex => setActivePagediv(activeIndex)}
          />

          <SectionContainer>
            {divs[activePagediv].component}
          </SectionContainer>
        </SectionWrapper>
      </ContentContainer>
    </DashboardContainer>
  )
}

export default Dashboard
