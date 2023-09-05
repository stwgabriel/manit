import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

// Models
import { Team as TeamModel } from 'src/models/user'

// Components
import Header from 'src/components/global/layout/Header'
import Button from 'src/components/global/standard/Button'
import TeamHeader from 'src/components/global/custom/TeamHeader'
import ProcessCard from 'src/components/global/custom/ProcessCard'
import ProcessesList from 'src/components/global/custom/ProcessesList'
import ContentContainer from 'src/components/global/layout/ContentContainer'

// Styles
import DashboardContainer from 'src/styles/pages/dashboard'

function Team() {

  const { query } = useRouter()

  // States
  const [team, setTeam] = useState({} as TeamModel)

  useEffect(() => {

    (async () => {
      const teamData = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/teams/${query.id}`)
      ).json()

      setTeam(teamData)
    })()
  }, [query])

  return (
    <DashboardContainer>

      <Header />

      <Button href="/dashboard">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
          <g clipPath="url(#clip0_3_4)">
            <path d="M6.66665 11.8334L1.33331 6.50008L6.66665 1.16675" stroke="black" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_3_4">
              <rect width="8" height="12.4444" fill="white" transform="translate(0 0.277832)" />
            </clipPath>
          </defs>
        </svg>
        Voltar
      </Button>

      <ContentContainer>

        <TeamHeader
          name={team.name}
          members={team.users}
        />

        <ProcessesList>
          {team.processes?.length > 0 ? team.processes.map(({ id, name, stage }) => (
            <ProcessCard
              key={id}
              name={name}
              stage={stage}
            />
          )) : 'Nenhum processo criado'}
        </ProcessesList>
      </ContentContainer>
    </DashboardContainer>
  )
}
export default Team
