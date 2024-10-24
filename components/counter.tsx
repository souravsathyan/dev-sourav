'use client'

import { useState } from 'react'
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons'

type CounterProps = {
  initialValue?: number
}

export /**
 *
 *
 * @param {CounterProps} { initialValue = 0 }
 * @return {*} 
 */
const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className="flex items-center space-x-2">
      <button onClick={decrement} className="p-2 rounded-md hover:bg-gray-100">
        <MinusIcon className="w-5 h-5" />
      </button>
      <span className="text-lg">{count}</span>
      <button onClick={increment} className="p-2 rounded-md hover:bg-gray-100">
        <PlusIcon className="w-5 h-5" />
      </button>
    </div>
  )
}
