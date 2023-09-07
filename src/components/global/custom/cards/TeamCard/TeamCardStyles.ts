import styled from 'styled-components'

const TeamCardContainer = styled.div`
  border-radius: 0.5rem;
  background: #f2f2f2;

  display: flex;
  width: 30rem;
  padding: 1.2rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  max-width: 40rem;

  h3 {
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`

const TeamProcessesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  align-self: stretch;
`

const TeamProcess = styled.li`
  border-radius: 0.25rem;
  background: #dadada;

  display: flex;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`

const TeamMembersList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  overflow: auto;
  flex-wrap: nowrap;
`

const TeamMember = styled.li`
border-radius: 50rem;
background: #DADADA;
display: flex;
padding: 0.5rem 1rem;
justify-content: center;
align-items: center;
gap: 0.5rem;
flex: none;

width: fit-content;
`

export default TeamCardContainer
export {
  TeamProcessesList, TeamProcess, TeamMembersList, TeamMember,
}
