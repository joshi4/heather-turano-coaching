import React, { FC } from "react";

import { Primitive, DOM } from "@heather-turano-coaching/design-system";

import { TypColor } from "./TypColor";

import { CopyTypes } from "./_typography.types";
import "./Copy.module.scss";

export type CopyProps = DOM.Paragraph & {
  type: CopyTypes;
  size?: Primitive.Size;
  color?: Primitive.Color;
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
