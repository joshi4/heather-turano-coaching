import { ColorScalable, ColorFixed } from "../primitive/color.primitive";

export type ColorScalePosition = 0 | 1 | 2 | 3 | 4;

/**
 * @todo Convert ColorHex to actual type-checked regex value
 * once this issue has been closed
 * https://github.com/Microsoft/TypeScript/issues/6579
 */
export type ColorHex = string;
export type ColorScales = [ColorHex, ColorHex, ColorHex, ColorHex, ColorHex];
export type ColorBlendRatios = 0.2 | 0.4 | 0.6 | 0.8 | 0;

export type ColorValueScalable = { [key in ColorScalable]: ColorHex };
export type ColorValueFixed = { [key in ColorFixed]: ColorHex };

export type ColorProperties = {
  fixed?: ColorFixed;
  scalable?: { color: ColorScalable; scale?: ColorScalePosition };
  custom?: ColorHex;
};
