import styled from 'styled-components'

const ProcessModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .fields-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .actions {
    display: flex;
    gap: 1rem;

    * {
      width: 100%;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

export default ProcessModalForm
