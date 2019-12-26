import React, { FC } from "react";
import { HTML__Input } from "@heather-turano-coaching/design-system/types/composite";

import { Control, Label, Error, ErrorProps } from "./base";

import "./Input.module.scss";
import { InputStyleType } from "./_forms.types";

export type InputProps = HTML__Input &
  ErrorProps & {
    name: string;
    label?: string;
    styleType?: InputStyleType;
    isValid?: boolean;
    type?: "text" | "email" | "password" | "search" | "number";
  };

export const Input: FC<InputProps> = ({
  name,
  label = undefined,
  type = "text",
  isValid = true,
  errorMessage = undefined,
  styleType = "primary",
  ...restProps
}) => (
  <Control>
    <Label label={label} htmlFor={name} isValid={isValid} />
    <input
      id={name}
      name={name}
      type={type}
      styleName={`input-${type} ${styleType} ${!isValid ? "error" : ""}`}
      {...restProps}
    />
    <Error errorMessage={errorMessage} />
  </Control>
);
