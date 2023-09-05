import styled from 'styled-components';

const InputContainer = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    font-size: 1.8rem;
    font-weight: 500;
  }

  input {
    border-radius: .8rem;
    border: solid .1rem ${({ theme }) => theme.colors.primary.main};
    font-display: 1.6rem;

    padding: 1rem;
  }
`

export default InputContainer
