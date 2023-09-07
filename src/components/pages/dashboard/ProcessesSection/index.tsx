import { useEffect, useRef } from 'react'

// Store
import { setUser } from 'src/store/slices/userSlice'
import { useAppDispatch, useAppSelector } from 'src/store/reducers'

// Components
import {
  ProcessCard,
  TeamHeader,
  ProcessesList,
} from 'src/components/global/custom'

// Styles
import ProcessSectionContainer from './ProcessesSectionStyles'

function Processdiv() {
  const dispatch = useAppDispatch()

  const user = useAppSelector(state => state.user)

  const token = useRef(null)

  // Effects
  useEffect(() => {
    if (!user?.teams) {
      (async () => {
        token.current = localStorage?.getItem('m-token') || ''

        const userTeams = await (
          await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/teams`, {
            headers: {
              Authorization: `Bearer ${token.current}`,
            },
          })
        ).json()

        dispatch(
          setUser({
            ...user,
            teams: userTeams,
          }),
        )
      })()
    }
  }, [user, dispatch])

  return (
    <ProcessSectionContainer>
      {user.teams?.length > 0 && (
        user.teams.map(team => (
          <div key={team.id}>
            <TeamHeader
              name={team.name}
              teamId={team.id}
              members={team.users}
            />

            <ProcessesList>
              {team.processes.length > 0 ? (
                team.processes.map(({
                  id, name, stage, subProcesses,
                }) => (
                  <ProcessCard
                    key={id}
                    id={id}
                    name={name}
                    stage={stage}
                    teamId={team.id}
                    subProcesses={subProcesses}
                  />
                ))
              ) : (
                <p>Nenhum processo criado</p>
              )}
            </ProcessesList>
            <hr />
          </div>
        ))
      )}
    </ProcessSectionContainer>
  )
}

export default Processdiv
