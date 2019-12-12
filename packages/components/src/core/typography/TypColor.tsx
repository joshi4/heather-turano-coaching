import React, { FC } from "react";

import { Color } from "@heather-turano-coaching/styles/types";

import "./Color.module.scss";

export interface ColorProps {
  color?: Color | undefined;
}

export const TypColor: FC<ColorProps> = ({ color = "grayscale", children }) => (
  <>{color ? <span className={color}>{children}</span> : children}</>
);
