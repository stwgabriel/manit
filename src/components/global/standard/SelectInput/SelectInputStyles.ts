import styled from 'styled-components'

const SelectInputContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    font-size: 1.8rem;
    font-weight: 500;
  }

  select {
    border-radius: 0.8rem;
    border: solid 0.1rem ${({ theme }) => theme.colors.primary.main};
    font-display: 1.6rem;

    padding: 1rem;
  }
`

export default SelectInputContainer
