import { FC } from 'react'
import { IGreetProps } from './Greet.types'

export const Greet: FC<IGreetProps> = ({ name }) => {
  return <div>Hello {name ? name : 'Guest'}</div>
}
