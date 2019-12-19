import { ratioNames } from "polished/lib/helpers/modularScale";

import * as Primitive from "../types/primitive";
import { ResponsiveDeviceTypes } from "../utils/makeResponsive.util";

export type SizeUnits = "em" | "rem" | "px";
type ModularScaleRatio = keyof typeof ratioNames | number;
type SizeScales = { [key in Primitive.Size]: number };

interface SizeConfig {
  documentFontSize: string;
  modularScaleRatio: ModularScaleRatio;
  baseFontSize: string;
  sizeUnits: SizeUnits;
  lineHeight: number;
  baselineGrid: number;
  modularFontScale: number;
  spaceScale?: "linear" | "exponential";
  responsiveFontScaler?: number;
  responsiveFontSizes?: { [key in ResponsiveDeviceTypes]: string } | undefined;
  baselineGridSnapFactor: number;
  fontSizeScaleMap: SizeScales;
}

// Base Variables
const defaultDocumentFontSize = "16px";

// Default Configuration Variables
const defaultFontSize = "14px";
const defaultFontUnits: SizeUnits = "rem";
const defaultModularScaleRatio: ModularScaleRatio = "perfectFourth";
const defaultLineHeight = 1.4;

const defaultModularFontScale = ratioNames[defaultModularScaleRatio];
const defaultBaselineGrid = 4;
const defaultBaselineGridSnapFactor = 4;
const defaultFontSizeScaleMap: SizeScales = {
  xxs: -2,
  xs: -1,
  sm: 0,
  md: 1,
  lg: 2,
  xl: 3,
  xxl: 4
};

// Primitive.size Configuration (always use this when accessing variables)
export const sizeConfig: SizeConfig = {
  documentFontSize: defaultDocumentFontSize,
  modularScaleRatio: defaultModularScaleRatio,
  modularFontScale: defaultModularFontScale,
  baseFontSize: defaultFontSize,
  sizeUnits: defaultFontUnits,
  lineHeight: defaultLineHeight,
  baselineGrid: defaultBaselineGrid,
  baselineGridSnapFactor: defaultBaselineGridSnapFactor,
  fontSizeScaleMap: defaultFontSizeScaleMap
};
