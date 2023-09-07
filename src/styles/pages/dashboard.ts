import styled from 'styled-components'

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 2rem;

  flex: 1;
  min-height: 100%;
  height: fit-content;
  width: 100%;

  padding: 3rem 2rem 1rem;
  margin-bottom: 1rem;
`

const GrettingsContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 4.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  span {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

const SectionWrapper = styled.div`

  display: flex;
  flex: 1;
  align-self: stretch;
  flex-direction: column;
  gap: 1rem;
`

const SectionContainer = styled.div`
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 1rem 1rem 15px 0 rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: stretch;
  gap: 1.5rem;
  padding: 1.5rem;
`

export default Dashboard
export { GrettingsContainer, SectionWrapper, SectionContainer }
