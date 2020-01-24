import React, { forwardRef } from "react";
import styled from "styled-components";
import { HTMLTextarea } from "@heather-turano-coaching/design-system/types/composite";

import { Control, Label, Error, ErrorProps } from "./base";
import { CSSInputStyle } from "./Input";

export type TextareaProps = HTMLTextarea &
  ErrorProps & {
    name: string;
    label?: string;
    isValid?: boolean;
  };

const StyledTextarea = styled.textarea<TextareaProps>`
  ${CSSInputStyle}
  max-width: 100%;
  min-width: 100%;
`;

export const Textarea = forwardRef<any, TextareaProps>(
  (
    {
      name,
      label = undefined,
      isValid = true,
      errorMessage = undefined,
      ...restProps
    },
    ref
  ) => (
    <Control>
      <Label label={label} htmlFor={name} isValid={isValid} />
      <StyledTextarea
        id={name}
        name={name}
        isValid={isValid}
        {...restProps}
        ref={ref}
      />
      <Error errorMessage={errorMessage} />
    </Control>
  )
);
