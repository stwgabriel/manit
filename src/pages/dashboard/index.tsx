import { useEffect, useState } from 'react'

// Store
import { setUser } from 'src/store/slices/userSlice'
import { useAppDispatch, useAppSelector } from 'src/store/reducers'

// Components
import Header from 'src/components/global/layout/Header'
import SliderFilter from 'src/components/global/custom/SliderFilter'
import TeamsSection from 'src/components/pages/dashboard/TeamsSection'
import StagesSection from 'src/components/pages/dashboard/StagesSection'
import ProcessesSection from 'src/components/pages/dashboard/ProcessesSection'
import ContentContainer from 'src/components/global/layout/ContentContainer'

// Styles
import DashboardContainer, {
  GrettingsContainer,
  SectionContainer,
  SectionsWrapper,
} from 'src/styles/pages/dashboard'

function Dashboard() {
  const dispatch = useAppDispatch()

  // Store
  const user = useAppSelector((state) => state.user)

  // States
  const [activePageSection, setActivePageSection] = useState(0)

  const sections = [
    { name: 'Times', component: <TeamsSection /> },
    { name: 'Processos', component: <ProcessesSection /> },
    { name: 'Etapas', component: <StagesSection /> },
  ]

  useEffect(() => {
    (async () => {
      try {
        const userData = await (
          await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/30dc3589-75a9-431a-aa04-49559496cca9`,
          )
        ).json()

        dispatch(setUser(userData))
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <DashboardContainer>
      <Header />

      <ContentContainer>
        <GrettingsContainer>
          <h2>{`Olá ${user.name} 👋`}</h2>
          <span>Muito bom ter você aqui denovo!</span>
        </GrettingsContainer>

        <SectionsWrapper>
          <SliderFilter
            items={sections}
            defaultActivePage={activePageSection}
            onUpdate={activeIndex => setActivePageSection(activeIndex)}
          />

          <SectionContainer>
            {sections[activePageSection].component}
          </SectionContainer>
        </SectionsWrapper>
      </ContentContainer>
    </DashboardContainer>
  )
}

export default Dashboard
