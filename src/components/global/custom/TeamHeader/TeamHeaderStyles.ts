import styled from 'styled-components'

const TeamHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  h2 {
    font-size: 2.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .actions {
    display: flex;

    button {
      border: none;
      background: transparent;
      border-radius: 50%;

      display: flex;
      padding: 1rem;

      &:hover {
        background: #0002;
      }
    }
  }
`

const MembersList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const MemberCard = styled.li`
  border-radius: 31.25rem;
  background: #DADADA;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  padding: .5rem 1rem;
`

export default TeamHeaderContainer
export { TitleWrapper, MembersList, MemberCard }
