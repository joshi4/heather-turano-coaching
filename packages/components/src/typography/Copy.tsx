import React, { FC } from "react";

import { HTML__Paragraph } from "@heather-turano-coaching/design-system/types/composite";
import {
  Size,
  Color
} from "@heather-turano-coaching/design-system/types/primitive";

import { TypColor } from "./TypColor";
import { CopyTypes } from "./_typography.types";
import "./Copy.module.scss";
import { StyledCopy } from "./_typography.styles";

export type CopyProps = HTML__Paragraph & {
  type: CopyTypes;
  size?: Size;
  color?: Color;
  copy?: string | undefined;
};

export const Copy: FC<CopyProps> = ({
  type,
  size = "sm",
  color = "grayscale",
  copy = undefined,
  children = undefined
}) => (
  <StyledCopy type={type} size={size}>
    <TypColor color={color}>{copy || children}</TypColor>
  </StyledCopy>
);
