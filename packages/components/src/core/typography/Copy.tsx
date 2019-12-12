import React, { FC } from "react";

import { BaseType__Paragraph } from "@heather-turano-coaching/typescript/types";
import { Size, Color } from "@heather-turano-coaching/styles/types";

import { TypColor } from "./TypColor";

import "./Copy.module.scss";
import { CopyTypes } from "./_typography.types";

export type CopyProps = BaseType__Paragraph & {
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
  <p styleName={`${type} ${size}`}>
    <TypColor color={color}>{copy || children}</TypColor>
  </p>
);
