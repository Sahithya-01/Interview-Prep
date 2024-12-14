import React, { useState } from 'react'


const CounterApp = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default CounterApp
