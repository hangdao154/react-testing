import { FC } from 'react'
import { ICounterTwoProps } from './CouterTwo.types'

export const CounterTwo: FC<ICounterTwoProps> = ({
  count,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </div>
  )
}
