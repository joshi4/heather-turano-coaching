import React, { FC } from "react";

import { Primitive } from "@heather-turano-coaching/design-system";

import "./TypColor.module.scss";

export interface ColorProps {
  color?: Primitive.Color | undefined;
}

export const TypColor: FC<ColorProps> = ({ color = "grayscale", children }) => (
  <>{color ? <span className={color}>{children}</span> : children}</>
);
