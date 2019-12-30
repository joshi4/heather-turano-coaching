import { Color } from "../primitive";

export type ColorTypes = "scalable" | "static" | "custom";
export type ColorScalePosition = 0 | 1 | 2 | 3 | 4;

export interface ColorProperties {
  type: ColorTypes;
  color: Color;
  scale?: ColorScalePosition;
}
