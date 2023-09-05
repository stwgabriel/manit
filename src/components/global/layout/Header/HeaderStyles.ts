import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 8rem;

  padding: 2rem;
  margin: 0 auto ;
`

const LogoStyles = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  display: inline;
  font-family: 'montserrat', sans-serif;
  font-size: 3.2rem;
  font-weight: 700;

  span {
    color: ${({ theme }) => theme.colors.secondary.main};
  }
`

const ProfilePicture = styled.div`
  border-radius: 1rem;
  background: #471877;
  box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.10);

  display: flex;
  width: 5.1rem;
  height: 4rem;
  padding: 0.8rem 1.3rem 0.8rem 1.4rem;
  justify-content: center;
  align-items: center;
`

export default HeaderContainer
export { LogoStyles, ProfilePicture }
