import TeamHeaderContainer, { TitleWrapper, MembersList, MemberCard } from './TeamHeaderStyles'

type Member = {
  user: {
    id: string
    name: string
    email: string
  }
}

type TeamHeaderProps = {
  name: string
  members: Member[]
}

function TeamHeader({
  name,
  members,
}: TeamHeaderProps) {

  return (
    <TeamHeaderContainer>

      <TitleWrapper>
        <h2>{name}</h2>

        <div className="actions">
          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1.82352 8H14.1765" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 1.82349V14.1764" stroke="black" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11.2504 2.13342C11.4165 1.93714 11.622 1.77737 11.8537 1.6643C12.0854 1.55123 12.3383 1.48733 12.5963 1.47669C12.8543 1.46604 13.1116 1.50888 13.352 1.60248C13.5924 1.69607 13.8105 1.83836 13.9924 2.02028C14.1743 2.2022 14.3161 2.41976 14.4086 2.6591C14.5012 2.89843 14.5425 3.15429 14.53 3.41036C14.5174 3.66643 14.4513 3.9171 14.3358 4.1464C14.2203 4.37569 14.058 4.57857 13.8591 4.74211L5.05479 13.5465L1.46783 14.5247L2.4461 10.9378L11.2504 2.13342Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </TitleWrapper>

      <MembersList>
        {members?.length > 0 ? members?.map(member => (
          <MemberCard key={member.user.id}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M5.68422 6.80691C7.23449 6.80691 8.49123 5.55016 8.49123 3.99989C8.49123 2.44962 7.23449 1.19287 5.68422 1.19287C4.13394 1.19287 2.8772 2.44962 2.8772 3.99989C2.8772 5.55016 4.13394 6.80691 5.68422 6.80691Z" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.1754 11.2984C10.1754 10.1072 9.70227 8.96485 8.86 8.12258C8.01773 7.28031 6.87537 6.80713 5.68422 6.80713C4.49307 6.80713 3.35071 7.28031 2.50844 8.12258C1.66617 8.96485 1.19299 10.1072 1.19299 11.2984" stroke="#222222" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <p>{member.user.name}</p>
          </MemberCard>
        )) : ''}
      </MembersList>
    </TeamHeaderContainer>
  )
}

export default TeamHeader
