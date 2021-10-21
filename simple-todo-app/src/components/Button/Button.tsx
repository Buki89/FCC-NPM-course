import React, { FC } from "react";

type ButtonProps = {
  placeholder: string;
};

const Button: FC<ButtonProps> = ({ placeholder }) => {
  return <button type="submit">{placeholder}</button>;
};

export default Button;
