import React, { FC } from "react";
import { DOM } from "@heather-turano-coaching/design-system";

import { Control, Label, Error, ErrorProps } from "./base";

import "./Input.module.scss";
import { InputStyleType } from "./_forms.types";

export type InputProps = DOM.Input &
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
      styleName={`input-${type} ${styleType} ${!isValid ? "invalid" : ""}`}
      {...restProps}
    />
    <Error errorMessage={errorMessage} />
  </Control>
);
