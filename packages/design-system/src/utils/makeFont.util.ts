import * as Primitive from "../types/primitive";
import { sizeConfig } from "../configs/size.config";
import { createCustomSize, sizeMap } from "./makeSize.util";
import { headingSizeMap, HeadingSizes } from "../configs/font.config";

export { HeadingSizes };

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
  custom = undefined
}: {
  fontSize: Primitive.Size | HeadingSizes;
  lineHeight?: Primitive.Size;
  custom?: {
    fontSize: string;
    lineHeight?: string;
  };
}): { fontSize: string; lineHeight: string } => {
  const size =
    headingSizeMap[fontSize as HeadingSizes] || (fontSize as Primitive.Size);

  if (!custom) {
    return {
      fontSize: sizeMap.fontSize[size][sizeConfig.sizeUnits],
      lineHeight: lineHeight
        ? sizeMap.lineHeight[lineHeight][sizeConfig.sizeUnits]
        : sizeMap.lineHeight[size][sizeConfig.sizeUnits]
    };
  }
  return {
    fontSize: createCustomSize(custom.fontSize),
    lineHeight: createCustomSize(custom.lineHeight || sizeConfig.lineHeight)
  };
};
