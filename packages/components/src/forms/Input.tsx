import React, { FC } from "react";
import { HTMLInput } from "@heather-turano-coaching/design-system/types/composite";

import { Control, Label, Error, ErrorProps } from "./base";

import styled, { css } from "styled-components";
import {
  makeReset,
  makeSpace,
  makeColor,
  makeFont,
  makeInset
} from "@heather-turano-coaching/design-system/utils";
import { sharedFontSize } from "../shared";

export type InputProps = HTMLInput &
  ErrorProps & {
    name: string;
    label?: string;
    isValid?: boolean;
    type?: "text" | "email" | "password" | "search" | "number";
  };

export const CSSPlaceholders = css`
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

export const CSSInputValidity = css<InputProps>`
  ${({ isValid }) =>
    !isValid &&
    css`
      border-color: ${makeColor({ scalable: { color: "error" } })};
      color: ${makeColor({ scalable: { color: "error" } })};
    `}
`;

/**
 * This is done like this so we can share this base style with
 * the Textarea component
 */
export const CSSInputStyle = css<InputProps>`
  ${CSSPlaceholders}
  ${makeReset("input")};
  ${makeInset({ vertical: 8, horizontal: 12 })};
  ${makeFont({ fontSize: sharedFontSize })};
  border: 1px solid ${makeColor({ scalable: { color: "gray", scale: 3 } })};
  background: ${makeColor({ fixed: "light" })};
  color: ${makeColor({ fixed: "dark" })};
  border-radius: ${makeSpace({ custom: 2 })};
  width: 100%;
  ${CSSInputValidity};
`;

const StyledInput = styled.input<InputProps>`
  ${CSSInputStyle}
`;

export const Input: FC<InputProps> = ({
  name,
  label = undefined,
  type = "text",
  isValid = true,
  errorMessage = undefined,
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
