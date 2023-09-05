import { useState } from 'react';
import SliderFilterContainer, { SliderFilterItem } from './SliderFilter';

type SliderFilterItemModel = {
  name: string
}
type SliderFilterProps = {
  items: SliderFilterItemModel[]
  defaultActivePage: number
  onUpdate: (activeIndex: number) => void
}

function SliderFilter({
  items,
  defaultActivePage,
  onUpdate,
}: SliderFilterProps) {

  const [activeitem, setActiveItem] = useState(defaultActivePage || 0)

  return (
    <SliderFilterContainer>
      {items.map((item, index) => (
        <SliderFilterItem
          key={item.name}
          active={activeitem === index}
        >
          <button
            type="button"
            onClick={() => {
              setActiveItem(index)
              onUpdate(index)
            }}
          >
            {item.name}
          </button>
        </SliderFilterItem>
      ))}
    </SliderFilterContainer>
  )
}

export default SliderFilter
