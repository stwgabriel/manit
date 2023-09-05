import styled, { css } from 'styled-components';

type SliderFilterItemProps = {
  active: boolean
}

const SliderFilterContainer = styled.ul`
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary.main};

  display: flex;
  padding: 0.5rem;
  align-items: flex-start;
  gap: 1rem;

  width: fit-content;
`

const SliderFilterItem = styled.li<SliderFilterItemProps>`
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.black};

  display: flex;
  width: 15rem;
  padding: 0.5rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  ${({ theme, active }) => (active && css`
    background: ${theme.colors.primary.main};
    color: ${theme.colors.white};
  `)};

  button {
    border: none;
    background: transparent;
    color: inherit;
  }
`

export default SliderFilterContainer
export { SliderFilterItem }
