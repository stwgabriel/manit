import styled from 'styled-components'

const AuthPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  width: 100%;
  height: 100%;

  h1 {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 4rem;
    font-family: 'Montserrat', sans-serif;
  }

  header {
    display: flex;
    flex-direction: column;
    p {
      a {
        font-style: normal;
        margin-left: 1rem;
      }
    }
  }
`
const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  width: 90vw;
  max-width: 40rem;

  * {
    width: 100%;
  }

  .fields-group {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
`

export default AuthPageContainer
export { AuthForm }
