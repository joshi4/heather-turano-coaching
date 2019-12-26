import React, { FC } from "react";
import { HTML__Textarea } from "@heather-turano-coaching/design-system/types/composite";

import { Control, Label, Error, ErrorProps } from "./base";
import { InputStyleType } from "./_forms.types";
import "./Textarea.module.scss";

export type TextareaProps = HTML__Textarea &
  ErrorProps & {
    name: string;
    label?: string;
    styleType?: InputStyleType;
    isValid?: boolean;
  };

export const Textarea: FC<TextareaProps> = ({
  name,
  label = undefined,
  isValid = true,
  errorMessage = undefined,
  styleType = "primary",
  ...restProps
}) => (
  <Control>
    <Label label={label} htmlFor={name} isValid={isValid} />
    <textarea
      id={name}
      name={name}
      styleName={`input-textarea ${styleType} ${!isValid ? "error" : ""}`}
      {...restProps}
    />
    <Error errorMessage={errorMessage} />
  </Control>
);
