import { useEffect, useRef } from 'react'

// Store
import { setUser } from 'src/store/slices/userSlice'
import { useAppDispatch, useAppSelector } from 'src/store/reducers'

// Components
import TeamCard from 'src/components/global/custom/cards/TeamCard'

// Styles
import TeamsSectionContainer from './TeamsSectionStyles'

function TeamsSection() {
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
    <TeamsSectionContainer>
      {user.teams?.length > 0 && (
        user.teams.map(({
          id, name, processes, users,
        }) => (
          <TeamCard
            key={id}
            id={id}
            name={name}
            processes={processes}
            members={users}
          />
        ))
      )}
    </TeamsSectionContainer>
  )
}

export default TeamsSection
