import React, { FC } from "react";

import { DOM } from "@heather-turano-coaching/design-system";

import { Control, Label, Error, ErrorProps } from "./base";

import { InputStyleType } from "./_forms.types";
import "./Textarea.module.scss";

export type TextareaProps = DOM.Textarea &
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
