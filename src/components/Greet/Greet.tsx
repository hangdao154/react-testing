import { FC } from "react";

interface IGreetProps {
  name?: string;
}

export const Greet: FC<IGreetProps> = ({ name }) => {
  return <div>Hello {name}</div>;
};
