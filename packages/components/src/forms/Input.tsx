import React, { FC } from "react";
import { HTMLInput } from "@heather-turano-coaching/design-system/types/composite";

import { Control, Label, Error, ErrorProps } from "./base";

import { InputStyleType } from "./_forms.types";
import styled, { css } from "styled-components";
import {
  makeReset,
  makeSpace,
  makeColor,
  makeFont,
  makeInset
} from "@heather-turano-coaching/design-system/utils";
import { baseFontSize } from "../shared-styles";

export type InputProps = HTMLInput &
  ErrorProps & {
    name: string;
    label?: string;
    styleType?: InputStyleType;
    isValid?: boolean;
    type?: "text" | "email" | "password" | "search" | "number";
  };

export const CSSPlaceholders = css`
  ${makeReset("input")};
  &::placeholder {
    color: ${makeColor({ scalable: { color: "gray", scale: 3 } })};
  }
  &:placeholder-shown {
    color: ${makeColor({ scalable: { color: "gray", scale: 3 } })};
  }
  &::-webkit-input-placeholder {
    color: ${makeColor({ scalable: { color: "gray", scale: 3 } })};
  }
  &::-moz-placeholder {
    color: ${makeColor({ scalable: { color: "gray", scale: 3 } })};
  }
  &:-ms-input-placeholder {
    color: ${makeColor({ scalable: { color: "gray", scale: 3 } })};
  }
  &:-moz-placeholder {
    color: ${makeColor({ scalable: { color: "gray", scale: 3 } })};
  }
`;

const StyledInput = styled.input<InputProps>`
  ${CSSPlaceholders}
  ${makeReset("input")};
  ${makeInset({ vertical: 8, horizontal: 12 })};
  ${makeFont({ fontSize: baseFontSize })};
  border: 1px solid ${makeColor({ scalable: { color: "light", scale: 2 } })};
  background: ${makeColor({ fixed: "light" })};
  color: ${makeColor({ fixed: "dark" })};
  border-radius: ${makeSpace({ custom: 2 })};
  width: 100%;
`;

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
    <StyledInput
      id={name}
      name={name}
      type={type}
      isValid={isValid}
      {...restProps}
    />
    <Error errorMessage={errorMessage} />
  </Control>
);
