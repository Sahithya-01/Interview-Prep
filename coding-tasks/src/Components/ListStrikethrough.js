import React, { useState } from 'react'

const ListStrikethrough = () => {
  const [items, setItems] = useState([
    { text: 'Item 1', completed: false },
    { text: 'Item 2', completed: false },
    { text: 'Item 3', completed: false },
  ])
  const handleToggleCompleted=(index)=>{
    setItems(
        items.map((item,i)=>{
           return i===index?{...item,completed:!item.completed}:item
        })
    )
  }
  return (
    <div>
      <ul>
        {items.map((item, i) => {
          return (
            <li key={i}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleToggleCompleted(i)}
              />
              <span style={{textDecoration: item.completed?'line-through':'none'}}>{item.text}</span>
            </li>
          )
        })}
      </ul>
      <div>hello</div>
    </div>
  )
}

export default ListStrikethrough
