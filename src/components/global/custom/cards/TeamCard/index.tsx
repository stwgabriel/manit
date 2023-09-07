import Link from 'next/link'

// Styles
import TeamCardContainer, {
  TeamMember, TeamMembersList, TeamProcess, TeamProcessesList,
} from './TeamCardStyles'

function TeamCard({
  id,
  name,
  processes,
  members,
}) {
  console.log(members)
  return (
    <TeamCardContainer>
      <Link href={`/dashboard/team/${id}`}>
        <h3>{name}</h3>
      </Link>

      <TeamProcessesList>
        {processes?.length > 0
          ? processes.slice(0, 3).map(({ id: processId, name: processName, stage }) => (
            <TeamProcess
              key={processId}
              color={stage.colort}
            >
              <span>{processName}</span>
            </TeamProcess>
          )) : (
            <p>Nenhum processo criado</p>
          )}
        <br />
        {(processes.length - 3) > 0 ? (
          <p>
            +
            {' '}
            {processes.length - 3}
            {' '}
            processos
          </p>
        ) : ''}
      </TeamProcessesList>

      <TeamMembersList>
        {members?.length > 0 && members.map(({ user }) => (
          <TeamMember key={user.id}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M5.68422 6.80691C7.23449 6.80691 8.49123 5.55016 8.49123 3.99989C8.49123 2.44962 7.23449 1.19287 5.68422 1.19287C4.13394 1.19287 2.8772 2.44962 2.8772 3.99989C2.8772 5.55016 4.13394 6.80691 5.68422 6.80691Z"
                stroke="#222222"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.1754 11.2984C10.1754 10.1072 9.70227 8.96485 8.86 8.12258C8.01773 7.28031 6.87537 6.80713 5.68422 6.80713C4.49307 6.80713 3.35071 7.28031 2.50844 8.12258C1.66617 8.96485 1.19299 10.1072 1.19299 11.2984"
                stroke="#222222"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{user.name}</span>
          </TeamMember>
        ))}
      </TeamMembersList>
    </TeamCardContainer>
  )
}
export default TeamCard
