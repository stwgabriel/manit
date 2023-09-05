import { ChangeEvent } from 'react'
import InputContainer from './InputStyles'

type InputProps = {
  title: string
  name: string
  value: string | number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function Input({
  title,
  name,
  value,
  onChange,
  ...props
}: InputProps) {
  return (
    <InputContainer>

      <span>{title}</span>

      <input
        value={value}
        name={name}
        onChange={onChange}
        {...props}
      />
    </InputContainer>
  )
}

export default Input
