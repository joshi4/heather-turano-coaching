import React, { FC } from "react";

import { Primitive_Color } from "@heather-turano-coaching/styles/types";

import "./Color.module.scss";

export interface ColorProps {
  color?: Primitive_Color | undefined;
}

export const TypColor: FC<ColorProps> = ({ color = "grayscale", children }) => (
  <>{color ? <span className={color}>{children}</span> : children}</>
);
