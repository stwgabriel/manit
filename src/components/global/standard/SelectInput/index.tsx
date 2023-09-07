import { ChangeEvent } from 'react'

// Styles
import SelectInputContainer from './SelectInputStyles'

type Option = {
  name: string
  value: string
}

type SelectInputProps = {
  title: string
  name: string
  value: string | number
  options: Option[]
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

function SelectInput({
  title,
  name,
  value,
  onChange,
  options,
  ...props
}: SelectInputProps) {
  return (
    <SelectInputContainer>

      <span>{title}</span>

      <select
        value={value}
        name={name}
        onChange={onChange}
        {...props}
      >
        {options?.length > 0 && (
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))
        )}
      </select>
    </SelectInputContainer>
  )
}

export default SelectInput
