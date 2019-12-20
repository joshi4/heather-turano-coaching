import { Primitive, Composite } from "../types";
import { sizeConfig } from "../configs/size.config";
import { createCustomSize, sizeMap } from "./makeSize.util";
import {
  headingSizeMap,
  fontConfig,
  fontWeightMap
} from "../configs/font.config";

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
 * @returns {fontSize: string; lineHeight: string}
 */
export const makeFont = ({
  fontSize,
  lineHeight,
  fontFamily = fontConfig.fontFamily,
  fontWeight = fontConfig.fontWeight,
  fontStyle = fontConfig.fontStyle,
  custom = undefined
}: {
  fontSize: Primitive.Size | Composite.HeadingSizes;
  lineHeight?: Primitive.Size;
  fontFamily?: Composite.FontFamily;
  fontWeight?: Composite.FontWeightName;
  fontStyle?: Composite.FontStyle;
  custom?: {
    fontSize: string;
    lineHeight?: string;
    fontFamily?: Composite.FontFamily;
    fontWeight?: Composite.FontWeightName;
    fontStyle?: Composite.FontStyle;
  };
}): {
  fontSize: string;
  lineHeight: string;
  fontFamily: Composite.FontFamily;
  fontWeight: number;
  fontStyle: Composite.FontStyle;
} => {
  const size =
    headingSizeMap[fontSize as Composite.HeadingSizes] ||
    (fontSize as Primitive.Size);

  const options = {
    fontFamily,
    fontWeight: Number(fontWeightMap[fontWeight]),
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
    // fontFamily,
    // fontWeight,
    // fontStyle
    ...options
  };
};
