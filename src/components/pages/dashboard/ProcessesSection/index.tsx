import { useEffect } from 'react'

// Store
import { setUser } from 'src/store/slices/userSlice'
import { useAppDispatch, useAppSelector } from 'src/store/reducers'

// Components
import TeamHeader from 'src/components/global/custom/TeamHeader'
import ProcessCard from 'src/components/global/custom/ProcessCard'
import ProcessesList from 'src/components/global/custom/ProcessesList'

// Styles
import Link from 'next/link'
import ProcessSectionContainer from './ProcessesSectionStyles'

function ProcessSection() {
  const dispatch = useAppDispatch()

  const user = useAppSelector(state => state.user)

  // Effects
  useEffect(() => {
    (async () => {
      const userTeams = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/teams/user/${user.id}`)
      ).json()

      dispatch(setUser({
        ...user,
        teams: userTeams,
      }))
    })()
  }, [])

  return (
    <ProcessSectionContainer>
      {(user.teams?.length > 0) ? user.teams.map(team => (
        <Link
          key={team.id}
          href={`/dashboard/team/${team.id}`}
        >
          <TeamHeader
            key={team.id}
            name={team.name}
            members={team.users}
          />

          <ProcessesList>
            {team.processes.length > 0 ? (team.processes.map(
              ({ id, name, stage }) => (
                <ProcessCard
                  key={id}
                  name={name}
                  stage={stage}
                />
              ),
            )) : (
              <p>
                Nenhum processo encontrado
              </p>
            )}
          </ProcessesList>
          <hr />
        </Link>
      )) : (
        <div>Criar Time</div>
      )}

    </ProcessSectionContainer>
  )
}

export default ProcessSection
