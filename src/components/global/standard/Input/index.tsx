import { ChangeEvent } from 'react'
import InputContainer from './InputStyles'

type InputProps = {
  title: string
  name: string
  value: string | number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

function Input({
  title,
  name,
  value,
  onChange,
  disabled,
}: InputProps) {
  return (
    <InputContainer>

      <span>{title}</span>

      <input
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
      />
    </InputContainer>
  )
}

export default Input
