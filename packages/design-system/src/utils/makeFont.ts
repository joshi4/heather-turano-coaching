import { Primitive, Composite } from "../types";
import { fontConfig, sizeConfig } from "../configs";

import { createCustomSize, sizeMap } from "./makeSize";

/**
 * Creates
 * lineHeight and fontSize are include because
 * there might be a time where you'll need to make a font-size
 * that has a larger line height and we want to be able to
 * make sure that you can do that easily. The only required parameter
 * is fontSize. If you don't define a custom lineHeight then
 * the fontSize finds it's default lineHeight defined by the design
 * system
 *
 */
export const makeFont = ({
  fontSize,
  lineHeight,
  fontFamily = fontConfig.defaults.fontFamily,
  fontWeight = fontConfig.defaults.fontWeight,
  fontStyle = fontConfig.defaults.fontStyle,
  custom = undefined
}: {
  fontSize: Primitive.Size | Composite.Size__Headings;
  lineHeight?: Primitive.Size;
  fontFamily?: Composite.Font__Family;
  fontWeight?: Composite.Font__WeightName;
  fontStyle?: Composite.Font__Style;
  custom?: {
    fontSize: string;
    lineHeight?: string;
    fontFamily?: Composite.Font__Family;
    fontWeight?: Composite.Font__WeightName;
    fontStyle?: Composite.Font__Style;
  };
}): {
  fontSize: string;
  lineHeight: string;
  fontFamily: Composite.Font__Family;
  fontWeight: number;
  fontStyle: Composite.Font__Style;
} => {
  const size =
    fontConfig.headingSizeMap[fontSize as Composite.Size__Headings] ||
    (fontSize as Primitive.Size);

  const options = {
    fontFamily,
    fontWeight: Number(fontConfig.fontWeightMap[fontWeight]),
    fontStyle
  };

  if (!custom) {
    return {
      fontSize: sizeMap.fontSize[size][sizeConfig.sizeUnits],
      lineHeight: lineHeight
        ? sizeMap.lineHeight[lineHeight][sizeConfig.sizeUnits]
        : sizeMap.lineHeight[size][sizeConfig.sizeUnits],
      ...options
    };
  }
  return {
    fontSize: createCustomSize(custom.fontSize),
    lineHeight: createCustomSize(custom.lineHeight || sizeConfig.lineHeight),
    ...options
  };
};
