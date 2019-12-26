import { Size } from "../types/primitive";
import {
  Size__Headings,
  Font__Family,
  Font__WeightName,
  Font__Style
} from "../types/composite";
import { fontConfig, sizeConfig } from "../configs";

import { createCustomSize, sizeMap } from "./makeSize";

export interface MakeFontOptions {
  fontSize: Size | Size__Headings;
  lineHeight?: Size;
  fontFamily?: Font__Family;
  fontWeight?: Font__WeightName;
  fontStyle?: Font__Style;
  custom?: {
    fontSize: string;
    lineHeight?: string;
    fontFamily?: Font__Family;
    fontWeight?: Font__WeightName;
    fontStyle?: Font__Style;
  };
}

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
}: MakeFontOptions): {
  fontSize: string;
  lineHeight: string;
  fontFamily: Font__Family;
  fontWeight: number;
  fontStyle: Font__Style;
} => {
  const size =
    fontConfig.headingSizeMap[fontSize as Size__Headings] || (fontSize as Size);

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
