import { ButtonHTMLAttributes } from "react";

type Props = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ ...props }: Props) => {
  return <button {...props}></button>;
};
export default Button;
