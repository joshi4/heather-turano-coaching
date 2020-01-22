import {
  FontFamily,
  FontStyle,
  ColorProperties,
  FontProperties
} from "../types/composite";
import { fontConfig, sizeConfig } from "../configs";

import {
  createCustomSize,
  sizeMap,
  convertHeadingSizeToSize
} from "./makeSize";
import { makeColor } from "./makeColor";
import { Size } from "../types/primitive";

const createFontColor = (
  fontColor: ColorProperties | undefined
): { color: string } | {} => (fontColor ? { color: makeColor(fontColor) } : {});

export const makeFont = ({
  fontSize,
  lineHeight,
  fontFamily = fontConfig.defaults.fontFamily,
  fontWeight = fontConfig.defaults.fontWeight,
  fontStyle = fontConfig.defaults.fontStyle,
  fontColor = fontConfig.defaults.fontColor
}: FontProperties): {
  fontSize: string;
  lineHeight: string;
  fontFamily: FontFamily;
  fontWeight: number;
  fontStyle: FontStyle;
  color?: string;
} => {
  const createFontSizeAndLineHeight = (): {
    fontSize: string;
    lineHeight: string;
  } => {
    if (typeof fontSize === "object" && typeof lineHeight === "object") {
      return {
        fontSize: createCustomSize(fontSize.custom),
        lineHeight: createCustomSize(lineHeight.custom)
      };
    }

    if (typeof fontSize === "object" && typeof lineHeight === "undefined") {
      return {
        fontSize: createCustomSize(fontSize.custom),
        lineHeight: sizeConfig.lineHeight.toString()
      };
    }

    if (typeof fontSize === "object" && typeof lineHeight === "string") {
      return {
        fontSize: createCustomSize(fontSize.custom),
        lineHeight: sizeMap.lineHeight[lineHeight][sizeConfig.sizeUnits]
      };
    }

    if (typeof fontSize === "string" && typeof lineHeight === "object") {
      const convertedFs = convertHeadingSizeToSize(fontSize as Size);
      const fs = sizeMap.fontSize[convertedFs][sizeConfig.sizeUnits];
      const lh = createCustomSize(lineHeight.custom);
      return { fontSize: fs, lineHeight: lh };
    }

    if (typeof fontSize === "string" && typeof lineHeight === "undefined") {
      const convertedFs = convertHeadingSizeToSize(fontSize as Size);
      const fs = sizeMap.fontSize[convertedFs][sizeConfig.sizeUnits];
      const lh = sizeMap.lineHeight[convertedFs][sizeConfig.sizeUnits];
      return { fontSize: fs, lineHeight: lh };
    }

    // fontSize === "string" && typeof lineHeight === "string"
    const convertedFs = convertHeadingSizeToSize(fontSize as Size);
    const fs = sizeMap.fontSize[convertedFs][sizeConfig.sizeUnits];
    const lh = sizeMap.lineHeight[convertedFs][sizeConfig.sizeUnits];
    return { fontSize: fs, lineHeight: lh };
  };

  return {
    // fontSize: createFontSize(),
    // lineHeight: lineHeight
    //   ? sizeMap.lineHeight[lineHeight][sizeConfig.sizeUnits]
    //   : sizeMap.lineHeight[size][sizeConfig.sizeUnits],
    ...createFontSizeAndLineHeight(),
    fontFamily,
    fontWeight: Number(fontConfig.fontWeightMap[fontWeight]),
    fontStyle,
    ...createFontColor(fontColor)
  };
};
