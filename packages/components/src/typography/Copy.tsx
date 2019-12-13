import React, { FC } from "react";

import { DOMType__Paragraph } from "@heather-turano-coaching/typescript/types";
import {
  Primitive_Size,
  Primitive_Color
} from "@heather-turano-coaching/styles/types";

import { TypColor } from "./TypColor";

import "./Copy.module.scss";
import { CopyTypes } from "./_typography.types";

export type CopyProps = DOMType__Paragraph & {
  type: CopyTypes;
  size?: Primitive_Size;
  color?: Primitive_Color;
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
