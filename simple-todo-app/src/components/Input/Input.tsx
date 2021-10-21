import React, { FC } from "react";
import { FieldRenderProps } from "react-final-form";

type InputProps = FieldRenderProps<string, HTMLInputElement>;

const Input: FC<InputProps> = ({ input }) => {
  return (
    <input
      {...input}
      name={input.name}
      value={input.value}
      onChange={input.onChange}
    />
  );
};

export default Input;
