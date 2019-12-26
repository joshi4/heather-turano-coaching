import React, { FC } from "react";
import { Color } from "@heather-turano-coaching/design-system/types/primitive";

import "./TypColor.module.scss";

export interface ColorProps {
  color?: Color | undefined;
}

export const TypColor: FC<ColorProps> = ({ color = "grayscale", children }) => (
  <>{color ? <span className={color}>{children}</span> : children}</>
);
