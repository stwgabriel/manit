import styled from 'styled-components';

const ButtonStyles = styled.div`

  button, a {
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: 1rem;
    border: none;
    color: ${({ theme }) => theme.colors.white};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    padding: 1rem 2rem;
  }
`

export default ButtonStyles
