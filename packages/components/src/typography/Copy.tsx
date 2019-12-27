import React, { FC } from "react";

import {
  HTML__Paragraph,
  ColorProperties,
  SizeProperties
} from "@heather-turano-coaching/design-system/types/composite";

import { StyledCopy } from "./_typography.styles";

export type CopyProps = HTML__Paragraph & {
  type: "caption" | "text" | "label" | "paragraph";
  fontSize?: SizeProperties;
  fontColor?: ColorProperties;
  copy?: string | undefined;
};

export const Copy: FC<CopyProps> = ({
  type,
  fontSize = { size: "sm" },
  fontColor = { type: "scalable", color: "grayscale" },
  copy = undefined,
  children = undefined
}) => (
  <StyledCopy type={type} fontSize={fontSize} fontColor={fontColor}>
    {copy || children}
  </StyledCopy>
);
