import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

// Models
import { Team as TeamModel } from 'src/models/user'

// Components
import { Header } from 'src/components/global/layout'
import { Button } from 'src/components/global/standard'
import ContentContainer from 'src/components/global/layout/ContentContainer'
import { ProcessCard, TeamHeader, ProcessesList } from 'src/components/global/custom'

// Styles
import DashboardContainer from 'src/styles/pages/dashboard'

function Team() {
  const token = localStorage.getItem('m-token')

  const { query } = useRouter()

  // States
  const [team, setTeam] = useState({} as TeamModel)

  useEffect(() => {

    (async () => {
      const teamData = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/teams/${query.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).json() as TeamModel

      setTeam(teamData)
    })()
  }, [query, token])

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
          teamId={team.id}
          members={team.users}
        />

        <ProcessesList>
          {team.processes?.length > 0 ? team.processes.map(({
            id, name, stage, subProcesses,
          }) => (
            <ProcessCard
              key={id}
              name={name}
              teamId={team.id}
              stage={stage}
              subProcesses={subProcesses}
            />
          )) : 'Nenhum processo criado'}
        </ProcessesList>
      </ContentContainer>
    </DashboardContainer>
  )
}
export default Team
